const expandButtonsOpen = document.querySelectorAll(".expandButton");
const paragrafo = document.querySelectorAll(".text");



expandButtonsOpen.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.src.includes("open.svg")) {
      button.src = "assets/imgs/close.svg";
    } else {
      button.src = "assets/imgs/open.svg";
    }

    paragrafo[index].classList.toggle("hide")
  });
});
