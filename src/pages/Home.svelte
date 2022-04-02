<script lang="ts">
  import { Paths } from "../App.svelte";
  import Button from "../shared-components/Button.svelte";
  import Header from "../components/Header.svelte";
</script>

<div class="home">
  <Header />

  <main id="main" class="grid-container grid-container--home">
    <div>
      <h1 class="uppercase text-accent ff-sans-cond fs-500 letter-spacing-1">
        So, you want to travel to <span
          class="d-block ff-serif fs-900 text-white"
        >
          Space
        </span>
      </h1>
      <p class="text-accent">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>

    <div>
      <Button href={Paths.DESTINATION}>Explore</Button>
    </div>
  </main>
</div>

<style>
  .home {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    background-size: cover;
    background-position: bottom center;
    background-image: url("../assets/home/background-home-mobile.jpg");
  }

  @media (min-width: 35em) {
    .home {
      background-position: center center;
      background-image: url("../assets/home/background-home-tablet.jpg");
    }
  }

  @media (min-width: 45em) {
    .home {
      background-image: url("../assets/home/background-home-desktop.jpg");
    }

    .grid-container--home {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }

    .grid-container--home > *:first-child {
      grid-column: 2;
    }

    .grid-container--home > *:last-child {
      grid-column: 3;
    }
  }
</style>
