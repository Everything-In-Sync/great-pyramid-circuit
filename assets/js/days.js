const circOne = document.querySelector(".circ-one");
const circTwo = document.querySelector(".circ-two");
const circThree = document.querySelector(".circ-three");
const currentCircuit = document.querySelector(".routine");
const prevSet = document.querySelector(".previous-set");
const nextSet = document.querySelector(".next-set");

function clearNav() {
    prevSet.style.display = "none";
    nextSet.style.display = "none";
}
clearNav()

function clearCircuit() {
    circOne.style.display = "none";
    circTwo.style.display = "none";
    circThree.style.display = "none";
}

function showNav() {
    prevSet.style.display = "inline";
    nextSet.style.display = "inline";
}

function hideNext() {
    nextSet.style.display = "none";
}

function hidePrev() {
    prevSet.style.display = "none";
}
//MONDAY
const circOneWorkoutOne = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class= "index">Set One</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            12 Reps at 140 lbs
            <br>
            50 Reps
            <br>
            12 reps at 35 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutTwo = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Two</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            10 Reps at 155 lbs
            <br>
            30 Reps
            <br>
            10 reps at 40 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutThree = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Three</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            6 Reps at 170 lbs
            <br>
            20 Reps
            <br>
            8 reps at 45 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutFour = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Four</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            3 Reps at 180 lbs
            <br>
            20 Reps
            <br>
            3 reps at 50 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutFive = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Five</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            6 Reps at 170 lbs
            <br>
            20 Reps
            <br>
            8 reps at 45 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutSix = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Six</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            10 Reps at 155 lbs
            <br>
            15 Reps
            <br>
            10 reps at 40 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circOneWorkoutSeven = `<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3 class = "index">Set Seven</div>
<div>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            Bench Press
            <br>
            Hanging Leg Raises
            <br>
            Standing Tricep Extensions
            <br>
            Jumping Jacks
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            12 Reps at 140 lbs
            <br>
            10 Reps
            <br>
            12 reps at 35 lbs
            <br>
            50
        </p>
    </div>
</div>
</div>
`;
const circTwoWorkoutOne = "circuit two";
const circThreeWorkoutOne = "circuit three";
let circNum = 0;
let x = 0;

function displayCircOneWorkout() {
    currentCircuit.innerHTML = circOneWorkoutOne;
    showNav();
    x = 1;
    circNum = 1;
    console.log(x);
}

function displayCircTwoWorkout() {
    currentCircuit.innerHTML = circTwoWorkoutOne;
    showNav()
    x = 8;
    circNum = 2;
    console.log(x);
}

function displayCircThreeWorkout() {
    currentCircuit.innerHTML = circThreeWorkoutOne;
    showNav()
    // x = 3;
    circNum = 3;
    console.log(x);
}
circOne.addEventListener("click", displayCircOneWorkout)
circTwo.addEventListener("click", displayCircTwoWorkout)
circThree.addEventListener("click", displayCircThreeWorkout)

function funNextSet() {
    switch (x) {
        case 1:
            currentCircuit.innerHTML = circOneWorkoutTwo;
            x += 1;
            console.log(x);
            break;
        case 2:
            currentCircuit.innerHTML = circOneWorkoutThree;
            x += 1;
            console.log(x);
            break;
        case 3:
            currentCircuit.innerHTML = circOneWorkoutFour;
            x += 1;
            console.log(x);
            break;
        case 4:
            currentCircuit.innerHTML = circOneWorkoutFive;
            x += 1;
            console.log(x);
            break;
        case 5:
            currentCircuit.innerHTML = circOneWorkoutSix;
            x += 1;
            console.log(x);
            break;
        case 6:
            currentCircuit.innerHTML = circOneWorkoutSeven;
            x += 1;
            console.log(x);
            break;
    }
}

function funPrevSet() {
    switch (x) {
        case 1:
            currentCircuit.innerHTML = circOneWorkoutOne;
            console.log(x);
            break;
        case 2:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutOne;
            console.log(x);
            break;
        case 3:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutTwo;
            console.log(x);
            break;
        case 4:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutThree;
            console.log(x);
            break;
        case 5:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutFour;
            console.log(x);
            break;
        case 6:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutFive;
            console.log(x);
            break;
        case 7:
            x -= 1;
            currentCircuit.innerHTML = circOneWorkoutSix;
            console.log(x);
            break;
    }
};
nextSet.addEventListener("click", funNextSet);
prevSet.addEventListener("click", funPrevSet);
console.log(x);

//a map with an index and the content variables 
//As the user clicks next or prev it increments, then saves the new number to the variable
//then checks for the coresponding number in the map
//then displays that content to the dom
//without a switch statement so it would pull directly from the map 
//so a function that would do what...displayContent (x){if x = map index then display content}

//the event listener would listen for the click, then increment every time there is a click
// if x = y show content