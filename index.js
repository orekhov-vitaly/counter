const counterBlock = document.querySelector("#counter");
const increaseBtn = counterBlock.querySelector("#increase");
const descreaseBtn = counterBlock.querySelector("#descrease");
const resultBlock = counterBlock.querySelector("#result");
let result = 0;

increaseBtn.addEventListener("click", () => {
    result++;
    resultBlock.textContent = result;
});

descreaseBtn.addEventListener("click", () => {
    result--;
    resultBlock.textContent = result;
});