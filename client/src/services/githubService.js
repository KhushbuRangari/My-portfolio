// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const REQUEST_DELAY = 2000; // 1 second delay between requests

let lastRequestTime = 0;

const delayRequest = async () => {
  const currentTime = Date.now();
  const elapsedTime = currentTime - lastRequestTime;

  if (elapsedTime < REQUEST_DELAY) {
    const delayTime = REQUEST_DELAY - elapsedTime;
    await new Promise((resolve) => setTimeout(resolve, delayTime));
  }

  lastRequestTime = Date.now();
};

export const getGitHubProfile = async (username) => {
  try {
    await delayRequest();
    const response = await axios.get(`${BASE_URL}/users/KhushbuRangari`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGitHubRepositories = async (username) => {
  try {
    await delayRequest();
    const response = await axios.get(`${BASE_URL}/users/KhushbuRangari/repos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
