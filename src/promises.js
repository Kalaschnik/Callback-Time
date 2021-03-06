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

    const error = true;
    if (!error) {
      resolve();
    } else {
      reject(Error, 'Error: Something went wrong!');
    }
  }, 2000);
});

// start createPost method
createPost({ title: 'Third Post', body: 'This is now a Promise...' })
// since createPost is returning a Promise we can use .then/.catch syntax
  .then(getPosts)
  .catch(err => console.log(err)); // if error = true

// other example
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res('I’ll execute after the timeout!');
  }, 3000);
});
// "call it"
promise.then(text => console.log(text));


// Promise.all

const promise1 = Promise.resolve('Hello World'); // short for new Promise(res)
const promise2 = 10;
const promise3 = new Promise(res => setTimeout(res, 2000, 'Goodbye'));
// fetch returns a promise, but you need to map it
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json());

Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values));
