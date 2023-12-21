import { date } from "./index.js";
import { dataArray } from "./updateResult.js";

const calcCurrentDays = () => {
   const dataOfCurrentMonth =
    new Date(date.getFullYear(), date.getMonth() + 1, 1) - 1;

  const lastNumberCurrentMonth = new Date(dataOfCurrentMonth).getDate();

  for (let i = 1; i <= lastNumberCurrentMonth; i++)
    dataArray.push(
      `<li class="text-2xl border cursor-pointer transition-all flex items-center justify-center hover:scale-95">${i}</li>`
    );
  return dataArray;
};

export default calcCurrentDays;
