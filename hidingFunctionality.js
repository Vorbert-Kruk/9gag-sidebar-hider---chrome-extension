const removeElement = element => element.parentElement.removeChild(element);

(() => {
  const sideBar = document.querySelector('#sidebar-content');
  sideBar && removeElement(sideBar);
})();
