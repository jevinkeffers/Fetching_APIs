'use strict';

const chuckSays = document.getElementById('chuckSays');
const button = document.querySelector ('button');
const submitFormButton = document.getElementById('submitForm');
let category = "dev";

// function getQuote() with lambda syntax
const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

    get(url).then(function(fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value
    });
}

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById("categoryInput");

    get(url).then(function (categoryArray) {
        categoryArray.map(function(category) {
            const categoryOption = document.createElement('option');
            if (category !== 'explicit') {
                categoryOption.value = category;
                categoryOption.text = category;    
                dropdownMenu.append(categoryOption);
            } 
        })
    });
}

refreshQuote.addEventListener('click', function(e) {
    e.preventDefault();
    getQuote();
} 
);

const getChuckQuotes = document.getElementById("getChuckQuotes");

getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    category = userInput.value;
    getQuote(category);
});

(function() {
    getCategories();
    getQuote();
})(); // IIFE


