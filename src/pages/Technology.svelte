<script lang="ts">
  import { fade } from "svelte/transition";

  import { data } from "../data";
  import Header from "../components/Header.svelte";
  import SliderNumbers from "../shared-components/SliderNumbers.svelte";

  const { technology } = data;
  const panelPrefix = "technology";
  let tabIndex: number = 0;

  const handleUpdate = (e: CustomEvent<{ index: number }>) => {
    tabIndex = e.detail.index;
  };
</script>

<div class="technology">
  <Header />

  <main
    id="main"
    class="grid-container grid-container--technology flow"
    in:fade
  >
    <h1 class="numbered-title">
      <span aria-hidden="true">03</span> Space Launch 101
    </h1>

    <div class="numbers">
      <SliderNumbers
        length={data.technology.length}
        ariaLabel="technology list"
        ariaControlsPrefix={panelPrefix}
        activeIndex={tabIndex}
        on:update={handleUpdate}
      />
    </div>

    {#each technology as tech, i}
      <article
        id={`${panelPrefix}-${i}`}
        role="tabpanel"
        tabindex={tabIndex === i ? 0 : -1}
        data-visible={i === tabIndex}
        class="technology-info flow"
      >
        <header class="flow">
          <h2
            class="uppercase text-accent ff-sans-cond fs-200 letter-spacing-3"
          >
            The terminology...
          </h2>
          <p class="uppercase ff-serif fs-700">{tech.name}</p>
        </header>
        <p class="text-accent">{tech.description}</p>
      </article>
    {/each}

    {#each technology as tech, i}
      <picture data-visible={i === tabIndex}>
        <source srcset={tech.images.portrait} media="(min-width: 720px)" />
        <img src={tech.images.landscape} alt={tech.name} />
      </picture>
    {/each}
  </main>
</div>

<style>
  .technology {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    background-size: cover;
    background-position: bottom center;
    background-image: url("../assets/technology/background-technology-mobile.jpg");
  }

  .grid-container--technology {
    --flow-space: 2rem;
    padding-inline: 0;
    grid-template-columns:
      1rem
      1fr
      1rem;
    grid-template-areas:
      ". title ."
      "image image image"
      ". tabs ."
      ". content .";
  }

  .grid-container--technology > .numbered-title {
    grid-area: title;
  }

  .grid-container--technology > picture {
    grid-area: image;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }

  .grid-container--technology > picture[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .grid-container--technology > .numbers {
    grid-area: tabs;
  }

  .grid-container--technology > .technology-info {
    grid-area: content;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }

  .grid-container--technology > .technology-info[data-visible="true"] {
    grid-area: content;
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .technology-info header {
    --flow-space: 0.5rem;
  }

  @media (min-width: 35em) {
    .technology {
      background-position: center center;
      background-image: url("../assets/technology/background-technology-tablet.jpg");
    }

    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .technology-info header {
      --flow-space: 1rem;
    }

    .technology-info h2 {
      font-size: 1rem;
    }
  }

  @media (min-width: 45em) {
    .technology {
      background-image: url("../assets/technology/background-technology-desktop.jpg");
    }

    .grid-container--technology {
      --flow-space: 1.5rem;
      justify-items: start;
      align-content: start;
      grid-template-columns:
        minmax(2rem, 1fr)
        min-content
        minmax(min-content, 3fr)
        minmax(0, 3fr)
        minmax(2rem, 1fr);
      grid-template-areas:
        ". title title title ."
        ". tabs content image image";
    }

    .grid-container--technology > .technology-info {
      align-self: center;
      grid-area: content;
    }

    .grid-container--technology > .numbers {
      justify-self: start;
    }
  }
</style>
