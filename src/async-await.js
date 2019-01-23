const posts = [
  { title: 'Post One', body: 'This is the very first post in my new blog and I love to share some thoughts...' },
  { title: 'Post Two', body: 'Second Post. Great isn’t it? Yet, I don’t know what to write now...' },
];

function getPosts() {
  // setTimeout(callback(){}, delayInMs);
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.body.innerHTML = output;
  }, 1000);
}

// create a promise that has two paramters with new Promise
const createPost = post => new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(post);

    const error = false;
    if (!error) {
      resolve();
    } else {
      reject(Error, 'Error: Something went wrong!');
    }
  }, 2000);
});


// async / await is just another syntax for promises
// a function needs to be labeld with async if you want to use await inside of it
async function init() {
  await createPost({ title: 'Third Post', body: 'This is now a Promise...' });

  // there is no need to use .then
  // getPosts will only be executed when createPost is done the order now matters
  getPosts();
}

// start create post method inside init
init();


// async/await with fetch (arrow stylee)
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // since fetch returns a HTTP response, we need to call the .json() method to extract the response
  const data = await response.json();

  // it only will log when the data is there
  console.log(data);
};

fetchUsers();
