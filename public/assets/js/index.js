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

//system
const systemImperial = document.getElementById("imperial").value;
const systemMetric = document.getElementById("metric").value;

// age range display
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

  ageValue = ageRange.value;
  heightValue = heightRange.value;
  weightValue = weightRange.value;

  if (systemImperial === false) {
    systemImperial;
  } else {
    systemMetric;
  }

  console.log(systemImperial, systemMetric);

  formCalc.reset();
});
