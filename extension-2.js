let counterStore = Redux.createStore(countReducer);
let stepStore = Redux.createStore(stepReducer);
let maxStore = Redux.createStore(maxReducer);

let counter = counterStore.getState();

const h1 = document.querySelector("h1");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

const stepFive = document.querySelector(".step-one");
const stepTen = document.querySelector(".step-two");
const stepFifteen = document.querySelector(".step-three");


const maxFive = document.querySelector(".max-one");
const maxTen = document.querySelector(".max-two");
const maxFifteen = document.querySelector(".max-three");

h1.innerText = counter;



increment.addEventListener("click", () => {
  counterStore.dispatch({ type: "increment", step: stepStore.getState(), max: maxStore.getState() });
});

decrement.addEventListener("click", () => {
  counterStore.dispatch({ type: "decrement", step: stepStore.getState(), max: maxStore.getState() });
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




maxFive.addEventListener("click", () => {
  maxStore.dispatch({ type: "", max: 15 });
});

maxTen.addEventListener("click", () => {
  maxStore.dispatch({ type: "", max: 100 });
});

maxFifteen.addEventListener("click", () => {
  maxStore.dispatch({ type: "",max: 200 });
});

maxStore.subscribe(() => {
  max = maxStore.getState();
})

function countReducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return ((state + (action.step || 1)) < action.max) ?  (state + (action.step || 1)) : state;
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

function maxReducer(state = Infinity, action) {
  switch (action.max) {
    case 15:
      return state = 15;
    case 100:
      return state = 100;
    case 200:
      return state = 200;
    default:
      return state;
  }
}