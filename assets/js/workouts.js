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
function showNav() {
    prevSet.style.display = "inline";
    nextSet.style.display = "inline";
};
//Circuits
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
        "value": 8,
        "set": "Set One",
        "workout1": ["Pec Deck Flys", "12 Reps at 100 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "12 Reps at 45 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 9,
        "set": "Set Two",
        "workout1": ["Pec Deck Flys", "10 Reps at 120 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "10 Reps at 55 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 10,
        "set": "Set Three",
        "workout1": ["Pec Deck Flys", "7 Reps at 135 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "6 Reps at 65 lbs"],
        "abs": ["Planks", "60 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 11,
        "set": "Set Four",
        "workout1": ["Pec Deck Flys", "2 Reps at 155 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "3 Reps at 75 lbs"],
        "abs": ["Planks", "30 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 12,
        "set": "Set Five",
        "workout1": ["Pec Deck Flys", "6 Reps at 135 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "7 Reps at 65 lbs"],
        "abs": ["Planks", "30 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 13,
        "set": "Set Six",
        "workout1": ["Pec Deck Flys", "9 Reps at 120 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "10 Reps at 55 lbs"],
        "abs": ["Planks", "20 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
    {
        "value": 14,
        "set": "Set Seven",
        "workout1": ["Pec Deck Flys", "12 Reps at 100 lbs"],
        "workout2": ["Cable Tricep Pulldowns", "12 Reps at 45 lbs"],
        "abs": ["Planks", "20 Seconds"],
        "cardio": ["Jog in Place", "60 Seconds"],
    },
]
let circuitThree = [{
        "value": 16,
        "set": "Set One",
        "workout1": ["Pushup Rows", "12 Reps at 20 lbs"],
        "workout2": ["Dips", "12 Reps"],
        "abs": ["Yoga Ball Situps", "50 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 17,
        "set": "Set Two",
        "workout1": ["Pushup Rows", "9 Reps at 25 lbs"],
        "workout2": ["Dips", "10 Reps"],
        "abs": ["Yoga Ball Situps", "40 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 18,
        "set": "Set Three",
        "workout1": ["Pushup Rows", "7 Reps at 30 lbs"],
        "workout2": ["Dips", "8 Reps"],
        "abs": ["Yoga Ball Situps", "30 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 19,
        "set": "Set Four",
        "workout1": ["Pushup Rows", "3 Reps at 35 lbs"],
        "workout2": ["Dips", "3 Reps"],
        "abs": ["Yoga Ball Situps", "20 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 20,
        "set": "Set Five",
        "workout1": ["Pushup Rows", "7 Reps at 30 lbs"],
        "workout2": ["Dips", "10 Reps"],
        "abs": ["Yoga Ball Situps", "20 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 21,
        "set": "Set Six",
        "workout1": ["Pushup Rows", "10 Reps at 25 lbs"],
        "workout2": ["Dips", "10 Reps"],
        "abs": ["Yoga Ball Situps", "15 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
    {
        "value": 22,
        "set": "Set Seven",
        "workout1": ["Pushup Rows", "12 Reps at 20 lbs"],
        "workout2": ["Dips", "12 Reps"],
        "abs": ["Yoga Ball Situps", "10 Reps"],
        "cardio": ["High Knees", "50 Reps"],
    },
]
//Setting the initial value of the numerical variables that will increment
let circNum = 0;
let x = 0;
//Watching for the circuit buttons to be clicked
circOne.addEventListener("click", displayCircOneWorkout)
circTwo.addEventListener("click", displayCircTwoWorkout)
circThree.addEventListener("click", displayCircThreeWorkout)
//The actions that happen when the previous and next workout buttons are clicked
function funNextSet() {
    if (x >= 0 && x <= 5) { //This stops x from incrementing once it's value is bellow or above the "value" in the circuit arrays
        x += 1; // increments x every time next button is clicked
        circuitOne.forEach(classify) // Loops through the first circuit and runs the classify function
        function classify(element) { // Sets the object values to variables so I can interpolate into the html template
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
        return x;
    } else if (x >= 7 && x <= 13) { //These numbers connect to the "value" values in each object. Same as above, preventing incrementing outside of the range
        x += 1;
        circuitTwo.forEach(classify)
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
        return x;
    } else if (x >= 15 && x <= 21) {
        x += 1;
        circuitThree.forEach(classify)
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
        return x;
    } else {
        return x;
    }
}
function funPrevSet() { //Same as above except this is decrementing whenever the previous workout button is clicked
    if (x >= 1 && x <= 6) {
        x -= 1;
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
        return x;
    } else if (x >= 9 && x <= 14) {
        x -= 1;
        circuitTwo.forEach(classify)
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
        return x;
    } else if (x >= 17 && x <= 22) {
        x -= 1;
        circuitThree.forEach(classify)
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
        return x;
    } else {
        return x;
    }
}
nextSet.addEventListener("click", funNextSet);
prevSet.addEventListener("click", funPrevSet);
function displayCircOneWorkout() { //These display the initial circuits
    x = 0;
    showNav();
    circNum = 1;
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
}
function displayCircTwoWorkout() {
    x = 8;
    showNav();
    circNum = 2;
    circuitTwo.forEach(classify)
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
}
function displayCircThreeWorkout() {
    x = 16;
    showNav();
    circNum = 3;
    circuitThree.forEach(classify)
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
}