import { date } from "./index.js";
import { dataArray } from "./updateResult.js";

const calcNextDays = () => {
  let j = 1;
  const dataOfCurrentMonth =
    new Date(date.getFullYear(), date.getMonth() + 1, 1) - 1;

  let lastDayCurrentMonth = new Date(dataOfCurrentMonth).getDay();

  for (let i = lastDayCurrentMonth + 1; i <= 6; i++)
    dataArray.push(
      `<li class="text-2xl flex items-center border justify-center bg-gray-500/50 text-gray-200">${
        i > 0 ? j++ : i
      }</li>`
    );
  return dataArray;
};

export default calcNextDays;
