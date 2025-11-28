const listRef = document.querySelectorAll("#categories .item");
listRef.forEach((item) => {
    const titleRef = item.querySelector("h2")
    const itemRef = item.querySelectorAll("li")
    console.log(`Категорія: ${titleRef.textContent}`);
    console.log(`Кількість елементів: ${itemRef.length}`);
});

const ingredients = [
 "Картопля",
 "Гриби",
 "Часник",
 "Помідори",
 "Зелень",
 "Приправи",
];
const listRef1 = document.querySelector("#ingredients");
const items = ingredients.map((item) => {
    const li = document.createElement("li")
    li.textContent = item
    return li
})
console.log(items);
listRef1.append(... items)

const images = [
 {
  url:
   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat",
 },
 {
  url:
   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Orange and White Koi Fish Near Yellow Koi Fish",
 },
 {
  url:
   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Group of Horses Running",
 },
];
const listRef2 = document.getElementById("gallery");
const itemWorkUp = images.map(({url, alt}) => `<li><img src = "${url}" alt = "${alt}"></li>`).join("");
listRef2.insertAdjacentHTML("beforeend", itemWorkUp);
console.log(itemWorkUp);

const spanRef = document.querySelector("#value");
const decrementRef = document.querySelector(".decrement");
const incrementRef = document.querySelector(".increment");
decrementRef.addEventListener("click", () => {
    spanRef.textContent = Number(spanRef.textContent) - 1
});
incrementRef.addEventListener("click", () => {
    spanRef.textContent = Number(spanRef.textContent) + 1
});