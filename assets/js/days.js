const circOne = document.querySelector(".circ-one");
const circTwo = document.querySelector(".circ-two");
const circThree = document.querySelector(".circ-three");
// const thursday = document.querySelector(".thu");
// const friday = document.querySelector(".fri");
// const saturday = document.querySelector(".sat");
// const sunday = document.querySelector(".sun");
const currentCircuit = document.querySelector(".routine");
const prevSet = document.querySelector(".previous-set");
const nextSet = document.querySelector(".next-set");
// const circOneBtn = document.querySelector(".circuit-one");
// const circTwoBtn = document.querySelector(".circuit-two");
// const circThreeBtn = document.querySelector(".circuit-three");
// remove the set nav buttons until the day is clicked
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

//MONDAY
const CircOneWorkoutOne = `<div class="examp-mon">
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
const CircOneWorkoutTwo = `<div class="examp-mon">
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
const CircOneWorkoutThree = `<div class="examp-mon">
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
const circuitTwoWorkoutOne = "circuit two";
const circuitThreeWorkoutOne = "circuit three";


let circNum = 0;
let x = 0;


function displayCircOneWorkout() {
    currentCircuit.innerHTML = CircOneWorkoutOne;
    showNav();
    x = 1;
    circNum = 1;
}

function displayCircTwoWorkout() {
    currentCircuit.innerHTML = circuitTwoWorkoutOne;
}

function displayCircThreeWorkout() {
    currentCircuit.innerHTML = circuitThreeWorkoutOne;
}


circOne.addEventListener("click", displayCircOneWorkout)
circTwo.addEventListener("click", displayCircTwoWorkout)
circThree.addEventListener("click", displayCircThreeWorkout)
// thursday.addEventListener("click", displayThuWorkout)
// friday.addEventListener("click", displayFriWorkout)
// saturday.addEventListener("click", displaySatWorkout)
// sunday.addEventListener("click", displaySunWorkout)
//Nav Buttons
// function createBtn() {
//     let prevBtn = document.createElement("button");
//     prevBtn.innerHTML ="Previous Circuit"
//     prevBtn.classList.add = 'previous-button';
//     document.body.appendChild(prevBtn);
//     let nextBtn = document.createElement("button");
//     nextBtn.innerHTML = "Next Circuit";
//     nextBtn.className = 'next-button';
//     document.body.appendChild(nextBtn);
// }
function funNextSet() {
    switch (x) {
        case 1:
            currentCircuit.innerHTML = CircOneWorkoutTwo;
            x += 1;
            console.log(x);
            break;
        case 2:
            currentCircuit.innerHTML = CircOneWorkoutThree;
            x += 1;
            console.log(x);
            break;
    }
}

function funPrevSet() {
    switch (x) {
        case 1:
            currentCircuit.innerHTML = CircOneWorkoutOne;
            console.log(x);
            break;
        case 2:
            currentCircuit.innerHTML = CircOneWorkoutTwo;
            console.log(x);
            x -= 1;
            break;
        case 3:
            currentCircuit.innerHTML = CircOneWorkoutThree;
            console.log(x);
            x -= 1;
            break;
    }
}

nextSet.addEventListener("click", funNextSet);
prevSet.addEventListener("click", funPrevSet);

// Circuit Switch
// function switchCircuit() {
//     currentCircuit.innerHTML = "";
// }
// circOne = circOneBtn.addEventListener("click", switchCircuit);
// circTwo = circTwoBtn.addEventListener("click", switchCircuit);
// circThree = circThreeBtn.addEventListener("click", switchCircuit);


// index each set then have the fucntion check for that index number, if it's 2 then next will be 3 and previous will be one
//If the next button is clicked then incriment a variable by 1 and if previous is clicked decriment by 1, you can then check 
//what the number is, and write if/else statements
//or add something hidden to each displayed workout that you can check for, if there, you will know which one
//to display when next button or previous button is clicked
//If monday Circiut one is clicked, display that.