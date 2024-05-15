import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/chat';
const API_URL = 'https://messagingappdjango-88dc21820bf3.herokuapp.com/api/chat';

// Create a new chat room with the provided room data
export const createRoom = (roomData) => {
    return axios.post(`${API_URL}/rooms/`, roomData);
};

// Join an existing chat room using the room ID
export const joinRoom = (roomId) => {
    return axios.post(`${API_URL}/rooms/${roomId}/join/`);
};

// Get details of a specific chat room using the room ID
export const getRoomDetails = (roomId) => {
    return axios.get(`${API_URL}/rooms/${roomId}/`);
};

// Get all messages from a specific chat room using the room ID
export const getMessages = (roomId) => {
    return axios.get(`${API_URL}/rooms/${roomId}/messages/`);
};

// Post a new message to a specific chat room using the room ID and message data
export const postMessage = (roomId, messageData) => {
    return axios.post(`${API_URL}/rooms/${roomId}/messages/`, messageData);
};

// Delete a specific message from a chat room using the room ID and message ID
export const deleteMessage = (roomId, messageId) => {
    return axios.delete(`${API_URL}/rooms/${roomId}/messages/${messageId}/`);
};
