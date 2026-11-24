// Vidin 企业文化介绍网站内容配置

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const siteConfig = {
  title: 'Vidin',
  titleSub: 'vidaXL Ningbo Office · 企业文化 IP',
  heroSubtitle: '让每个声音都有回响，让每份心意都有回应。',
  scrollHint: '向下认识 Vidin',
  footerQuote: '一起玩、一起想、一起成长！',
  copyright: 'vidaXL Ningbo Office · Fun Club Ningbo',
  introVideo: asset('videos/intro.mp4'),
};

export const protagonist = {
  show: true,
  sectionTitle: '关于 Vidin',
  image: asset('images/vidin-portrait.jpg'),
  imageLabel: 'Vidin · 企业文化实习生',
  intro: 'Vidin 是 vidaXL Ningbo Office 的企业文化实习生，也是大家的成长型行动派。它用理性把问题想清楚，用创新把点子做出来，用坚韧把每一步走稳，也用温暖认真回应身边的人。头顶的嫩芽代表持续生长，年轮尾巴记录共同记忆——一起玩、一起想、一起成长。',
};

export const chapters = [
  {
    id: 'spring',
    video: asset('videos/rational.mp4'),
    title: '第一章 · 理性 · 把问题想清楚',
    story: 'Vidin 习惯先认真听，再把复杂的问题轻轻拆开。它不急着给出答案，而是先理解每个人真正的需要，找到线索、理清重点。对 Vidin 来说，理性不是距离感，而是让每一次行动都有依据，让大家的想法被认真看见。',
    color: '#C9A7E8',
    glassBg: 'rgba(201, 167, 232, 0.14)',
    character: {
      name: '理性 Vidin', role: '清醒的思考者', emoji: '🧠',
      image: asset('images/vidin-rational.jpg'),
      visualGradient: 'linear-gradient(160deg, #f3eafb 0%, #e4d5f4 48%, #fff4e8 100%)',
      desc: '先理解，再分析，把复杂的问题想清楚。',
      detail: '先理解，再分析，把复杂的问题想清楚。',
      intro: '我喜欢先听懂大家真正的需要，再一点点整理线索。遇到复杂的问题不用慌，把它拆开、排好顺序，答案就会慢慢清晰。',
    },
  },
  {
    id: 'summer',
    video: asset('videos/innovation.mp4'),
    title: '第二章 · 创新 · 让好点子发生',
    story: '一个不起眼的“如果”，常常就是 Vidin 新点子的开始。它喜欢换个角度看熟悉的事，也愿意把脑海里的灵感做成真正的小尝试。创新不一定要惊天动地，也可以是让一次活动更有趣，让一次沟通更顺畅。',
    color: '#F2B84B',
    glassBg: 'rgba(242, 184, 75, 0.14)',
    character: {
      name: '创新 Vidin', role: '灵感行动派', emoji: '💡',
      image: asset('images/vidin-innovation.jpg'),
      visualGradient: 'linear-gradient(160deg, #fff6d9 0%, #f8df9b 45%, #eadcf7 100%)',
      desc: '换个角度想一想，再把好点子做出来。',
      detail: '换个角度想一想，再把好点子做出来。',
      intro: '我特别喜欢问“还可以怎样”。一个新点子只有被试着做出来，才有机会变成惊喜。别怕它现在很小，我们先让它发生。',
    },
  },
  {
    id: 'autumn',
    video: asset('videos/resilience.mp4'),
    title: '第三章 · 坚韧 · 把每一步走稳',
    story: 'Vidin 也会遇到没做好的时候，但它不会让一次不顺利定义自己。拍拍身上的灰，看看哪里能调整，然后再向前迈一步。年轮尾巴记录着这些认真走过的痕迹，也提醒它：成长不是从不跌倒，而是每次都有重新出发的勇气。',
    color: '#D98B5F',
    glassBg: 'rgba(217, 139, 95, 0.15)',
    character: {
      name: '坚韧 Vidin', role: '稳稳的成长派', emoji: '🌱',
      image: asset('images/vidin-resilience.jpg'),
      visualGradient: 'linear-gradient(160deg, #fff0df 0%, #f0c5a6 48%, #e8efd9 100%)',
      desc: '愿意尝试，也愿意调整后再向前一步。',
      detail: '愿意尝试，也愿意调整后再向前一步。',
      intro: '没做好的时候，我也会有点失落。但只要找到可以改进的地方，就又有了方向。每一步都算数，慢慢走，也是在成长。',
    },
  },
  {
    id: 'winter',
    video: asset('videos/warmth.mp4'),
    title: '第四章 · 温暖 · 让回应有温度',
    story: 'Vidin 相信，好的文化藏在每一次具体的回应里。认真听完一句话，记住一个小小心愿，在伙伴需要时搭把手——这些看似细小的动作，会让每个人知道自己没有被忽略。温暖不是热闹，而是有人愿意理解你，也愿意和你在一起。',
    color: '#F0A2A8',
    glassBg: 'rgba(240, 162, 168, 0.14)',
    character: {
      name: '温暖 Vidin', role: '真诚的回应者', emoji: '💜',
      image: asset('images/vidin-warmth.jpg'),
      visualGradient: 'linear-gradient(160deg, #fff0ef 0%, #f7d2d4 45%, #f3e8f8 100%)',
      desc: '认真倾听，让每份心意都得到温柔回应。',
      detail: '认真倾听，让每份心意都得到温柔回应。',
      intro: '你的声音值得被听见，你的心意也值得被回应。我可能不是每次都有完美的答案，但我会认真听、用心记住，再一起想办法。',
    },
  },
];

export type Chapter = typeof chapters[number];
