<script>
  import { Link } from "svelte-routing";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { angleRight } from "svelte-awesome/icons";
</script>

<style>
  .footer-content {
    background-color: #222;
    color: white;
    padding: 40px 120px;
  }
  ul {
    list-style: none;
    width: max-content;
  }
  li {
    margin-top: 5px;
  }
  li > :global(svg) {
    opacity: 0;
    transform: translateX(-5px);
    transition: 0.2s all;
  }
  li:hover > :global(svg) {
    opacity: 1;
    transform: translateX(-2px);
  }
  footer :global(a) {
    color: white;
    text-decoration: none;
  }
</style>

<footer>
  <div class="footer-content">
    <ul>
      <li>
        <Icon data={angleRight} />
        <Link to="/">Home</Link>
      </li>
      <li>
        <Icon data={angleRight} />
        <Link to="books">Books</Link>
      </li>
      <li>
        <Icon data={angleRight} />
        <Link to="favorites">Favorites</Link>
      </li>
    </ul>
  </div>
</footer>
