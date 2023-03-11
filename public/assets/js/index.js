// toggle active class on nav items
const navItems = document.querySelectorAll(".nav-item");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
      for (let j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove("active");

        this.classList.add("active");
      }
    });
  }
});

const outerCircle = document.querySelector(".outer_circle");
const kcalCalories = document.querySelector(".kcal-calories");
const kcalUnit = document.querySelector(".kcal-unit");
const bmr = document.querySelector(".bmr");
const bodyFat = document.querySelector(".body-fat");
const bmi = document.querySelector(".bmi");
const tdee = document.querySelector(".tdee");

//age range display
const ageRange = document.getElementById("age-range");
const ageDisplay = document.getElementById("age-display");

ageRange.addEventListener("input", function () {
  let ageValue = ageRange.value;
  ageDisplay.textContent = `I am ${ageValue} years old`;
});

// height range display
const heightRange = document.getElementById("height-range");
const heightDisplay = document.getElementById("height-display");

heightRange.addEventListener("input", function () {
  let heightValue = heightRange.value;
  heightDisplay.textContent = `My height: ${heightValue} cm`;
});

//weight range display
const weightRange = document.getElementById("weight-range");
const weightDisplay = document.getElementById("weight-display");

weightRange.addEventListener("input", function () {
  let weightValue = weightRange.value;
  weightDisplay.textContent = `Current weight: ${weightValue} kg`;
});

//form submit
let formCalc = document.getElementById("form");

formCalc.addEventListener("submit", (e) => {
  e.preventDefault();

  // const system = document.querySelector('input[name="system"]:checked').value;
  const height = document.getElementById("height-range").value;
  heightDisplay.textContent = `Please Select Your Height`;
  const weight = document.getElementById("weight-range").value;
  weightDisplay.textContent = `Please Select Your Weight`;
  const age = document.getElementById("age-range").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const exercise = document.querySelector(
    'input[name="exercise"]:checked'
  ).value;
  // const goal = document.querySelector('input[name="goal"]:checked').value;
  ageDisplay.textContent = `Please Select Your Age`;

  bmr.textContent = "BMR";

  // console.log(height, weight, age, gender, exercise);

  const encodedParams = new URLSearchParams();
  // encodedParams.append("system", system);
  encodedParams.append("height", height);
  encodedParams.append("weight", weight);
  encodedParams.append("age", age);
  encodedParams.append("gender", gender);
  encodedParams.append("exercise", exercise);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "96eeee70d8msh0eacc52ca5d036ap1265aejsnbec8937746ef",
      "X-RapidAPI-Host": "fitness-api.p.rapidapi.com",
    },
    body: encodedParams,
  };

  fetch("https://fitness-api.p.rapidapi.com/fitness", options)
    .then((response) => response.json())
    .then((data) => {
      kcalCalories.textContent = data.basalMetabolicRate.hb.calories.value;
      kcalUnit.textContent = data.basalMetabolicRate.hb.calories.unit[0];

      // console.log(
      //   data.basalMetabolicRate.hb.calories.value,
      //   data.basalMetabolicRate.hb.calories.unit[0]
      // );
    })
    .catch((err) => console.error(err));

  formCalc.reset();
});

// .then((data) => {
//   data.forEach((item) => {
//     const newElement = document.createElement("p");
//     newElement.textContent = "BMR";
//     newElement.classList.add("bmr");
//     outerCircle.appendChild(newElement);
//     const newSpan = document.createElement("span");
//     newSpan.textContent = item.basalMetabolicRate.hb.calories.value;
//     newElement.appendChild(newSpan);
//     const newSpanTwo = document.createElement("span");
//     newSpanTwo.textContent = item.basalMetabolicRate.hb.calories.unit[0];
//     newElement.appendChild(newSpanTwo);
//     bodyFat.innerHTML = `
//     <p>${item.bodyFatPercentage.bmi.unit[0]} ${item.bodyFatPercentage.bmi.value}</p>
//     <p>${item.bodyFatPercentage.bmi.conclusion}</p>
//     `;
//     bmi.innerHTML = `
//     <p>${item.bodyMassIndex.unit} ${item.bodyMassIndex.value}</p>
//     <p>${item.bodyMassIndex.conclusion}</p>
//     `;
//     tdee.innerHTML = `
//     <p>${item.totalDailyEnergyExpenditure.bmi.calories.unit[0]} ${item.totalDailyEnergyExpenditure.bmi.calories.value}</p>
//     `;
//     // console.log("body metabolic rate:", data.bodyFatPercentage.bmi.conclusion)
//   });
// })
// .catch((err) => console.error(err));

// .then((data) => {
//   const keys = Object.keys(data);
//   for (let i = 0; i < keys.length; i++) {
//     const item = data[keys[i]];
//     const newElement = document.createElement("p");
//     newElement.textContent = "BMR";
//     newElement.classList.add("bmr");
//     outerCircle.appendChild(newElement);
//     const newSpan = document.createElement("span");
//     newSpan.textContent = item.basalMetabolicRate.hb.calories.value;
//     newElement.appendChild(newSpan);
//     const newSpanTwo = document.createElement("span");
//     newSpanTwo.textContent = item.basalMetabolicRate.hb.calories.unit[0];
//     newElement.appendChild(newSpanTwo);
//     bodyFat.innerHTML = `
//       <p>${item.bodyFatPercentage.bmi.unit[0]} ${item.bodyFatPercentage.bmi.value}</p>
//       <p>${item.bodyFatPercentage.bmi.conclusion}</p>
//     `;
//     bmi.innerHTML = `
//       <p>${item.bodyMassIndex.unit} ${item.bodyMassIndex.value}</p>
//       <p>${item.bodyMassIndex.conclusion}</p>
//     `;
//     tdee.innerHTML = `
//       <p>${item.totalDailyEnergyExpenditure.bmi.calories.unit[0]} ${item.totalDailyEnergyExpenditure.bmi.calories.value}</p>
//     `;
//   }
// })
// .catch((err) => console.error(err));
