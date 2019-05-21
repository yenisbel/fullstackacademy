let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW

function petSounds(animalName, countryName) {
  for (let i = 0; i < animalNoises.length; i++) {
    //iterate trough all array Animal Noises to find Information Obj match with animalName input
    // let objAnimal = animalNoises[i];
    // let allAnimalInfor = objAnimal[animalName];
    let allAnimalInfor = animalNoises[i][animalName];
    if (allAnimalInfor){
      animal = animalName[0].toUpperCase() + animalName.slice(1) + "s";
      sound = allAnimalInfor[countryName];
    }
  }     
  return `${animal} in ${countryName} say ${sound}`;
}
