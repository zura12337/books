import axios from "axios";
import { toast, ToastContainer } from "svelte-toastify";

export async function getBooks(page = 0) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=a&maxResults=12&startIndex=" +
        page * 12
    );
    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function getBook(id) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes/" + id
    );
    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function getBooksByCategory(category) {
  try {
    category = category.split(" ");
    category.join("+");
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes/?q=subject:" +
        category +
        "&maxResults=4"
    );
    return response.data;
  } catch (err) {
    toast.error(err.message);
  }
}
