<script lang="ts">
  export let length: number;
  export let activeIndex: number;
</script>

<div class="number-indicators flex">
  {#each Array(length) as _, i}
    <button
      aria-selected={i === activeIndex ? "true" : "false"}
      class="ff-serif fs-600 text-white bg-dark"
    >
      {i + 1}
    </button>
  {/each}
</div>

<style>
  .number-indicators {
    flex-direction: column;
  }

  .number-indicators > * {
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid hsl(var(--clr-white) / 0.25);
  }

  .number-indicators > *:hover,
  .number-indicators > *:focus {
    border: 1px solid hsl(var(--clr-white));
  }

  .number-indicators > [aria-selected="true"] {
    background-color: hsl(var(--clr-white));
    border: 1px solid hsl(var(--clr-white));
    color: hsl(var(--clr-dark));
  }
</style>
