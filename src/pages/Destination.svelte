<script>
  import Header from "../components/Header.svelte";
  import Tabs from "../shared-components/Tabs.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Space tourism website</title>
</svelte:head>

<a class="skip-to-content" href="#main">Skip to content</a>

<div class="destination">
  <Header />

  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span> Pick your destination
    </h1>

    <img src="assets/destination/image-moon.png" alt="the moon" />

    <div class="tabs">
      <Tabs
        tabs={[
          { text: "Moon", isActive: true },
          { text: "Mars" },
          { text: "Europa" },
          { text: "Titan" },
        ]}
      />
    </div>

    <article class="destination-info">
      <h2 class="uppercase ff-serif fs-800">Moon</h2>

      <p class="text-accent">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div class="destination-meta flex">
        <div>
          <h3 class="uppercase text-accent fs-200">Avg. distance</h3>
          <p class="uppercase ff-serif">384,400 km</p>
        </div>
        <div>
          <h3 class="uppercase text-accent fs-200">Est. travel time</h3>
          <p class="uppercase ff-serif">3 days</p>
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

  .grid-container--destination > img {
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
    .grid-container--destination {
      justify-items: start;
      align-content: start;
      grid-template-areas:
        ". title title ."
        ". image tabs ."
        ". image content .";
    }

    .grid-container--destination > img {
      max-width: 90%;
    }

    .destination-meta {
      --gap: min(5vw, 6rem);
      justify-content: start;
    }
  }
</style>
