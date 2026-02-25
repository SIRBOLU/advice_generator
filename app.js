const advice = document.querySelector(".quote");
const number = document.querySelector(".heading-number");
const dice = document.querySelector(".dice");

advice.innerHTML = "Click the dice button to generate advice.";
number.innerHTML = "...";

const getAdvice = async () => {
  try {
    // Show loading instantly
    advice.innerHTML = "Loading...";
    number.innerHTML = "...";

    const adviceDataFetch = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await adviceDataFetch.json();
    number.innerHTML = `${adviceData.slip.id}`;
    advice.innerHTML = `${adviceData.slip.advice}`;
  } catch (error) {
    console.log(error);
  }
};

dice.addEventListener("click", getAdvice);
