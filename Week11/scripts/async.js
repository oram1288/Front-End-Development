// let posts = [
//   {
//     id: 1,
//     author: "Author1",
//     text: "Post1",
//   },
//   {
//     id: 2,
//     author: "Author2",
//     text: "Post2",
//   },
//   {
//     id: 3,
//     author: "Author3",
//     text: "Post3",
//   },
// ];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post) => {
//       document.querySelector(
//         "output"
//       ).innerHTML += `<ul><li>${post.id}</li><li>${post.author}</li><li>${post.text}</li></ul>`;
//     });
//   }, 1000);
// }

// createPost({ id: 4, author: "author4", text: "Post4" }); //taking 3 seconds
// getPosts(); // takes 1 second to execute..

document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // 1. Create an XHR object

  const xhr = new XMLHttpRequest();

  // 2. Configure the request...

  xhr.open("GET", "./Data/data.txt");

  // 3. Action on recieving the data

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.querySelector(
        "#output"
      ).innerHTML = `<strong>${this.responseText}</strong>`;
    }
  };

  // 4. Execute the request

  xhr.send();
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  // 1. Create an XHR object

  const xhr = new XMLHttpRequest();

  // 2. Configure the request...

  xhr.open("GET", "./Data/user.json");

  // 3. Action on recieving the data

  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      //   console.log(user.email);
      const output = `<ul><li>ID:${user.id}</li><li>Name:${user.name}</li><li>Email:${user.email}</li><li>Company:${user.company}</li><li>Phone:${user.phone}</li><ul>`;

      document.querySelector("#output").innerHTML = output;
    }
  };

  // 4. Execute the request

  xhr.send();
}

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  // 1. Create an XHR object

  const xhr = new XMLHttpRequest();

  // 2. Configure the request...

  xhr.open("GET", "./Data/users.json");

  // 3. Action on recieving the data

  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = "";

      users.forEach((user) => {
        output += `<ul class="list"><li>ID:${user.id}</li><li>Name:${user.name}</li><li>Email:${user.email}</li><li>Company:${user.company}</li><li>Phone:${user.phone}</li></ul>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  // 4. Execute the request

  xhr.send();
}
