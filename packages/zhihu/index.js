// ==UserScript==
// @name         自动阅读全文
// @namespace    https://github.com/BillQiu/TMScript
// @author       Bill Qiu
// @version      1.0
// @match        https://*.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  jumpDirectly();
  loadAll();
})();

function show(dom) {
  dom[0] ? dom[0].click() : "";
}
function loadAll() {
  /* 查看全部回答 */
  setTimeout(() => {
    show(
      document.getElementsByClassName(
        "QuestionMainAction ViewAll-QuestionMainAction"
      )
    );
  }, 1000);
}

function jumpDirectly() {
  const result = /.*link.zhihu.com\/\?target=(.*)/.exec(location.href);
  if (result) {
    const url = decodeURIComponent(result[1]);

    if (url) location.href = url;
  }
}
