// Immediately Invocked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log("DB CONNECTED"); 
})();

( (name) => {
    // unnamed IIFE with parameter
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Bikash');