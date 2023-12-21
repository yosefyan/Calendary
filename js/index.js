import changeClass from "./changeClass.js";
import { loopCreator, simplerLoop } from "./loopCreator.js";
import { selector } from "./selector.js";
import updateResult from "./updateResult.js";
import reset from "./reset.js";
import { addData, removeData } from "./dataProperties.js";
import { days, months } from "./data.js";

const daysContainer = selector("#daysContainer");
export const monthNumbers = selector("#monthNumbers");
export let date = new Date();
let currentMonth = selector("#currentMonth");
let monthIndex = date.getMonth();

export let dataObjects = [];

currentMonth.innerText = `${months[monthIndex]} ${date.getFullYear()}`;

loopCreator(
  daysContainer,
  days,
  "li",
  "w-full flex justify-center items-center text-center text-white p-2 border-2 b-cyan-500 text-[40%] xl:text-2xl",
  false,
  null
);

updateResult();

const arrowsContainer = selector("#arrowsContainer");

const events = selector("#events");

arrowsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    monthNumbers.innerHTML = "";
    if (e.target.classList.contains("fa-chevron-right")) {
      date.setMonth(date.getMonth() + 1);
      currentMonth.innerText = `${
        months[date.getMonth() > 11 ? 0 : date.getMonth()]
      } ${date.getFullYear()}`;
      updateResult();
    }
    if (e.target.classList.contains("fa-chevron-left")) {
      date.setMonth(date.getMonth() - 1);
      currentMonth.innerText = `${
        months[date.getMonth() < 0 ? 11 : date.getMonth()]
      } ${date.getFullYear()}`;
      updateResult();
    }
  }
});

const addingForm = selector("#addingForm");
const desc = selector("#desc");

addingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = addingForm.parentElement.dataset.full;
  let addedData = {
    id: dataObjects.length,
    data,
    value: desc.value,
  };
  addData(
    `<div data-full="${data}" data-order="${
      addedData.id
    }" class="items flex items-center justify-between p-4 list-none"><li class="text-white text-1xl xl:text-3xl" ><span class="tShadow text-cyan-200/75 bg-blue-500/75 p-2">${data.replace(
      /_/g,
      "/"
    )}</span> ${
      addedData.value
    }</li><i class="text-3xl fa-solid fa-trash text-red-500 transition-all cursor-pointer hover:scale-75"></i></div>`
  );
  reset(events);
  simplerLoop(events, dataObjects);
  desc.value = "";
});

const close = selector("#close");
const calendar = selector("#calendar");

close.addEventListener("click", () => {
  changeClass([close.parentElement], [calendar]);
});

window.addEventListener("DOMContentLoaded", () => {
  monthNumbers.addEventListener("click", (e) => {
    if (!e.target.classList.contains("text-gray-200")) {
      let monthYear = currentMonth.innerText;
      let fullStr = `${e.target.innerText} ${monthYear}`;
      close.parentElement.dataset.full = `${fullStr.split(" ").join("_")}`;
      changeClass([calendar], [close.parentElement]);
      reset(events);
      simplerLoop(events, dataObjects);
    }
  });
});

events.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    removeData(dataObjects, e.target.parentElement);
    reset(events);
    simplerLoop(events, dataObjects);
  }
});
