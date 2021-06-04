monday = document.querySelector(".mon");
tuesday = document.querySelector(".tue");
wednesday = document.querySelector(".wed");
thursday = document.querySelector(".thu");
friday = document.querySelector(".fri");
saturday = document.querySelector(".sat");
sunday = document.querySelector(".sun");
currentCircuit = document.querySelector(".routine");

prevSet = document.querySelector(".previous-set");
nextSet = document.querySelector(".next-set");

function displayWorkout(day){
    document.querySelector(".routine").innerHTML = day;
}
//remove the set nav buttons until the day is clicked
function clearNav(){
    prevSet.style.display = "none";
    nextSet.style.display = "none";
}
clearNav()


function clearMonWorkout() {
    currentSet.style.display = "none";
}
// monCircOne.style.display = "none"
 //MONDAY




// monCircOne = document.querySelector(".mon-circ-one");

// function displayWorkout(){
//     monCircOne.style.display = "block";
// }

//MONDAY


mondayWorkout = `<div class="examp-mon">

<h2 class="align-center">Chest & Triceps</h2>
</div>
<div>
<div class ="align-center">
    <h3>Set One</div>
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

//TUESDAY
tuesdayWorkout = "tues"
;



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

wednesdayWorkout = "<h1>Wed</h1>";
thursdayWorkout = "<h1>Thurs</h1>";
fridayWorkout = "<h1>Fri</h1>";
saturdayWorkout = "<h1>Sat</h1>";
sundayWorkout = "<h1>Sun</h1>";

// function displayMonWorkout() {
//     document.querySelector(".routine").innerHTML = mondayWorkout;
//     prevSet.style.display = "block";
//     nextSet.style.display = "block";
// }
// function displayMonWorkout() {
//     document.querySelector(".routine").innerHTML = mondayWorkout;
//     prevSet.style.display = "block";
//     nextSet.style.display = "block";
// }
function displayMonWorkout() {
    document.querySelector(".routine").innerHTML = mondayWorkout;
    prevSet.style.display = "block";
    nextSet.style.display = "block";
}
function displayTueWorkout() {
    document.querySelector(".routine").innerHTML = tuesdayWorkout;
}

function displayWedWorkout() {
    document.querySelector(".routine").innerHTML = wednesdayWorkout;
}

function displayThuWorkout() {
    document.querySelector(".routine").innerHTML = thursdayWorkout;
}

function displayFriWorkout() {
    document.querySelector(".routine").innerHTML = fridayWorkout;
}

function displaySatWorkout() {
    document.querySelector(".routine").innerHTML = saturdayWorkout;
}

function displaySunWorkout() {
    document.querySelector(".routine").innerHTML = sundayWorkout;
}


monday.addEventListener("click", displayMonWorkout)
tuesday.addEventListener("click", displayTueWorkout)
wednesday.addEventListener("click", displayWedWorkout)
thursday.addEventListener("click", displayThuWorkout)
friday.addEventListener("click", displayFriWorkout)
saturday.addEventListener("click", displaySatWorkout)
sunday.addEventListener("click", displaySunWorkout)


//Monday 2
// function clearMonWorkout(){
//     mondayWorkout.style.display = "none";
// }
// monSet2 = document.querySelector(".monday-set-two");
// console.log(monSet2);
// monSet2.addEventListener("click", clearMonWorkout)


// function removeInactive(){
//     tuesday.style.display = "none"
// }
// monday.addEventListener("click", removeInactive);
// monday.onclick = tuesday.style.display ="none";
// monday.onclick = hideDays()