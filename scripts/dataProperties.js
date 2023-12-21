import { dataObjects } from "./index.js";

const addData = (data) => {
  dataObjects.push(data);
};

const removeData = (arr, finishedElement) => {
  let num = +finishedElement.dataset.order;
  arr.splice(num, 1, "");
};

export { addData, removeData };
