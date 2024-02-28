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
  }


  h1 {
    color: transparent;
    background-clip: text;
    background: radial-gradient(69.09% 381.13% at 1.86% 0%, rgba(255, 255, 255, 0.3) 2.49%, #FFFFFF 67.52%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 100px;
    line-height: 86%;
    letter-spacing: -1.5%;
    font-weight: 800;
    margin-top: -28.8px;

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