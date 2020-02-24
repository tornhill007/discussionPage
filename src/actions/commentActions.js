import axios from 'axios';

export const addComment = async (formData) => {
    return await axios.post('https://guarded-mountain-57996.herokuapp.com/comments', formData);
};

export const getCommentsList = async () => {
    return await axios.get('https://guarded-mountain-57996.herokuapp.com/comments/');
};

export const deleteComment = async (id) => {
    return await axios.delete(`https://guarded-mountain-57996.herokuapp.com/comments/${id}`);
};

export const getCommentById = async (id) => {
    return await axios.get(`https://guarded-mountain-57996.herokuapp.com/comments/${id}`);
};

export const updateComment = async (id, data) => {
    return await axios.patch(`https://guarded-mountain-57996.herokuapp.com/comments/${id}`, data);
}