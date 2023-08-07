import "./styles.css";

// const helloLi = document.querySelector("#hello li");
// helloLi.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", "hello");
//   e.dataTransfer.effectAllowed = "move";
//   helloLi.parentElement.classList.add("dragging");
// });
// helloLi.addEventListener("dragenter", () => {
//   helloLi.parentElement.classList.add("dragging");
// });

const helloUl = document.querySelector("#hello");
helloUl.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "hello");
  e.dataTransfer.effectAllowed = "move";
  helloUl.classList.add("dragging");
});
helloUl.addEventListener("dragout", (e) => {
  //   console.log(e.relatedTarget);
  helloUl.classList.remove("dragging");
});

const byeUl = document.querySelector("#bye");
byeUl.addEventListener("dragenter", (e) => {
  if (e.dataTransfer.types[0] === "text/plain") {
    byeUl.classList.add("dragging");
    e.preventDefault();
  }
});
