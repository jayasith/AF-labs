const uuid = require('uuid');
const { post } = require('../routes/home.router');

const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');


const createPost = async ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }
    return await save(post);
};

const getPosts = async () => {
    return await getAll();
}

const getPost = async id => {
    return await getById(id);
}

const deletePost = async id => {
    return await removeById(id);
}

const updatePost = async (id, {name, description, postedDate}) => {

    const post = {
        name,
        description,
        postedDate
    }
    return await update(id, post);
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
};

