<script lang="ts">
  import { data } from "../data";
  import Header from "../components/Header.svelte";
  import Tabs from "../shared-components/Tabs.svelte";

  let tabIndex: number = 0;
  let destination = data.destinations[tabIndex];

  const items = data.destinations.map((destination) => {
    return { text: destination.name };
  });

  const handleUpdate = (e: CustomEvent<{ index: number }>) => {
    tabIndex = e.detail.index;
    destination = data.destinations[tabIndex];
  };
</script>

<a class="skip-to-content" href="#main">Skip to content</a>

<div class="destination">
  <Header />

  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span> Pick your destination
    </h1>

    <picture>
      <source srcset={destination.images.webp} type="image/webp" />
      <img src={destination.images.png} alt={destination.images.alt} />
    </picture>

    <div class="tabs">
      <Tabs
        {items}
        ariaLabel="destination list"
        activeIndex={tabIndex}
        on:update={handleUpdate}
      />
    </div>

    <article role="tabpanel" tabindex={0} class="destination-info flow">
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
  }

  .grid-container--destination > .tabs {
    --gap: 2rem;
    grid-area: tabs;
  }

  .grid-container--destination > .destination-info {
    grid-area: content;
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

    .grid-container--destination picture {
      max-width: 90%;
    }

    .destination-meta {
      --gap: min(5vw, 6rem);
      justify-content: start;
    }
  }
</style>
