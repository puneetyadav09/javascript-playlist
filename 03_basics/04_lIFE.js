// Immediately Invoked Function Expression (IIFE)

// (1)(2) => 1 is used for definition of function and 2 is used for calling the function
(function greeting(){
    // Named IIFE
    console.log("Hello User");
})();

((name) => {
    console.log(`Arrow Function called ${name}`);
})("Puneet");