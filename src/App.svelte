<script>
	import { Router, Route } from "svelte-routing";
	import BookPage from "./components/BookPage.svelte";
	import Books from "./components/Books.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/Home.svelte";
	import Navbar from "./components/Navbar.svelte";
	import RelatedBooks from "./components/RelatedBooks.svelte";

	export let url = "";
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
		<Route path="books/:id">
			<div class="content">
				<BookPage />
				<RelatedBooks />
			</div>
		</Route>
	</div>
	<Footer />
</Router>
