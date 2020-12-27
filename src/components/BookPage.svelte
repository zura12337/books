<script>
  import { getBook } from "../services/booksService";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { questionCircle } from "svelte-awesome/icons";

  export let id;

  let bookInfo;

  async function fetchBook() {
    bookInfo = await getBook(id);
  }

  fetchBook();
</script>

<style>
  .book-cover {
    float: left;
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 4px 5px rgba(0, 75, 70, 0.3);
    margin-right: 20px;
  }
  .book-info > h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  .book-description > p > strong {
    text-transform: uppercase;
    color: #666;
    letter-spacing: 0.2px;
  }
  .book-description > p {
    color: #222;
    margin-top: 10px;
  }
  .center {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>

{#if bookInfo}
  <div class="book">
    {#if bookInfo.volumeInfo.imageLinks && bookInfo.volumeInfo.imageLinks.thumbnail}
      <div class="book-image">
        <img
          src={bookInfo.volumeInfo.imageLinks.thumbnail}
          alt="book-cover"
          class="book-cover" />
      </div>
    {:else}
      <div class="undefined-image">
        <Icon scale="3" data={questionCircle} />
      </div>
    {/if}
    <div class="book-info">
      <h2>{bookInfo.volumeInfo.title}</h2>
      <div class="book-description">
        {#if bookInfo.volumeInfo.authors}
          <p>
            <strong>Author: </strong>{bookInfo.volumeInfo.authors.join(', ')}
          </p>
        {/if}
        {#if bookInfo.volumeInfo.categories}
          <p>
            <strong>Genre: </strong>{bookInfo.volumeInfo.categories.join(', ')}
          </p>
        {/if}
        {#if bookInfo.volumeInfo.description}
          {#if bookInfo.volumeInfo.description.length > 255}
            <p>
              <strong>Description:
              </strong>{bookInfo.volumeInfo.description.slice(0, 255)}
              ...
            </p>
          {:else}
            <p>
              <strong>Description: </strong>{bookInfo.volumeInfo.description}
            </p>
          {/if}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="center">
    <h3>Loading ...</h3>
  </div>
{/if}
