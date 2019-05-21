let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,

  currentInventory: function () {
    let valueInventory = 0;
    let keysTacoInc = Object.keys(tacoCatInc);
    
    for(let i = 0; i < keysTacoInc.length; i++) {
      if (typeof this[keysTacoInc[i]] === 'object'){
        let itemsObj = this[keysTacoInc[i]]; 
        for(let item in itemsObj){
          let costObj = itemsObj[item];
          valueInventory += costObj['cost'] * costObj['quantity'];
        }
      }  
    }

    return valueInventory;
  },

  sale: function (order) {
    let price = 0;  
    for (let item in order) {
      let currentItem = order[item];
      let costItem = this[item][currentItem]; //cost of particular item inside the order
      
      price += costItem['cost'];
      costItem['quantity'] --;
    }
    
    this.cash += price;
    return price; 
  },

};

// YOUR CODE BELOW


