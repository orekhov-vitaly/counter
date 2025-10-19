function initCounter(counterId) {
  const counter = document.getElementById(counterId);
  const valueEl = counter.querySelector(".value");
  const increaseBtn = counter.querySelector(".increase");
  const decreaseBtn = counter.querySelector(".decrease");
  let value = 0;

  increaseBtn.addEventListener("click", () => {
    value++;
    valueEl.textContent = value;
  });

  decreaseBtn.addEventListener("click", () => {
    value--;
    valueEl.textContent = value;
  });
}

initCounter("counter-nikita");