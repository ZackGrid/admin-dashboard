const sidebar = document.querySelector(".sidebar");
const userHeader = document.querySelector(".user-header");
const menu = document.querySelector("#menu");

const mql = window.matchMedia('(max-width: 1000px)');


//check width of page for adapting
function screenTest(e) {
  if (e.matches) {
    /* the viewport is 1000 pixels wide or less */
      sidebar.remove();
      userHeader.remove();
      menu.classList.add("fa-solid", "fa-bars");
  } else {
    /* the viewport is more than 1000 pixels wide */
      location.reload();
  }
}

function checkScreen() {
    if (mql.matches) {
        sidebar.remove();
        userHeader.remove();
        menu.classList.add("fa-solid", "fa-bars");
    }
}

checkScreen(); 

mql.addEventListener('change', screenTest);