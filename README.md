# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## FOLDER STRUCCTURE
.
├── public
│   ├── faq
│   │   ├── faq.en.json
│   │   └── faq.es.json
│   ├── apple-touch-icon.png
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   └── styles
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── img
│   ├── components
│   │   ├── chatbot
│   │   │   ├── analyticcs.js
│   │   │   ├── antibot.js
│   │   │   ├── ChatPanel.jsx
│   │   │   ├── intents.js
│   │   │   ├── LeadForm.jsx
│   │   │   ├── retrieval.js
│   │   │   ├── store.js
│   │   │   ├── style.js
│   │   │   └── TermsModal.jsx
│   │   ├── layout
│   │   │   ├── ChatBadge.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── ScrollToTopButton.jsx
│   │   ├── sections
│   │   │   ├── Cards.jsx
│   │   │   ├── CarouselText.jsx
│   │   │   ├── ContactCTA.jsx
│   │   │   ├── Faq.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Tabs.jsx
│   │   └── ui
│   │       ├── Accordion.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Carousel.jsx
│   │       └── Icons.jsx
│   ├── hooks
│   │   ├── useDisableMediaInteractions.jsx
│   │   ├── useDragToSlide.jsx
│   │   ├── useGsapHorizontalScroll.jsx
│   │   ├── useMediaQuery.jsx
│   │   └── useScrollToTop.jsx
│   ├── i18n
│   │   ├── locales
│   │   │   ├── de
│   │   │   │   └── translation.json
│   │   │   ├── en
│   │   │   │   └── translation.json
│   │   │   ├── es
│   │   │   │   └── translation.json
│   │   │   ├── fr
│   │   │   │   └── translation.json
│   │   │   └── it
│   │   │       └── translation.json
│   │   └── i18n.js
│   ├── layout
│   │   └── RootLayout.jsx
│   ├── pages
│   │   ├── protected
│   │   └── public
│   │       ├── Contact.jsx
│   │       ├── Demo.jsx
│   │       ├── Features.jsx
│   │       ├── Home.jsx
│   │       └── Pricing.jsx
│   ├── store
│   │   ├── constants.jsx
│   │   ├── reducers.jsx
│   │   └── store.jsx
│   └── styles
│       ├── _base.general.scss
│       ├── _base.mixins.scss
│       ├── _base.variables.scss
│       ├── _global.fonts.scss
│       ├── _global.helpers.scss
│       ├── _global.layouts.scss
│       ├── com-la.chat-badge.scss
│       ├── com-la.footer.scss
│       ├── com-la.header.scss
│       ├── com-la.scroll-top.scss
│       ├── com-se.carousel-text.scss
│       ├── com-se.contactcta.scss
│       ├── com-se.faq.scss
│       ├── com-se.tabs.scss
│       ├── com-ui.accordion.scss
│       ├── com-ui.button.scss
│       ├── com-ui.card.scss
│       └── com-ui.carousel.scss
├── App.jsx
├── index.css
├── Main.jsx
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js