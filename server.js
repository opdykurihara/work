/*
 Usage: npm i -g browser-sync
 Usage: node server.js
*/
const browserSync = require("browser-sync").create();

browserSync.init({
  server: {
    baseDir: [__dirname],
  },
  files: ["**/*.html","**/*.js","**/*.css"],
  notify: false,
  // 立ち上げ時のバスを指定したい場合
  // startPath: "/j_optional/templates/index/index.html",
  // httpsで確認したい場合
  // https: true,
  // 自動でブラウザを立ち上げたくない場合
  // open: false,
  // 指定したポートで立ち上げたい場合
  port: 8888,
  // ブラウザを指定して立ち上げたい場合 ※Edgeだけうまく起動しない模様
  // browser: ["chrome","iexplore", "firefox", "microsoft-edge://"],
  // rewriteRules: [
  //   {
  //     match: /<\?php echo \$FW_ENV\[\'url\'\]\[\'WWW\'\]; \?>/g,
  //     replace: 'https://www.tour.ne.jp/'
  //   },
  // ]
})
