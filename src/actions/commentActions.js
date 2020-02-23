import axios from 'axios';

export const addComment = async (formData) => {
    return await axios.post('http://localhost:3001/comments', formData);
};

export const getCommentsList = async () => {
    return await axios.get('http://localhost:3001/comments');
};

export const deleteComment = async (id) => {
    return await axios.delete(`http://localhost:3001/comments/${id}`);
};

export const getCommentById = async (id) => {
    return await axios.get(`http://localhost:3001/comments/${id}`);
};

export const updateComment = async (id, data) => {
    return await axios.patch(`http://localhost:3001/comments/${id}`, data);
}