const orderBooks = document.querySelectorAll(".book");
const body = document.querySelector("body");
const book3Title = orderBooks[4].querySelector("h2 > a");
const adv = document.querySelector(".adv");
const book2Desc = orderBooks[0].querySelectorAll("li");
const book5Desc = orderBooks[5].querySelectorAll("li");
const book6Ul = orderBooks[2].querySelector("ul");
const book6Desc = orderBooks[2].querySelectorAll("li");
const li = document.createElement("li");

orderBooks[0].before(orderBooks[1]);
orderBooks[2].before(orderBooks[4]);
orderBooks[5].after(orderBooks[2]);
body.setAttribute(
    "style",
    "background-image: url(./image/you-dont-know-js.jpg)",
);
book3Title.innerHTML = "Книга 3. this и Прототипы Объектов";
adv.remove();
book2Desc[3].after(book2Desc[6]);
book2Desc[6].after(book2Desc[8]);
book2Desc[9].after(book2Desc[2]);

book5Desc[1].after(book5Desc[9]);
book5Desc[4].after(book5Desc[2]);
book5Desc[8].before(book5Desc[5]);
book6Desc[book6Desc.length - 1].innerHTML = "Глава 8: За пределами ES6";

console.log(orderBooks);
console.log(book2Desc);
console.log(book5Desc);
