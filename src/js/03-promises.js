import '../css/03-promises.scss';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formNode = document.querySelector('.form');

formNode.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  console.log(delay.value, step, amount);
  let delayPromise = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayPromise)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayPromise += Number(step.value);
  }
}
