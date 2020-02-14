(() => {
  let sideBarHasBeenDeleted = false;

  const removeElement = element => {
    element &&
      element.parentElement &&
      element.parentElement.removeChild(element);
    sideBarHasBeenDeleted = true;
  };

  const removeSideBar = () => {
    const sideBar = document.querySelector('#sidebar-content');
    removeElement(sideBar);
  };

  (() => {
    removeSideBar();

    if (!sideBarHasBeenDeleted) {
      const removingInterval = setInterval(() => {
        sideBarHasBeenDeleted && clearInterval(removingInterval);
        removeElement(sideBar);
      }, 1000);
    }
  })();
})();
