const monday = document.querySelector(".mon");
const tuesday = document.querySelector(".tue");
const wednesday = document.querySelector(".wed");
const thursday = document.querySelector(".thu");
const friday = document.querySelector(".fri");
const saturday = document.querySelector(".sat");
const sunday = document.querySelector(".sun");
const currentCircuit = document.querySelector(".routine");




let prevSet = document.querySelector(".previous-set");
let nextSet = document.querySelector(".next-set");


// remove the set nav buttons until the day is clicked
function clearNav() {
    prevSet.style.display = "none";
    nextSet.style.display = "none";
}
clearNav()

function showNav() {
    prevSet.style.display = "inline";
    nextSet.style.display = "inline";
}


function clearMonWorkout() {
    currentSet.style.display = "none";
}
// monCircOne.style.display = "none"


//MONDAY


const mondayWorkout = `<div class="examp-mon">

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
const mondayWorkoutTwo = `<div class="examp-mon">

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
const mondayWorkoutThree = `<div class="examp-mon">

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
//TUESDAY




// prevSet = document.querySelector(".previous-set");
// nextSet = document.querySelector(".next-set");

// function clearNav(){
//     prevSet.style.display = "none";
//     nextSet.style.display = "none";
// }
// setTwo = document.querySelector(".set-two")
// setTwo.addEventListener("click", clearMonWorkout)

// monSetTwo = document.querySelector(".monday-set-two")
// monday.addEventListener("click", clearMonWorkout)


// monday.addEventListener("click", log)


//  mondaySetTwo = document.querySelector(".monday-set-two");
//  mondaySetTwo.addEventListener("click", fuck);
const tuesdayWorkout = "tues";
const wednesdayWorkout = "<h1>Wed</h1>";
const thursdayWorkout = "<h1>Thurs</h1>";
const fridayWorkout = "<h1>Fri</h1>";
const saturdayWorkout = "<h1>Sat</h1>";
const sundayWorkout = "<h1>Sun</h1>";

function displayMonWorkout() {
    // document.querySelector(".routine").innerHTML = mondayWorkout;
    currentCircuit.innerHTML = mondayWorkout;
    showNav()
    let setIndex = document.querySelector(".index");
    let setIndexInner = setIndex.innerHTML;
    console.log(setIndexInner);
    // if (setIndex.innerHTML = "Set One"){
    //     document.querySelector(".previous-set").style.display = "none";
    // }
}

function displayTueWorkout() {
    currentCircuit.innerHTML = tuesdayWorkout;
}

function displayWedWorkout() {
    currentCircuit.innerHTML = wednesdayWorkout;
}

function displayThuWorkout() {
    currentCircuit.innerHTML = thursdayWorkout;
}

function displayFriWorkout() {
    currentCircuit.innerHTML = fridayWorkout;
}

function displaySatWorkout() {
    currentCircuit.innerHTML = saturdayWorkout;
}

function displaySunWorkout() {
    currentCircuit.innerHTML = sundayWorkout;
}


monday.addEventListener("click", displayMonWorkout)
tuesday.addEventListener("click", displayTueWorkout)
wednesday.addEventListener("click", displayWedWorkout)
thursday.addEventListener("click", displayThuWorkout)
friday.addEventListener("click", displayFriWorkout)
saturday.addEventListener("click", displaySatWorkout)
sunday.addEventListener("click", displaySunWorkout)




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
// let setIndex = document.querySelector(".index");
// let setIndexInner = setIndex.innerHTML;
// console.log(setIndexInner);
let test = document.querySelector(".text");
test1 = test.innerHTML;
console.log(test1);


let x = 0;
function funNextSet() {
    if (x = 0) {
        currentCircuit.innerHTML = mondayWorkoutTwo;
        x + 1;
        console.log(x);
    } else if (x = 1) {
        currentCircuit.innerHTML = mondayWorkoutThree;
        console.log(x);
        x + 2;

    }

}
// if (setIndex = "Set Two"){
//     currentCircuit.innerHTML = mondayWorkoutThree;
// }
// function funNextSet() {
//     switch (x) {
//         case 0:
//             currentCircuit.innerHTML = mondayWorkoutTwo;
//             x + 1;
//             console.log(x);
//             break;
//         case 1:
//             currentCircuit.innerHTML = mondayWorkoutThree;
//             console.log(x);
//     }
// }


nextSet.addEventListener("click", funNextSet)

// nextSet.addEventListener("click", funNextSet())
// nextSet.addEventListener("click", funPrevSet)

// index each set then have the fucntion check for that index number, if it's 2 then next will be 3 and previous will be one
//If the next button is clicked then incriment a variable by 1 and if previous is clicked decriment by 1, you can then check 
//what the number is, and write if/else statements

//or add something hidden to each displayed workout that you can check for, if there, you will know which one
//to display when next button or previous button is clicked

//If monday Circiut one is clicked, display that.