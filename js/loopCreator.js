const loopCreator = (container, array, ele, classes) => {
  array.forEach(
    (arr) =>
      (container.innerHTML += `<${ele} class="${classes}">${arr}</${ele}>`)
  );
};

const simplerLoop = (container, array) => {
  array.forEach((arr) => {
    container.innerHTML += arr;
  });
};
export { loopCreator, simplerLoop };
