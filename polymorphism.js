/*
Polymorphism is an OOP concept that allows 
single interface to represent different underlying forms. 
In simple terms, it means that 'one name, many forms',
where different objects can  respond to the same method call in their own specific way.

"JavaScript mostly Runtime Polymorphism support karti hai through Method Overriding, kyunki isme 
method overloading (static) directly supported nahi hoti (arguments object ya rest parameters ke bina)."

*/
/*
 // example 1 :
// Parent Class
class Gun {
    fire() {
        return "Generic gun sound...";
    }
}

// Child Class: Pistol
class Pistol extends Gun {
    fire() {
        return "Pistol: Dishkyoon! 🔫";
    }
}

// Child Class: AK47
class AK47 extends Gun {
    fire() {
        return "AK47: Trrr-Trrr-Trrr! 🔫🔥";
    }
}

// Child Class: Shotgun
class Shotgun extends Gun {
    fire() {
        return "Shotgun: DHAMMM! 💥";
    }
}

// --- Polymorphism ka Use ---

const myGuns = [new Pistol(), new AK47(), new Shotgun()];

myGuns.forEach((gun) => {
    // Yahan 'gun' koi bhi ho sakti hai, lekin JS sahi wala fire() chalayega
    console.log(gun.fire());
});
*/

// example 2 : real world scenario

class Animal {
    makeSound() {
        return "Some generic animal sound...";
    }
}

class Dog extends Animal {
    makeSound() {
        return "Dog: Woof! 🐶";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Cat: Meow! 🐱";
    }
}

class Bird extends Animal {
    makeSound() {
        return "Bird: Tweet! 🐦";
    }
}


function demonstratePolymorphism() {
    const animals = [new Dog(), new Cat(), new Bird()];
    animals.forEach((animal) => {
        console.log(animal.makeSound());
    });
}

demonstratePolymorphism();