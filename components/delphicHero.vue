<template>
  <ccm-hero class="hero">
    <template #top-bar>
      <delphic-top-bar></delphic-top-bar>
    </template>
    <center-l measure="1208px">
      <div class="center-hero">
        <h1>
          Building
          <span>The future</span>
          <span>Together</span>
        </h1>
      </div>
    </center-l>
  </ccm-hero>
</template>
<script>
</script>
<style lang="scss" scoped>
.hero {
  min-height: 781px;
  position: relative;
  background-color: hsl(0, 0%, 0%);
  padding-block: var(--s2);
  background-image: url("/images/hero.png");
  background-position: 30%;
  background-size: contain;

  .center-hero {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 60px;
    padding-bottom: 50px;

    @media screen and (max-width: 481px) {
      padding-bottom: 0;
      padding-right: 0;
    }
  }


  h1 {
    font-family: var(--inter);
    color: transparent;
    background-clip: text;
    background: radial-gradient(69.09% 381.13% at 1.86% 0%, rgba(255, 255, 255, 0.3) 2.49%, #FFFFFF 67.52%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 5.3244rem;
    line-height: 4.5788rem;
    letter-spacing: -1.5%;
    font-weight: 700;
    margin-top: -28.8px;

    @media screen and (max-width: 481px) {
      font-size: 3.75rem;
      line-height: 3.25rem;

      span {
        margin: 0 !important;
      }
    }

    span {
      display: block;

      &:first-child {
        margin-left: 4.375rem;
      }

      &:last-child {
        margin-left: 13.125rem;
      }
    }
  }
}
</style>