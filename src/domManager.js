import { fetchData } from "./fetchData";
import { processData } from "./processData";

export function updateWeatherDom(data) {
  const location = document.querySelector("#weatherLocation");
  location.textContent = `Weather in: ${data.location.country}, ${data.location.name}`;

  const temperature = document.querySelectorAll(".weatherTemperature");
  temperature.forEach((elem, index) => {
    elem.textContent = `Average Temperature: ${data.temperature.temp_c[index]} \u00B0C`;
  });

  const condition = document.querySelectorAll(".weatherCondition");
  condition.forEach((elem, index) => {
    const conditionText = elem.querySelector(".conditionText");
    const conditionImg = elem.querySelector(".conditionImg");

    conditionText.textContent = `${data.condition.text[index]}`;
    conditionImg.src = `${data.condition.icon[index]}`;
  });
}

export function createWeatherDiv() {
  const div = document.createElement("div");
  div.id = "weatherDiv";

  div.appendChild(createTodayWeatherDiv());
  div.appendChild(createTomorrowWeatherDiv());
  div.appendChild(createOvermorrowWeatherDiv());
  div.appendChild(createLocationWeatherDiv());
  return div;
}

function createTodayWeatherDiv() {
  const div = document.createElement("div");
  div.id = "todayWeatherDiv";

  const weatherTitle = document.createElement("p");
  weatherTitle.textContent = "Today Weather";
  weatherTitle.classList.add("weatherTitle");

  const temperature = document.createElement("p");
  temperature.textContent = "Temperature in C: ";
  temperature.classList.add("weatherTemperature");

  const condition = document.createElement("span");
  condition.classList.add("weatherCondition");

  const conditionText = document.createElement("p");
  conditionText.textContent = "Today Condition";
  conditionText.classList.add("conditionText");

  const conditionImg = document.createElement("img");
  conditionImg.src = "";
  conditionImg.alt = "Today Condition Img";
  conditionImg.classList.add("conditionImg");

  condition.appendChild(conditionText);
  condition.appendChild(conditionImg);

  div.appendChild(weatherTitle);
  div.appendChild(temperature);
  div.appendChild(condition);

  return div;
}

function createTomorrowWeatherDiv() {
  const div = document.createElement("div");
  div.id = "tomorrowWeatherDiv";

  const weatherTitle = document.createElement("p");
  weatherTitle.textContent = "Tomorrow Weather";
  weatherTitle.classList.add("weatherTitle");

  const temperature = document.createElement("p");
  temperature.textContent = "Temperature in C: ";
  temperature.classList.add("weatherTemperature");

  const condition = document.createElement("span");
  condition.classList.add("weatherCondition");

  const conditionText = document.createElement("p");
  conditionText.textContent = "Tomorrow Condition";
  conditionText.classList.add("conditionText");

  const conditionImg = document.createElement("img");
  conditionImg.src = "";
  conditionImg.alt = "Tomorrow Condition Img";
  conditionImg.classList.add("conditionImg");

  condition.appendChild(conditionText);
  condition.appendChild(conditionImg);

  div.appendChild(weatherTitle);
  div.appendChild(temperature);
  div.appendChild(condition);

  return div;
}

function createOvermorrowWeatherDiv() {
  const div = document.createElement("div");
  div.id = "overmorrowWeatherDiv";

  const weatherTitle = document.createElement("p");
  weatherTitle.textContent = "Overmorrow Weather";
  weatherTitle.classList.add("weatherTitle");

  const temperature = document.createElement("p");
  temperature.textContent = "Temperature in C: ";
  temperature.classList.add("weatherTemperature");

  const condition = document.createElement("span");
  condition.classList.add("weatherCondition");

  const conditionText = document.createElement("p");
  conditionText.textContent = "Overmorrow Condition";
  conditionText.classList.add("conditionText");

  const conditionImg = document.createElement("img");
  conditionImg.src = "";
  conditionImg.alt = "Overmorrow Condition Img";
  conditionImg.classList.add("conditionImg");

  condition.appendChild(conditionText);
  condition.appendChild(conditionImg);

  div.appendChild(weatherTitle);
  div.appendChild(temperature);
  div.appendChild(condition);

  return div;
}

function createLocationWeatherDiv() {
  const div = document.createElement("div");
  div.id = "locationWeatherDiv";

  const location = document.createElement("p");
  location.textContent = "Test";
  location.id = "weatherLocation";

  div.appendChild(location);

  return div;
}

export function createForm() {
  const div = document.createElement("div");
  div.id = "formDiv";

  const form = document.createElement("form");
  form.id = "locationForm";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const data = processData(await fetchData(input.value));
    console.log(data);
    updateWeatherDom(data);
  });

  form.appendChild(createLocationInput());
  form.appendChild(createFormButton());

  div.appendChild(form);

  return div;
}

function createLocationInput() {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "locationInput";
  input.placeholder = "Weather are you from? :)";

  return input;
}

function createFormButton() {
  const button = document.createElement("button");
  button.type = "submit";
  button.id = "formButton";
  button.textContent = "Get data!";

  return button;
}
