# 骨灰级 · 资深者认证所（认证所引擎 v2）

单页互动站 + **可换皮的认证所引擎**：词源考 + 游戏世代刻度 + 三种玩法认证考试。
纯静态、零依赖、零图片、零追踪；换领域重开一家「认证所」，只改 `config.js` 一个文件。

## 运行

```bash
# 开发版
cd guhuiji
python -m http.server 8123 --bind 127.0.0.1   # http://127.0.0.1:8123/

# 单文件构建（发一个文件，双击即玩）
node build.mjs                                 # 产出 dist/guhuiji.html
```

URL 直达参数：`?theme=terminal` 进指定主题、`?mode=daily` 高亮指定模式（不自动开考）。

## 文件结构

```
guhuiji/
├── index.html      # 纯骨架：挂载点 + 空容器，无一处文案
├── css/
│   └── main.css    # 结构 Token + 版式样式；色彩值兜底，真值在 config
├── js/
│   ├── config.js   # 唯一内容来源：meta、sections、主题色板、模式、20 题、档位
│   └── engine.js   # 零耦合引擎：chrome/sections 动态构建、种子乱序、限时、档案、分享卡
├── build.mjs       # 单文件构建（node build.mjs → dist/guhuiji.html）
├── dist/
│   └── guhuiji.html
└── README.md
```

## 引擎边界（红线自查）

- 引擎只认三样东西：结构挂载点、配置字段名、章节类型名（dictionary/timeline/quiz）。
- 界面上每一个字、每一种颜色、每一道题、每一个玩法参数都来自 `config.js`。
- `index.html` 无一处文案；`main.css` 的色彩值仅为注入前兜底，真值由引擎从 config 注入。

## 内容配置指南

- **换领域重开一家所**：改 `meta`（标题/导航/首屏）、`sections`（章节结构）、
  `dictionary`/`eras`/`quiz.questions` 三块内容，完事。
- **加题**：向 `quiz.questions` 追加 `{ prompt, options[4], answerIndex, fact }`，进度/编号/档位自动适配。
- **加玩法**：`quiz.modes` 追加 `{ id, tag, name, count, seed, secondsPerQuestion, desc }`；
  `seed: "daily"` = 以当日日期为种子（同一天同一张卷）；`secondsPerQuestion: null` = 不限时。
- **加主题**：`themes.list` 加一组 16 个色彩 Token + `themeOrder` 登记组名——零 CSS 改动。
- **改档位**：`tiers` 的 `min`/`max` 为得分比例区间（0–1，含端点），任意题量通用。
- **URL 直达**：分享链接带 `?theme=terminal&mode=hardcore` 即可指定主题与模式。

## 玩法

| 模式 | 内容 | 限时 | 编号 |
| --- | --- | --- | --- |
| 每日挑战 | 当日种子出 10 题，全世界同一张卷 | 无 | `GHJ-日期-D分数` |
| 随机十题 | 题库随机抽 10 题 | 无 | `GHJ-日期-R分数` |
| 骨灰二十 | 全题库 20 题，超时即误答 | 每题 20 秒 | `GHJ-日期-H分数` |

- 全对才发认证编号与印章；成绩档案存本机 localStorage（`guihuiji-archive-v1`，上限 50 条）。
- 结果页「保存分享卡」：Canvas 按当前主题 Token 实时上色绘制证书 PNG（线宽取自 `--border-frame`）。

## 主题

| 主题 | 气质 | 切换 |
| --- | --- | --- |
| 卡带红（默认） | FC 红白机卡带色谱，暖纸底 | 头部按钮循环 |
| 终端模式 | P1 磷光绿 CRT，整页深黑绿 | 同上 |
| 琥珀模式 | 单色管琥珀，sepia 纸底 | 同上 |

色板值全部在 `config.themes.list`；引擎启动注入 `<style id="theme-tokens">`，
默认主题写 `:root`，其余写 `[data-theme=NAME]`；切换仅翻 `<html data-theme>`，会话内生效不落盘。

## 验证记录（2026-11-18，v2）

1. `node --check`：config.js / engine.js / build.mjs 全过；`node build.mjs` 产出 54.7 KB 单文件。
2. 动态构建：title/wordmark/nav/hero/CTA（自动指向 quiz 章节）/三 section/三模式卡全部来自 config。
3. 三主题轮换：cartridge→terminal→amber→cartridge，accent 与底色逐帧核对；琥珀主题纯 config 注入生效。
4. 每日确定性：两次刷新同一张卷（首题与选项顺序逐字一致）。
5. 每日局满分：`GHJ-20261118-D10`、印章、档案行「第 1 局 · 每日挑战 最佳 10 / 10」。
6. 随机局满分：`GHJ-20261118-R10`；骨灰局（临时 2 秒限时）超时路径：自动判错、正解揭晓、倒计时归零。
7. 分享卡：修复 IAB 环境 `toBlob` 回调不触发问题（改 `toDataURL` 同步导出），下载 `GHJ-…-R10.png`（83 KB）实测触发。
8. dist 冒烟：`?theme=amber&mode=daily` 参数直达、三 section 构建、每日卷与主站同种子、localStorage 同源共享。
9. 已知截图伪影：fullPage 截图在 sticky 头部下内容重复拼接，DOM 核对确认页面无重复。

## 红线合规说明

- 无 emoji 图标：装饰全部为 CSS 方块与 Canvas 几何。
- 无紫粉渐变：唯一渐变是 hero 单色扫描线纹理，非彩色装饰渐变。
- 无 AI 套话；词源存疑处明示「不作断言」。
- 无 magic numbers：样式取 Design Token；引擎常量具名（`CARD`/`TIMER_TICK_MS`/`ASH_PER_SIDE`）；分享卡线宽运行时读取 Token。
- 无图片：零图片即零来源风险。
- 配置驱动：引擎不感知任何文案/颜色/题目；新增主题、模式、章节均无需改引擎。
