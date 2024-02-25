// Submit button
let form = document.querySelector("#submit");

document.getElementById("submit", handleSubmit);
// form.addEventListener("#submit", handleSubmit);

function handleSubmit(e) {
  let name = document.querySelector("name").value;
  let address = document.querySelector("address").value;

  window.location.href = "confirmation.html";

  document.querySelector("nm").innerText = name.toUpperCase();
  document.querySelector("add").innerText = address;

  // document.querySelector("#nm").innerText = parseInt(name) + parseInt(address);

  e.preventDefault();
}
