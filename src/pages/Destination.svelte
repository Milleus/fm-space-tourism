<script lang="ts">
  import { data } from "../data";
  import Header from "../components/Header.svelte";
  import Tabs from "../shared-components/Tabs.svelte";

  let tabIndex: number = 0;
  let destinations = data.destinations;

  const tabNames = destinations.map((destination) => {
    return destination.name;
  });

  const handleUpdate = (e: CustomEvent<{ index: number }>) => {
    tabIndex = e.detail.index;
  };
</script>

<div class="destination">
  <Header />

  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span> Pick your destination
    </h1>

    {#each destinations as destination, i}
      <picture data-visible={i === tabIndex}>
        <source srcset={destination.images.webp} type="image/webp" />
        <img src={destination.images.png} alt={destination.images.alt} />
      </picture>
    {/each}

    <div class="tabs">
      <Tabs
        names={tabNames}
        ariaLabel="destination list"
        ariaControlsPrefix="destination"
        activeIndex={tabIndex}
        on:update={handleUpdate}
      />
    </div>

    {#each destinations as destination, i}
      <article
        id={`destination-${i}`}
        role="tabpanel"
        tabindex={tabIndex === i ? 0 : -1}
        data-visible={i === tabIndex}
        class="destination-info flow"
      >
        <h2 class="uppercase ff-serif fs-800">{destination.name}</h2>

        <p class="text-accent">{destination.description}</p>

        <div class="destination-meta flex">
          <div>
            <h3 class="uppercase text-accent fs-200">Avg. distance</h3>
            <p class="uppercase ff-serif">{destination.distance}</p>
          </div>
          <div>
            <h3 class="uppercase text-accent fs-200">Est. travel time</h3>
            <p class="uppercase ff-serif">{destination.travel}</p>
          </div>
        </div>
      </article>
    {/each}
  </main>
</div>

<style>
  .destination {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    background-size: cover;
    background-position: bottom center;
    background-image: url("../assets/destination/background-destination-mobile.jpg");
  }

  .grid-container--destination {
    --flow-space: 2rem;
    grid-template-areas:
      "title"
      "image"
      "tabs"
      "content";
  }

  .grid-container--destination > .numbered-title {
    grid-area: title;
  }

  .grid-container--destination > picture {
    grid-area: image;
    max-width: 60%;
    align-self: start;
    opacity: 0;
    visibility: hidden;
    transition: opacity 600ms linear, visibility 0ms linear 600ms;
  }

  .grid-container--destination > picture[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 600ms linear, visibility 0ms linear 0ms;
  }

  .grid-container--destination > picture img {
    animation: rotate 180s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .grid-container--destination > .tabs {
    grid-area: tabs;
  }

  .grid-container--destination > .destination-info {
    grid-area: content;
    align-self: start;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }
  .grid-container--destination > .destination-info[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .destination-meta {
    flex-direction: column;
    border-top: 1px solid hsl(var(--clr-white) / 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
  }

  .destination-meta p {
    font-size: 1.75rem;
  }

  @media (min-width: 35em) {
    .destination {
      background-position: center center;
      background-image: url("../assets/destination/background-destination-tablet.jpg");
    }

    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .destination-meta {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 45em) {
    .destination {
      background-image: url("../assets/destination/background-destination-desktop.jpg");
    }

    .grid-container--destination {
      justify-items: start;
      align-content: start;
      grid-template-areas:
        ". title title ."
        ". image tabs ."
        ". image content .";
    }

    .grid-container--destination > picture {
      max-width: 90%;
    }

    .destination-meta {
      --gap: min(5vw, 6rem);
      justify-content: start;
    }
  }
</style>
