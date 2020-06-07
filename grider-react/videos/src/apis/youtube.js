import axios from 'axios';
const KEY = 'AIzaSyCbSHAvWeJm9LH1J3-hcJKIuNlvplebNwA';

//preconfigured axios
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export { youtube, KEY };
