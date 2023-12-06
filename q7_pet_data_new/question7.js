//fetching the data
fetch('../others/pets.json')
    .then(response => response.json())
    .then(petsData => displayPets(petsData))
    .catch(error => console.error('error loading file', error))

// defining displayPets function 
const displayPets = (pets) => {
    var petsContainer = document.getElementById('petsList');
    for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];

    var petDiv = document.createElement('div');
    petDiv.classList.add('pet');
    petDiv.innerHTML = `
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <p>Likes: ${pet.likes}</p>
      <p>Weight: ${pet.weight} kg</p>
    `;

    petsContainer.appendChild(petDiv);
  }
}