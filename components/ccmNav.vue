<template>
  <top-nav 
    class="ccm-main-menu" 
    project-logo="CCM Design" 
    :menu-data="menu" 
    color-mode="positive"
  />
</template>

<script setup>
const menu = [
  {
    label: 'What We Do',
    url: '/services',
    // submenu: [
    //   {
    //     label: 'UX Design',
    //     url: '/ux-design'
    //   },
    // ]
  },
  {
    label: 'Insights',
    url: '/insights',
    alignRight: 'false'      },
  {
    label: 'Contact',
    url: '/contact',
  }
  
]
</script>

<style lang="scss" scoped>
:deep(a) {
  color: var(--base-color);
}

:deep(a:hover) {
  text-decoration: none;
  cursor: pointer;
}

</style>
