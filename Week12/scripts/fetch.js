// FETCH

// console.log(fetch("./data/data.txt"));

// fetch("./data/data.txt")
//   .then((res) => {
//     return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  fetch("./data/data.txt")
    .then((res, rej) => {
      return res.text();
    })
    // .catch((message) => {
    //   document.querySelector("#output").innerHTML = `ERROR: ${message}`;
    // })
    .then((data) => {
      //   console.log(data);
      document.querySelector(
        "#output"
      ).innerHTML = `The data received is: ${data}`;
    });
}

// Get user & Get users for practice -

document.querySelector("#btn2").addEventListener("click", getUser);

function getUser() {
  fetch("./data/user.json")
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      let output = "";

      output += `<ul class="list"><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>Email: ${user.email}</li><li>Company: ${user.company}</li><li>Phone: ${user.phone}</li><ul>`;

      document.querySelector("#output").innerHTML = output;
    });
}

document.querySelector("#btn3").addEventListener("click", getUsers);

function getUsers() {
  fetch("./data/users.json")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let output = "";
      users.forEach((user) => {
        output += `<ul class="list"><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>Email: ${user.email}</li><li>Company: ${user.company}</li><li>Phone: ${user.phone}</li><ul>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

document.querySelector("#btn4").addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<div class="profile"> <h3>${user.id} - ${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
        Click on <a href="${user.html_url}">More...</a>  </div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

document.querySelector("#btn5").addEventListener("click", fetchData);

// arrow function
async function fetchData() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  // console.log(data);

  let output = "";
  data.forEach((user) => {
    output += `<div class="profile"> <h3>${user.id} - ${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
    Click on <a href="${user.html_url}">More...</a>  </div>`;
  });
  document.querySelector("#output").innerHTML = output;
}

// Button 6
const fetchData1 = async () => {
  try {
    const response = await fetch("https://api.githb.com/users");
    const data = await response.json();
    let output = "";
    data.forEach((user) => {
      output += `<div class="profile"> <h3>${user.id}-${user.login}</h3> <img src="${user.avatar_url}" alt="ProfilePic" class="pic"/> <br>
    Want to know more about me click on <a href="${user.html_url}">More...</a>  </div>`;
    });
    document.querySelector("#output").innerHTML = output;
  } catch (err) {
    document.querySelector(
      "#output"
    ).innerHTML = `<strong>API data not recieved because: ${err}</strong>`;
  }
};

document.querySelector("#btn6").addEventListener("click", fetchData1);
