import axios from "axios";

export async function getBooks(page = 0) {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=a&maxResults=12&startIndex=" +
      page * 12
  );
  return response.data;
}

export async function getBook(id) {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes/" + id
  );
  return response.data;
}
