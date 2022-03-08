<script lang="ts">
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import DesignSystem from "./pages/DesignSystem.svelte";

  const urls = {
    home: "/",
    designSystem: "/design-system",
  };

  const routes = {
    [urls.home]: Home,
    [urls.designSystem]: DesignSystem,
    // TODO: add not found page
  };
</script>

<!-- <a href={urls.home} use:link>Home</a>
<a href={urls.designSystem} use:link>Design System</a> -->
<Router {routes} />
