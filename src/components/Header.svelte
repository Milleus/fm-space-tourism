<script lang="ts">
  import { PageUrls } from "../App.svelte";
  import Navigation from "../shared-components/Navigation.svelte";

  const getCurrentHref = (): string => {
    const { hash } = window.location;
    return hash ? hash : `#${PageUrls.HOME}`;
  };
</script>

<header class="primary-header flex">
  <div>
    <img class="logo" src="assets/shared/logo.svg" alt="space tourism logo" />
  </div>

  <div class="line" />

  <Navigation
    items={[
      { href: `#${PageUrls.HOME}`, text: "Home" },
      { href: `#${PageUrls.DESTINATION}`, text: "Destination" },
      { href: `#${PageUrls.CREW}`, text: "Crew" },
      { href: `#${PageUrls.TECHNOLOGY}`, text: "Technology" },
    ]}
    currentHref={getCurrentHref()}
  />
</header>

<style>
  .primary-header {
    justify-content: space-between;
    align-items: center;
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
