<template>
  <div class="layout" :sidebar="sidebar">
    <main>
      <slot name="main">
        <h2>Main</h2>
      </slot>
    </main>

    <aside v-if="sidebar.value == true">
      <slot name="sidebar">
        <h2>Sidebar</h2>
      </slot>
    </aside>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  sidebar: {
    type: Boolean,
    default: true
  },
});

const { sidebar } = toRefs(props)
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "main aside"
    "footer footer";
}

.layout[sidebar="false"] {
  grid-template-columns: 1fr;
  
  aside { display: none; }
}

header {
  grid-area: header;
  background-color: yellow;
}

main {
  grid-area: main;
  background-color: gray;
}

aside {
  grid-area: aside;
  background-color: blue;
}
</style>
