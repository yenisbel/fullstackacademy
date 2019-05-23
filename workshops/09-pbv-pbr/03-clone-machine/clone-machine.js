// YOUR CODE BELOW
function cloneMachine(parentAnimal) {
    let clone = {
        name: parentAnimal.name + 'Clone',
        species: parentAnimal.species,
        offspring: []
      };
      // push the name of the clone into the parent's offspring array
      parentAnimal.offspring.push(clone.name);
      return clone;

}