'use strict';




const chuckSays = document.getElementById('chuckSays');

function get() {
    // STEP 1: FETCH THE DATA
    return fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then(function(response) { // STEP 2: Run the json() method from the Resposne
        return response.json()
    })
    .then(function (data) { //STEP 3: Return the data from the response.json() method
        return data;
    })
}

(function()) {
    
}(); // <<<< Anonymous function syntax // Alows us a new scope outside of global scope that is just tied to doing what we want to do right now