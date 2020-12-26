<script>
	import { Router, Route } from "svelte-routing";
	import Book from "./components/Book.svelte";
	import Books from "./components/Books.svelte";
	import Navbar from "./components/Navbar.svelte";
	import RelatedBooks from "./components/RelatedBooks.svelte";

	export let url = "";
</script>

<style>
	.container {
		margin: 50px 150px;
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
		<Route path="books" component={Books} />
		<Route path="books/:id">
			<div class="content">
				<Book />
				<RelatedBooks />
			</div>
		</Route>
	</div>
</Router>
