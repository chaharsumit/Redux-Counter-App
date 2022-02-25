let counterStore = Redux.createStore(countReducer);
let stepStore = Redux.createStore(stepReducer);

let counter = counterStore.getState();

const h1 = document.querySelector("h1");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const stepFive = document.querySelector(".step-one");
const stepTen = document.querySelector(".step-two");
const stepFifteen = document.querySelector(".step-three");

h1.innerText = counter;

increment.addEventListener("click", () => {
  counterStore.dispatch({ type: "increment", step: stepStore.getState() });
});

decrement.addEventListener("click", () => {
  counterStore.dispatch({ type: "decrement", step: stepStore.getState() });
});

reset.addEventListener("click", () => {
  counterStore.dispatch({ type: "reset" });
});

counterStore.subscribe(() => {
  counter = counterStore.getState();
  h1.innerText = counter;
})


stepFive.addEventListener("click", () => {
  stepStore.dispatch({ type: "", step: 5 });
});

stepTen.addEventListener("click", () => {
  stepStore.dispatch({ type: "", step: 10 });
});

stepFifteen.addEventListener("click", () => {
  stepStore.dispatch({ type: "",step: 15 });
});

stepStore.subscribe(() => {
  step = stepStore.getState();
})

function countReducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + (action.step || 1);
    case "decrement":
      return state - (action.step || 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}

function stepReducer(state = 1, action) {
  switch (action.step) {
    case 5:
      return state = 5;
    case 10:
      return state = 10;
    case 15:
      return state = 15;
    default:
      return state;
  }
}