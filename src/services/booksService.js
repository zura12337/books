import axios from "axios";

export async function getBooks() {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=a"
  );
  return response.data;
}
