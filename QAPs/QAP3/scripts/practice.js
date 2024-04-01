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
}

function displayObj() {
  let output = "<h3>User List:</h3>";
  users.forEach((user) => {
    output += `<p>Name: ${user.name}, Age: ${user.age}</p>`;
  });
  document.getElementById("#output").innerHTML = output;
}

/***Question 2***/
function showJSON() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const jsonData = JSON.parse(xhr.responseText);
        displayJSON(jsonData);
      } else {
        console.error("Failed to fetch JSON data");
      }
    }
  };
  xhr.open("GET", "data/users.json", true);
  xhr.send();
}

function displayJSON(data) {
  const jsonOutput = document.getElementById("jsonOutput");
  jsonOutput.innerHTML = "";
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
      jsonOutput.appendChild(listItem);
    }
  }
  document.getElementById("answer").style.display = "block";
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
        output += `<p id="q3"> <h3> ID: ${user.id}</h3><br/>
        <h3> Title: ${user.title}</h3> <br>
        <h3> Completed: ${user.completed}</h3>  </p>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}
