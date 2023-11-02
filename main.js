//side bar-----------------
let sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sideMenu.style.right = "0";
}
function closedmenu() {
  sideMenu.style.right = "-500px";
}

//scroll botton-----------
let btn = document.getElementById("scroll-bt");
onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Email  -------------------------------------------------------------
function sendMail() {
  Email.send({
    SecureToken: "1c828b0b-ad3c-4079-8560-b5bbece6c55b",
    To: `mk126105@gmail.com`,
    From: "mk126105@gmail.com",
    Subject: "Test Email",
    Body:
      "Name : " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Messege: " +
      document.getElementById("Message").value,
  }).then((message) => alert("Massage Send Succesfully"));
}
