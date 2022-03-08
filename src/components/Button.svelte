<script lang="ts">
  export let href: string;
</script>

<a {href} class="large-button uppercase ff-serif text-dark bg-white">
  <slot />
</a>

<style>
  .large-button {
    font-size: 2rem;
    position: relative;
    z-index: 1;
    display: inline-grid;
    place-items: center;
    padding: 0 2em;
    aspect-ratio: 1;
    border-radius: 50%;
    text-decoration: none;
  }

  .large-button::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsl(var(--clr-white) / 0.15);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  .large-button:hover::after,
  .large-button:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
</style>
