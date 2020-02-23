import axios from 'axios';

export const addComment = async (formData) => {
    return await axios.post('https://discussion-page-ak.herokuapp.com/', formData);
};

export const getCommentsList = async () => {
    return await axios.get('https://discussion-page-ak.herokuapp.com/');
};

export const deleteComment = async (id) => {
    return await axios.delete(`https://discussion-page-ak.herokuapp.com/${id}`);
};

export const getCommentById = async (id) => {
    return await axios.get(`https://discussion-page-ak.herokuapp.com/${id}`);
};

export const updateComment = async (id, data) => {
    return await axios.patch(`https://discussion-page-ak.herokuapp.com/${id}`, data);
}