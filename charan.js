function scrolldown(className) {
  var div = document.getElementsByClassName(className);
    div[0].scrollIntoView({ behavior: "smooth" });
}
