// YOUR CODE BELOW
function whosASpecial(arryPets) {
    let stringPets = '';
    arryPets.forEach(element => {
        stringPets += `${element['name']} the ${element['species']} is very special! `
    });
    return stringPets.slice(0, -1);
}