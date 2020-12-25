<script>
	import { Router, Route } from "svelte-routing";
	import Books from "./components/Books.svelte";
	import Navbar from "./components/Navbar.svelte";

	export let url = "";
</script>

<style>
	.container {
		margin: 50px 200px;
	}
</style>

<Router {url}>
	<Navbar />
	<div class="container">
		<Route path="books" component={Books} />
	</div>
</Router>
