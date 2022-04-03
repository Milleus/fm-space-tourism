<script lang="ts">
  import { Paths } from "../paths";
  import Navigation from "../shared-components/Navigation.svelte";
</script>

<header class="primary-header flex">
  <a class="skip-to-content" href="#main">Skip to content</a>

  <div>
    <img class="logo" src="assets/shared/logo.svg" alt="space tourism logo" />
  </div>

  <div class="line" />

  <Navigation
    items={[
      { href: Paths.HOME, text: "Home" },
      { href: Paths.DESTINATION, text: "Destination" },
      { href: Paths.CREW, text: "Crew" },
      { href: Paths.TECHNOLOGY, text: "Technology" },
    ]}
    currentHref={window.location.pathname}
  />
</header>

<style>
  .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  .skip-to-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    background: hsl(var(--clr-white));
    color: hsl(var(--clr-dark));
    padding: 0.5em 1em;
    margin-inline: auto;
    transform: translateY(-100%);
    transition: transform 250ms ease-in;
  }

  .skip-to-content:focus {
    transform: translateY(0);
  }

  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  .line {
    display: none;
  }

  @media (min-width: 45em) {
    .line {
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      z-index: 2000;
      background: hsl(var(--clr-white) / 0.25);
    }
  }
</style>
