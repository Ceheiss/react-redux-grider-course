import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: "Client-ID u3t57TUSW9u4v9HTZpCjlMsc9ikovEQmv2V2UPyut74",
  },
  baseURL: "https://api.unsplash.com/"
});