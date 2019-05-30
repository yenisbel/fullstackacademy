
function searchParty(name, world){
	for(let place in world){
        //let value = world[place];
		if(typeof world[place] === 'string'){
			let person = world[place];
			if(person === name){
				return [place];
			}
		}
		else if(Array.isArray(world[place])){
			let people = world[place];
			if(people.includes(name)){
				return [place];
			}
		}
		else {
			let newObject = world[place];
			let objectResult = searchParty(name, newObject);
			if(objectResult){
				return [place].concat(objectResult);
			}
		}
	}
	return null;
}

