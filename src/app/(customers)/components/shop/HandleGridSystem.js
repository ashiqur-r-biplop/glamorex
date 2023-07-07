export const GridSystem = (display) => {
  let currentLayoutGrid = JSON.parse(localStorage.getItem("layout"));
  if (currentLayoutGrid) {
    currentLayoutGrid = display;
    if (currentLayoutGrid == display) {
      const grid = display;
      localStorage.setItem("layout", JSON.stringify(grid));
    } else {
      localStorage.clear();
    }
  } else {
    const grid = display;
    localStorage.setItem("layout", JSON.stringify(grid));
  }
};