const changeClass = (add, remove) => {
  setTimeout(() => {
    add.forEach((a) => a.classList.add("diss"));
    remove.forEach((a) => a.classList.remove("diss"));
  }, 1.5);
};

export default changeClass;
