import calcCurrentDays from "./calcCurrentDays.js";
import calcNextDays from "./calcNextDays.js";
import calcPreviousDays from "./calcPreviousDays.js";
import { monthNumbers } from "./index.js";

export let dataArray = [];

const updateResult = () => {
  dataArray = [];
  calcPreviousDays();
  calcCurrentDays();
  calcNextDays();
  dataArray.forEach((data) => (monthNumbers.innerHTML += data));
};

export default updateResult;
