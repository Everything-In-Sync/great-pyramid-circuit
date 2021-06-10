// Started with the Mifflin St. Jeor equation, 


// Calculate basal metabolic rate (BMR), or the calories your body burns 
// simply by being alive. 

// For men: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 (kcal / day) 
// For women: 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) -161 (kcal / day) 

// Then, this BMR count is multiplied, depending on your activity level: 
// Sedentary = 1.2 
// Lightly active = 1.375 
// Moderately active = 1.550 
// Very active = 1.725 
// Extra active = 1.9 
// The calorie count is then adjusted based on your goal: 
// Weight loss: Reduce by 10-20% 
// Weight gain: Add 500 calories 
// Weight maintenance: Unchanged 
// This calorie count is split into macronutrient percentages 
// in the following ratios, based on splits commonly recommended by 
// our nutrition experts for muscle gain, weight loss, and weight maintenance. 

// (Yes, weight gain and maintenance are the same ratio, 
// but the calories and macros are different.) 
// Weight loss: 40/40/20 (carbs/protein/fats) 
// Weight gain: 40/30/30 
// Weight maintenance: 40/30/30 
// Finally, your protein intake comes from applying those percentages 
// to your daily calorie number. 
// Each gram of protein is "worth" 4 calories. 
// If you'd like to see your complete macros rather than just protein, 
// use our full macro calculator. 

// lb to kg divide by to then take off 1/10

//need to make sure they enter valid heights, weights, ages
// calculateBtn = document.querySelector(".calculate-btn")
// calculateBtn.addEventListener("click", getInfo);

// function getInfo(){
//     let sex = document.querySelector(".sex").value;
//     console.log(sex)
//     let age = document.querySelector(".age").value;
//     //if age is < or > x then placeholder = please enter valid age, idfk
//     console.log(age);  
//     let feet = document.querySelector(".feet").value;
//     console.log(feet)
//     let inches = document.querySelector(".inches").value;
//     console.log(inches)
//     let weight = document.querySelector(".weight").value;
//     console.log(weight)
//     let goal = document.querySelector(".goal").value;
//     console.log(goal)
//     let activity = document.querySelector(".activity").value;
//     console.log(activity)
// }
// let sex = "";
// let age = 0;
// let feet = 0;
// let inches = 0;
// let weight = 0;
// let goal = "";
// let activity = "";
// function getInfo(){
//     sex = document.querySelector(".sex").value;
//     // console.log(sex)
//     age = document.querySelector(".age").value;
//     //if age is < or > x then placeholder = please enter valid age, idfk
//     // console.log(age);  
//     feet = document.querySelector(".feet").value;
//     // console.log(feet)
//     inches = document.querySelector(".inches").value;
//     // console.log(inches)
//     weight = document.querySelector(".weight").value;
//     // console.log(weight)
//     goal = document.querySelector(".goal").value;
//     // console.log(goal)
//     activity = document.querySelector(".activity").value;
//     // console.log(activity)
// }
// getInfo()
// console.log(weight)
let info = {};
let calculateBtn = document.querySelector(".calculate-btn");
calculateBtn.addEventListener("click", getInfo);

function getSex() {
  let sex = document.querySelector(".sex").value;
  return sex
}

function getAge() {
  let age = document.querySelector(".age").value;
  return age
}

function getFeet() {
  let feet = document.querySelector(".feet").value;
  return feet
}

function getInches() {
  let inches = document.querySelector(".inches").value;
  return inches
}

function getWeight() {
  let weight = document.querySelector(".weight").value;
  return weight;
}

function getGoal() {
  let goal = document.querySelector(".goal").value;
  return goal
}

function getActivity() {
  let activity = document.querySelector(".activity").value;
  return activity
}

function getInfo(){
  info = {
    sex: getSex(),
    age: getAge(),
    feet: getFeet(),
    inches: getInches(),
    weight: getWeight(),
    goal: getGoal(),
    activity: getActivity()
  };

  console.log(info.sex)
}
