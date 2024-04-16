/***Question 1***/
class User {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

let users = [];

function makeObj() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const user = new User(name, age);
  users.push(user);
  clearFields();
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function displayObj() {
  let output = "";
  users.forEach((user) => {
    output += `<p>Name: ${user.name} <br/>
    Age: ${user.age}</p>`;
  });
  document.querySelector("#q1").innerHTML = output;
}

/***Question 2***/
document.querySelector("#btnq2").addEventListener("click", showJSON);

function showJSON() {
  // 1. Create an XHR object

  const xhr = new XMLHttpRequest();

  // 2. Configure the request...

  xhr.open("GET", "./data/user.json");

  // 3. Action on recieving the data

  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      //   console.log(user.email);
      const output = `<ul><li>Name: ${user.name}</li><li>Company: ${user.company}</li>`;

      document.querySelector("#q2").innerHTML = output;
    }
  };

  // 4. Execute the request

  xhr.send();
}

/*** Question 3***/
document.querySelector("#btnq3").addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<p id="q3"> <h3> ID: ${user.id}</h3>
        <h3> Title: ${user.title}</h3>
        <h3> Completed: ${user.completed}</h3><br />  </p>`;
      });
      document.querySelector("#q3").innerHTML = output;
    });
}
