<script>
  import { Link } from "svelte-routing";
</script>

<style>
  .nav-list {
    display: flex;
    list-style: none;
    margin-left: 50px;
  }
  .nav-item {
    margin-left: 10px;
  }
  .nav-item :global(a) {
    color: #444;
    font-weight: bold;
    text-decoration: none;
  }
  .nav-item:hover {
    text-decoration: underline;
  }
  .navbar {
    background-color: aliceblue;
    height: 100px;
    display: flex;
    align-items: center;
  }
</style>

<main>
  <div class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="books">Books</Link>
      </li>
    </ul>
  </div>
</main>
