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
  height: 655px;
  background-image: url("/images/disrupting-bg.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .center {
    width: 100%;
  }

  h4 {
    color: hsl(var(--gray-hsl));
    font-weight: 350;
    font-size: 38px;
    line-height: 32px;
    margin-bottom: 12px;

    strong {
      font-weight: 700;
    }
  }

  h2 {
    font-size: 106px;
    font-weight: 100;
    line-height: 91px;
    color: hsl(var(--gray-hsl));
    margin-bottom: 64px;
  }

  .infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {

      span {
        font-family: var(--tt-comons);
        font-size: 68px;
        font-weight: 400;
        line-height: 81px;
        letter-spacing: 0.215em;
        text-align: left;
        color: hsl(var(--secondary-hsl));

        &:first-child {
          font-size: 23px;
          font-weight: 350;
          line-height: 27px;
          letter-spacing: 0.945em;
          text-align: left;
          color: hsl(var(--light-hsl));
          text-transform: uppercase;
        }
      }

    }
  }
}
</style>