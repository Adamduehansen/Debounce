import { debounce } from "./debounce";

const input = document.getElementById("text-input") as HTMLInputElement;
const value = document.getElementById("input-value");

const search = function(event: Event) {
  value!.innerText = (event.target as HTMLInputElement).value;
};

input!.addEventListener("keyup", debounce(search, 1000));
