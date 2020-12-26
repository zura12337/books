<script>
  import { Link } from "svelte-routing";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { starO, star } from "svelte-awesome/icons";
  import Book from "./Book.svelte";

  const bookInfo = {
    title: "A Clockwork Orange",
    image:
      "https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg",
    description:
      "Nihil amet sodales auctor! Dictumst excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus, occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fugavitae harum. Enim mus lorem eu mollis, consequuntur veritatis quaerat maecenas eaque.",
    author: "Anthony Burgess",
    categories: ["Drama", "Science Fiction"],
    favorites: true,
  };
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

<div class="books">
  <Book {bookInfo} />
  <Book {bookInfo} />
  <Book {bookInfo} />
  <Book {bookInfo} />
</div>
