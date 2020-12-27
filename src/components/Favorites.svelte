<script>
  import Book from "./Book.svelte";
  import { Link } from "svelte-routing";

  let booksArray = JSON.parse(localStorage.getItem("favorite_books")) || [];
</script>

<style>
  .books {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    column-gap: 100px;
    padding-bottom: 50px;
  }
</style>

<div class="books">
  {#if booksArray.length > 0}
    {#each booksArray as book}
      <Book bookInfo={book} />
    {/each}
  {:else}
    <div class="no-books">
      <h3>No Favorite Books Yet.</h3>
      <Link to="books">Go To Books Page.</Link>
    </div>
  {/if}
</div>
