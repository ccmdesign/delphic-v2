<template>
  <ccm-layout sidebar="false">
    <template #header>
      <ccm-hero>
        <template #top-bar>
          <top-nav project-logo="CCM Design"/>
        </template>

        <center-l size="wide">
          <stack-l>
            <h1 class="color:white">What we do</h1>
            <p class="color:white">Your positioning should be articulated clearly in a brief ~8-10 word statement accompanied by a button to learn more on your capabilities landing page. This button represents the primary action a prospect should take on this page.</p>
            <div>
              <base-button visual="primary" color="accent" el="nuxtLink" to="/what-we-do">Learn More</base-button>
            </div>
          </stack-l>
        </center-l>

        <template #bottom>
          test
        </template>
      </ccm-hero>
    </template>

    <template #main>
      <base-section id="portfolio" size="l">
        <center-l size="wide">
          <stack-l>
            <h2>What we have done</h2>
            <h3>Portfolio</h3>
            <p>You should feature case studies of your best work next, proving the applied value of your expertise.</p>
          </stack-l>
        </center-l>
      </base-section>

      <base-section id="testimonials" size="l">
        <center-l size="wide">
          <stack-l>
            <h2>What our clients say</h2>
            <h3>Testimonials</h3>
            <p>A happy client is always a better salesperson for you than you can be for yourself. Let them provide the social proof your prospects need.</p>
          </stack-l>
        </center-l>
      </base-section>

      <base-section id="insights" size="l">
        <center-l size="wide">
          <stack-l>
            <h2>What we say</h2>
            <h3>Insights</h3>
            <p>Finally, here is where you can feature the material that probably changes most frequently — your marketing content.</p>
          </stack-l>
        </center-l>
      </base-section>
      
    </template>
  </ccm-layout>
</template>

<script setup>

</script>

<style scoped lang="scss">

</style>
