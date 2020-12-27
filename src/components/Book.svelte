<script>
  export let bookInfo;

  import Link from "svelte-routing/src/Link.svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { starO, star } from "svelte-awesome/icons";

  const favoriteBooks =
    JSON.parse(localStorage.getItem("favorite_books")) || [];
  function handleClick() {
    if (bookInfo.favorites) {
      bookInfo.favorites = !bookInfo.favorites;
    } else {
      bookInfo.favorites = true;
      const newBooks = [...favoriteBooks, bookInfo];
      localStorage.setItem("favorite_books", JSON.stringify(newBooks));
    }
  }
</script>

<style>
  .book {
    width: 100%;
    height: 300px;
    border-radius: 15px;
    padding: 20px 30px;
    background-color: #e8f5f2;
    box-shadow: 0 4px rgba(0, 75, 70, 0.3);
    position: relative;
    transition: 0.2s all;
  }
  .book:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px rgba(0, 75, 70, 0.3);
  }
  .book-main-info {
    text-align: right;
  }
  .book-cover {
    float: left;
    width: 120px;
    border-radius: 5px;
    margin-right: 10px;
    box-shadow: 0 4px 5px rgba(0, 75, 70, 0.3);
  }

  .book-description {
    margin-top: 20px;
    text-align: left;
  }
  .book-description > p {
    text-transform: none;
    font-size: 13px;
    color: #444;
  }
  .book-description > p > strong {
    text-transform: uppercase;
    letter-spacing: 0.2px;
    color: #555;
  }
  .read-more {
    position: absolute;
    bottom: 20px;
    right: 30px;
    width: 100px;
    height: 40px;
    background-color: rgb(65, 186, 202);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    transition: 0.4s transform, 0.3s box-shadow, 0.2s all;
  }
  .read-more :global(*) {
    text-decoration: none;
    color: white;
  }
  .read-more:hover {
    box-shadow: 0 3px rgba(42, 100, 96, 0.4);
    transform: translateY(-3px);
  }
  .read-more:active {
    transform: translateY(-2px);
    background-color: rgb(45, 133, 145);
    box-shadow: 0 2px rgba(42, 100, 96, 0.4);
  }
  .add-favorites {
    width: 40px;
    height: 40px;
    background-color: rgb(245, 176, 49);
    color: white;
    border: none;
    border-radius: 50px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    right: 140px;
    cursor: pointer;
    outline: none;
    transition: 0.4s transform, 0.3s box-shadow, 0.2s all;
  }
  .add-favorites:hover {
    box-shadow: 0 3px rgba(102, 96, 16, 0.5);
    transform: translateY(-3px);
  }
  .add-favorites:active {
    transform: translateY(-2px);
    background-color: rgb(153, 110, 30);
    box-shadow: 0 2px rgba(102, 96, 16, 0.5);
  }
</style>

<div class="book">
  <div class="book-main-info">
    <div class="book-image">
      <img
        src={bookInfo.volumeInfo.imageLinks.thumbnail}
        alt="book-cover"
        class="book-cover" />
    </div>
    <div class="book-info">
      {#if bookInfo.volumeInfo.title.length > 35}
        <h2>{bookInfo.volumeInfo.title.slice(0, 35)}...</h2>
      {:else}
        <h2>{bookInfo.volumeInfo.title}</h2>
      {/if}
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
      <button class="read-more">
        <Link to="books/1">Read More</Link>
      </button>
      <button on:click={handleClick} class="add-favorites">
        <Icon data={bookInfo.favorites ? star : starO} />
      </button>
    </div>
  </div>
</div>
