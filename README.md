# Vidin 企业文化介绍网页

以 vidaXL Ningbo Office 企业文化 IP「Vidin」为主角，包含开场、关于 Vidin、四个性格面向卡片，以及理性、创新、坚韧、温暖四个滚动章节。

## 本地运行

```bash
npm ci
npm run dev
```

## 构建

```bash
npm run build
```

构建产物位于 `dist/`。项目使用相对资源路径，可部署在域名根目录或 `/DR/` 等子目录。

## 内容修改

- 文案：`src/content/config.ts`
- 图片：`public/images/`
- 动态背景：`public/videos/`

当前 MP4 为生成图片制作的轻量推近、横移动态背景，不包含角色动作型 AI 视频。旧版卢卡文案与语音入口已移除。
