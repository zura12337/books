<script>
  import Book from "./Book.svelte";

  export let booksArray;
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
  {#if booksArray}
    {#each booksArray['items'] as book}
      <Book bookInfo={book} />
    {/each}
  {/if}
</div>
