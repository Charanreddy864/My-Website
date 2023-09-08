function scrolldown(className) {
  var div = document.getElementsByClassName(className);
    div[0].scrollIntoView({ behavior: "smooth" });
}
function showMrsPopup()
{
    document.getElementsByClassName("mrspop")[0].classList.add("popped");
}
function hideMrsPopup()
{
    document.getElementsByClassName("mrspop")[0].classList.remove("popped");
}
function showBoardPopup()
{
    document.getElementsByClassName("boardpop")[0].classList.add("popped");
}
function hideBoardPopup()
{
    document.getElementsByClassName("boardpop")[0].classList.remove("popped");
}
let expanded = false;
function toggleMenu() {
  expanded = !expanded;
  var icon = document.querySelector(".mobile i");
  var list=document.querySelector(".navlinks");
  if (expanded) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    list.classList.add("active");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    list.classList.remove("active");
  }
}

