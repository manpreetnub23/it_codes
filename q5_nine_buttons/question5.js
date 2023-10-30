console.log("hello")
div = document.querySelector(".container");
p = document.querySelector(".para");
div.addEventListener("click", (e) => {
    console.log('hello')
  let target = e.target.innerText;
  if (target == 10 || target == 20 || target == 30) {
    p.style.fontSize = `${target}px`;
  } else if (target == "red" || target == "green" || target == "blue") {
    p.style.color = target;
  } else {
    p.style.fontFamily = target;
  }
});
