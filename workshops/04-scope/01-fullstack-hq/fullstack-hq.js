// Edit the code below
/*let place = 'Planet Earth';

function fullstackHQ(){
  country = 'United States'
  return middleFunction();

  function middleFunction() {
    state = 'New York State';
    return innerFunction();

    function innerFunction() {
      city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}
*/



let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      let city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}