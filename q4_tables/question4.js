const tables = () => {
  var i = 1;
  var num = 1;
  var htmlContainer = document.querySelector(".tables");
  const thisInterval = setInterval(() => {
    var color = "rgb(";
    for (let c = 0; c < 3; c++) {
      color += Math.floor(Math.random() * 256);
      if (c < 2) {
        color += ",";
      }
    }
    color += ")";
    console.log(color);
    while (i < 11) {
      const div = document.createElement("div");
      let textNode = document.createTextNode(`${num} x ${i} = ${num * i}`);
      div.appendChild(textNode);
      div.style.cssText = `border: 1px solid black; color:${color}; font-size:${
        10 + 1.25 * num
      }px`;
      htmlContainer.appendChild(div);
      htmlContainer.style.cssText = `display: grid; grid-template-columns: repeat(10,1fr)`;
      i++;
    }
    if (i == 11) {
      i = 1;
      num++;
    }
    if (num == 11) {
      clearInterval(thisInterval);
    }
  }, 1000);
};
tables();
