import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "056118e2c642a0666c97b458ab08a79f",
    language: "ko-KR",
  },
});

export default instance;
