<script lang="ts" context="module">
  export const PageUrls = {
    DESIGN_SYSTEM: "/design-system",
    HOME: "/",
    DESTINATION: "/destination",
    CREW: "/crew",
    TECHNOLOGY: "/technology",
  };
</script>

<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import DesignSystem from "./pages/DesignSystem.svelte";
  import Destination from "./pages/Destination.svelte";
  import Crew from "./pages/Crew.svelte";

  const routes = {
    [PageUrls.DESIGN_SYSTEM]: DesignSystem,
    [PageUrls.HOME]: Home,
    [PageUrls.DESTINATION]: Destination,
    [PageUrls.CREW]: Crew,
    // TODO: add not found page
  };
</script>

<Router {routes} />
