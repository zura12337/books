<script>
  import Book from "./Book.svelte";
  import Loading from "./Loading.svelte";
  import queryString from "query-string";
  import { getBooks } from "../services/booksService";
  let page = 1;
  let queryParams;
  export let loading;
  export let booksArray;
  $: queryParams = queryString.parse(location.search);
  async function fetchBooks() {
    try {
      loading = true;
      const { items } = await getBooks(page);
      page++;
      loading = false;
      booksArray["items"] = [...booksArray.items, ...items];
      console.log(booksArray);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<style>
  .books {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    column-gap: 100px;
    padding-bottom: 50px;
  }
  .center {
    display: grid;
    place-items: center;
    margin-bottom: 40px;
  }
  .load-more {
    padding: 10px 20px;
    background-color: #308d99;
    color: white;
    border: 0;
    font-weight: bold;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    transition: 0.4s transform, 0.3s box-shadow, 0.2s all;
  }

  .load-more:hover {
    box-shadow: 0 3px rgba(42, 100, 96, 0.4);
    transform: translateY(-3px);
  }
  .load-more:active {
    transform: translateY(-2px);
    background-color: rgb(45, 133, 145);
    box-shadow: 0 2px rgba(42, 100, 96, 0.4);
  }
</style>

<div class="books">
  {#if booksArray}
    {#each booksArray['items'] as book}
      <Book bookInfo={book} />
    {/each}
  {/if}
</div>
<div class="center">
  <button on:click={fetchBooks} class="load-more">Load More</button>
</div>
{#if loading}
  <Loading />
{/if}
