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
};
let circuitOne = [{
        "value": 0,
        "set": "Set One",
        "workout1": ["Bench Press", "12 Reps at 140 lbs"],
        "workout2": ["Standing Tricep Extensions", "12 Reps at 35 lbs"],
        "abs": ["Hanging Leg Raises", "50 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 1,
        "set": "Set Two",
        "workout1": ["Bench Press", "10 Reps at 155 lbs"],
        "workout2": ["Standing Tricep Extensions", "10 Reps at 40 lbs"],
        "abs": ["Hanging Leg Raises", "40 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 2,
        "set": "Set Three",
        "workout1": ["Bench Press", "6 Reps at 170 lbs"],
        "workout2": ["Standing Tricep Extensions", "8 Reps at 45 lbs"],
        "abs": ["Hanging Leg Raises", "30 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 3,
        "set": "Set Four",
        "workout1": ["Bench Press", "3 Reps at 180 lbs"],
        "workout2": ["Standing Tricep Extensions", "3 Reps at 50 lbs"],
        "abs": ["Hanging Leg Raises", "20 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 4,
        "set": "Set Five",
        "workout1": ["Bench Press", "6 Reps at 170 lbs"],
        "workout2": ["Standing Tricep Extensions", "8 Reps at 45 lbs"],
        "abs": ["Hanging Leg Raises", "15 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 5,
        "set": "Set Six",
        "workout1": ["Bench Press", "10 Reps at 155 lbs"],
        "workout2": ["Standing Tricep Extensions", "10 Reps at 40 lbs"],
        "abs": ["Hanging Leg Raises", "10 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
    {
        "value": 6,
        "set": "Set Seven",
        "workout1": ["Bench Press", "12 Reps at 140 lbs"],
        "workout2": ["Standing Tricep Extensions", "12 Reps at 35 lbs"],
        "abs": ["Hanging Leg Raises", "5 Reps"],
        "cardio": ["Jumping Jacks", "50 Reps"],
    },
];
let circuitTwo = [{
        "value": 0,
        "set": "Set One",
        "workout1": ["Pec Deck Flys", "12 Reps at 100 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "12 Reps at 45 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 1,
        "set": "Set Two",
        "workout1": ["Pec Deck Flys", "10 Reps at 120 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "10 Reps at 55 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 2,
        "set": "Set Three",
        "workout1": ["Pec Deck Flys", "7 Reps at 135 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "6 Reps at 65 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 3,
        "set": "Set Four",
        "workout1": ["Pec Deck Flys", "2 Reps at 155 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "3 Reps at 75 lbs"],
        "abs": ["Planks", "30 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 4,
        "set": "Set Five",
        "workout1": ["Pec Deck Flys", "6 Reps at 135 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "7 Reps at 65 lbs"],
        "abs": ["Planks", "30 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 5,
        "set": "Set Six",
        "workout1": ["Pec Deck Flys", "9 Reps at 120 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "10 Reps at 55 lbs"],
        "abs": ["Planks", "20 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 6,
        "set": "Set Seven",
        "workout1": ["Pec Deck Flys", "12 Reps at 100 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "12 Reps at 45 lbs"],
        "abs": ["Planks", "20 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
]
const circTwoWorkoutOne = "circuit two";
const circThreeWorkoutOne = "circuit three";
let circNum = 0;
let x = 0;
//On click this will display the circuit that is clicked (layer 1)
function displayCircOneWorkout() {
    x = 0;
    currentCircuit.innerHTML = htmlTemplate;
    showNav();
    circNum = 1;
    console.log(x);
    console.log(circNum);
}
function displayCircTwoWorkout() {
    x = 7;
    currentCircuit.innerHTML = "Circuit Two";
    showNav()

    circNum = 2;
    console.log(x);
    console.log(circNum);
}
function displayCircThreeWorkout() {
    currentCircuit.innerHTML = "Circuit Three";
    showNav()
    circNum = 3;
    console.log(x);
    console.log(circNum);
}

circOne.addEventListener("click", displayCircOneWorkout)
circTwo.addEventListener("click", displayCircTwoWorkout)
circThree.addEventListener("click", displayCircThreeWorkout)
function funNextSet() {
    if (x >= 0 && x <= 5) {
        x += 1;
        console.log(x)
        circuitOne.forEach(classify)
        function classify(element) {
            if (x === element.value) {
                set = element.set;
                workout1 = element.workout1;
                workout2 = element.workout2;
                abs = element.abs;
                cardio = element.cardio;
            }
        }
        let htmlTemplate = `
            <div class="examp-mon">
                <h2 class="align-center">Chest & Triceps</h2>
            </div>
            <div class ="align-center">
                <h3 class= "index">${set}</h3>
            <div>
            <div class="row">
                <div class="column">
                    <div class="left-column">
                        <p>
                            ${workout1[0]}
                            <br>
                            ${abs[0]}
                            <br>
                            ${workout2[0]}
                            <br>
                            ${cardio[0]}
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="right-column">
                        <p>
                            ${workout1[1]}
                            <br>
                            ${abs[1]}
                            <br>
                            ${workout2[1]}
                            <br>
                            ${cardio[1]}
                        </p>
                    </div>
                </div>
            </div>
`;
        currentCircuit.innerHTML = htmlTemplate;
        console.log(workout1)
        return x;
    } else {
        return x;
    }
}
function funPrevSet() {
    if (x >= 1 && x <= 6) {
        x -= 1;
        console.log(x)
        circuitOne.forEach(classify)
        function classify(element) {
            if (x === element.value) {
                set = element.set;
                workout1 = element.workout1;
                workout2 = element.workout2;
                abs = element.abs;
                cardio = element.cardio;
            }
        }
        let htmlTemplate = `
            <div class="examp-mon">
                <h2 class="align-center">Chest & Triceps</h2>
            </div>
            <div class ="align-center">
                <h3 class= "index">${set}</h3>
            <div>
            <div class="row">
                <div class="column">
                    <div class="left-column">
                        <p>
                            ${workout1[0]}
                            <br>
                            ${abs[0]}
                            <br>
                            ${workout2[0]}
                            <br>
                            ${cardio[0]}
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="right-column">
                        <p>
                            ${workout1[1]}
                            <br>
                            ${abs[1]}
                            <br>
                            ${workout2[1]}
                            <br>
                            ${cardio[1]}
                        </p>
                    </div>
                </div>
            </div>
`;
        currentCircuit.innerHTML = htmlTemplate;
        console.log(workout1)
        return x;
    } else {
        return x;
    }
}
nextSet.addEventListener("click", funNextSet);
prevSet.addEventListener("click", funPrevSet);
console.log(x);
circuitOne.forEach(classify)
function classify(element) {
    if (x === element.value) {
        set = element.set;
        workout1 = element.workout1;
        workout2 = element.workout2;
        abs = element.abs;
        cardio = element.cardio;
    }
}
console.log(workout1)
let htmlTemplate = `
<div class="examp-mon">
    <h2 class="align-center">Chest & Triceps</h2>
</div>
<div class ="align-center">
    <h3 class= "index">${set}</h3>
<div>
<div class="row">
    <div class="column">
        <div class="left-column">
            <p>
                ${workout1[0]}
                <br>
                ${abs[0]}
                <br>
                ${workout2[0]}
                <br>
                ${cardio[0]}
            </p>
        </div>
    </div>
    <div class="column">
        <div class="right-column">
            <p>
                ${workout1[1]}
                <br>
                ${abs[1]}
                <br>
                ${workout2[1]}
                <br>
                ${cardio[1]}
            </p>
        </div>
    </div>
</div>
`;