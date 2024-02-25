// Welcome Code
document.addEventListener("DOMContentLoaded", function () {
  const username = "Noman!";
  const welcomeMsg = document.getElementById("welcome-Msg");

  welcomeMsg.textContent += username === "" ? "Guest" : username;
});
