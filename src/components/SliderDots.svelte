<script lang="ts">
  type Dot = {
    srText: string;
    isActive?: boolean;
  };

  export let dots: Array<Dot>;
</script>

<div class="dot-indicators flex">
  {#each dots as dot}
    <button aria-selected={dot.isActive ? "true" : "false"}>
      <span class="sr-only">
        {dot.srText}
      </span>
    </button>
  {/each}
</div>

<style>
  .dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5em;
    background-color: hsl(var(--clr-white) / 0.25);
  }

  .dot-indicators > *:hover,
  .dot-indicators > *:focus {
    background-color: hsl(var(--clr-white) / 0.5);
  }

  .dot-indicators > [aria-selected="true"] {
    background-color: hsl(var(--clr-white) / 1);
  }
</style>
