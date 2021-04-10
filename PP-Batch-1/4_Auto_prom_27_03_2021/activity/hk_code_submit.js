let puppeteer = require("puppeteer");
let email = "yokoder598@kindbest.com";
let password = "nannynoo";
let tab;
console.log("Before");
let browserPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized", "--incognito"],
});
// /pages
browserPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.pages();
    return newTabPromise;
  })
  .then(function (newTab) {
    // console.log(newTab);
    tab = newTab[0];
    let loginPageWillBeopenedPromise = tab.goto(
      "https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login"
    );

    return loginPageWillBeopenedPromise;
  })
  .then(function () {
    // console.log("login Page opened");
    let emailWillBeTypedPromise = tab.type("#input-1", email, { delay: 50 });
    return emailWillBeTypedPromise;
  })
  .then(function () {
    let passwordWillBeTypedPromise = tab.type("#input-2", password, {
      delay: 50,
    });
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    let loginPageWillBeClickedpromise = tab.click(
      "button[data-analytics='LoginPassword']"
    );
    let waiting = tab.waitForNavigation({ waitUntil: "networkidle0" });
    let combinedPromise = Promise.all([loginPageWillBeClickedpromise, waiting]);
    return combinedPromise;
  })
  .then(function () {
    let interviewKit = Promise.all([
      tab.click(
        ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
      ),
      tab.waitForNavigation(),
    ]);
    return interviewKit;
  })
  .then(function () {
    let warmUp = Promise.all([
      tab.waitForNavigation(),
      tab.click(
        ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
      ),
    ]);
    return warmUp;
  });
