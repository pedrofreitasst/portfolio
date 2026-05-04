export const t = {
  //NAV
  nav_work:    { PT: "Trabalhos", EN: "Works",   ZH: "作品" },
  nav_about:   { PT: "Sobre",     EN: "About",   ZH: "关于" },
  nav_contact: { PT: "Fale Comigo",   EN: "Talk to me", ZH: "跟我说话" },

  // ── HERO ──────────────────────────────────────────
  hero_available: {
    PT: "O futuro te chama, aggarre-o.",
    EN: "The Future is reaching out, grab it.",
    ZH: "未来就在眼前，抓住它吧。",
  },
  hero_h1_line1: { PT: "Pedro de",  EN: "Pedro de",  ZH: "佩德罗·德" },
  hero_h1_line2: { PT: "Freitas",   EN: "Freitas",   ZH: "弗雷塔斯" },
  
  hero_sub: {
    PT: "Dev Fullstack · Optimização de IA · Design Gráfico",
    EN: "Dev Fullstack · AI Optimization · Graphic Design",
    ZH: "全栈开发 · 人工智能优化 · 平面设计",
  },
  hero_cta_work:   { PT: "Ver trabalhos", EN: "See works",   ZH: "查看作品" },
  hero_cta_resume: { PT: "Currículo ↗",  EN: "Résumé ↗",    ZH: "简历 ↗"  },

  // STATUS BAR
  status_dark:  { PT: "ONLINE", EN: "ONLINE", ZH: "在线" },
  status_light: { PT: "ONLINE",     EN: "ONLINE",    ZH: "在线" },
  status_loc:   { PT: "RIO DE JANEIRO — BR", EN: "RIO DE JANEIRO — BR", ZH: "里约热内卢 — 巴西" },

  //SEÇÃO TRABALHOS
  works_title: { PT: "Trabalhos", EN: "Works", ZH: "作品" },
  works_sub: {
    PT: "Projetos(Volte Mais Tarde)",
    EN: "Projects(Come Back Later)",
    ZH: "项目(稍后再来)",
  },

  works_placeholder: {
    PT: "Projetos em breve.",
    EN: "Projects coming soon.",
    ZH: "项目即将上线。",
  },

  //SEÇÃO SOBRE
  about_title: { PT: "Sobre", EN: "About", ZH: "关于" },
  about_intro: {
    PT: "Olá! Como Vai Você?",
    EN: "Hey there! How're you doing?",
    ZH: "你好吗？",
  },
  about_body: {
    PT: `Profissional em transição e retorno para a area de tecnologia com background em Comunicação Social, Design Gráfico, Gerenciamento de Operações e Comunicação Interna em Inglês(e aprendendo Mandarim).
 
Atualmente construindo competências em desenvolvimento fullstack (Node, Next.js, React, Java/Typescript, Golang, AWS, etc), UI/UX Design e  com interesse especial em AI Engineering, automações com LLMs porém com um apetite insáciavel por aprender e acrescentar a mim e aonde estiver.
 
O que me diferencia de outros devs não é apenas um extenso e profundo amor e interesse pelo "código" e como as coisas funcionam, mas também em relação as pessoas, entender o tanto o digital quanto o social. 

Tendo trabalhado por quase uma década(e contando) em 1-on-1s com pessoas ao redor do mundo me permitiu desenvolver uma perspectiva singular de poder me adaptar para diferentes cenários e perspectivas em busca doque a pessoa realmente precisa, o que se transmite em tudo que eu faço, seja na área de Engenharia de Software, Artística ou de relações Interpessoais.`,
    EN: `A professional transitioning and returning to the technology field with a background in Social Communication, Graphic Design, Operations Management, and Internal Communication in English (and learning Mandarin).

Currently building skills in full-stack development (Node, Next.js, React, Java/Typescript, Golang, AWS, etc.), UI/UX Design, and with a special interest in AI Engineering and automation through LLMs, but with an insatiable appetite for learning and contributing to myself and wherever I am.

What sets me apart from other developers is not only an extensive and deep love and interest in "code" and how things work, but also in people, understanding both the digital and social aspects.

Having worked for almost a decade (and counting) in 1-on-1s with people around the world has allowed me to develop a unique perspective, adapting to different scenarios and perspectives in search of what the person truly needs, which is reflected in everything I do, whether in Software Engineering, Art, or Interpersonal relationships.`,
    ZH: `一位正在转型并重返科技领域的专业人士，背景涵盖：社会科学、平面设计、运营管理及内部沟通。英语流利（正在学习普通话）。

目前正在构建全栈开发技能（Node、Next.js、React、Java/TypeScript、Golang、AWS 等）以及 UI/UX 设计能力。对 AI 工程和大语言模型（LLM）自动化抱有特别兴趣——同时拥有永不满足的学习渴望，希望为自身及所处任何环境持续增值。

我与其它开发者的不同之处，不仅在于对「代码」及事物运作方式有着广泛而深沉的兴趣，更在于对人的关注：理解数字世界，也理解社会世界。

通过近十年（仍在继续）与世界各地的人们进行一对一沟通，我培养出了一种独特的视角——能够适应不同情境与观点，去探寻对方真正需要什么。这种能力贯穿于我做的每一件事中，无论是在软件工程领域、艺术领域，还是人际关系领域。`,
  },
  about_stack_title: { PT: "Stack atual", EN: "Current stack", ZH: "当前技术栈" },

  // ── SEÇÃO CONTATO ─────────────────────────────────
  contact_title: { PT: "Contato", EN: "Contact", ZH: "联系" },
  contact_sub: {
    PT: "Vamos conversar!",
    EN: "Let's talk!",
    ZH: "让我们聊聊!",
  },
  contact_email_label: { PT: "Email",    EN: "Email",   ZH: "邮箱" },
  contact_gh_label:    { PT: "GitHub",   EN: "GitHub",  ZH: "GitHub" },
  contact_li_label:    { PT: "LinkedIn", EN: "LinkedIn", ZH: "领英" },
  contact_avail: {
    PT: "Disponível para freelance, full-time e colaborações.",
    EN: "Available for freelance, full-time, and collaborations.",
    ZH: "欢迎自由职业、全职及合作机会。",
  },
} as const;

export type Lang = "PT" | "EN" | "ZH";
