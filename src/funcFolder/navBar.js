let menuBtn = document.querySelector("#menuBtn");
let menuBar = document.querySelector("#menuBar");

menuBar.classList.add("hidden");
menuBtn.textContent === "menu";

menuBtn.addEventListener("click", () => {
  if (menuBtn.textContent === "menu") {
    menuBtn.textContent = "close";
    menuBar.classList.remove("hidden");
    menuBar.classList.add("flex");
  } else {
    menuBtn.textContent = "menu";
    menuBar.classList.remove("flex");
    menuBar.classList.add("hidden");
  }
});

// menuBar.classList.add("translate-y-[-100%]");

// menuBtn.onclick = () => {
//   if (menuBtn.textContent === "menu") {
//     menuBtn.textContent = "close";
//     menuBar.classList.remove("translate-y-0");
//     menuBar.classList.add("translate-y-[-100%]");
//   } else {
//     menuBtn.textContent = "menu";
//     menuBar.classList.remove("translate-y-[-100%]");
//     menuBar.classList.add("translate-y-0");
//   }
// };
