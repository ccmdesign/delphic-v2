<template>
  <center-l measure="1208px">
    <header class="delphic-top-bar">
      <NuxtLink to="/">
        <img src="/images/logo.svg"
          alt="Delphic Ventures Logo" />
      </NuxtLink>
      <nav>
        <ul>
          <li v-for="menu in menuData">
            <NuxtLink :to="menu.url">
              {{ menu.label }}
            </NuxtLink>
          </li>
        </ul>
        <base-button color="secondary"
          visual="primary">
          Contact us
        </base-button>
      </nav>
    </header>
  </center-l>
</template>
<script setup>
const { menu: menuData } = useMenu()

</script>
<style lang="scss" scoped>
.delphic-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--raleway);
  font-size: 1.125rem;
  font-weight: 500;

  nav {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      margin-block: 0;
      border-right: 1px solid #37313c;
      margin-right: var(--s1);
      height: 100%;

      li {
        margin-right: var(--s2);
      }

      a {
        color: hsl(var(--white-hsl));
        text-decoration: none;
        transition: color 0.2s ease-in;

        &:hover {
          color: hsl(var(--accent-hsl))
        }
      }
    }
  }
}
</style>