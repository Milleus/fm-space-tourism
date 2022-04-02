<script lang="ts">
  import { data } from "../data";
  import Header from "../components/Header.svelte";
  import SliderDots from "../shared-components/SliderDots.svelte";

  const { crew } = data;
  const panelPrefix = "crew";
  let tabIndex: number = 0;

  const tabNames = crew.map((crewMember) => {
    return `The ${crewMember.role}`;
  });

  const handleUpdate = (e: CustomEvent<{ index: number }>) => {
    tabIndex = e.detail.index;
  };
</script>

<div class="crew">
  <Header />

  <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title">
      <span aria-hidden="true">02</span> Meet your crew
    </h1>

    <div class="dots">
      <SliderDots
        names={tabNames}
        ariaLabel="crew member list"
        ariaControlsPrefix={panelPrefix}
        activeIndex={tabIndex}
        on:update={handleUpdate}
      />
    </div>

    {#each crew as crewMember, i}
      <article
        id={`${panelPrefix}-${i}`}
        role="tabpanel"
        tabindex={tabIndex === i ? 0 : -1}
        data-visible={i === tabIndex}
        class="crew-info flow"
      >
        <header class="flow">
          <h2 class="uppercase ff-serif fs-600">{crewMember.role}</h2>
          <p class="uppercase ff-serif fs-700">{crewMember.name}</p>
        </header>
        <p class="text-accent">{crewMember.bio}</p>
      </article>
    {/each}

    {#each crew as crewMember, i}
      <picture data-visible={i === tabIndex}>
        <source srcset={crewMember.images.webp} type="image/webp" />
        <img src={crewMember.images.png} alt={crewMember.name} />
      </picture>
    {/each}
  </main>
</div>

<style>
  .crew {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    background-size: cover;
    background-position: bottom center;
    background-image: url("../assets/crew/background-crew-mobile.jpg");
  }

  .grid-container--crew {
    --flow-space: 2rem;
    grid-template-areas:
      "title"
      "image"
      "tabs"
      "content";
  }

  .grid-container--crew > .numbered-title {
    grid-area: title;
  }

  .grid-container--crew > picture {
    grid-area: image;
    max-width: 60%;
    border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }

  .grid-container--crew > picture[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .grid-container--crew > .dots {
    grid-area: tabs;
  }

  .grid-container--crew > .crew-info {
    grid-area: content;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }

  .grid-container--crew > .crew-info[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .crew-info h2 {
    color: hsl(var(--clr-white) / 0.5);
  }

  .crew-info header {
    --flow-space: 0.75rem;
  }

  @media (min-width: 35em) {
    .crew {
      background-position: center center;
      background-image: url("../assets/crew/background-crew-tablet.jpg");
    }

    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .grid-container--crew {
      padding-bottom: 0;
      grid-template-areas:
        "title"
        "content"
        "tabs"
        "image";
    }
  }

  @media (min-width: 45em) {
    .crew {
      background-image: url("../assets/crew/background-crew-desktop.jpg");
    }

    .grid-container--crew {
      justify-items: start;
      align-content: start;
      grid-template-columns:
        minmax(1rem, 1fr)
        minmax(0, 37rem)
        minmax(0, 23rem)
        minmax(1rem, 1fr);
      grid-template-areas:
        ". title title ."
        ". content image image"
        ". tabs image image";
    }

    .grid-container--crew > picture {
      align-self: end;
      max-width: 90%;
    }
  }
</style>
