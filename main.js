let sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sideMenu.style.right = "0";
}
function closedmenu() {
  sideMenu.style.right = "-500px";
}

let scriptURL =
  "https://script.google.com/macros/s/AKfycbxUy8mtlhiE3SE6qkWM-BDqR6iIupJaV7T6ImODD5mXm5bp8XW44qtY671A-eL0jI44/exec";
let form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
