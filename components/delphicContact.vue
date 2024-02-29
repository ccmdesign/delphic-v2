<template>
  <section class="contact">
    <center-l measure="1208px">
      <h3>Contact</h3>
      <p>Need a service? Choose one of<br /> the channels on the page, and<br /> we'll get back to you soon!</p>
    </center-l>
  </section>
</template>
<style lang="scss" scoped>
.contact {
  height: 503px;
  background-image: url("/images/bg-pattern.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right top;
  width: 100%;

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h3 {
      font-family: var(--tt-comons);
      color: hsl(var(--secondary-hsl));
      font-size: 8.375rem;
      font-weight: 350;
      line-height: 7.9375rem;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 1.875rem;

      @media screen and (max-width: 481px) {
        font-size: 6.25rem;
        line-height: 5.85rem;
      }
    }

    p {
      font-family: var(--tt-comons);
      font-size: 1.8125rem;
      font-weight: 350;
      line-height: 2.125rem;
      letter-spacing: 0.12em;
      text-align: left;

      @media screen and (max-width: 481px) {
        font-size: 1.5rem;
        line-height: 1.30rem;
        font-weight: 400;
      }
    }
  }
}
</style>