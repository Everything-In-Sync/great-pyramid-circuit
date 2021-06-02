monday = document.querySelector(".mon");
tuesday = document.querySelector(".tue");
wednesday = document.querySelector(".wed");
thursday = document.querySelector(".thu");
friday = document.querySelector(".fri");
saturday = document.querySelector(".sat");
sunday = document.querySelector(".sun");

mondayWorkout = `
<div class="examp-mon">
<h2 class="align-center">Chest & Triceps</h2>
</div>
<div class="row">
<div class="column">
    <div class="left-column">
        <p>
            test
        </p>
    </div>
</div>
<div class="column">
    <div class="right-column">
        <p>
            hello
        </p>
    </div>
</div>
</div>
                `;


tuesdayWorkout = "<h1>Tues</h1>";
wednesdayWorkout = "<h1>Wed</h1>";
thursdayWorkout = "<h1>Thurs</h1>";
fridayWorkout = "<h1>Fri</h1>";
saturdayWorkout = "<h1>Sat</h1>";
sundayWorkout = "<h1>Sun</h1>";

// onclick transitions? slowly display the workout

function displayMonWorkout() {
    document.querySelector(".routine").innerHTML = mondayWorkout;
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





// function removeInactive(){
//     tuesday.style.display = "none"
// }
// monday.addEventListener("click", removeInactive);
// monday.onclick = tuesday.style.display ="none";
// monday.onclick = hideDays()