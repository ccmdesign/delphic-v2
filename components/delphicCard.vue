<template>
  <center-l class="delphic-card"
    measure="1208px">
    <slot />

  </center-l>
</template>
<style lang="scss">
.delphic-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.875rem;
  margin-top: 2.9375rem;

  @media screen and (max-width: 481px) {
    grid-template-columns: 1fr;
  }

  .inner-card {
    position: relative;
    background: #f6f6ec;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 25.9375rem;
    padding: 1.875rem 6.5rem 1.625rem 7.125rem;

    .inner-card-text {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
    }

    span.text-decoration {
      position: absolute;
      font-size: 2rem;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0.1em;
      text-align: center;
      top: 50%;
      left: 0.375rem;
      transform: translate(-50%, -0.375rem) rotate(-90deg);
      font-weight: bold;
      letter-spacing: 0.1em;
      color: hsl(var(--secondary-hsl));
      font-family: var(--inter);
    }

    .button {
      font-weight: 500;
      font-size: 1.3281rem;
      line-height: 1.5875rem;
      font-family: var(--tt-comons);
      color: var(--black-hsl);
      text-transform: uppercase;
      margin-top: auto;
    }

    .decoration {
      display: flex;
      gap: 10px;
      align-items: center;
      position: absolute;
      bottom: 1.25rem;
      right: 1.6875rem;

      div {
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 100%;
      }
    }
  }
}
</style>