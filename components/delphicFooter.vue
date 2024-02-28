<template>
  <footer class="delphic-footer">
    <center-l measure="1208px">
      <div class="address-links">
        <address>
          1959 Loiza Street Station Suite 410, <br /> Ocean Park, 00911, Puerto Rico
        </address>
        <ul>
          <li v-for="menu in menuData">
            <!-- <NuxtLink :to="menu.url">
              {{ menu.label }}
            </NuxtLink> -->
            <a :href="menu.url">
              {{ menu.label }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="/images/logo.svg" />
      </div>
    </center-l>
    <center-l measure="1208px">
      <div class="socials">
        <ul>
          <li v-for="social in socialLinks">
            <icon :name="social.name" />
          </li>
        </ul>
      </div>
      <div class="ccm">
        <a href="https://www.ccmdesign.ca/"
          target="_blank">CCM Design - {{ new Date().getFullYear() }}</a>
      </div>
    </center-l>
  </footer>
</template>
<script setup>
import Icon from './Icons/Icon.vue';
const { menu: menuData, socialLinks } = useMenu()
</script>
<style lang="scss" scoped>
.delphic-footer {
  background-color: hsl(var(--secondary-hsl));
  color: hsl(var(--white-hsl));
  font-family: var(--tt-comons);
  padding-bottom: 0;
  padding-top: 1.5625rem;

  .center {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    &:first-of-type {
      padding-bottom: 2.6875rem;
      border-bottom: 1px solid hsl(199, 98%, 64%);
      margin-bottom: 1.875rem;
    }

    &:last-of-type {
      border-bottom: 3px solid hsl(var(--primary-hsl));
      padding-bottom: 2.8125rem;
    }

    .address-links {
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 350;

      address {
        margin-bottom: 2.5rem;
        font-style: normal;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 1.3125rem;
        padding-left: 0;

        li a {
          font-family: var(--raleway);
          color: hsl(var(--white-hsl));
          text-decoration: none;
          transition: color 0.2s ease-in;
          font-weight: 500;

          &:hover {
            color: hsl(var(--accent-hsl))
          }
        }
      }
    }

    .socials {
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        padding-left: 0;

        li {
          transition: color 0.2s ease-in;

          &:hover {
            color: hsl(var(--accent-hsl));
          }
        }
      }
    }

    .ccm {
      a {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: 0px;
        text-align: left;
        text-decoration: none;
        color: hsl(var(--white-hsl));
        transition: color 0.2s ease-in;

        &:hover {
          color: hsl(var(--accent-hsl));
        }
      }
    }
  }
}
</style>