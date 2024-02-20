<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box not-prose" :class="[type]">
    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named markdown component to render rich-text -->
        <Markdown :use="$slots.details" unwrap="p"></Markdown>
      </div>
    </details>
  </div>
</template>

<script setup>
// import icons from HeroIcons
// define props in <script>
const props = defineProps(["type"]);
</script>

<style scoped>
.info-box {
  background-color: red;
}
</style>
