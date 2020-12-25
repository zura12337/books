<script>
	import Books from "./components/Books.svelte";
	import Navbar from "./components/Navbar.svelte";
</script>

<style>
	.container {
		margin: 50px 200px;
	}
</style>

<main>
	<Navbar />
	<div class="container">
		<Books />
	</div>
</main>
