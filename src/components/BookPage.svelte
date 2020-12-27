<script>
  import { getBook } from "../services/booksService";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { questionCircle } from "svelte-awesome/icons";
  import Loading from "./Loading.svelte";
  import Link from "svelte-routing/src/Link.svelte";

  export let id;

  let bookInfo;
  let loading = false;
  let error;

  async function fetchBook() {
    loading = true;
    bookInfo = await getBook(id);
    if (typeof bookInfo !== "object") {
      error = bookInfo;
      bookInfo = undefined;
    }
    console.log(bookInfo);
    loading = false;
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
    margin-bottom: 10px;
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
  .error {
    color: rgb(255, 57, 57);
  }
</style>

{#if loading}
  <Loading />
{:else}
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
              <strong>Genre:
              </strong>{bookInfo.volumeInfo.categories.join(', ')}
            </p>
          {/if}
          {#if bookInfo.saleInfo.country}
            <p><strong>Country: </strong>{bookInfo.saleInfo.country}</p>
          {/if}
          {#if bookInfo.volumeInfo.publishedDate}
            <p>
              <strong>Publish Date: </strong>{bookInfo.volumeInfo.publishedDate}
            </p>
          {/if}
          {#if bookInfo.volumeInfo.pageCount}
            <p><strong>Page Count: </strong>{bookInfo.volumeInfo.pageCount}</p>
          {/if}
          {#if bookInfo.volumeInfo.description}
            <p>
              <strong>Description: </strong>
              {@html bookInfo.volumeInfo.description}
            </p>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <div class="center error">
      <h2>{error}</h2>
      <Link to="books">Go to Books page</Link>
    </div>
  {/if}
{/if}
