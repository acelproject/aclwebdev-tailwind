const body = document.querySelector("html");
const btnDarkMode = document.querySelector("#toggle");

btnDarkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const btnScrollUp = document.querySelector(".scrollup");
const icon = document.querySelector(".scrollup div i");

btnScrollUp.addEventListener("click", () => {
  icon.classList.add("animate-scrollup");

  const delet = () => {
    icon.classList.remove("animate-scrollup");
  };

  setTimeout(delet, 1500);
});
