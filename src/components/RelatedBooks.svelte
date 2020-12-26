<script>
  import { Link } from "svelte-routing";
</script>

<style>
  .related-books {
    background-color: #f3f7f8;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px rgba(42, 100, 96, 0.4);
  }
  .book {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 0.2fr 0.9fr;
    width: 100%;
    background: rgb(221, 221, 221);
    border-radius: 5px;
    cursor: pointer;
  }
  .related-books :global(*) {
    text-decoration: none;
    color: #333;
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

<div class="sidebar related-books">
  <h3>Related Books</h3>
  <div class="books">
    <Link to="books/1">
      <div class="book">
        <div class="book-image">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
            alt="book-image"
            class="related-book-cover" />
        </div>
        <div class="book-info">
          <h3>A Clockwork Orange</h3>
          <div class="book-description">
            <p><strong>Author: </strong> Anthony Burgess</p>
            <p><strong>Genre: </strong> Drama</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="books/1">
      <div class="book">
        <div class="book-image">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
            alt="book-image"
            class="related-book-cover" />
        </div>
        <div class="book-info">
          <h3>A Clockwork Orange</h3>
          <div class="book-description">
            <p><strong>Author: </strong> Anthony Burgess</p>
            <p><strong>Genre: </strong> Drama</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="books/1">
      <div class="book">
        <div class="book-image">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
            alt="book-image"
            class="related-book-cover" />
        </div>
        <div class="book-info">
          <h3>A Clockwork Orange</h3>
          <div class="book-description">
            <p><strong>Author: </strong> Anthony Burgess</p>
            <p><strong>Genre: </strong> Drama</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </Link>
    <Link to="books/1">
      <div class="book">
        <div class="book-image">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
            alt="book-image"
            class="related-book-cover" />
        </div>
        <div class="book-info">
          <h3>A Clockwork Orange</h3>
          <div class="book-description">
            <p><strong>Author: </strong> Anthony Burgess</p>
            <p><strong>Genre: </strong> Drama</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
</div>
