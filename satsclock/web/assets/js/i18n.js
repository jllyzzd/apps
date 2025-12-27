// 国际化翻译数据
const translations = {
    en: {
        // Navigation
        download: "Download",

        // Hero Section
        hero_title: "Your Ultimate Bitcoin Dashboard",
        hero_subtitle: "Real-time price, blocks, fees & quotes. Beautifully designed for iOS 17+",
        download_now: "Download Now",
        learn_more: "Learn More",
        badge_ios: "iOS 17+",
        badge_standby: "StandBy Mode",
        badge_widgets: "Widgets",

        // Features Section
        features_title: "Powerful Features",
        features_subtitle: "Everything you need to track Bitcoin in one beautiful app",
        feature_realtime_title: "Real-Time Price",
        feature_realtime_desc: "Live Bitcoin price in USD with Moscow Time calculation. Updates automatically based on your preference.",
        feature_blocks_title: "Block Explorer",
        feature_blocks_desc: "Track current block height, halving countdown, and blockchain statistics in real-time.",
        feature_fees_title: "Fee Estimates",
        feature_fees_desc: "Get recommended fee rates (fastest, half hour, hour, economy, minimum) from Mempool.space.",
        feature_quotes_title: "Bitcoin Quotes",
        feature_quotes_desc: "Inspiring Bitcoin quotes carousel. Rotates automatically every 10 seconds with beautiful display.",
        feature_themes_title: "6 Beautiful Themes",
        feature_themes_desc: "Bitcoin Orange, Matrix Green, Pure White, Pixel Retro, Neon Tech, and Terminal Mono themes.",
        feature_analytics_title: "Multi-View Dashboard",
        feature_analytics_desc: "7 different views including Dashboard, StandBy, Price Detail, Fees, Analytics, Halving, and Settings.",

        // StandBy Section
        standby_title: "Optimized for StandBy Mode",
        standby_desc: "Place your iPhone on its side while charging to enjoy a beautiful always-on Bitcoin dashboard. Perfect for your desk or nightstand.",
        standby_feature1: "✓ Landscape layout optimized for horizontal viewing",
        standby_feature2: "✓ Auto-dim support for reduced power consumption",
        standby_feature3: "✓ Quick access to all essential Bitcoin metrics",

        // Widgets Section
        widgets_title: "Home Screen & Lock Screen Widgets",
        widgets_subtitle: "Check Bitcoin price at a glance without opening the app",

        // Themes Section
        themes_title: "6 Stunning Themes",
        themes_subtitle: "Choose the perfect visual style for your Bitcoin dashboard",
        theme_bitcoin_orange: "Bitcoin Orange",
        theme_bitcoin_orange_desc: "Classic Bitcoin brand color with subtle glow",
        theme_matrix_green: "Matrix Green",
        theme_matrix_green_desc: "Digital rain effect with terminal vibes",
        theme_pure_white: "Pure White",
        theme_pure_white_desc: "Clean minimalist design with soft shadow",
        theme_pixel_retro: "Pixel Retro",
        theme_pixel_retro_desc: "Retro gaming style with scanlines effect",
        theme_neon_tech: "Neon Tech",
        theme_neon_tech_desc: "Futuristic cyberpunk with chromatic aberration",
        theme_terminal_mono: "Terminal Mono",
        theme_terminal_mono_desc: "Developer-focused with blinking cursor",

        // Languages Section
        languages_title: "Supports 30+ Languages",
        languages_subtitle: "Available in your native language",

        // Download CTA
        cta_title: "Ready to Track Bitcoin in Style?",
        cta_subtitle: "Download SatsClock now and transform your iOS device into a premium Bitcoin dashboard.",
        download_on: "Download on the",
        cta_note: "Requires iOS 17.0 or later. Compatible with iPhone and Apple Watch.",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "Contact",
        footer_copyright: "© 2026 SatsClock. All rights reserved."
    },

    zh: {
        // Navigation
        download: "下载",

        // Hero Section
        hero_title: "您的终极比特币仪表盘",
        hero_subtitle: "实时价格、区块、费率与名言。专为 iOS 17+ 精心设计",
        download_now: "立即下载",
        learn_more: "了解更多",
        badge_ios: "iOS 17+",
        badge_standby: "待机模式",
        badge_widgets: "小组件",

        // Features Section
        features_title: "强大功能",
        features_subtitle: "在一个精美的应用中追踪比特币所需的一切",
        feature_realtime_title: "实时价格",
        feature_realtime_desc: "实时比特币美元价格，包含莫斯科时间计算。根据您的偏好自动更新。",
        feature_blocks_title: "区块浏览器",
        feature_blocks_desc: "实时追踪当前区块高度、减产倒计时和区块链统计数据。",
        feature_fees_title: "费率估算",
        feature_fees_desc: "从 Mempool.space 获取推荐费率（最快、半小时、一小时、经济、最小）。",
        feature_quotes_title: "比特币名言",
        feature_quotes_desc: "启发性比特币名言轮播。每 10 秒自动轮换，精美呈现。",
        feature_themes_title: "6 大精美主题",
        feature_themes_desc: "比特币橙、矩阵绿、纯白、像素复古、霓虹科技和终端单色主题。",
        feature_analytics_title: "多视图仪表盘",
        feature_analytics_desc: "7 种不同视图，包括仪表盘、待机、价格详情、费率、分析、减产和设置。",

        // StandBy Section
        standby_title: "为待机模式优化",
        standby_desc: "将 iPhone 横向放置并充电，即可享受精美的常亮比特币仪表盘。非常适合放在桌面或床头柜上。",
        standby_feature1: "✓ 为横向观看优化的横屏布局",
        standby_feature2: "✓ 支持自动调光以降低功耗",
        standby_feature3: "✓ 快速访问所有关键比特币指标",

        // Widgets Section
        widgets_title: "主屏幕与锁屏小组件",
        widgets_subtitle: "无需打开应用即可快速查看比特币价格",

        // Themes Section
        themes_title: "6 大精美主题",
        themes_subtitle: "为您的比特币仪表盘选择完美视觉风格",
        theme_bitcoin_orange: "比特币橙",
        theme_bitcoin_orange_desc: "经典比特币品牌配色，含微妙光晕效果",
        theme_matrix_green: "矩阵绿",
        theme_matrix_green_desc: "数字雨效果，充满终端氛围",
        theme_pure_white: "纯白",
        theme_pure_white_desc: "简洁的极简主义设计，含柔和阴影",
        theme_pixel_retro: "像素复古",
        theme_pixel_retro_desc: "复古游戏风格，含扫描线效果",
        theme_neon_tech: "霓虹科技",
        theme_neon_tech_desc: "未来主义赛博朋克，含色差效果",
        theme_terminal_mono: "终端单色",
        theme_terminal_mono_desc: "开发者专属，含闪烁光标",

        // Languages Section
        languages_title: "支持 30+ 种语言",
        languages_subtitle: "可使用您的母语浏览",

        // Download CTA
        cta_title: "准备好以时尚方式追踪比特币了吗？",
        cta_subtitle: "立即下载 SatsClock，将您的 iOS 设备转变为高级比特币仪表盘。",
        download_on: "下载于",
        cta_note: "需要 iOS 17.0 或更高版本。兼容 iPhone 和 Apple Watch。",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "推特",
        footer_contact: "联系我们",
        footer_copyright: "© 2026 SatsClock. 保留所有权利。"
    },

    es: {
        // Navigation
        download: "Descargar",

        // Hero Section
        hero_title: "Tu Panel de Bitcoin Definitivo",
        hero_subtitle: "Precio en tiempo real, bloques, tarifas y citas. Diseñado elegantemente para iOS 17+",
        download_now: "Descargar Ahora",
        learn_more: "Más Información",
        badge_ios: "iOS 17+",
        badge_standby: "Modo StandBy",
        badge_widgets: "Widgets",

        // Features Section
        features_title: "Características Potentes",
        features_subtitle: "Todo lo que necesitas para rastrear Bitcoin en una hermosa aplicación",
        feature_realtime_title: "Precio en Tiempo Real",
        feature_realtime_desc: "Precio de Bitcoin en USD en vivo con cálculo de Tiempo de Moscú. Se actualiza automáticamente según tu preferencia.",
        feature_blocks_title: "Explorador de Bloques",
        feature_blocks_desc: "Rastrea la altura de bloque actual, cuenta regresiva del halving y estadísticas de blockchain en tiempo real.",
        feature_fees_title: "Estimación de Tarifas",
        feature_fees_desc: "Obtén tasas de tarifa recomendadas (más rápida, media hora, hora, económica, mínima) de Mempool.space.",
        feature_quotes_title: "Citas de Bitcoin",
        feature_quotes_desc: "Carrusel de citas inspiradoras de Bitcoin. Rota automáticamente cada 10 segundos con una hermosa presentación.",
        feature_themes_title: "6 Hermosos Temas",
        feature_themes_desc: "Temas Naranja Bitcoin, Verde Matrix, Blanco Puro, Pixel Retro, Tech Neón y Terminal Mono.",
        feature_analytics_title: "Panel Multi-Vista",
        feature_analytics_desc: "7 vistas diferentes incluyendo Panel, StandBy, Detalles de Precio, Tarifas, Análisis, Halving y Configuración.",

        // StandBy Section
        standby_title: "Optimizado para Modo StandBy",
        standby_desc: "Coloca tu iPhone de lado mientras se carga para disfrutar de un hermoso panel de Bitcoin siempre encendido. Perfecto para tu escritorio o mesa de noche.",
        standby_feature1: "✓ Diseño horizontal optimizado para visualización lateral",
        standby_feature2: "✓ Soporte de atenuación automática para menor consumo de energía",
        standby_feature3: "✓ Acceso rápido a todas las métricas esenciales de Bitcoin",

        // Widgets Section
        widgets_title: "Widgets de Pantalla de Inicio y Bloqueo",
        widgets_subtitle: "Verifica el precio de Bitcoin de un vistazo sin abrir la aplicación",

        // Themes Section
        themes_title: "6 Temas Impresionantes",
        themes_subtitle: "Elige el estilo visual perfecto para tu panel de Bitcoin",
        theme_bitcoin_orange: "Naranja Bitcoin",
        theme_bitcoin_orange_desc: "Color de marca clásico de Bitcoin con brillo sutil",
        theme_matrix_green: "Verde Matrix",
        theme_matrix_green_desc: "Efecto de lluvia digital con vibraciones de terminal",
        theme_pure_white: "Blanco Puro",
        theme_pure_white_desc: "Diseño minimalista limpio con sombra suave",
        theme_pixel_retro: "Pixel Retro",
        theme_pixel_retro_desc: "Estilo de juegos retro con efecto de líneas de escaneo",
        theme_neon_tech: "Tech Neón",
        theme_neon_tech_desc: "Cyberpunk futurista con aberración cromática",
        theme_terminal_mono: "Terminal Mono",
        theme_terminal_mono_desc: "Enfocado en desarrolladores con cursor parpadeante",

        // Languages Section
        languages_title: "Soporta más de 30 Idiomas",
        languages_subtitle: "Disponible en tu idioma nativo",

        // Download CTA
        cta_title: "¿Listo para Rastrear Bitcoin con Estilo?",
        cta_subtitle: "Descarga SatsClock ahora y transforma tu dispositivo iOS en un panel de Bitcoin premium.",
        download_on: "Descargar en",
        cta_note: "Requiere iOS 17.0 o posterior. Compatible con iPhone y Apple Watch.",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "Contacto",
        footer_copyright: "© 2026 SatsClock. Todos los derechos reservados."
    },

    de: {
        // Navigation
        download: "Herunterladen",

        // Hero Section
        hero_title: "Dein ultimatives Bitcoin-Dashboard",
        hero_subtitle: "Echtzeitpreis, Blöcke, Gebühren & Zitate. Schön gestaltet für iOS 17+",
        download_now: "Jetzt Herunterladen",
        learn_more: "Mehr Erfahren",
        badge_ios: "iOS 17+",
        badge_standby: "StandBy-Modus",
        badge_widgets: "Widgets",

        // Features Section
        features_title: "Leistungsstarke Funktionen",
        features_subtitle: "Alles was du zum Bitcoin-Tracking in einer schönen App brauchst",
        feature_realtime_title: "Echtzeitpreis",
        feature_realtime_desc: "Live-Bitcoin-Preis in USD mit Moskauer Zeit Berechnung. Aktualisiert automatisch basierend auf deinen Einstellungen.",
        feature_blocks_title: "Block-Explorer",
        feature_blocks_desc: "Verfolge die aktuelle Blockhöhe, Halving-Countdown und Blockchain-Statistiken in Echtzeit.",
        feature_fees_title: "Gebührenschatzung",
        feature_fees_desc: "Erhalte empfohlene Gebührenraten (schnellste, halbe Stunde, Stunde, Wirtschaft, Minimum) von Mempool.space.",
        feature_quotes_title: "Bitcoin-Zitate",
        feature_quotes_desc: "Inspirierende Bitcoin-Zitate-Karussell. Rotiert automatisch alle 10 Sekunden mit schöner Anzeige.",
        feature_themes_title: "6 Schöne Themen",
        feature_themes_desc: "Bitcoin-Orange, Matrix-Grün, Reines Weiß, Pixel-Retro, Neon-Tech und Terminal-Mono Themen.",
        feature_analytics_title: "Multi-Ansichts-Dashboard",
        feature_analytics_desc: "7 verschiedene Ansichten einschließlich Dashboard, StandBy, Preisdetails, Gebühren, Analysen, Halving und Einstellungen.",

        // StandBy Section
        standby_title: "Optimiert für StandBy-Modus",
        standby_desc: "Lege dein iPhone beim Laden auf die Seite, um ein schönes immer-eingeschaltetes Bitcoin-Dashboard zu genießen. Perfekt für deinen Schreibtisch oder Nachttisch.",
        standby_feature1: "✓ Querformat-Layout optimiert für horizontale Anzeige",
        standby_feature2: "✓ Automatisches Dimmen zur reduzierten Stromaufnahme",
        standby_feature3: "✓ Schneller Zugang zu allen wesentlichen Bitcoin-Metriken",

        // Widgets Section
        widgets_title: "Startbildschirm- & Sperrbildschirm-Widgets",
        widgets_subtitle: "Bitcoin-Price auf einen Blick prüfen ohne die App zu öffnen",

        // Themes Section
        themes_title: "6 Beeindruckende Themen",
        themes_subtitle: "Wähle den perfekten visuellen Stil für dein Bitcoin-Dashboard",
        theme_bitcoin_orange: "Bitcoin Orange",
        theme_bitcoin_orange_desc: "Klassische Bitcoin-Markefarbe mit subtilem Glow",
        theme_matrix_green: "Matrix Grün",
        theme_matrix_green_desc: "Digitaler Regen-Effekt mit Terminal-Vibes",
        theme_pure_white: "Reines Weiß",
        theme_pure_white_desc: "Sauberes minimalistisches Design mit weichem Schatten",
        theme_pixel_retro: "Pixel Retro",
        theme_pixel_retro_desc: "Retro-Gaming-Stil mit Scanline-Effekt",
        theme_neon_tech: "Neon Tech",
        theme_neon_tech_desc: "Futuristischer Cyberpunk mit chromatischer Aberration",
        theme_terminal_mono: "Terminal Mono",
        theme_terminal_mono_desc: "Entwickler-fokussiert mit blinkendem Cursor",

        // Languages Section
        languages_title: "Unterstützt über 30 Sprachen",
        languages_subtitle: "Verfügbar in deiner Muttersprache",

        // Download CTA
        cta_title: "Bereit, Bitcoin mit Stil zu verfolgen?",
        cta_subtitle: "Lade SatsClock jetzt herunter und verwandle dein iOS-Gerät in ein Premium-Bitcoin-Dashboard.",
        download_on: "Herunterladen im",
        cta_note: "Erfordert iOS 17.0 oder höher. Kompatibel mit iPhone und Apple Watch.",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "Kontakt",
        footer_copyright: "© 2026 SatsClock. Alle Rechte vorbehalten."
    },

    fr: {
        // Navigation
        download: "Télécharger",

        // Hero Section
        hero_title: "Votre Tableau de Bord Bitcoin Ultime",
        hero_subtitle: "Prix en temps réel, blocs, frais & citations. Magnifiquement conçu pour iOS 17+",
        download_now: "Télécharger Maintenant",
        learn_more: "En Savoir Plus",
        badge_ios: "iOS 17+",
        badge_standby: "Mode StandBy",
        badge_widgets: "Widgets",

        // Features Section
        features_title: "Fonctionnalités Puissantes",
        features_subtitle: "Tout ce dont vous avez besoin pour suivre Bitcoin dans une belle application",
        feature_realtime_title: "Prix en Temps Réel",
        feature_realtime_desc: "Prix Bitcoin en USD en direct avec calcul du Temps de Moscou. Se met à jour automatiquement selon vos préférences.",
        feature_blocks_title: "Explorateur de Blocs",
        feature_blocks_desc: "Suivez la hauteur de bloc actuelle, le compte à rebours du halving et les statistiques de blockchain en temps réel.",
        feature_fees_title: "Estimation des Frais",
        feature_fees_desc: "Obtenez les taux de frais recommandés (le plus rapide, demi-heure, heure, économique, minimum) de Mempool.space.",
        feature_quotes_title: "Citations Bitcoin",
        feature_quotes_desc: "Carrousel de citations Bitcoin inspirantes. Tourne automatiquement toutes les 10 secondes avec un bel affichage.",
        feature_themes_title: "6 Magnifiques Thèmes",
        feature_themes_desc: "Thèmes Orange Bitcoin, Vert Matrix, Blanc Pur, Pixel Rétro, Tech Néon et Terminal Mono.",
        feature_analytics_title: "Tableau de Bord Multi-Vues",
        feature_analytics_desc: "7 vues différentes y compris Tableau de bord, StandBy, Détails du Prix, Frais, Analyses, Halving et Paramètres.",

        // StandBy Section
        standby_title: "Optimisé pour le Mode StandBy",
        standby_desc: "Placez votre iPhone sur le côté pendant la charge pour profiter d'un magnifique tableau de bord Bitcoin toujours allumé. Parfait pour votre bureau ou table de chevet.",
        standby_feature1: "✓ Mise en page paysage optimisée pour la visualisation horizontale",
        standby_feature2: "✓ Prise en charge de la gradation automatique pour réduire la consommation d'énergie",
        standby_feature3: "✓ Accès rapide à toutes les métriques Bitcoin essentielles",

        // Widgets Section
        widgets_title: "Widgets d'Écran d'Accueil et de Verrouillage",
        widgets_subtitle: "Vérifiez le prix du Bitcoin en un coup d'œil sans ouvrir l'application",

        // Themes Section
        themes_title: "6 Thèmes Époustouflants",
        themes_subtitle: "Choisissez le style visuel parfait pour votre tableau de bord Bitcoin",
        theme_bitcoin_orange: "Orange Bitcoin",
        theme_bitcoin_orange_desc: "Couleur de marque classique Bitcoin avec lueur subtile",
        theme_matrix_green: "Vert Matrix",
        theme_matrix_green_desc: "Effet de pluie numérique avec ambiance terminal",
        theme_pure_white: "Blanc Pur",
        theme_pure_white_desc: "Design minimaliste épuré avec ombre douce",
        theme_pixel_retro: "Pixel Rétro",
        theme_pixel_retro_desc: "Style de jeux rétro avec effet de lignes de balayage",
        theme_neon_tech: "Tech Néon",
        theme_neon_tech_desc: "Cyberpunk futuriste avec aberration chromatique",
        theme_terminal_mono: "Terminal Mono",
        theme_terminal_mono_desc: "Axé développeur avec curseur clignotant",

        // Languages Section
        languages_title: "Prend en Charge plus de 30 Langues",
        languages_subtitle: "Disponible dans votre langue maternelle",

        // Download CTA
        cta_title: "Prêt à Suivre Bitcoin avec Style?",
        cta_subtitle: "Téléchargez SatsClock maintenant et transformez votre appareil iOS en un tableau de bord Bitcoin premium.",
        download_on: "Télécharger sur",
        cta_note: "Nécessite iOS 17.0 ou supérieur. Compatible avec iPhone et Apple Watch.",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "Contact",
        footer_copyright: "© 2026 SatsClock. Tous droits réservés."
    },

    ja: {
        // Navigation
        download: "ダウンロード",

        // Hero Section
        hero_title: "究極のビットコインダッシュボード",
        hero_subtitle: "リアルタイム価格、ブロック、手数料と名言。iOS 17+のために美しく設計されました",
        download_now: "今すぐダウンロード",
        learn_more: "詳細を見る",
        badge_ios: "iOS 17+",
        badge_standby: "スタンバイモード",
        badge_widgets: "ウィジェット",

        // Features Section
        features_title: "強力な機能",
        features_subtitle: "美しいアプリでビットコインを追跡するために必要なすべて",
        feature_realtime_title: "リアルタイム価格",
        feature_realtime_desc: "モスクワ時間計算を含むUSDでのライブビットコイン価格。設定に基づいて自動的に更新されます。",
        feature_blocks_title: "ブロックエクスプローラー",
        feature_blocks_desc: "現在のブロック高、半減期カウントダウン、ブロックチェーン統計をリアルタイムで追跡します。",
        feature_fees_title: "手数料見積もり",
        feature_fees_desc: "Mempool.spaceから推奨手数料レート（最速、30分、1時間、エコノミー、最小）を取得します。",
        feature_quotes_title: "ビットコイン名言",
        feature_quotes_desc: "インスピレーショナルなビットコイン名言カルーセル。美しい表示で10秒ごとに自動的に回転します。",
        feature_themes_title: "6つの美しいテーマ",
        feature_themes_desc: "ビットコインオレンジ、マトリックスグリーン、ピュアホワイト、ピクセルレトロ、ネオンテック、ターミナルモノテーマ。",
        feature_analytics_title: "マルチビューダッシュボード",
        feature_analytics_desc: "ダッシュボード、スタンバイ、価格詳細、手数料、分析、半減期、設定を含む7つの異なるビュー。",

        // StandBy Section
        standby_title: "スタンバイモード向けに最適化",
        standby_desc: "充電中にiPhoneを横に置いて、美しい常時オンのビットコインダッシュボードをお楽しみください。机やナイトテーブルに最適です。",
        standby_feature1: "✓ 横向き表示向けに最適化されたランドスケープレイアウト",
        standby_feature2: "✓ 消費電力を削減する自動調光サポート",
        standby_feature3: "✓ すべての重要なビットコインメトリックへの素早いアクセス",

        // Widgets Section
        widgets_title: "ホーム画面とロック画面のウィジェット",
        widgets_subtitle: "アプリを開かずにビットコイン価格を一目で確認",

        // Themes Section
        themes_title: "6つの素晴らしいテーマ",
        themes_subtitle: "ビットコインダッシュボードに最適な視覚スタイルを選択",
        theme_bitcoin_orange: "ビットコインオレンジ",
        theme_bitcoin_orange_desc: "控えめな光沢を伴うクラシックなビットコインブランドカラー",
        theme_matrix_green: "マトリックスグリーン",
        theme_matrix_green_desc: "ターミナルバイブを伴うデジタルレイン効果",
        theme_pure_white: "ピュアホワイト",
        theme_pure_white_desc: "柔らかい影を伴うクリーンなミニマリストデザイン",
        theme_pixel_retro: "ピクセルレトロ",
        theme_pixel_retro_desc: "スキャンライン効果を伴うレトロゲーミングスタイル",
        theme_neon_tech: "ネオンテック",
        theme_neon_tech_desc: "色収差を伴うサイバーパンク",
        theme_terminal_mono: "ターミナルモノ",
        theme_terminal_mono_desc: "点滅カーソルを伴う開発者向け",

        // Languages Section
        languages_title: "30以上の言語をサポート",
        languages_subtitle: "母語で利用可能",

        // Download CTA
        cta_title: "スタイリッシュにビットコインを追跡する準備はできましたか？",
        cta_subtitle: "今すぐSatsClockをダウンロードして、iOSデバイスをプレミアムビットコインダッシュボードに変換しましょう。",
        download_on: "でダウンロード",
        cta_note: "iOS 17.0以降が必要です。iPhoneおよびApple Watchと互換性があります。",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "お問い合わせ",
        footer_copyright: "© 2026 SatsClock. 全著作権所有。"
    },

    ko: {
        // Navigation
        download: "다운로드",

        // Hero Section
        hero_title: "궁극의 비트코인 대시보드",
        hero_subtitle: "실시간 가격, 블록, 수수료 및 명언. iOS 17+을 위해 아름답게 설계됨",
        download_now: "지금 다운로드",
        learn_more: "자세히 보기",
        badge_ios: "iOS 17+",
        badge_standby: "스탠바이 모드",
        badge_widgets: "위젯",

        // Features Section
        features_title: "강력한 기능",
        features_subtitle: "아름다운 앱에서 비트코인을 추적하는 데 필요한 모든 것",
        feature_realtime_title: "실시간 가격",
        feature_realtime_desc: "모스크바 시간 계산이 포함된 USD의 라이브 비트코인 가격. 설정에 따라 자동으로 업데이트됩니다.",
        feature_blocks_title: "블록 익스플로러",
        feature_blocks_desc: "현재 블록 높이, 반감기 카운트다운 및 블록체인 통계를 실시간으로 추적합니다.",
        feature_fees_title: "수수료 추정",
        feature_fees_desc: "Mempool.space에서 권장 수수료율(가장 빠름, 30분, 1시간, 경제, 최소)을 가져옵니다.",
        feature_quotes_title: "비트코인 명언",
        feature_quotes_desc: "영감을 주는 비트코인 명언 캐러셀. 아름다운 표시로 10초마다 자동으로 회전합니다.",
        feature_themes_title: "6가지 아름다운 테마",
        feature_themes_desc: "비트코인 오렌지, 매트릭스 그린, 퓨어 화이트, 픽셀 레트로, 네온 테크 및 터미널 모노 테마.",
        feature_analytics_title: "멀티 뷰 대시보드",
        feature_analytics_desc: "대시보드, 스탠바이, 가격 세부정보, 수수료, 분석, 반감기 및 설정을 포함한 7가지 다른 뷰.",

        // StandBy Section
        standby_title: "스탠바이 모드에 최적화됨",
        standby_desc: "충전 중에 iPhone을 옆으로 놓으면 아름다운 항상 켜진 비트코인 대시보드를 즐길 수 있습니다. 책상이나 침대 난간에 완벽합니다.",
        standby_feature1: "✓ 가로 보기에 최적화된 가로 레이아웃",
        standby_feature2: "✓ 전력 소비를 줄이기 위한 자동 흐림 지원",
        standby_feature3: "✓ 모든 필수 비트코인 메트릭에 빠른 액세스",

        // Widgets Section
        widgets_title: "홈 화면 및 잠금 화면 위젯",
        widgets_subtitle: "앱을 열지 않고도 비트코인 가격을 한눈에 확인",

        // Themes Section
        themes_title: "6가지 놀라운 테마",
        themes_subtitle: "비트코인 대시보드에 완벽한 시각 스타일을 선택하세요",
        theme_bitcoin_orange: "비트코인 오렌지",
        theme_bitcoin_orange_desc: "미묘한 광택이 있는 클래식 비트코인 브랜드 색상",
        theme_matrix_green: "매트릭스 그린",
        theme_matrix_green_desc: "터미널 느낌이 있는 디지털 비 효과",
        theme_pure_white: "퓨어 화이트",
        theme_pure_white_desc: "부드러운 그림자가 있는 깨끗한 미니멀리스트 디자인",
        theme_pixel_retro: "픽셀 레트로",
        theme_pixel_retro_desc: "스캔라인 효과가 있는 레트로 게이밍 스타일",
        theme_neon_tech: "네온 테크",
        theme_neon_tech_desc: "색수차가 있는 미래지향적 사이버펑크",
        theme_terminal_mono: "터미널 모노",
        theme_terminal_mono_desc: "깜박이는 커서가 있는 개발자 중심",

        // Languages Section
        languages_title: "30개 이상의 언어 지원",
        languages_subtitle: "모국어로 이용 가능",

        // Download CTA
        cta_title: "스타일리시하게 비트코인을 추적할 준비가 되셨나요?",
        cta_subtitle: "지금 SatsClock을 다운로드하고 iOS 기기를 프리미엄 비트코인 대시보드로 변환하세요.",
        download_on: "에서 다운로드",
        cta_note: "iOS 17.0 이상이 필요합니다. iPhone 및 Apple Watch와 호환됩니다.",

        // Footer
        footer_github: "GitHub",
        footer_twitter: "Twitter",
        footer_contact: "문의하기",
        footer_copyright: "© 2026 SatsClock. 모든 권리 보유."
    }
};

// 当前语言
let currentLanguage = 'en';

// 初始化语言设置
function initLanguage() {
    // 从 localStorage 读取用户语言偏好
    const savedLang = localStorage.getItem('satsclock_lang');

    if (savedLang && translations[savedLang]) {
        // 用户之前手动选择过语言，使用保存的语言
        currentLanguage = savedLang;
    } else {
        // 首次访问，根据浏览器语言自动选择
        currentLanguage = detectBrowserLanguage();
        // 保存自动检测的语言
        localStorage.setItem('satsclock_lang', currentLanguage);
    }

    applyLanguage(currentLanguage);
    updateLanguageButtons();
}

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage || 'en';

    // 语言映射：浏览器语言代码 -> 我们支持的语言代码
    const languageMap = {
        // 英语系
        'en': 'en',
        'en-US': 'en',
        'en-GB': 'en',
        'en-CA': 'en',
        'en-AU': 'en',
        'en-NZ': 'en',
        'en-IE': 'en',
        'en-ZA': 'en',
        'en-IN': 'en',

        // 中文系
        'zh': 'zh',
        'zh-CN': 'zh',  // 简体中文（中国）
        'zh-SG': 'zh',  // 简体中文（新加坡）
        'zh-TW': 'zh',  // 繁体中文（台湾）- 使用简体中文作为fallback
        'zh-HK': 'zh',  // 繁体中文（香港）- 使用简体中文作为fallback

        // 西班牙语系
        'es': 'es',
        'es-ES': 'es',  // 西班牙（西班牙）
        'es-MX': 'es',  // 西班牙语（墨西哥）
        'es-AR': 'es',  // 西班牙语（阿根廷）
        'es-CO': 'es',  // 西班牙语（哥伦比亚）
        'es-CL': 'es',  // 西班牙语（智利）

        // 德语系
        'de': 'de',
        'de-DE': 'de',
        'de-AT': 'de',
        'de-CH': 'de',

        // 法语系
        'fr': 'fr',
        'fr-FR': 'fr',
        'fr-CA': 'fr',
        'fr-BE': 'fr',
        'fr-CH': 'fr',

        // 日语
        'ja': 'ja',
        'ja-JP': 'ja',

        // 韩语
        'ko': 'ko',
        'ko-KR': 'ko'
    };

    // 尝试精确匹配
    if (languageMap[browserLang]) {
        return languageMap[browserLang];
    }

    // 尝试匹配语言前缀（如 'en-US' -> 'en'）
    const langPrefix = browserLang.split('-')[0];
    if (languageMap[langPrefix]) {
        return languageMap[langPrefix];
    }

    // 默认返回英语
    return 'en';
}

// 应用语言
function applyLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not found, falling back to English`);
        lang = 'en';
    }

    currentLanguage = lang;

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}"`);
        }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;

    // 保存到 localStorage
    localStorage.setItem('satsclock_lang', lang);

    // 更新语言按钮状态
    updateLanguageButtons();
}

// 更新语言按钮状态
function updateLanguageButtons() {
    // 更新下拉菜单按钮显示的当前语言
    const dropdownBtn = document.getElementById('langDropdownBtn');
    if (dropdownBtn) {
        const currentLangSpan = dropdownBtn.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = currentLanguage.toUpperCase();
        }
    }

    // 更新语言选项的激活状态（用于未来可能的视觉反馈）
    document.querySelectorAll('.lang-item').forEach(item => {
        const lang = item.getAttribute('data-lang');
        if (lang === currentLanguage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 切换语言
function switchLanguage(lang) {
    if (translations[lang] && lang !== currentLanguage) {
        applyLanguage(lang);

        // 添加页面淡出淡入效果
        document.body.style.opacity = '0';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    }
}

// 获取当前语言
function getCurrentLanguage() {
    return currentLanguage;
}

// 获取可用的语言列表
function getAvailableLanguages() {
    return Object.keys(translations);
}

// 页面加载时初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
