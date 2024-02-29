<template>
  <section class="disrupting-section">
    <center-l measure="1208px">
      <h4>
        Accelerating
        <br />success through
        <br /><strong>smart investments</strong>
      </h4>
      <h2>Disrupting industries</h2>
      <div class="infos">
        <div>
          <span style="margin-right: 2.3125rem;">Valuation</span>
          <span>$100M</span>
        </div>
        <div>
          <span style="margin-right: 5.625rem;">Founded</span>
          <span>2020</span>
        </div>
      </div>
    </center-l>
  </section>
</template>
<style lang="scss" scoped>
.disrupting-section {
  width: 100%;
  min-height: 655px;
  background-image: url("/images/disrupting-bg.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;

  .center {
    width: 100%;

    @media screen and (max-width: 481px) {
      width: 90%;
    }
  }

  h4 {
    color: hsl(var(--gray-hsl));
    font-weight: 350;
    font-size: 2.375rem;
    line-height: 2rem;
    margin-bottom: 0.75rem;

    strong {
      font-weight: 700;
    }
  }

  h2 {
    font-size: 6.625rem;
    font-weight: 100;
    line-height: 5.6875rem;
    color: hsl(var(--gray-hsl));
    margin-bottom: 4rem;

    @media screen and (max-width: 481px) {
      font-size: 5rem;
      line-height: 4rem;
    }
  }

  .infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;

    @media screen and (max-width: 821px) {
      flex-direction: column;
    }

    div {
      span {
        font-family: var(--tt-comons);
        font-size: 68px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0.215em;
        text-align: left;
        color: hsl(var(--secondary-hsl));

        @media screen and (max-width: 821px) {
          display: block;
          text-align: center;
        }

        &:first-child {
          font-size: 23px;
          font-weight: 350;
          line-height: 27px;
          letter-spacing: 0.945em;
          text-align: left;
          color: hsl(var(--light-hsl));
          text-transform: uppercase;

          @media screen and (max-width: 821px) {
            display: block;
            text-align: center;
            margin: 0 !important;
          }
        }
      }

    }
  }
}
</style>