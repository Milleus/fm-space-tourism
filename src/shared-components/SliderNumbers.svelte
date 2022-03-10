<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let length: number;
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

<div role="tablist" aria-label={ariaLabel} class="number-indicators flex">
  {#each Array(length) as _, i}
    <button
      aria-selected={activeIndex === i}
      aria-controls={ariaControls}
      role="tab"
      tabindex={focusIndex === i ? 0 : -1}
      data-index={i}
      class="ff-serif fs-600 text-white bg-dark"
      on:keydown={handleKeypress}
      on:click={handleClick}
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
