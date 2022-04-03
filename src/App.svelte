<script lang="ts">
  import page from "page";

  import { Paths } from "./paths";
  import Crew from "./pages/Crew.svelte";
  import DesignSystem from "./pages/DesignSystem.svelte";
  import Destination from "./pages/Destination.svelte";
  import Home from "./pages/Home.svelte";
  import Technology from "./pages/Technology.svelte";

  const routes = [
    { path: Paths.DESIGN_SYSTEM, component: DesignSystem },
    { path: Paths.HOME, component: Home },
    { path: Paths.DESTINATION, component: Destination },
    { path: Paths.CREW, component: Crew },
    { path: Paths.TECHNOLOGY, component: Technology },
  ];

  let component = null;

  routes.forEach((route) => {
    page(route.path, () => {
      component = route.component;
    });
  });

  page.start();
</script>

<svelte:component this={component} />
