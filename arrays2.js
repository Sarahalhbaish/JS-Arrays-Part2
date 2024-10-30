
// /* --------- Task 1 --------- */


function isArrayLengthOdd(numbers) {
    const odd = numbers.length % 2;
    if (odd == 1){
        console.log("true");
    } else {
        console.log("false");
    }
  } 

  isArrayLengthOdd([1,2,3]);
  isArrayLengthOdd([1,2]);


//   /* --------- Task 2 --------- */


  function isArrayLengthEven(numbers) {
    const odd = numbers.length % 2;
    if (odd !== 1){
        console.log("true");
    } else {
        console.log("false");
    }
  } 

  isArrayLengthEven([1,2,3]);
  isArrayLengthEven([1,2]);


/* --------- Task 3 --------- */


function addLailaToArray(instructors) {
    const num = instructors.length;
    instructors[num] = "Laila";
    return(instructors);
  }
  
  console.log(addLailaToArray(["Mshary", "Hasan"]));


/* --------- Task 4 --------- */


function eliminateTeam(teams){
    return(teams.pop());
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));


/* --------- CHALLENGE 1 --------- */


function secondHalfOfArrayIfItIsEven(fruits) {
    if (fruits.length % 2 === 0) {
        const mid = fruits.length / 2; 
        return fruits.slice(mid); 
    } else {
        return []; 
    }
}

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));


/* --------- CHALLENGE 2 --------- */


function youGottaCalmDown(shout){
    const exclamationIndex = shout.indexOf('!');

    if (exclamationIndex === -1) {
        return shout;
    } else {
        return shout.slice(0, exclamationIndex + 1);
    }
}

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Taylor Schwift!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));