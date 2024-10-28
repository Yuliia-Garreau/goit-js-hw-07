"use strict";

const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});

// const items = document.querySelectorAll("li.item");
// const header1 = items[0].querySelector("h2");
// const header2 = items[1].querySelector("h2");
// const header3 = items[2].querySelector("h2");
// console.log(header3);
