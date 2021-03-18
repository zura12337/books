<script>
  import Link from "svelte-routing/src/Link.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { questionCircle } from "svelte-awesome/icons";

  export let bookInfo;
</script>

<style>
  .book {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 0.2fr 0.9fr;
    width: 100%;
    background: rgb(221, 221, 221);
    border-radius: 5px;
    cursor: pointer;
  }
  .related-book-cover {
    width: 40px;
    margin: 5px;
    border-radius: 5px;
  }
  .book-info {
    margin-top: 8px;
  }
  .book-info > h3 {
    font-size: 14px;
    margin-bottom: 3px;
  }
  .book-description > p {
    font-size: 11px;
  }
</style>

<Link to={`/books/${bookInfo.id}`}>
  <div class="book">
    {#if bookInfo.volumeInfo.imageLinks && bookInfo.volumeInfo.imageLinks.thumbnail}
      <div class="book-image">
        <img
          src={bookInfo.volumeInfo.imageLinks.thumbnail}
          alt="related-book-cove"
          class="related-book-cover" />
      </div>
    {:else}
      <div class="undefined-image">
        <Icon scale="3" data={questionCircle} />
      </div>
    {/if}
    <div class="book-info">
      {#if bookInfo.volumeInfo.title.length > 20}
        <h3>{bookInfo.volumeInfo.title.slice(0, 20)}...</h3>
      {:else}
        <h3>{bookInfo.volumeInfo.title}</h3>
      {/if}
      <div class="book-description">
        {#if bookInfo.volumeInfo.authors}
          <p>
            <strong>Author: </strong>
            {bookInfo.volumeInfo.authors.join(', ')}
          </p>
        {/if}
        {#if bookInfo.volumeInfo.categories}
          <p>
            <strong>Genre: </strong>
            {bookInfo.volumeInfo.categories.join(', ')}
          </p>
          <p>...</p>
        {/if}
      </div>
    </div>
  </div>
</Link>
