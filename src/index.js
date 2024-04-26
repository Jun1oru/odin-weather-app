import "./styles.css";
import { fetchData } from "./fetchData";
import { processData } from "./processData";
import { createForm, createWeatherDiv, updateWeatherDom } from "./domManager";

const body = document.querySelector("body");
body.appendChild(createWeatherDiv());
body.appendChild(createForm());

const data = processData(await fetchData("bucharest"));
console.log(data);
updateWeatherDom(data);
