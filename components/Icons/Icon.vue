<template>
  <component :is="icons[name]"
    v-bind="$props" />
</template>
<script setup>
import Facebook from './Facebook.vue';
import Instagram from './Instagram.vue';
import Linkedin from './Linkedin.vue';
import Twitter from './Twitter.vue';
import Youtube from './Youtube.vue';

const props = defineProps({
  name: { type: String, required: true }
})

const icons = {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
}
</script>