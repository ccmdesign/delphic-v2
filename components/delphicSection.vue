<template>
  <base-section class="delphic-section">
    <center-l id="projects"
      measure="1208px">
      <h2>Projects</h2>
      <p>
        With our partners, we build solutions for a <br /> more sustainable and resilient future in one of<br /> the New
        World's most strategic international<br /> trade centers: Puerto Rico.
      </p>
    </center-l>
    <delphic-card>
      <div class="inner-card"
        v-for="box in boxes">
        <span class="text-decoration">{{ box.textDecoration }}</span>
        <img :src="`/images/logos/${box.img.src}`"
          :alt="box.img.alt"
          :style="{ marginBottom: box.marginBottom }" />
        <p class="inner-card-text">{{ box.text }}</p>
        <base-button color="secondary"
          visual="secondary">
          Read more
        </base-button>
        <div class="decoration">
          <div v-for="bullet in Array.from(Array(box.bullets).keys())"></div>
        </div>
      </div>
    </delphic-card>
  </base-section>
</template>

<script setup>
const boxes = ref([
  {
    img: {
      src: 'aguadila.png',
      alt: 'Aguadila logo'
    },
    text: 'The Aguadilla Research Center is a commercial property situated in an Opportunity Zone of the US Territory of Puerto Rico. The property spans 328,381 square feet and is suitable for various uses such as government contractors, financial institutions, banks, retail stores, or food outlets.',
    textDecoration: 'REAL ESTATE',
    marginBottom: '26px',
    bullets: 3
  },
  {
    img: {
      src: '4thought.png',
      alt: '4thought Technologies logo'
    },
    text: 'With a mission to support and empower the next generation of professional investors, 4Thought Technologies strives to help investors navigate the fast-paced and automated financial markets by providing tools to develop market insights, execute trades faster, and effectively manage risks. Backed by the U.S. National Science Foundation, 4Thought is a SaaS company founded by alums of Bloomberg, EY, JP Morgan, MIT, and Stripe that provides next-generation AI & data analytics infrastructure for institutional investors.',
    textDecoration: 'FINTECH',
    marginBottom: '34px',
    bullets: 3
  },
  {
    img: {
      src: 'silverton.png',
      alt: 'Silverton Mountain logo'
    },
    text: "North America's highest and steepest ski area, with no easy way down. Preserved in its natural state, a single lift carries you to 12,300 feet, offering direct access to untouched terrain and the challenge of 3,000-foot runs in a stunning cirque setting.",
    textDecoration: 'REAL ESTATE',
    marginBottom: '10px',
    bullets: 2
  },
  {
    img: {
      src: 'casa-grande.png',
      alt: 'Casa Grande logo'
    },
    text: "Casa Grande Wellness Retreat is a tranquil haven of peace located on a former coffee plantation in Puerto Rico. With 20 rooms set against a breathtaking mountainside and a serene river below, it's the perfect escape for relaxation.",
    textDecoration: 'HOSPITALITY',
    marginBottom: '22px',
    bullets: 2
  },
  {
    img: {
      src: 'sharenett.png',
      alt: 'ShareNett logo'
    },
    text: "ShareNett is a platform created exclusively for family offices. It aims to address their investment needs in alternative investments and private markets. ShareNett provides unparalleled access to investment solutions that aim to sustain and expand wealth over multiple generations, act as a gateway to any asset, any time, any place, and can be accessed from any device.",
    textDecoration: 'FINTECH',
    marginBottom: '38px',
    bullets: 3
  },
  {
    img: {
      src: 'gortons.png',
      alt: "Gorton's logo"
    },
    text: "Gorton's is a soil conditioner that improves the structure and texture of the soil. Ideal for agricultural and gardening use, Gorton's improves soil cohesion, thereby boosting water infiltration, aeration, and root penetration. Featuring a high cation exchange capacity (CEC), Gorton's efficiently attracts and retains essential nutrients, preventing leaching and enhancing availability to plant roots.",
    textDecoration: 'AGTECH',
    marginBottom: '26px',
    bullets: 3
  },
])
</script>

<style lang="scss"
  scoped>
  .delphic-section {
    background-image: url("/images/bg-pattern.png");
    background-size: auto;
    background-repeat: no-repeat;
    background-position: right top;

    h2 {
      font-size: 8.25rem;
      line-height: 10.125rem;
      color: hsl(var(--secondary-hsl));
      font-weight: 200;
      margin-bottom: 1.75rem;

      @media screen and (max-width: 481px) {
        font-size: 6.25rem;
        line-height: 7rem;
      }
    }

    p {
      font-size: 1.875rem;
      line-height: 2.6875rem;
      font-weight: 300;
      color: hsl(var(--primmary-hsl));

      @media screen and (max-width: 481px) {
        font-size: 1.25rem;
        line-height: 1.15rem;
        font-weight: 400;
      }
    }
  }
</style>