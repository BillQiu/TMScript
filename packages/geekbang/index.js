// ==UserScript==
// @name         New Userscript
// @namespace    https://github.com/BillQiu/TMScript
// @version      1.0
// @description  Allow use cmd + a to select all
// @author       Bill Qiu
// @match        https://time.geekbang.org/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener("keydown", function (event) {
    if (event.metaKey && event.key === 65) {
      event.preventDefault();
      document.execCommand("selectAll", false, null);
    }
  });
})();
