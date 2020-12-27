import axios from "axios";

export async function getBooks() {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=a&maxResults=12"
  );
  return response.data;
}

export async function getBook(id) {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes/" + id
  );
  return response.data;
}
