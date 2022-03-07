<script lang="ts">
  type Link = {
    href: string;
    text: string;
    isActive?: boolean;
  };

  export let links: Array<Link>;
  export let style: string = undefined;
</script>

<nav>
  <ul class="primary-navigation underline-indicators flex" {style}>
    {#each links as link, i}
      <li class={link.isActive && "active"}>
        <a class="uppercase text-white letter-spacing-2" href={link.href}>
          <span>{i < 10 ? `0${i}` : `${i}`}</span>{link.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .primary-navigation {
    --gap: 8rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .primary-navigation a {
    text-decoration: none;
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: 2em 0;
    border: 0;
    border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);
  }

  .underline-indicators > *:hover,
  .underline-indicators > *:focus {
    border-color: hsl(var(--clr-white) / 0.5);
  }

  .underline-indicators > .active {
    border-color: hsl(var(--clr-white) / 1);
  }
</style>
