// A closure is the combination of a function bundled 
// together (enclosed) with references to its surrounding state (the lexical environment).

/* Aasaan bhasha mein: Closure ek function ki "yaaddasht" (memory) hai. 
Agar ek function ke andar dusra function hai, to andar wala 
function apne bahar wale function ke variables ko "yaad" rakhta hai. 
Closure ki wajah se andar wala function apne parent ke variables ko kabhi bhoolta nahi hai,
chahe parent function kaam khatam karke chala hi kyun na gaya ho.*/

/* 1. The "Secret ID" Generator (Private Data)
Sochiye aap ek system bana rahe hain jahan har user ko
ek Unique ID milti hai, lekin koi bahar se us ID counter ko chhed nahi sakta. */

// function createIDGenerator() {
//     let count = 0;

//     return function (){
//         count++;
//         return "USER_ID" + count; 
//     };
// }

// const generate = createIDGenerator();
// console.log(generate()); // Output: USER_ID1
// console.log(generate()); // Output: USER_ID2
// console.log(generate()); // Output: USER_ID3    
// console.log(generate()); // Output: USER_ID4

/* Explanation:

Kya hua? createIdGenerator khatam ho chuka hai, 
lekin generate function ne count variable ko 
apni "memory" (Closure) mein lock kar liya hai.

Fayda: Poore program mein koi bhi count = 0 karke reset nahi kar sakta,
kyunki wo variable sirf generate function ke closure ke andar safe hai.*/


/* 2. The "Personalized Greet" (Function Factory)
Sochiye aap ek aisa function banana chahte hain jo alag-alag languages mein greet kare.*/

/*
function WelcomeMessage(language){
    return function(name){
        console.log(language + ", " + name + "!");
    };
}

const sayHindi = WelcomeMessage("Namaste");
const sayEnglish = WelcomeMessage("Hello");
const saySpanish = WelcomeMessage("Hola");

sayHindi("Alice"); // Output: Namaste, Alice!
sayEnglish("Bob"); // Output: Hello, Bob!
saySpanish("Charlie"); // Output: Hola, Charlie!
sayHindi("David"); // Output: Namaste, David!
*/

/*
Explanation:

Kya hua? Jab humne welcomeMessage("Namaste") call kiya, 
to language variable mein "Namaste" save ho gaya.

Memory: sayHindi function ne us "Namaste" ko hamesha ke liye yaad kar liya. 
Ab jab bhi aap use call karenge, 
use pata hai ki uski language hamesha "Namaste" hi rahegi.
*/

/* 3. The "State" in a Button (Event Listeners)
Real website par closures ka sabse zyada use isi tarah hota hai.*/


/*
function trackClicks(){
    let Clicks = 0;

    document.getElementById("Button").addEventListener("click", function(){
        Clicks++;
        console.log("Button clicked " + Clicks + " times.");
    });
}
trackClicks();

Explanation:

Kya hua? trackClicks function ek baar run hokar khatam ho gaya.

Memory: Lekin jo addEventListener ke andar wala anonymous function hai, 
usne clickCount variable ko Closure mein pakad kar rakha hai.

Result: Jab bhi user button click karega, function ko purani value yaad hogi aur wo usse +1 kar dega. */

