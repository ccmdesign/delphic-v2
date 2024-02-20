<template>
  <ccm-layout sidebar="false">
    <template #header>
      <ccm-hero>
        <template #top-bar>
          <top-nav project-logo="CCM Design"/>
        </template>

        <center-l size="wide">
          <stack-l>
            <h1 class="color:white">Service 1</h1>
          </stack-l>
        </center-l>
      </ccm-hero>
    </template>

    <template #main>
      <base-section id="what-we-do" size="l">
        <center-l size="wide">
          <stack-l>
            <h2>Service 1</h2>
            <h4>250-500 Words</h4>
            <p>This page should explain the goals, process, and outcomes of your service.</p>
          </stack-l>
        </center-l>
      </base-section>

      <base-section id="testimonial" size="l">
        <center-l size="wide">
          <ccm-testimonial />
        </center-l>
      </base-section>

      <base-section id="case-studies" size="l">
        <center-l size="wide">
          <stack-l>
            <h2>Related Case Studies</h2>
            <p>This list represents the primary action a prospect should take next: to learn more detail about your services/disciplines on separate pages. It should be easily scannable.</p>
          </stack-l>
        </center-l>
      </base-section>
      
      <base-section id="cta" size="l">
        <center-l size="wide">
          <ccm-cta />
        </center-l>
      </base-section>
      
    </template>
  </ccm-layout>
</template>

<script setup>

// Use this if you want to overwrite the default head tags, mainly the OpenGraph tags.

// import { useHead } from '@nuxtjs/composition-api'

// useHead(() => ({
//   title: 'Page Title',
//   meta: [
//     { hid: 'og:title', property: 'og:title', content: 'Page Title' },
//     { hid: 'og:description', property: 'og:description', content: 'Page Description' },
//     { hid: 'og:image', property: 'og:image', content: 'https://example.com/page-image.jpg' },
//     { hid: 'og:url', property: 'og:url', content: 'https://example.com/page-url' },
//     // other Open Graph tags...
//   ],
// }))
</script>

<style scoped lang="scss">

</style>
