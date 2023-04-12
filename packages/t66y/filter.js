// ==UserScript==
// @name         过滤器
// @namespace    https://github.com/BillQiu/TMScript
// @author       Bill Qiu
// @version      1.0
// @match        https://t66y.com/*
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  // 过滤那些不想看到的内容
  const blockText = [];
  // 高亮想看的内容
  const hightLightText = [];

  // 获取所有的 table 元素
  let tables = document.getElementsByTagName("table");

  // 遍历每个 table 元素
  for (let i = 0; i < tables.length; i++) {
    let table = tables[i];

    // 获取 table 元素下的所有 tr 元素
    let rows = table.getElementsByTagName("tr");

    // 遍历每个 tr 元素
    for (let j = 0; j < rows.length; j++) {
      let row = rows[j];

      // 获取 tr 元素下的 td > h3 > a 元素
      let link = row.querySelector("td > h3 > a");

      // 判断 a 元素的文本是否包含 blockText 中的文本
      if (
        link &&
        blockText.some((text) => link.innerText.trim().indexOf(text) !== -1)
      ) {
        console.log(link);
        // 删除这一行 tr 元素
        row.parentNode.removeChild(row);
        j--;
      }

      if (
        link &&
        hightLightText.some(
          (text) => link.innerText.toUpperCase().indexOf(text) > -1
        )
      ) {
        row.style.backgroundColor = "#c7e7cf";
      }
    }
  }
})();
