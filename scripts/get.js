function get(url) {
    // STEP 1: FETCH THE DATA
    return fetch(url)
    .then(function(response) { // STEP 2: Run the json() method from the Response
        return response.json();
    })
    .then(function (data) { // STEP 3: Return the data from the response.json() method
        return data;
    });
}

// Making an asyncronous call

const getWithAwait = async (url) => {
    const response = await fetch(url); 
    const data = await response.json();
    return data;
}