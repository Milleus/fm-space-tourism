<script lang="ts" context="module">
  export const PageUrls: { [key: string]: string } = {
    DESIGN_SYSTEM: "/design-system",
    HOME: "/",
    DESTINATION: "/destination",
    CREW: "/crew",
    TECHNOLOGY: "/technology",
  };
</script>

<script lang="ts">
  import Router from "svelte-spa-router";

  import Crew from "./pages/Crew.svelte";
  import DesignSystem from "./pages/DesignSystem.svelte";
  import Destination from "./pages/Destination.svelte";
  import Home from "./pages/Home.svelte";
  import Technology from "./pages/Technology.svelte";

  const routes = {
    [PageUrls.DESIGN_SYSTEM]: DesignSystem,
    [PageUrls.HOME]: Home,
    [PageUrls.DESTINATION]: Destination,
    [PageUrls.CREW]: Crew,
    [PageUrls.TECHNOLOGY]: Technology,
  };

  const handleClick = () => {
    const main = document.querySelector("#main") as HTMLElement;
    main && main.focus();
  };
</script>

<button class="skip-to-content" on:click={handleClick}>Skip to content</button>

<Router {routes} />

<style>
  .skip-to-content {
    position: absolute;
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
</style>
