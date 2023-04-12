// ==UserScript==
// @name t66y 点击链接自动下载
// @namespace    https://github.com/BillQiu/TMScript
// @version 1.0
// @match http://www.rmdown.com/*
// @grant none
// ==/UserScript==
window.onlaod = setTimeout(task, 3000);

function task() {
  // Find the button with title "Download file"
  const downloadButton = document.querySelector(
    'table button[title="Download file"]'
  );

  // Click the button if it exists
  if (downloadButton) {
    downloadButton.click();
    // Prevent the page from opening a new tab
    window.open = function () {};
  }

  setTimeout(() => {
    // Close the current tab
    window.close();
  }, 500);
}
