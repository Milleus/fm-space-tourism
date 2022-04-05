<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import { fade } from "svelte/transition";

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

  /* Swipe animation */
  let container = null;
  let x0 = null;

  onMount(() => {
    container = document.querySelector<HTMLElement>(".crew");
    container.style.setProperty("--length", crew.length.toString());
    container.style.setProperty("--index", tabIndex.toString());
  });

  afterUpdate(() => {
    container.style.setProperty("--index", tabIndex.toString());
  });

  const unify = (e: MouseEvent | TouchEvent) => {
    return e instanceof TouchEvent ? e.changedTouches[0] : e;
  };

  const handleLock = (e: MouseEvent | TouchEvent) => {
    x0 = unify(e).clientX;
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (x0 || x0 === 0) {
      const winWidth = window.innerWidth;
      const dx = unify(e).clientX - x0;
      const sign = Math.sign(dx);
      let threshold = ((sign * dx) / winWidth).toFixed(2);

      if (
        (tabIndex > 0 || sign < 0) &&
        (tabIndex < crew.length - 1 || sign > 0) &&
        Number(threshold) > 0.2
      ) {
        tabIndex = tabIndex - sign;
      }

      x0 = null;
    }
  };

  const preventDragNavigation = (e: TouchEvent) => {
    e.preventDefault();
  };
</script>

<div class="crew">
  <Header />

  <main
    id="main"
    class="grid-container grid-container--crew flow"
    in:fade
    on:mousedown={handleLock}
    on:touchstart={handleLock}
    on:mouseup={handleMove}
    on:touchend={handleMove}
    on:touchmove={preventDragNavigation}
  >
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

    <section class="crew-images">
      {#each crew as crewMember, i}
        <picture data-visible={i === tabIndex}>
          <source srcset={crewMember.images.webp} type="image/webp" />
          <img src={crewMember.images.png} alt={crewMember.name} />
        </picture>
      {/each}
    </section>
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
    overflow: hidden;
    --index: 0;
    --length: 1;
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

  .grid-container--crew > .crew-images {
    grid-area: image;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    width: 100%; /* fallback */
    width: calc(var(--length) * 100%);
    transform: translate(calc(var(--index, 0) / var(--length) * -100%));
    transition: transform 300ms ease-in-out;
  }

  .grid-container--crew > .crew-images picture {
    display: flex;
    justify-content: center;
    width: 100%; /* fallback */
    width: calc(100% / var(--length));
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms linear 0ms, visibility 0ms linear 300ms;
  }

  .grid-container--crew > .crew-images picture[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transition: opacity 300ms linear 300ms, visibility 0ms linear 0ms;
  }

  .grid-container--crew > .crew-images picture img {
    max-width: 60%;
    pointer-events: none;
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

    .grid-container--crew > .crew-images {
      grid-area: image;
      justify-self: initial;
      align-items: initial;
      display: grid;
      grid-template-areas: "inner-image";
      width: 100%;
      transform: none;
      transition: none;
    }

    .grid-container--crew > .crew-images picture {
      grid-area: inner-image;
      align-self: end;
      display: block;
      justify-content: initial;
      width: 100%;
    }

    .grid-container--crew > .crew-images picture img {
      max-width: 90%;
    }
  }
</style>
