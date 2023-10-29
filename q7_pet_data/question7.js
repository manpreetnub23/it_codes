$(() => {
  $("#linker").attr("href", "question7.css");

  $.getJSON("data.json", function (data) {
    var dataDiv = document.querySelector(".card-info");
    var left = document.querySelector(".left");
    outside = document.createElement("div");
    var right = document.querySelector(".right");

    data.map((val, idx) => {
      console.log(data);
      dataDiv.appendChild(document.createTextNode(val.name));
      image = document.createElement("img");
      image.setAttribute("src", val.image);
      dataDiv.appendChild(image);
      button = document.createElement("button");
      button.setAttribute("id", "button" + idx);
      button.appendChild(document.createTextNode("get details"));
      dataDiv.appendChild(button);
      dataDiv.appendChild(document.createElement("br"));
      outside.setAttribute("class", "outside");
      outside.appendChild(dataDiv);
      left.appendChild(outside);
    });

    $("button").on("click", function () {
      try {
        petDetails.remove();
        console.log("removed");
      } catch (error) {
        console.log(error);
      }

      let id = $(this).attr("id");
      petId = parseInt(id.substring(6));
      petDetails = document.createElement("div");
      petDetailsOuter = document.createElement("div");
      const imagee = new Image();
      // imagee = document.createElement("img");
      p1 = document.createElement("p");
      p2 = document.createElement("p");
      p3 = document.createElement("p");
      p4 = document.createElement("p");
      p5 = document.createElement("p");
      petDetails.setAttribute("class", "data-card");
      // hehe = imagee.setAttribute("src", data[petId].image);
      imagee.src=data[petId].image;
      imagee.setAttribute('class','imahe')
      petDetails.appendChild(imagee);
      p1.appendChild(document.createTextNode("name: " + data[petId].name));
      petDetails.appendChild(p1);
      p2.appendChild(document.createTextNode("age : " + data[petId].age));
      petDetails.appendChild(p2);
      p3.appendChild(document.createTextNode("weight : " + data[petId].weight));
      petDetails.appendChild(p3);
      p4.appendChild(document.createTextNode("type : " + data[petId].type));
      petDetails.appendChild(p4);
      p5.appendChild(document.createTextNode("likes : " + data[petId].likes));
      petDetails.appendChild(p5);
      petDetailsOuter.appendChild(petDetails);
      right.appendChild(petDetails);
    });
  });
});
