<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let length: number;
  export let ariaLabel: string;
  export let ariaControlsPrefix: string;
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
      aria-controls={`${ariaControlsPrefix}-${i}`}
      role="tab"
      tabindex={focusIndex === i ? 0 : -1}
      data-index={i}
      class="ff-serif fs-600 text-white"
      on:keydown={handleKeypress}
      on:click={handleClick}
    >
      {i + 1}
    </button>
  {/each}
</div>

<style>
  .number-indicators {
    flex-direction: row;
  }

  .number-indicators > * {
    cursor: pointer;
    border: 1px solid hsl(var(--clr-white) / 0.25);
    border-radius: 50%;
    aspect-ratio: 1;
    width: 2.5rem;
    padding: 0.5rem;
    background-color: transparent;
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

  @media (min-width: 35em) {
    .number-indicators > * {
      width: 3.75rem;
    }
  }

  @media (min-width: 45em) {
    .number-indicators {
      flex-direction: column;
    }

    .number-indicators > * {
      width: clamp(3.75rem, 5vw, 5rem);
    }
  }
</style>
