import { fetchData } from "./fetchData";
import { processData } from "./processData";

export function createForm() {
  const form = document.createElement("form");
  form.id = "locationForm";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    console.log(processData(await fetchData(input.value)));
  });

  form.appendChild(createLocationInput());
  form.appendChild(createFormButton());

  return form;
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
