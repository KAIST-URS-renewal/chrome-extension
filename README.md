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
├── background.js
├── content_script.js
├── dist
│   ├── background.js
│   ├── content_script.js
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
├── jsconfig.json
├── LICENSE
├── manifest.json
├── node_modules
│   ├── @babel
│   │   ├── preset-env -> ../.pnpm/@babel+preset-env@7.23.6_@babel+core@7.23.6/node_modules/@babel/preset-env
│   │   └── preset-react -> ../.pnpm/@babel+preset-react@7.23.3_@babel+core@7.23.6/node_modules/@babel/preset-react
│   ├── babel-loader -> .pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader
│   ├── copy-webpack-plugin -> .pnpm/copy-webpack-plugin@11.0.0_webpack@5.89.0/node_modules/copy-webpack-plugin
│   ├── css-loader -> .pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader
│   ├── dayjs -> .pnpm/dayjs@1.11.10/node_modules/dayjs
│   ├── eslint-scope -> .pnpm/eslint-scope@5.1.1/node_modules/eslint-scope
│   ├── html-loader -> .pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader
│   ├── husky -> .pnpm/husky@8.0.3/node_modules/husky
│   ├── lint-staged -> .pnpm/lint-staged@15.2.0/node_modules/lint-staged
│   ├── lodash -> .pnpm/lodash@4.17.21/node_modules/lodash
│   ├── node-html-parser -> .pnpm/node-html-parser@6.1.11/node_modules/node-html-parser
│   ├── prettier -> .pnpm/prettier@3.1.1/node_modules/prettier
│   ├── react -> .pnpm/react@18.2.0/node_modules/react
│   ├── react-dom -> .pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom
│   ├── react-router-dom -> .pnpm/react-router-dom@6.21.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom
│   ├── sass -> .pnpm/sass@1.69.5/node_modules/sass
│   ├── sass-loader -> .pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader
│   ├── style-loader -> .pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader
│   ├── superagent -> .pnpm/superagent@8.1.2/node_modules/superagent
│   ├── @swc
│   │   └── core -> ../.pnpm/@swc+core@1.3.101/node_modules/@swc/core
│   ├── swc-loader -> .pnpm/swc-loader@0.2.3_@swc+core@1.3.101_webpack@5.89.0/node_modules/swc-loader
│   ├── @types
│   │   ├── eslint -> ../.pnpm/@types+eslint@8.44.9/node_modules/@types/eslint
│   │   └── eslint-scope -> ../.pnpm/@types+eslint-scope@3.7.7/node_modules/@types/eslint-scope
│   ├── webpack -> .pnpm/webpack@5.89.0_@swc+core@1.3.101_webpack-cli@5.1.4/node_modules/webpack
│   ├── webpack-cli -> .pnpm/webpack-cli@5.1.4_webpack@5.89.0/node_modules/webpack-cli
│   └── webpack-merge -> .pnpm/webpack-merge@5.10.0/node_modules/webpack-merge
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── popup.html
├── popup.js
├── public
│   └── loginPage.png
├── README.md
├── src
│   ├── App.js
│   ├── components
│   │   ├── LoginForm
│   │   │   ├── index.js
│   │   │   ├── LoginForm.js
│   │   │   └── LoginForm.module.scss
│   │   └── Welcome
│   │       ├── index.js
│   │       ├── Welcome.js
│   │       └── Welcome.module.scss
│   ├── index.css
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── HomePage.js
│   │   │   ├── HomePage.module.scss
│   │   │   └── index.js
│   │   └── LoginPage
│   │       ├── index.js
│   │       ├── LoginPage.js
│   │       └── LoginPage.module.scss
│   ├── styles.scss
│   └── utils
│       ├── cache
│       │   ├── getFacility.js
│       │   ├── getMyReservation.js
│       │   ├── getReservationDetails.js
│       │   ├── getReservation.js
│       │   ├── getResource.js
│       │   └── index.js
│       ├── local
│       │   ├── facility.js
│       │   ├── index.js
│       │   ├── myReservation.js
│       │   ├── reservationDetails.js
│       │   ├── reservation.js
│       │   ├── resource.js
│       │   └── userInfo.js
│       └── urs
│           ├── getFacility.js
│           ├── getMyReservation.js
│           ├── getReservationDetails.js
│           ├── getReservation.js
│           ├── getResource.js
│           ├── getUserInfo.js
│           └── index.js
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

45 directories, 55 files
 ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree -ㅗ
tree: Invalid argument -`�'.
usage: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-L level [-R]] [-H  baseHREF]
        [-T title] [-o filename] [-P pattern] [-I pattern] [--gitignore]
        [--gitfile[=]file] [--matchdirs] [--metafirst] [--ignore-case]
        [--nolinks] [--hintro[=]file] [--houtro[=]file] [--inodes] [--device]
        [--sort[=]<name>] [--dirsfirst] [--filesfirst] [--filelimit #] [--si]
        [--du] [--prune] [--charset[=]X] [--timefmt[=]format] [--fromfile]
        [--fflinks] [--info] [--infofile[=]file] [--noreport] [--version]
        [--help] [--] [directory ...]
 ✘ ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree -h
[  510]  .
├── [   28]  background.js
├── [  264]  content_script.js
├── [  122]  dist
│   ├── [  586]  background.js
│   ├── [ 7.0M]  content_script.js
│   ├── [  483]  manifest.json
│   ├── [  160]  popup.html
│   └── [  155]  popup.js
├── [   99]  jsconfig.json
├── [ 1.0K]  LICENSE
├── [  483]  manifest.json
├── [  534]  node_modules
│   ├── [   44]  @babel
│   │   ├── [   83]  preset-env -> ../.pnpm/@babel+preset-env@7.23.6_@babel+core@7.23.6/node_modules/@babel/preset-env
│   │   └── [   87]  preset-react -> ../.pnpm/@babel+preset-react@7.23.3_@babel+core@7.23.6/node_modules/@babel/preset-react
│   ├── [   84]  babel-loader -> .pnpm/babel-loader@9.1.3_@babel+core@7.23.6_webpack@5.89.0/node_modules/babel-loader
│   ├── [   80]  copy-webpack-plugin -> .pnpm/copy-webpack-plugin@11.0.0_webpack@5.89.0/node_modules/copy-webpack-plugin
│   ├── [   61]  css-loader -> .pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader
│   ├── [   38]  dayjs -> .pnpm/dayjs@1.11.10/node_modules/dayjs
│   ├── [   50]  eslint-scope -> .pnpm/eslint-scope@5.1.1/node_modules/eslint-scope
│   ├── [   63]  html-loader -> .pnpm/html-loader@4.2.0_webpack@5.89.0/node_modules/html-loader
│   ├── [   36]  husky -> .pnpm/husky@8.0.3/node_modules/husky
│   ├── [   49]  lint-staged -> .pnpm/lint-staged@15.2.0/node_modules/lint-staged
│   ├── [   40]  lodash -> .pnpm/lodash@4.17.21/node_modules/lodash
│   ├── [   59]  node-html-parser -> .pnpm/node-html-parser@6.1.11/node_modules/node-html-parser
│   ├── [   42]  prettier -> .pnpm/prettier@3.1.1/node_modules/prettier
│   ├── [   37]  react -> .pnpm/react@18.2.0/node_modules/react
│   ├── [   58]  react-dom -> .pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom
│   ├── [   89]  react-router-dom -> .pnpm/react-router-dom@6.21.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom
│   ├── [   35]  sass -> .pnpm/sass@1.69.5/node_modules/sass
│   ├── [   76]  sass-loader -> .pnpm/sass-loader@13.3.2_sass@1.69.5_webpack@5.89.0/node_modules/sass-loader
│   ├── [   65]  style-loader -> .pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader
│   ├── [   46]  superagent -> .pnpm/superagent@8.1.2/node_modules/superagent
│   ├── [    8]  @swc
│   │   └── [   49]  core -> ../.pnpm/@swc+core@1.3.101/node_modules/@swc/core
│   ├── [   79]  swc-loader -> .pnpm/swc-loader@0.2.3_@swc+core@1.3.101_webpack@5.89.0/node_modules/swc-loader
│   ├── [   36]  @types
│   │   ├── [   56]  eslint -> ../.pnpm/@types+eslint@8.44.9/node_modules/@types/eslint
│   │   └── [   67]  eslint-scope -> ../.pnpm/@types+eslint-scope@3.7.7/node_modules/@types/eslint-scope
│   ├── [   77]  webpack -> .pnpm/webpack@5.89.0_@swc+core@1.3.101_webpack-cli@5.1.4/node_modules/webpack
│   ├── [   63]  webpack-cli -> .pnpm/webpack-cli@5.1.4_webpack@5.89.0/node_modules/webpack-cli
│   └── [   53]  webpack-merge -> .pnpm/webpack-merge@5.10.0/node_modules/webpack-merge
├── [ 1.2K]  package.json
├── [  103]  package-lock.json
├── [ 144K]  pnpm-lock.yaml
├── [  160]  popup.html
├── [    0]  popup.js
├── [   26]  public
│   └── [  43K]  loginPage.png
├── [ 6.8K]  README.md
├── [   92]  src
│   ├── [  786]  App.js
│   ├── [   32]  components
│   │   ├── [   82]  LoginForm
│   │   │   ├── [   29]  index.js
│   │   │   ├── [  920]  LoginForm.js
│   │   │   └── [ 1.0K]  LoginForm.module.scss
│   │   └── [   74]  Welcome
│   │       ├── [   27]  index.js
│   │       ├── [  344]  Welcome.js
│   │       └── [  235]  Welcome.module.scss
│   ├── [  278]  index.css
│   ├── [   34]  pages
│   │   ├── [   78]  HomePage
│   │   │   ├── [  373]  HomePage.js
│   │   │   ├── [    0]  HomePage.module.scss
│   │   │   └── [   28]  index.js
│   │   └── [   82]  LoginPage
│   │       ├── [   29]  index.js
│   │       ├── [  423]  LoginPage.js
│   │       └── [  212]  LoginPage.module.scss
│   ├── [  204]  styles.scss
│   └── [   26]  utils
│       ├── [  192]  cache
│       │   ├── [   86]  getFacility.js
│       │   ├── [   91]  getMyReservation.js
│       │   ├── [   96]  getReservationDetails.js
│       │   ├── [   89]  getReservation.js
│       │   ├── [   86]  getResource.js
│       │   └── [  177]  index.js
│       ├── [  184]  local
│       │   ├── [  335]  facility.js
│       │   ├── [   28]  index.js
│       │   ├── [  390]  myReservation.js
│       │   ├── [  434]  reservationDetails.js
│       │   ├── [  368]  reservation.js
│       │   ├── [  335]  resource.js
│       │   └── [  315]  userInfo.js
│       └── [  220]  urs
│           ├── [ 3.5K]  getFacility.js
│           ├── [ 4.9K]  getMyReservation.js
│           ├── [ 2.2K]  getReservationDetails.js
│           ├── [ 2.7K]  getReservation.js
│           ├── [ 3.9K]  getResource.js
│           ├── [ 1.3K]  getUserInfo.js
│           └── [  167]  index.js
├── [ 1.2K]  webpack.common.js
├── [  263]  webpack.dev.js
└── [  149]  webpack.prod.js

45 directories, 55 files
 ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree --help
usage: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-L level [-R]] [-H  baseHREF]
        [-T title] [-o filename] [-P pattern] [-I pattern] [--gitignore]
        [--gitfile[=]file] [--matchdirs] [--metafirst] [--ignore-case]
        [--nolinks] [--hintro[=]file] [--houtro[=]file] [--inodes] [--device]
        [--sort[=]<name>] [--dirsfirst] [--filesfirst] [--filelimit #] [--si]
        [--du] [--prune] [--charset[=]X] [--timefmt[=]format] [--fromfile]
        [--fflinks] [--info] [--infofile[=]file] [--noreport] [--version]
        [--help] [--] [directory ...]
  ------- Listing options -------
  -a            All files are listed.
  -d            List directories only.
  -l            Follow symbolic links like directories.
  -f            Print the full path prefix for each file.
  -x            Stay on current filesystem only.
  -L level      Descend only level directories deep.
  -R            Rerun tree when max dir level reached.
  -P pattern    List only those files that match the pattern given.
  -I pattern    Do not list files that match the given pattern.
  --gitignore   Filter by using .gitignore files.
  --gitfile X   Explicitly read gitignore file.
  --ignore-case Ignore case when pattern matching.
  --matchdirs   Include directory names in -P pattern matching.
  --metafirst   Print meta-data at the beginning of each line.
  --prune       Prune empty directories from the output.
  --info        Print information about files found in .info files.
  --infofile X  Explicitly read info file.
  --noreport    Turn off file/directory count at end of tree listing.
  --charset X   Use charset X for terminal/HTML and indentation line output.
  --filelimit # Do not descend dirs with more than # files in them.
  -o filename   Output to file instead of stdout.
  --du          Print directory sizes.
  --prune       Prune empty directories from the output.
  ------- File options -------
  -q            Print non-printable characters as '?'.
  -N            Print non-printable characters as is.
  -Q            Quote filenames with double quotes.
  -p            Print the protections for each file.
  -u            Displays file owner or UID number.
  -g            Displays file group owner or GID number.
  -s            Print the size in bytes of each file.
  -h            Print the size in a more human readable way.
  --si          Like -h, but use in SI units (powers of 1000).
  --du          Compute size of directories by their contents.
  -D            Print the date of last modification or (-c) status change.
  --timefmt <f> Print and format time according to the format <f>.
  -F            Appends '/', '=', '*', '@', '|' or '>' as per ls -F.
  --inodes      Print inode number of each file.
  --device      Print device ID number to which each file belongs.
  ------- Sorting options -------
  -v            Sort files alphanumerically by version.
  -t            Sort files by last modification time.
  -c            Sort files by last status change time.
  -U            Leave files unsorted.
  -r            Reverse the order of the sort.
  --dirsfirst   List directories before files (-U disables).
  --filesfirst  List files before directories (-U disables).
  --sort X      Select sort: name,version,size,mtime,ctime.
  ------- Graphics options -------
  -i            Don't print indentation lines.
  -A            Print ANSI lines graphic indentation lines.
  -S            Print with CP437 (console) graphics indentation lines.
  -n            Turn colorization off always (-C overrides).
  -C            Turn colorization on always.
  ------- XML/HTML/JSON options -------
  -X            Prints out an XML representation of the tree.
  -J            Prints out an JSON representation of the tree.
  -H baseHREF   Prints out HTML format with baseHREF as top directory.
  -T string     Replace the default HTML title and H1 header with string.
  --nolinks     Turn off hyperlinks in HTML output.
  --hintro X    Use file X as the HTML intro.
  --houtro X    Use file X as the HTML outro.
  ------- Input options -------
  --fromfile    Reads paths from files (.=stdin)
  --fflinks     Process link informtion when using --fromfile.
  ------- Miscellaneous options -------
  --version     Print version and exit.
  --help        Print usage and this help message and exit.
  --            Options processing terminator.
 ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree --gitignore .gitignore
.gitignore  [error opening dir]

0 directories, 1 file
 ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree --gitignore ./.gitignore
./.gitignore  [error opening dir]

0 directories, 1 file
 ball@fedora  ~/WebstormProjects/chrome-extension   main ±✚  tree --gitignore
.
├── background.js
├── content_script.js
├── jsconfig.json
├── LICENSE
├── manifest.json
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── popup.html
├── popup.js
├── public
│   └── loginPage.png
├── README.md
├── src
│   ├── App.js
│   ├── components
│   │   ├── LoginForm
│   │   │   ├── index.js
│   │   │   ├── LoginForm.js
│   │   │   └── LoginForm.module.scss
│   │   └── Welcome
│   │       ├── index.js
│   │       ├── Welcome.js
│   │       └── Welcome.module.scss
│   ├── index.css
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── HomePage.js
│   │   │   ├── HomePage.module.scss
│   │   │   └── index.js
│   │   └── LoginPage
│   │       ├── index.js
│   │       ├── LoginPage.js
│   │       └── LoginPage.module.scss
│   ├── styles.scss
│   └── utils
│       ├── cache
│       │   ├── getFacility.js
│       │   ├── getMyReservation.js
│       │   ├── getReservationDetails.js
│       │   ├── getReservation.js
│       │   ├── getResource.js
│       │   └── index.js
│       ├── local
│       │   ├── facility.js
│       │   ├── index.js
│       │   ├── myReservation.js
│       │   ├── reservationDetails.js
│       │   ├── reservation.js
│       │   ├── resource.js
│       │   └── userInfo.js
│       └── urs
│           ├── getFacility.js
│           ├── getMyReservation.js
│           ├── getReservationDetails.js
│           ├── getReservation.js
│           ├── getResource.js
│           ├── getUserInfo.js
│           └── index.js
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

## UI/UX

You can see UI/UX at [**HERE**](https://www.figma.com/file/hAdPJwwl8fXqmkLNMGTWuS/KAIST-newURS?type=design&node-id=0%3A1&mode=design&t=dJkHjog0g1WtvZ7C-1).

### Screenshots

Login Page
![loginPage](public/loginPage.png)

## Built With

1. [Node.js](https://nodejs.org/en/about)
2. [Webpack](https://webpack.js.org/)
3. [React](https://react.dev/)

## Author

1. [ball](https://github.com/jinho-choi123)
2. [Jiwoo-Jeong](https://github.com/jiwoojeong17)
