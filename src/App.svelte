<script>
	import { Router, Route } from "svelte-routing";
	import BookPage from "./components/BookPage.svelte";
	import Books from "./components/Books.svelte";
	import Favorites from "./components/Favorites.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/Home.svelte";
	import Navbar from "./components/Navbar.svelte";
	import { getBooks } from "./services/booksService.js";
	import { ToastContainer } from "svelte-toastify";

	let booksArray;
	let loading = false;

	async function fetchData() {
		loading = true;
		booksArray = await getBooks();
		loading = false;
	}

	fetchData();

	export let url = "";
</script>

<style>
	.container {
		margin: 50px 150px;
		margin-bottom: 0;
		padding-bottom: 8rem;
	}
</style>

<Router {url}>
	<Navbar />
	<div class="container">
		<Route path="/" component={Home} />
		<Route path="books" let:params>
			<Books {loading} {booksArray} page={params} />
		</Route>
		<Route path="favorites">
			<Favorites />
		</Route>
		<Route path="books/:id" let:params>
			<BookPage id={params.id} />
		</Route>
	</div>
	<Footer />
	<ToastContainer />
</Router>
