<script>
  import Book from "./Book.svelte";

  export let books;
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
  {#each books as book}
    <Book bookInfo={book} />
  {/each}
</div>
