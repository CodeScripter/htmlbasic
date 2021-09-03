function myFunction() {
  var x = document.getElementById("Topnav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}