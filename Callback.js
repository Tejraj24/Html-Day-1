/* Callback Functions  is a function that is passed as an argument to 
another function and is executed at a later time. 
And the function which accept this argument is called a "higher-order function".
*/
// example: 1  

function higherOrderFunction(callback) {
    // Some code here
    callback(); // Execute the callback function
}

function myCallback() {
    console.log("Callback executed!");
}

higherOrderFunction(myCallback);

// example: 2

function higherOrderFunction(callback) {
    // Some code here
    callback("Hello, world!"); // Execute the callback function with an argument
}

function myCallback(message) {
    console.log(message);
}

higherOrderFunction(myCallback); // Output: "Hello, world!"

// example: 3 real world example
function fetchData(callback) {
    // Simulate an API call
    setTimeout(() => {
        const data = "Fetched data";
        callback(data);
    }, 1000);
}

function handleData(data) {
    console.log(data);
}

fetchData(handleData);  // Output: "Fetched data" (after 1 second)

// example: 4 error handling with callbacks
function fetchDataWithErrorHandling(callback, errorCallback) {
    // Simulate an API call
    setTimeout(() => {
        const data = "Fetched data";
        const hasError = false; // Simulate an error condition

        if (hasError) {
            errorCallback("An error occurred while fetching data.");
        } else {
            callback(data);
        }
    }, 1000);
}

function handleData(data) {
    console.log(data);
}

function handleError(error) {
    console.error(error);
}

fetchDataWithErrorHandling(handleData, handleError); // Output: "Fetched data" (after 1 second) or "An error occurred while fetching data." (if an error occurs)

// example 5 : Multiple callbacks 

function higherOrderFunction(callback1, callback2) {
    // Some code here
    callback1();
    callback2();
}

function myCallback1() {
    console.log("Callback 1 executed!");
}

function myCallback2() {
    console.log("Callback 2 executed!");
}

higherOrderFunction(myCallback1, myCallback2); // Output: "Callback 1 executed!" and "Callback 2 executed!"

