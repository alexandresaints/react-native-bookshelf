import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`,
})

export default api