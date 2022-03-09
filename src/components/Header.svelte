<script lang="ts">
  import { link } from "svelte-spa-router";
  import { PageUrls } from "../App.svelte";

  let isMenuOpen: boolean = false;

  const navItems = [
    { href: PageUrls.HOME, text: "Home" },
    { href: PageUrls.DESTINATION, text: "Destination" },
    { href: PageUrls.CREW, text: "Crew" },
    { href: PageUrls.TECHNOLOGY, text: "Technology" },
  ];

  const toggleMenu = (): void => {
    isMenuOpen = !isMenuOpen;
  };

  const checkActive = (href: string): boolean => {
    const hashPath = window.location.hash.split("#")[1];

    if (!hashPath && href === PageUrls.HOME) {
      return true;
    }

    return hashPath === href ? true : false;
  };
</script>

<header class="primary-header flex">
  <div>
    <img class="logo" src="assets/shared/logo.svg" alt="space tourism logo" />
  </div>

  <div class="line" />

  <button
    class="mobile-nav-toggle"
    aria-controls="primary-navigation"
    aria-expanded={isMenuOpen}
    on:click={toggleMenu}
  >
    <span class="sr-only">Menu</span>
  </button>

  <nav>
    <ul
      id="primary-navigation"
      data-visible={isMenuOpen}
      class="primary-navigation underline-indicators flex"
    >
      {#each navItems as navItem, i}
        {@const active = checkActive(navItem.href)}
        <li class:active>
          <a
            class="uppercase ff-sans-cond text-white letter-spacing-2"
            href={navItem.href}
            use:link
          >
            <span aria-hidden="true">{i < 10 ? `0${i}` : `${i}`}</span
            >{navItem.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  .mobile-nav-toggle {
    display: none;
  }

  .primary-navigation {
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl(var(--clr-dark) / 0.95);
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
    padding: var(--underline-gap, 1rem) 0;
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

  @supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
      background: hsl(var(--clr-white) / 0.05);
      backdrop-filter: blur(1.5rem);
    }
  }

  @media (max-width: 35rem) {
    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent;
      border: 0;
      background-image: url("../assets/shared/icon-hamburger.svg");
      background-repeat: no-repeat;
      background-position: center;
      width: 1.5rem;
      aspect-ratio: 1;
    }

    .mobile-nav-toggle[aria-expanded="true"] {
      background-image: url("../assets/shared/icon-close.svg");
    }

    .mobile-nav-toggle:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }

    .primary-navigation {
      --underline-gap: 0.5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      margin: 0;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;
    }

    .primary-navigation.underline-indicators > .active {
      border-color: transparent;
    }

    .primary-navigation.underline-indicators > .active:hover,
    .primary-navigation.underline-indicators > .active:focus {
      border-color: hsl(var(--clr-white) / 0.5);
    }

    .primary-navigation[data-visible="true"] {
      transform: translateX(0);
    }
  }

  @media (min-width: 35em) {
    .primary-navigation {
      padding-inline: clamp(3rem, 7vw, 7rem);
    }
  }

  @media (min-width: 35em) and (max-width: 44.999em) {
    .primary-navigation a > span {
      display: none;
    }
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

    .primary-navigation {
      margin-block: 2rem;
    }
  }
</style>
