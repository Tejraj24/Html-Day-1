/* - **What is Object Destructuring?**
    
    Object destructuring is a new way to extract elements from an object or an array.
    
    - **Object destructuring:** Before ES6 version:
    
    ```jsx
    const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
    }
    
    const classStrength = classDetails.strength;
    const classBenches = classDetails.benches;
    const classBlackBoard = classDetails.blackBoard;
    ```
    
    The same example using object destructuring:
    
    ```jsx
    const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
    }
    
    const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;
    
    console.log(classStrength); // Outputs 78
    console.log(classBenches); // Outputs 39
    console.log(classBlackBoard); // Outputs 1
    ```
    
    As one can see, using object destructuring we have extracted all the elements inside an object in one line of code. If we want our new variable to have the same name as the property of an object we can remove the colon:
    
    ```jsx
    const {strength:strength} = classDetails;
    // The above line of code can be written as:
    const {strength} = classDetails;
    ```
    
    - **Array destructuring:** Before ES6 version:
    
    ```jsx
    const arr = [1, 2, 3, 4];
    const first = arr[0];
    const second = arr[1];
    const third = arr[2];
    const fourth = arr[3];
    ```
    
    The same example using object destructuring:
    
    ```jsx
    const arr = [1, 2, 3, 4];
    const [first,second,third,fourth] = arr;
    console.log(first); // Outputs 1
    console.log(second); // Outputs 2
    console.log(third); // Outputs 3
    console.log(fourth); // Outputs 4
    ``` */