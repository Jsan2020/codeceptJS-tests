// const { setHeadlessWhen } = require('@codeceptjs/configure');
// var myArgs = process.argv.slice(2);
// // turn on headless mode when running with HEADLESS=true environment variable
// // export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// exports.config = {
//   tests: './*_test.js',
//   output: './output',
//   helpers: {
//     Playwright: {
//       url: `http://localhost:${myArgs[0]}/`,
//       show: true,
//       browser: 'chromium'
//     }
//   },
//   include: {
//     I: './steps_file.js'
//   },
//   bootstrap: null,
//   mocha: {},
//   name: 'tests',
//   plugins: {
//     pauseOnFail: {},
//     retryFailedStep: {
//       enabled: true
//     },
//     tryTo: {
//       enabled: true
//     },
//     screenshotOnFail: {
//       enabled: true
//     }
//   }
// }