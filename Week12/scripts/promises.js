// PROMISES
// how to define a promise
let p = new Promise((resolve, reject) => {
  let a = 2 + 2;

  if (a == 4) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// how to use/call a promise

p.then((message) => {});

let posts = [
  {
    id: 1,
    author: "Author1",
    text: "Post1",
  },
  {
    id: 2,
    author: "Author2",
    text: "Post2",
  },
  {
    id: 3,
    author: "Author3",
    text: "Post3",
  },
];

function createPost(post) {}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      document.querySelector(
        "output"
      ).innerHTML += `<ul><li>${post.id}</li><li>${post.author}</li><li>${post.text}</li></ul>`;
    });
  }, 1000);
}

createPost({ id: 4, author: "author4", text: "Post4" }); //taking 3 seconds
getPosts(); // takes 1 second to execute..
