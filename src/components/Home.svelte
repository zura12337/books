<style>
  .categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .category {
    position: relative;
    height: 180px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    overflow: hidden;
  }
  .category-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s all;
    filter: brightness(50%);
  }
  .category:hover > .category-background {
    transform: scale(1.1);
  }
  .category h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 32px;
  }
  .romance-background {
    object-position: 0 0px;
  }
  .horror-background {
    object-position: 0 -180px;
  }
</style>

<div class="homepage categories">
  <button class="category">
    <img
      src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
      alt="fantasy-background"
      class="category-background fantasy-background " />
    <h3>Fantasy</h3>
  </button>
  <button class="category">
    <img
      src="https://mymodernmet.com/wp/wp-content/uploads/2017/07/the-kiss-gustav-klimt-1.jpg"
      alt="romance-background"
      class="category-background romance-background" />
    <h3>Romance</h3>
  </button>
  <button class="category">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg"
      alt="horror-background"
      class="category-background horror-background" />
    <h3>Horror</h3>
  </button>
</div>
