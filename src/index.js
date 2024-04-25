import { fetchData } from "./fetchData";
import { processData } from "./processData";
import { createForm } from "./domManager";

const body = document.querySelector("body");
body.appendChild(createForm());

console.log(processData(await fetchData("bucharest")));
