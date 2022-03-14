<script lang="ts">
  import { data } from "../data";
  import Header from "../components/Header.svelte";
  import SliderNumbers from "../shared-components/SliderNumbers.svelte";

  let tabIndex: number = 0;
  let tech = data.technology[tabIndex];

  const handleUpdate = (e: CustomEvent<{ index: number }>) => {
    tabIndex = e.detail.index;
    tech = data.technology[tabIndex];
  };
</script>

<div class="technology">
  <Header />

  <main
    id="main"
    class="grid-container grid-container--technology flow"
    tabindex="-1"
  >
    <h1 class="numbered-title">
      <span aria-hidden="true">03</span> Space Launch 101
    </h1>

    <div class="numbers">
      <SliderNumbers
        length={data.technology.length}
        ariaLabel="technology list"
        ariaControls="technology-tab"
        activeIndex={tabIndex}
        on:update={handleUpdate}
      />
    </div>

    <article
      id="technology-tab"
      role="tabpanel"
      tabindex={0}
      class="technology-info flow"
    >
      <header class="flow">
        <h2 class="uppercase text-accent ff-sans-cond fs-200 letter-spacing-3">
          The terminology...
        </h2>
        <p class="uppercase ff-serif fs-700">{tech.name}</p>
      </header>
      <p class="text-accent">{tech.description}</p>
    </article>

    <picture>
      <source srcset={tech.images.portrait} media="(min-width: 720px)" />
      <img src={tech.images.landscape} alt={tech.name} />
    </picture>
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
    padding-inline: 0;
    --flow-space: 2rem;
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
    max-width: 100%;
  }

  .grid-container--technology > .numbers {
    grid-area: tabs;
  }

  .grid-container--technology > .technology-info {
    grid-area: content;
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
        minmax(0, 7rem)
        minmax(0, 41rem)
        minmax(0, 32rem)
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
