<script lang="ts">
  import Button from "../components/Button.svelte";
  import Navigation from "../components/Navigation.svelte";
  import SliderDots from "../components/SliderDots.svelte";
  import SliderNumbers from "../components/SliderNumbers.svelte";
  import Tabs from "../components/Tabs.svelte";
</script>

<main>
  <div class="container">
    <h1 class="uppercase ff-sans-cond fs-500 text-accent letter-spacing-1">
      Design system
    </h1>

    <section id="colors" style="margin: 4rem 0 8rem;">
      <h2 class="numbered-title" style="margin-bottom: 3rem;">
        <span>01</span> Colors
      </h2>
      <div class="flex">
        <div style="flex-grow: 1;">
          <div
            class="bg-dark text-white ff-serif fs-500"
            style="padding: 3rem 1rem 1rem; border: 1px solid white; margin-bottom: 1rem;"
          >
            #0B0D17
          </div>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">RGB</span>
            11, 13, 23
          </p>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">HSL</span>
            230°, 35%, 7%
          </p>
        </div>
        <div style="flex-grow: 1;">
          <div
            class="bg-accent text-dark ff-serif fs-500"
            style="padding: 3rem 1rem 1rem; border: 1px solid black; margin-bottom: 1rem;"
          >
            #D0D6F9
          </div>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">RGB</span> 208, 214, 249
          </p>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">HSL</span> 231°, 77%, 90%
          </p>
        </div>
        <div style="flex-grow: 1;">
          <div
            class="bg-white text-dark ff-serif fs-500"
            style="padding: 3rem 1rem 1rem; border: 1px solid black; margin-bottom: 1rem;"
          >
            #FFFFFF
          </div>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">RGB</span> 255, 255, 255
          </p>
          <p class="flex" style="--gap: 3.875rem;">
            <span class="text-accent">HSL</span> 0°, 0%, 100%
          </p>
        </div>
      </div>
    </section>

    <section id="typography" style="margin: 4rem 0 8rem;">
      <h2 class="numbered-title" style="margin-bottom: 3rem;">
        <span>02</span> Typography
      </h2>
      <div class="flex">
        <div class="flow" style="flex-basis: 100%; --flow-space: 2.5rem;">
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Heading 1 - Bellefair Regular - 150px
            </p>
            <p class="uppercase ff-serif fs-900">Earth</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Heading 2 - Bellefair Regular - 100px
            </p>
            <p class="uppercase ff-serif fs-800">Venus</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Heading 3 - Bellefair Regular - 56px
            </p>
            <p class="uppercase ff-serif fs-700">Jupiter & Saturn</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Heading 4 - Bellefair Regular - 32px
            </p>
            <p class="uppercase ff-serif fs-600">Uranus, Neptune, & Pluto</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p
              class="uppercase text-accent ff-sans-cond fs-500 letter-spacing-1"
            >
              So, you want to travel to space
            </p>
          </div>
        </div>
        <div class="flow" style="flex-basis: 100%; --flow-space: 2.5rem;">
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p class="uppercase ff-serif fs-500">384,400 km</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p class="uppercase ff-sans-cond fs-200 letter-spacing-3">
              Avg. distance
            </p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem;">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p class="uppercase ff-sans-cond fs-300 letter-spacing-2">Europa</p>
          </div>
          <div>
            <p class="text-accent" style="margin-bottom: 0.5rem; opacity: 50%;">
              Body Text
            </p>
            <p class="ff-sans-normal fs-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="interactive-elements" style="margin: 4rem 0 8rem;">
      <h2 class="numbered-title" style="margin-bottom: 3rem;">
        <span>03</span> Interactive elements
      </h2>

      <div
        class="grid"
        style="place-items: center; background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(81.5485px);"
      >
        <Navigation
          links={[
            { href: "#", text: "Active", isActive: true },
            { href: "#", text: "Hovered" },
            { href: "#", text: "Idle" },
          ]}
        />
      </div>
      <p
        class="text-accent ff-sans-normal fs-400"
        style="margin: 1.5rem 0 5rem; text-align: center;"
      >
        Different States of Navigation Bar
      </p>

      <div class="flex">
        <div
          class="grid"
          style="flex-basis: 100%; justify-content: center; text-align: center;"
        >
          <div>
            <Button href="#">Explore</Button>
            <p
              class="text-accent ff-sans-normal fs-400"
              style="margin: 1.5rem 0 4rem;"
            >
              Landing Page Main Button(Idle, & Hover)
            </p>
          </div>
        </div>

        <div class="grid" style="flex-basis: 100%; place-items: center;">
          <Tabs
            tabs={[
              { text: "Moon", isActive: true },
              { text: "Mars" },
              { text: "Europa" },
            ]}
          />
          <p
            class="text-accent ff-sans-normal fs-400"
            style="margin: 1.5rem 0 4rem;"
          >
            Tabs (Active, Hover, & Idle)
          </p>

          <SliderDots
            dots={[
              { srText: "Moon", isActive: true },
              { srText: "Mars" },
              { srText: "Europa" },
            ]}
          />
          <p
            class="text-accent ff-sans-normal fs-400"
            style="margin: 1.5rem 0 4rem;"
          >
            Slider 1 States (Active, Hover, & Idle)
          </p>

          <SliderNumbers length={3} activeIndex={0} />
          <p
            class="text-accent ff-sans-normal fs-400"
            style="margin: 1.5rem 0 4rem;"
          >
            Slider 2 States (Active, Hover, & Idle)
          </p>
        </div>
      </div>
    </section>
  </div>
</main>
