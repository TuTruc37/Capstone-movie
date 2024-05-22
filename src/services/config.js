import axios from 'axios';
export const http = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api',
  headers: {
    tokenCybersoft:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MSIsIkhldEhhblN0cmluZyI6IjAyLzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNzgyNzIwMDAwMCIsIm5iZiI6MTY5ODUxMjQwMCwiZXhwIjoxNzI3OTc0ODAwfQ.s3A_pv48yJ4fiNIafAzdJdzYqv8m9m6Q6cq52Yw1xGg',
  },
  timeout: 30000,
});
