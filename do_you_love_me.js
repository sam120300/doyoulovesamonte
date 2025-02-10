const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

let clickCount = 0;

// No button functionality
noBtn.addEventListener("click", () => {
  clickCount++;

  // Increase yes button size
  const scaleFactor = 1 + clickCount * 0.5; // Adjust the growth rate
  yesBtn.style.transform = `scale(${scaleFactor})`;

  // After 5 clicks, make yes button cover the whole page
  if (clickCount >= 100) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "90vw";
    yesBtn.style.height = "90vh";
    yesBtn.style.fontSize = "5rem";
    yesBtn.style.zIndex = "1000";
  }
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
