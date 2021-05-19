const uuid = require('uuid');
const { post } = require('../routes/home.router');

let posts = new Map();

let createPost = (obj) =>{
    let post = {
        name: obj.name,
        description: obj.description,
        id: uuid.v4(),
        date: new Date()

    };

    posts.set(post.id, post);
    
    return post;
};


const createPost = async ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }

    return await save(post);
};

let getPosts = ()=> {
    return [...posts.values()];
}

let getPost = (id) => {
    return posts.get(id);
}

module.exports = {
    createPost,
    getPosts,
    getPost
};

