function scrolldown(className) {
  var div = document.getElementsByClassName(className);
    div[0].scrollIntoView({ behavior: "smooth" });
}
function showPopup()
{
    document.getElementsByClassName("popup")[0].classList.add("popped");
}
function hidePopup()
{
    document.getElementsByClassName("popup")[0].classList.remove("popped");
}
