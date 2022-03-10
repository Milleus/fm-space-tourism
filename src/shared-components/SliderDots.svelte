<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let items: Array<string>;
  export let ariaLabel: string;
  export let ariaControls: string;
  export let activeIndex: number;

  let focusIndex: number = activeIndex;
  const dispatch = createEventDispatcher<{ update: { index: number } }>();

  const handleKeypress = (e: KeyboardEvent) => {
    const tabs = document.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      tabs[focusIndex].setAttribute("tabindex", "-1");

      if (e.key === "ArrowLeft") {
        focusIndex--;

        if (focusIndex < 0) {
          focusIndex = tabs.length - 1;
        }
      }

      if (e.key === "ArrowRight") {
        focusIndex++;

        if (focusIndex > tabs.length - 1) {
          focusIndex = 0;
        }
      }

      tabs[focusIndex].setAttribute("tabindex", "0");
      tabs[focusIndex].focus();
    }
  };

  const handleClick = (e: MouseEvent) => {
    const tab = e.target as HTMLButtonElement;
    const index = Number(tab.getAttribute("data-index"));

    focusIndex = index;
    dispatch("update", { index });
  };
</script>

<div role="tablist" aria-label={ariaLabel} class="dot-indicators flex">
  {#each items as item, i}
    <button
      aria-selected={activeIndex === i}
      aria-controls={ariaControls}
      role="tab"
      tabindex={focusIndex === i ? 0 : -1}
      data-index={i}
      on:keydown={handleKeypress}
      on:click={handleClick}
    >
      <span class="sr-only">{item}</span>
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
