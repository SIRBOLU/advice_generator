const advice = document.querySelector(".quote");
const number = document.querySelector(".heading-number");

const getAdvice = async () => {
  try {
    const adviceDataFetch = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await adviceDataFetch.json();
    console.log(adviceData);
    number.innerHTML = `${adviceData.slip.id}`;
    advice.innerHTML = `${adviceData.slip.advice}`;
  } catch (error) {
    console.log(error);
  }
};

getAdvice();
