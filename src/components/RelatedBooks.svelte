<script>
  import RelatedBook from "./RelatedBook.svelte";
  import { getBooksByCategory, getBook } from "../services/booksService.js";
  export let category;

  if (category.includes("/")) {
    category = category.split("/")[0];
  }

  let items = [];
  let loading = false;

  const fetchBooks = async () => {
    loading = true;
    let result = await getBooksByCategory(category);
    items = result.items;
    loading = false;
  };

  fetchBooks();
</script>

<style>
  .related-books {
    background-color: #f3f7f8;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px rgba(42, 100, 96, 0.4);
    height: max-content;
  }
  .related-books :global(*) {
    text-decoration: none;
    color: #333;
  }
  .center {
    text-align: center;
  }
</style>

<div class="sidebar related-books">
  <h3>Related Books</h3>
  <div class="books">
    {#if loading}
      <div class="center">
        <h5>Loading...</h5>
      </div>
    {/if}
    {#each items as book}
      <RelatedBook bookInfo={book} />
    {/each}
  </div>
</div>
