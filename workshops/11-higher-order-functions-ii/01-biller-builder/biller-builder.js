// YOUR CODE BELOW
function billerBuilder(state) {
    switch (state) {
        case 'NY':
            return function(price) {
                return price * 1.03 * 1.04; 
            } 
        case 'NJ':
            return function(price) {
                return price * 1.05 * 1.06625; 
            } 
    };
}

// let newYorkBiller = billerBuilder('NY');
// newYorkBiller(100);

//result(100); 