<script>
  import { ScaleOut } from "svelte-loading-spinners";
</script>

<style>
  .center {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
  .center > :global(*) {
    margin-bottom: 20px;
  }
</style>

<div class="center">
  <ScaleOut size="120" color="#41baca" />
</div>
