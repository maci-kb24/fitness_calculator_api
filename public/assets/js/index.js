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

function calculateCal() {
  document.getElementById("form").reset();
}
