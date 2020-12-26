<script>
	import { Router, Route } from "svelte-routing";
	import BookPage from "./components/BookPage.svelte";
	import Books from "./components/Books.svelte";
	import Favorites from "./components/Favorites.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/Home.svelte";
	import Navbar from "./components/Navbar.svelte";
	import RelatedBooks from "./components/RelatedBooks.svelte";

	export let url = "";

	let favoriteBooks = [
		{
			title: "A Clockwork Orange",
			image:
				"https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg",
			description:
				"Nihil amet sodales auctor! Dictumst excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus, occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fugavitae harum. Enim mus lorem eu mollis, consequuntur veritatis quaerat maecenas eaque.",
			author: "Anthony Burgess",
			categories: ["Drama", "Science Fiction"],
			favorites: true,
		},
		{
			title: "A Clockwork Orange",
			image:
				"https://prodimage.images-bn.com/pimages/9780393341768_p0_v3_s1200x630.jpg",
			description:
				"Nihil amet sodales auctor! Dictumst excepteur? Voluptas asperiores, qui aute? Eligendi curabitur aliquam mus? Mus omnis arcu porta? Deserunt dignissim posuere odit rem adipisci, porta pretium fugiat! Felis. Consequuntur ridiculus, occaecati consequatur! Doloribus itaque aliquet, luctus. Magnam fugavitae harum. Enim mus lorem eu mollis, consequuntur veritatis quaerat maecenas eaque.",
			author: "Anthony Burgess",
			categories: ["Drama", "Science Fiction"],
			favorites: true,
		},
	];
</script>

<style>
	.container {
		margin: 50px 150px;
		padding-bottom: 2.5rem;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 0.4fr;
		gap: 70px;
	}
</style>

<Router {url}>
	<Navbar />
	<div class="container">
		<Route path="/" component={Home} />
		<Route path="books" component={Books} />
		<Route path="favorites">
			<Favorites books={favoriteBooks} />
		</Route>
		<Route path="books/:id">
			<div class="content">
				<BookPage />
				<RelatedBooks />
			</div>
		</Route>
	</div>
	<Footer />
</Router>
