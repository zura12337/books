<script>
  import Book from "./Book.svelte";
  import { ScaleOut } from "svelte-loading-spinners";
  import Loading from "./Loading.svelte";

  export let booksArray;
  export let loading;
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

{#if loading}
  <Loading />
{:else}
  <div class="books">
    {#if booksArray}
      {#each booksArray['items'] as book}
        <Book bookInfo={book} />
      {/each}
    {/if}
  </div>
{/if}
