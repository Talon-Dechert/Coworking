const sml = window.matchMedia("(max-width:768px)");
console.log(sml);

const navToggle = (function iife() {
  // These are available to the scopes below it but not above it
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  let isOpen = false;
  function toggle(targets=[sidebar,main], status=isOpen) {
    if (sml.matches) {
      if(!status) {
        targets[0].style.width = "70px";
      } else {
        targets[0].style.width = "0px";
      }
    } else {
      if(!status) {
        targets[0].style.width = "250px";
        targets[1].style.marginLeft = "250px";
      } else {
        targets[0].style.width = "0";
        targets[1].style.marginLeft = "0";
      }
    };
    return !status;
  }
  // this marks the end of what we don't want to be called over and over again
  // when we use those they aren't going to be redeclarations of themselves

  // This is the function actually getting assigned to const navToggle
  // It's name isn't callable for it's local to the scope of iife
  // It is returned to be assigned still
  return function toggleNav() {
    isOpen = toggle();
  }
}());