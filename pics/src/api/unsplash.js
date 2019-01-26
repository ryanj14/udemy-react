import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2f6f406ccfc39e1faa38eb60d70df8a9ebd11efa5908944843103aed65896a31'
  }
});