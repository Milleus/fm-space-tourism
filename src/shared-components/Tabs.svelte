<script lang="ts">
  type Tab = {
    text: string;
    isActive?: boolean;
  };

  export let tabs: Array<Tab>;
</script>

<div class="tab-list underline-indicators flex">
  {#each tabs as tab}
    <button
      aria-selected={tab.isActive ? "true" : "false"}
      class="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
    >
      {tab.text}
    </button>
  {/each}
</div>

<style>
  .tab-list {
    --gap: 2rem;
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: 2em 0;
    border: 0;
    border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);
  }

  .underline-indicators > *:hover,
  .underline-indicators > *:focus {
    border-color: hsl(var(--clr-white) / 0.5);
  }

  .underline-indicators > [aria-selected="true"] {
    color: hsl(var(--clr-white) / 1);
    border-color: hsl(var(--clr-white) / 1);
  }
</style>
