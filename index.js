// console.log("test");
const container = document.getElementById("container");
// console.log(container);
function init() {
  let para = document.createElement("p");
  let text = document.createTextNode("Coucou !");
  para.appendChild(text);
  container.appendChild(para);
}
init();

// !---------------------------------------------------
// TODO:display HelloWorld after click on btn

const hello = document.getElementById("hello");
const helloBtn = document.getElementById("helloBtn");
// console.log(helloBtn);
function createOnBtn() {
  let hellop = document.createElement("p");
  let text = document.createTextNode("Hello World");
  hellop.appendChild(text);
  hello.appendChild(hellop);
}

helloBtn.addEventListener("click", createOnBtn);

// !-------------------------------------------
// TODO:onclick -> add name, oui?display in diag:null;
