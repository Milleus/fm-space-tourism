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
</script>

<Router {routes} />
