### chrome-extension for KAIST URS

## About

카이스트 URS 서비스 UI/UX 개선 및 캐싱을 위한 Chrome Extension입니다.

### Table Of Contents

- [About](#about)
  - [Table Of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installing Node.js](#installing-nodejs-and-pnpm)
    - [Build](#build)
    - [Chrome Extension Loading](#chrome-extension-loading)
  - [Folder Structure](#folder-structure)
  - [Built With](#built-with)
  - [Author](#author)

### Prerequisites

**You'll need to have Node v18.12.0 or later on your local development machine**

We recommend you to use [fnm](https://github.com/Schniz/fnm) to install node.

```bash
$ node -v
v18.12.0

$ pnpm -v
8.13.1
```

### Getting Started

#### Installing Node.js and pnpm

Run the following command to install Node v18.12.0

```bash
$ fnm install 18.12.0

$ fnm use 18.12.0

$ npm install -g pnpm
```

#### Build

```bash
# run development hot reload
$ pnpm run dev

# build for production
$ pnpm run build
```

#### Chrome Extension Loading

1. Go to chrome and navigate to extension home (chrome://extensions/).
2. Enable Developer Mode.
3. Click "Load Unpacked"
4. Select directory that includes manifest.json
5. Every time you change the source code of chrome extension, you have to reload at chrome extension home.
   (Assuming you are using development hot reload("pnpm run dev" command))

## Folder Structure

```text
.
├── LICENSE
├── README.md
├── background.js
├── content_script.js
├── jsconfig.json
├── manifest.json
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── popup.html
├── popup.js
├── src
│   ├── App.js
│   ├── components
│   │   ├── LoginForm
│   │   │   ├── LoginForm.js
│   │   │   ├── LoginForm.module.scss
│   │   │   └── index.js
│   │   └── Welcome
│   │       ├── Welcome.js
│   │       ├── Welcome.module.scss
│   │       └── index.js
│   ├── data
│   │   ├── cache
│   │   └── urs
│   │       ├── getFacility.js
│   │       ├── getMyReservation.js
│   │       ├── getReservation.js
│   │       ├── getReservationDetails.js
│   │       ├── getResource.js
│   │       ├── getUserInfo.js
│   │       └── index.js
│   ├── index.css
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── HomePage.js
│   │   │   ├── HomePage.module.scss
│   │   │   └── index.js
│   │   └── LoginPage
│   │       ├── LoginPage.js
│   │       ├── LoginPage.module.scss
│   │       └── index.js
│   └── styles.scss
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

```

## Built With

1. [Node.js](https://nodejs.org/en/about)
2. [Webpack](https://webpack.js.org/)
3. [React](https://react.dev/)

## Author

1. [ball](https://github.com/jinho-choi123)
2. [Jiwoo-Jeong](https://github.com/jiwoojeong17)
