// ==UserScript==
// @name         Disable Copy Event Listener on zsxq
// @namespace    https://github.com/BillQiu/TMScript
// @author       Bill Qiu
// @version      1.0
// @description  Disable copy event listener on wx.zsxq.com
// @match        https://*.zsxq.com/*
// @grant        none
// ==/UserScript==

window.onload = task;

function task() {
  overwriteCopyEvent();
  allowArticleCopy();
  setTimeout(() => {
    removeDisableUserSelect();
  }, 3000);
}

function overwriteCopyEvent() {
  window.addEventListener(
    "copy",
    (event) => {
      // 阻止其他侦听器处理此事件并取消事件的默认操作
      event.stopImmediatePropagation();
      event.preventDefault();

      // 获取当前窗口中选定的文本
      const selectedText = window.getSelection();

      // 获取剪贴板数据对象
      const clipboardData = event.clipboardData || window.clipboardData;

      // 将所选文本作为纯文本格式设置到剪贴板
      clipboardData.setData("text/plain", selectedText.toString());
    },
    true
  );
}

function removeDisableUserSelect() {
  var disabledCopyDiv = document.querySelectorAll("div.disabled-copy");

  for (var i = 0; i < disabledCopyDiv.length; i++) {
    var element = disabledCopyDiv[i];
    element.style.userSelect = "auto";
  }
}

function allowArticleCopy() {
  document.body.style.userSelect = "auto";
}
