<script>
  import App from "../App.svelte";
</script>

<style>
  .books {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    column-gap: 100px;
  }
  .book {
    width: 100%;
    height: 300px;
    border-radius: 15px;
    padding: 20px 30px;
    background-color: #e8f5f2;
    box-shadow: 0 4px rgba(0, 75, 70, 0.3);
    position: relative;
  }
  .book-main-info {
    text-align: right;
  }
  .book-cover {
    float: left;
    width: 120px;
    border-radius: 5px;
    margin-right: 10px;
    box-shadow: 0 4px rgba(0, 75, 70, 0.3);
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
    box-shadow: 0 1px rgba(0, 75, 70, 0.3);
    transition: 0.4s transform, 0.3s box-shadow;
  }
  .read-more:hover {
    box-shadow: 0 3px rgba(0, 75, 70, 0.4);
    transform: translateY(-3px);
  }
</style>

<div class="books">
  <div class="book">
    <div class="book-main-info">
      <div class="book-image">
        <img
          src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
          alt="book-cover"
          class="book-cover" />
      </div>
      <div class="book-info">
        <h2>A Clockwork Orange</h2>
        <div class="book-description">
          <p><strong>Author: </strong>Anthony Burgess</p>
          <p><strong>Genre: </strong>Drama, Science Fiction</p>
          <p>
            <strong>Description: </strong>Nihil amet sodales auctor! Dictumst
            excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam
            mus? Mus omnis arcu porta? Deserunt dignissim posuere odit remnim
            mus lorem eu mollis, consequuntur veritatis quaerat maecenas eaque.
          </p>
        </div>
        <button class="read-more">Read More</button>
      </div>
    </div>
  </div>
  <div class="book">
    <div class="book-main-info">
      <div class="book-image">
        <img
          src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
          alt="book-cover"
          class="book-cover" />
      </div>
      <div class="book-info">
        <h2>A Clockwork Orange</h2>
        <div class="book-description">
          <p><strong>Author: </strong>Anthony Burgess</p>
          <p><strong>Genre: </strong>Drama, Science Fiction</p>
          <p>
            <strong>Description: </strong>Nihil amet sodales auctor! Dictumst
            excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam
            mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem
            adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus,
            occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fuga
            vitae harum. Enim mus lorem eu mollis, consequuntur veritatis
            quaerat maecenas eaque.
          </p>
        </div>
        <button class="read-more">Read More</button>
      </div>
    </div>
  </div>
  <div class="book">
    <div class="book-main-info">
      <div class="book-image">
        <img
          src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
          alt="book-cover"
          class="book-cover" />
      </div>
      <div class="book-info">
        <h2>A Clockwork Orange</h2>
        <div class="book-description">
          <p><strong>Author: </strong>Anthony Burgess</p>
          <p><strong>Genre: </strong>Drama, Science Fiction</p>
          <p>
            <strong>Description: </strong>Nihil amet sodales auctor! Dictumst
            excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam
            mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem
            adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus,
            occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fuga
            vitae harum. Enim mus lorem eu mollis, consequuntur veritatis
            quaerat maecenas eaque.
          </p>
        </div>
        <button class="read-more">Read More</button>
      </div>
    </div>
  </div>
  <div class="book">
    <div class="book-main-info">
      <div class="book-image">
        <img
          src="https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg"
          alt="book-cover"
          class="book-cover" />
      </div>
      <div class="book-info">
        <h2>A Clockwork Orange</h2>
        <div class="book-description">
          <p><strong>Author: </strong>Anthony Burgess</p>
          <p><strong>Genre: </strong>Drama, Science Fiction2</p>
          <p>
            <strong>Description: </strong>Nihil amet sodales auctor! Dictumst
            excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam
            mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem
            adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus,
            occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fuga
            vitae harum. Enim mus lorem eu mollis, consequuntur veritatis
            quaerat maecenas eaque.
          </p>
        </div>
        <button class="read-more">Read More</button>
      </div>
    </div>
  </div>
</div>
