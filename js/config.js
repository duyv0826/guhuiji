/* ============================================================
   骨灰级 · 全部内容配置（v2）
   本文件是页面唯一的内容来源：文案、结构、色板、玩法、题目、档位。
   引擎（engine.js）不含任何具体文案、颜色与题目——
   换一个领域重开一家「认证所」，理论上只改这一个文件。
   ============================================================ */
window.GUIHUIJI_CONFIG = {

  /* —— 站点元信息（页头/首屏/导航，全部来自这里） —— */
  meta: {
    title: "骨灰级 · 资深者认证所",
    wordmark: "骨灰级",
    nav: [
      { href: "#origin", label: "词源" },
      { href: "#eras", label: "世代" },
      { href: "#exam", label: "认证" }
    ],
    hero: {
      kicker: "词出游戏厅年代 · 资深者自证之词",
      title: "骨灰级",
      sub: "骨灰级，玩家社群里资历的最高阶。这个词在这里被拆开重装：一部游戏世代刻度，一场硬考。全对，才算烧透。",
      cta: "进入认证考试"
    }
  },

  /* —— 章节结构：顺序、编号、标题、类型（引擎按 type 调渲染器） —— */
  sections: [
    { id: "origin", type: "dictionary", index: "01", title: "词源考" },
    { id: "eras", type: "timeline", index: "02", title: "世代刻度" },
    { id: "exam", type: "quiz", index: "03", title: "骨灰级认证考试" }
  ],

  /* —— 主题：色板值全部在 config；引擎启动时注入，新增主题零 CSS 改动 ——
     tokens 键 = css/main.css :root 中的色彩 Token 名 */
  themes: {
    default: "cartridge",
    list: {
      cartridge: {
        label: "卡带模式",
        tokens: {
          "--ink": "#1A1713",
          "--ink-soft": "#4A443C",
          "--ink-faint": "rgba(26, 23, 19, 0.38)",
          "--paper": "#F3EFE4",
          "--paper-dim": "#E9E3D3",
          "--line": "rgba(26, 23, 19, 0.16)",
          "--accent": "#C0271D",
          "--accent-deep": "#8E1D15",
          "--accent-soft": "#C98A2D",
          "--accent-glow": "#D9A441",
          "--teal": "#33685C",
          "--on-accent": "#F3EFE4",
          "--scan-ink": "rgba(243, 239, 228, 0.05)",
          "--shadow-ghost": "rgba(243, 239, 228, 0.22)",
          "--hero-bg": "#1A1713",
          "--hero-fg": "#F3EFE4"
        }
      },
      terminal: {
        label: "终端模式",
        tokens: {
          "--ink": "#CBE6CF",
          "--ink-soft": "#A3C2A6",
          "--ink-faint": "rgba(203, 230, 207, 0.35)",
          "--paper": "#0E120F",
          "--paper-dim": "#151B16",
          "--line": "rgba(203, 230, 207, 0.16)",
          "--accent": "#3FBF7F",
          "--accent-deep": "#2E8F60",
          "--accent-soft": "#8FD9AC",
          "--accent-glow": "#5FCF8E",
          "--teal": "#357963",
          "--on-accent": "#0B0F0C",
          "--scan-ink": "rgba(203, 230, 207, 0.05)",
          "--shadow-ghost": "rgba(203, 230, 207, 0.14)",
          "--hero-bg": "#0A0D0B",
          "--hero-fg": "#CBE6CF"
        }
      },
      amber: {
        label: "琥珀模式",
        tokens: {
          "--ink": "#241505",
          "--ink-soft": "#5B4630",
          "--ink-faint": "rgba(36, 21, 5, 0.38)",
          "--paper": "#F2E3C8",
          "--paper-dim": "#E8D4AF",
          "--line": "rgba(36, 21, 5, 0.18)",
          "--accent": "#B4610F",
          "--accent-deep": "#8C4A0B",
          "--accent-soft": "#C07A2E",
          "--accent-glow": "#E09A3E",
          "--teal": "#7A5230",
          "--on-accent": "#F7EBD3",
          "--scan-ink": "rgba(242, 227, 200, 0.06)",
          "--shadow-ghost": "rgba(36, 21, 5, 0.18)",
          "--hero-bg": "#1C1207",
          "--hero-fg": "#F2E3C8"
        }
      }
    }
  },

  /* —— 跑马灯（内容重复渲染一遍以实现无缝循环） —— */
  ticker: [
    "1978 街机黄金期",
    "1983 FC 降临",
    "1985 平台跳跃定型",
    "1989 掌机世代",
    "1994 光盘世代",
    "1998 网吧世代",
    "2007 触屏世代"
  ],

  /* —— 词源考（词典卡） —— */
  dictionary: {
    word: "骨灰级",
    pinyin: "gǔ huī jí",
    pos: "名词 · 常作定语",
    labels: {
      senses: "释义",
      origin: "词源",
      usage: "用法",
      caveat: "存疑"
    },
    senses: [
      "在某领域浸淫多年、阅历横跨多个技术与世代更迭、至今仍活跃的资深爱好者。",
      "泛化用法：形容对某事物的钻研深到近乎仪式感，如骨灰级影迷、骨灰级发烧友。"
    ],
    origin: "通行说法出自中文游戏杂志与论坛时代（约 1990 年代末）：玩家以「骨灰」自况——机器换了几轮，厅子倒了又开，玩到烧成灰还在场。此后词义溢出游戏圈，被摄影、音响、模型等圈子接走。",
    usage: "街机厅里长大的那批人，才算真骨灰级。",
    caveat: "「骨灰级」的确切首例出处难以考订，本页不作断言；若你手上有更早的纸面用例，欢迎来打脸。"
  },

  /* —— 世代刻度（均为公开可查证事实） —— */
  eras: [
    { year: "1978", name: "街机黄金期", line: "Taito《太空侵略者》引爆街机厅，投币声成了一代人的背景音。" },
    { year: "1983", name: "FC 降临", line: "任天堂 Family Computer 日版发售，家用机正式搬进客厅。" },
    { year: "1985", name: "平台跳跃定型", line: "《超级马力欧兄弟》发售，横版动作设计从此有了模板。" },
    { year: "1989", name: "游戏装进口袋", line: "Game Boy 日版发售，掌机世代开始。" },
    { year: "1994", name: "光盘世代", line: "PlayStation 与 SEGA Saturn 同年登场，光盘容量改写游戏叙事。" },
    { year: "1998", name: "网吧世代", line: "暴雪《星际争霸》发售，此后数年它是中国网吧的默认配置。" },
    { year: "2007", name: "触屏世代", line: "iPhone 发布，游戏的主流入口从客厅移进口袋。" }
  ],

  /* —— 认证考试 —— */
  quiz: {
    /* 玩法模式；seed: "daily" = 以当日日期为种子（同一天同一张卷）；
       secondsPerQuestion: null = 不限时 */
    modes: [
      { id: "daily", tag: "D", name: "每日挑战", count: 10, seed: "daily", secondsPerQuestion: null,
        desc: "以当日日期为种子出卷——今天，所有人同一张卷。" },
      { id: "random", tag: "R", name: "随机十题", count: 10, seed: null, secondsPerQuestion: null,
        desc: "题库随机抽十题，答错即学。" },
      { id: "hardcore", tag: "H", name: "骨灰二十", count: 20, seed: null, secondsPerQuestion: 20,
        desc: "全题库二十题，每题限时二十秒，超时即误答。" }
    ],

    intro: {
      title: "认证考试",
      rules: [
        "题目全部是可公开查证的事实，不带观点。",
        "每题四选一；答错或超时立即公布正解与出处。",
        "全对才发认证编号；成绩档案只存在你自己的浏览器里。"
      ]
    },

    /* 界面文案也归配置管：引擎不认识任何一个按钮上的字 */
    ui: {
      start: "开始考试",
      next: "下一题",
      toResult: "查看结果",
      retry: "重考",
      correct: "正解",
      wrong: "误答",
      timeout: "超时",
      source: "出处",
      certTag: "骨灰级认证所",
      scoreLabel: "得分",
      modeLabel: "模式",
      serialLabel: "编号",
      dateLabel: "日期",
      serialPrefix: "GHJ",
      noSerial: "未获编号——全对才有",
      share: "保存分享卡",
      statsTemplate: "这是你的第 {n} 局 · {mode} 最佳 {best} / {total}",
      progress: "{i} / {total}",
      optionFormat: "{letter}．{text}",
      optionLetters: ["A", "B", "C", "D"]
    },

    questions: [
      {
        prompt: "任天堂 Family Computer（FC）在日本的发售年份是？",
        options: ["1981", "1985", "1983", "1987"],
        answerIndex: 2,
        fact: "FC 日版于 1983 年 7 月 15 日发售。"
      },
      {
        prompt: "《俄罗斯方块》的原始设计者是？",
        options: ["宫本茂", "席德·梅尔", "约翰·卡马克", "阿列克谢·帕基特诺夫"],
        answerIndex: 3,
        fact: "帕基特诺夫 1984 年在苏联科学院计算中心写出最初原型。"
      },
      {
        prompt: "世嘉 16 位主机 Mega Drive 在北美的上市名称是？",
        options: ["SEGA Saturn", "SEGA Genesis", "SEGA CD", "SEGA 32X"],
        answerIndex: 1,
        fact: "北美版 1989 年以 Genesis 之名发售。"
      },
      {
        prompt: "秘技「上上下下左右左右 B A」最早出自哪部作品？",
        options: ["《魂斗罗》", "《宇宙巡航舰》", "《街头霸王 II》", "《沙罗曼蛇》"],
        answerIndex: 1,
        fact: "Konami 1986 年 FC 版《宇宙巡航舰》，为移植调试留下的后门。"
      },
      {
        prompt: "《街头霸王 II》的开发商是？",
        options: ["SNK", "世嘉", "卡普空", "南梦宫"],
        answerIndex: 2,
        fact: "卡普空（Capcom），1991 年街机机台首发。"
      },
      {
        prompt: "初代 PlayStation 在日本的发售日期是？",
        options: ["1994 年 11 月 22 日", "1995 年 9 月 9 日", "1994 年 12 月 3 日", "1996 年 3 月 20 日"],
        answerIndex: 2,
        fact: "1994 年 12 月 3 日日版首发；1995 年 9 月 9 日是北美档期。"
      },
      {
        prompt: "《塞尔达传说 时之笛》的首发平台是？",
        options: ["SFC", "N64", "NGC", "Wii"],
        answerIndex: 1,
        fact: "1998 年 11 月于 N64 首发。"
      },
      {
        prompt: "FC《超级马力欧兄弟》第一关终点旗杆，最高一次能拿多少分？",
        options: ["1000 分", "2000 分", "4000 分", "5000 分"],
        answerIndex: 3,
        fact: "抓在旗杆最顶端为 5000 分。"
      },
      {
        prompt: "Game Boy 在日本的首发年份是？",
        options: ["1987", "1988", "1989", "1990"],
        answerIndex: 2,
        fact: "1989 年 4 月 21 日日版发售。"
      },
      {
        prompt: "《星际争霸》的开发与发行公司是？",
        options: ["Westwood", "Blizzard", "MicroProse", "Microsoft"],
        answerIndex: 1,
        fact: "暴雪娱乐，1998 年 3 月 31 日发售。"
      },
      {
        prompt: "《吃豆人》（Pac-Man）的首发厂商是？",
        options: ["南梦宫", "Taito", "世嘉", "卡普空"],
        answerIndex: 0,
        fact: "南梦宫（Namco），1980 年街机机台首发。"
      },
      {
        prompt: "雅达利 Atari 2600 的发售年份是？",
        options: ["1975", "1977", "1979", "1981"],
        answerIndex: 1,
        fact: "1977 年 9 月北美发售，卡带家用机的代表。"
      },
      {
        prompt: "《塞尔达传说》初代首发于哪台设备？",
        options: ["FC", "FC 磁碟机", "Game Boy", "N64"],
        answerIndex: 1,
        fact: "1986 年首发于 FC 磁碟机（Famicom Disk System）。"
      },
      {
        prompt: "世嘉最后一台家用主机 Dreamcast 在日本发售的年份是？",
        options: ["1996", "1997", "1998", "1999"],
        answerIndex: 2,
        fact: "1998 年 11 月 27 日日版发售。"
      },
      {
        prompt: "《最终幻想 VII》的首发平台是？",
        options: ["SFC", "N64", "PS", "PC"],
        answerIndex: 2,
        fact: "1997 年于 PlayStation 首发。"
      },
      {
        prompt: "索尼 PS2 在日本的首发年份是？",
        options: ["1998", "1999", "2000", "2001"],
        answerIndex: 2,
        fact: "2000 年 3 月 4 日日版发售。"
      },
      {
        prompt: "Game Boy Advance 日版发售年份是？",
        options: ["2001", "2000", "2002", "2003"],
        answerIndex: 0,
        fact: "2001 年 3 月 21 日日版发售。"
      },
      {
        prompt: "任天堂 Wii 在日本的首发年份是？",
        options: ["2005", "2006", "2007", "2008"],
        answerIndex: 1,
        fact: "2006 年 12 月 2 日日版发售（北美为 11 月 19 日）。"
      },
      {
        prompt: "《我的世界》（Minecraft）最初由哪家工作室开发发布？",
        options: ["Valve", "Epic", "Mojang", "Supercell"],
        answerIndex: 2,
        fact: "Mojang，2009 年首个公开版本；2014 年被微软收购。"
      },
      {
        prompt: "FC《魂斗罗》30 条命秘技的完整输入是？",
        options: ["上上下下左右左右 B A", "左右左右上上下下 B A", "上上下下 B A B A 左右", "下上左右 B A B A"],
        answerIndex: 0,
        fact: "1988 年 FC 版《魂斗罗》，输入后即得 30 条命。"
      }
    ]
  },

  /* —— 结果档位（min/max 为得分比例区间，含端点，适配任意题量） —— */
  tiers: [
    { min: 0, max: 0.39, title: "初来乍到", verdict: "世代史还得补课，先去把刻度那节看完。" },
    { min: 0.4, max: 0.69, title: "资深玩家", verdict: "底子在，中间还缺着几个世代。" },
    { min: 0.7, max: 0.89, title: "准骨灰", verdict: "只差最后一撮灰。" },
    { min: 0.9, max: 1, title: "骨灰级", verdict: "烧透了。编号已发，请妥善保管（虽然它哪也去不了）。" }
  ],

  /* —— 主题（组名与显示名；色板在上面 themes.list） ——
     按钮上显示「将要切换到的模式」的 label */
  themeOrder: ["cartridge", "terminal", "amber"],

  /* —— 成绩档案（localStorage，仅本机） —— */
  archive: {
    storageKey: "guihuiji-archive-v1",
    maxEntries: 50
  },

  /* —— 页脚 —— */
  footer: {
    note: "本页题目均为公开可查证的事实；词源存疑处已标注。",
    colophon: "骨灰级 · 词源文化实验页 — 内容全部写在 config.js，引擎不认识任何一道题。"
  }
};
