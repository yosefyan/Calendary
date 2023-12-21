import { date } from "./index.js";
import { dataArray } from "./updateResult.js";

const calcPreviousDays = () => {
  const dataPreviousMonth =
    new Date(date.getFullYear(), date.getMonth(), 1) - 1;

  const lastDayIndexPreviousMonth = new Date(dataPreviousMonth).getDay();
  let lastNumberPreviousMonth = new Date(dataPreviousMonth).getDate();

  for (let i = lastDayIndexPreviousMonth; i >= 0; i--)
    lastDayIndexPreviousMonth < 6 &&
      dataArray.push(
        `<li class="bg-gray-500/50 text-gray-200 text-2xl border flex items-center justify-center">${lastNumberPreviousMonth--}</li>`
      );
  return dataArray.reverse();
};

export default calcPreviousDays;
