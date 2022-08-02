"use strict";

// selecting the container.
const container = document.querySelector(".container");

const newEl = document.createElement("div");
newEl.textContent = "This is specific";
newEl.classList.add("alpha");
newEl.style.height = "100px";
newEl.style.width = "100px";
newEl.style.backgroundColor = "#ffff";

container.appendChild(newEl);
console.log("connected");
container.insertAdjacentHTML("beforeEnd", "<div>Inserting adjacent HTML</div>");

const pEl = document.createElement("p");
pEl.textContent = "Me too";
pEl.style.color = "red";
container.appendChild(pEl);
const h3El = document.createElement("h3");
h3El.textContent = "This is blue H3";
h3El.style.color = "blue";
container.insertBefore(h3El, newEl);

const blockEl = document.createElement("div");
blockEl.setAttribute("style", "border: 1px solid #000; background-color: pink");

const h1div = document.createElement("h1");
h1div.textContent = "I am H1 and in a div";
h1div.setAttribute(
  "style",
  "text-align: center; font-size: 38px; color: #83f;"
);

blockEl.appendChild(h1div);
blockEl.appendChild(pEl);
container.appendChild(blockEl);

// Okey the issue has been resolved.
document.addEventListener("click", function (e) {
  console.log(e.target, e);
  e.target.style.backgroundColor = "orange";
});
