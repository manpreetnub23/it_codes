const name = document.querySelector("#name");
const age = document.querySelector("#age");
const weight = document.querySelector("#weight");
const type = document.querySelector("#type");
const likes = document.querySelector("#likes");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Data submitted.Check your console...");
  console.log(
    pet(name.value, age.value, weight.value, type.value, likes.value)
  );
});
const pet = (name, age, weight, type, likes) => {
  return {
    name: name,
    age: age,
    weight: weight,
    type: type,
    likes: likes,
  };
};
