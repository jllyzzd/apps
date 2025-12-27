# SatsClock 营销网页

这是 SatsClock iOS 应用的官方营销网页，具有现代化的设计和完整的多语言支持。

## 功能特点

- 🎨 现代化暗色主题设计
- 📱 完全响应式（支持手机、平板、桌面）
- 🌍 多语言支持（英语、中文，易于扩展）
- ✨ 流畅的动画效果
- 🎯 优化的 SEO 结构
- ⚡ 快速加载和性能优化

## 文件结构

```
web/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css      # 样式文件
│   ├── js/
│   │   ├── i18n.js        # 国际化配置
│   │   └── main.js        # 主要交互逻辑
│   └── images/            # 图片资源（预留）
└── README.md              # 本文件
```

## 本地预览

### 方法 1：使用 Python 内置服务器

```bash
# Python 3
cd /Users/zzd/ios_dev/satsclock/web
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问：http://localhost:8000

### 方法 2：使用 Node.js http-server

```bash
# 全局安装 http-server
npm install -g http-server

# 启动服务器
cd /Users/zzd/ios_dev/satsclock/web
http-server -p 8000
```

### 方法 3：使用 VS Code Live Server 扩展

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 多语言支持

### 添加新语言

1. 在 `assets/js/i18n.js` 的 `translations` 对象中添加新语言：

```javascript
const translations = {
    en: { /* 英语翻译 */ },
    zh: { /* 中文翻译 */ },
    // 添加新语言，例如西班牙语
    es: {
        hero_title: "Tu Panel de Bitcoin Definitivo",
        hero_subtitle: "Precio en tiempo real, bloques, tarifas y citas. Diseñado hermosamente para iOS 17+",
        // ... 其他翻译键
    }
};
```

2. 在导航栏中添加语言按钮（编辑 `index.html`）：

```html
<div class="lang-switcher">
    <button class="lang-btn" data-lang="en">EN</button>
    <span class="lang-divider">|</span>
    <button class="lang-btn" data-lang="zh">中文</button>
    <span class="lang-divider">|</span>
    <button class="lang-btn" data-lang="es">ES</button>  <!-- 新增 -->
</div>
```

### 翻译键列表

所有翻译键都在 `i18n.js` 中定义，包括：

- `hero_title`, `hero_subtitle` - Hero 区域
- `features_title`, `features_subtitle` - 功能区域
- `feature_*_title`, `feature_*_desc` - 各个功能项
- `themes_title`, `themes_subtitle` - 主题区域
- `theme_*`, `theme_*_desc` - 各个主题
- 等等...

## 自定义

### 修改颜色主题

在 `assets/css/style.css` 的 `:root` 部分修改 CSS 变量：

```css
:root {
    --bitcoin-orange: #F7931A;      /* 主色调 */
    --bg-dark: #0A0A0A;              /* 背景色 */
    --text-primary: #FFFFFF;         /* 主要文字颜色 */
    /* ... 其他颜色 */
}
```

### 修改 App Store 链接

在 `index.html` 中找到下载按钮部分，修改链接：

```html
<a href="https://apps.apple.com/app/satsclock" class="app-store-btn">
```

将 URL 替换为您的实际 App Store 链接。

### 添加社交媒体链接

在 `index.html` 的 footer 部分修改链接：

```html
<a href="https://github.com/yourusername/satsclock" target="_blank">GitHub</a>
<a href="https://x.com/yourusername" target="_blank">Twitter</a>
<a href="mailto:hello@satsclock.app">Contact</a>
```

## 部署

### 静态网站托管

这个网站是纯静态的，可以部署到任何静态网站托管服务：

1. **GitHub Pages**
   ```bash
   # 将 web 目录作为 gh-pages 分支推送
   git subtree push --prefix web origin gh-pages
   ```

2. **Netlify**
   - 连接您的 GitHub 仓库
   - 设置发布目录为 `web`
   - 自动部署

3. **Vercel**
   - 安装 Vercel CLI：`npm i -g vercel`
   - 在 web 目录运行：`vercel`

4. **AWS S3 + CloudFront**
   - 上传到 S3 bucket
   - 配置 CloudFront 分发
   - 启用静态网站托管

### 域名配置

将您的域名 DNS 指向托管服务的提供的地址。

## 性能优化

已实现的优化：

- ✅ CSS 动画使用 transform 和 opacity（GPU 加速）
- ✅ 图片懒加载（预留）
- ✅ JavaScript 事件节流和防抖
- ✅ 最小化重排和重绘
- ✅ 使用 Intersection Observer API

建议：

- 压缩和优化图片
- 启用 Gzip/Brotli 压缩
- 使用 CDN 加速静态资源
- 配置缓存策略

## SEO 优化

已实现：

- ✅ 语义化 HTML5 标签
- ✅ Meta description 和 keywords
- ✅ 响应式设计
- ✅ 快速加载速度
- ✅ 移动友好

建议添加：

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://satsclock.app/">
<meta property="og:title" content="SatsClock - Premium Bitcoin Dashboard for iOS">
<meta property="og:description" content="Real-time Bitcoin price, blocks, fees & quotes. Beautifully designed for iOS 17+">
<meta property="og:image" content="https://satsclock.app/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://satsclock.app/">
<meta property="twitter:title" content="SatsClock - Premium Bitcoin Dashboard for iOS">
<meta property="twitter:description" content="Real-time Bitcoin price, blocks, fees & quotes. Beautifully designed for iOS 17+">
<meta property="twitter:image" content="https://satsclock.app/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SatsClock",
  "operatingSystem": "iOS",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

## 浏览器兼容性

- ✅ Chrome 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 技术栈

- HTML5
- CSS3（CSS Grid、Flexbox、CSS Variables）
- Vanilla JavaScript（ES6+）
- 无外部依赖

## 维护和更新

### 更新截图

将新的应用截图放到 `assets/images/` 目录，然后在 HTML 中更新引用。

### 更新内容

直接编辑 `index.html` 中的文本内容，或通过修改 `i18n.js` 来更新翻译。

### 更新样式

修改 `assets/css/style.css` 文件。

## 贡献

欢迎提交问题和改进建议！

## 许可证

与主项目相同。
