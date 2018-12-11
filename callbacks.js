const posts = [
    {title: "Post One", body: "This is the very first post in my new blog and I love to share some thoughts..."},
    {title: "Post Two", body: "Second Post. Great isn’t it? Yet, I don’t know what to write now..."},
];

function getPosts() {
    // setTimeout(callback(){}, delayInMs);
    setTimeout(() => {

        let output = '';
        posts.forEach((post, i) => {
            output += `<li>${post.title}</li>`;
        });
        console.log(output);
        document.body.innerHTML = output;

    }, 1000);

}

const createPost = (post) => {
    setTimeout(() => {
        posts.push(post)
    }, 2000)
};


getPosts();

createPost({title: "Post Three", body: "This is post 3"});

/*
    NOTE if the timeout for createPost is higher then for getPosts, then you wont see the Post create in createPost

   */