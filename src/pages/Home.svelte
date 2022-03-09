<script>
  import Button from "../components/Button.svelte";
  import Navigation from "../components/Navigation.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Space tourism website</title>
</svelte:head>

<div class="home">
  <a class="skip-to-content" href="#main">Skip to content</a>
  <header class="primary-header flex">
    <div>
      <img class="logo" src="assets/shared/logo.svg" alt="space tourism logo" />
    </div>
    <div class="line" />
    <Navigation
      links={[
        { href: "/", text: "Home", isActive: true },
        { href: "/destination", text: "Destination" },
        { href: "/crew", text: "Crew" },
        { href: "/technology", text: "Technology" },
      ]}
    />
  </header>

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
      <Button href="#">Explore</Button>
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

  .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
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

    .line {
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      z-index: 2000;
      background: hsl(var(--clr-white) / 0.25);
    }

    .grid-container--home {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
  }
</style>
