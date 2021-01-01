<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav-left">
        <img class="nav-brand" src="~@/assets/logo.png" alt="logo" />
        <div class="nav-page">{{ routeName }}</div>
      </div>
      <ul
        v-if="!isMobile || (isMobile && menuOpen)"
        :class="[isMobile ? 'mobile-nav' : '', 'nav-list']"
      >
        <li
          @click="closeMenu"
          v-for="route in routes"
          :key="`${route.key}-link`"
        >
          <router-link class="nav-link" :to="{ path: route.path }">{{
            $t(`context.menu.${route.key}`)
          }}</router-link>
        </li>
        <li v-if="!getUserInfo.password" @click="openLogin" class="login">
          <div class="nav-link">
            {{ $t(`context.login.login`) }}
          </div>
        </li>
        <li v-else>
          <div class="nav-link">
            <UserDropdown />
          </div>
        </li>
        <li>
          <div class="nav-link">
            <div class="form-select lang">
              <select
                v-model="$i18n.locale"
                @change="changeLanguage"
                class="form-control"
              >
                <option
                  v-for="(lang, i) in langs"
                  :key="`Lang-${i}`"
                  :value="lang"
                  >{{ lang }}</option
                >
              </select>
            </div>
          </div>
        </li>
      </ul>
      <a
        v-if="isMobile"
        href="#"
        @click="toggleMenu"
        :class="[menuOpen ? 'hamburgerx' : '', 'hamburger']"
      >
        <div class="line"></div>
      </a>
    </nav>
  </header>
</template>

<script>
import { routes } from '@/router/routes';
import { mapGetters } from 'vuex';
import UserDropdown from '@/components/UserDropdown';

export default {
  name: 'Header',
  components: {
    UserDropdown,
  },
  data() {
    return {
      routes: routes,
      langs: [...Object.keys(this.$i18n.messages)],
      menuOpen: false,
      isMobile: false,
      dropdownOpen: false,
    };
  },
  methods: {
    changeLanguage() {
      this.$store.dispatch('setLanguage', this.$i18n.locale);
    },
    openLogin() {
      this.$store.dispatch('setModalStatus', {
        modalName: 'loginModal',
        modalStatus: true,
      });
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
      this.menuOpen = false;
    },
  },
  computed: {
    ...mapGetters(['getUserInfo']),
    routeName() {
      return this.$t(
        `context.menu.${
          this.$route.name === 'home' ? 'name' : this.$route.name
        }`
      );
    },
  },

  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    menuOpen: function(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 20px 0;
  box-shadow: $main-shadow;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-left,
  &-list {
    display: flex;
    align-items: center;
  }
  &-link {
    display: block;
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: palette-color('blue');
    transition: all 0.3s ease;
    &:hover {
      color: palette-color('green');
    }
  }
  &-brand {
    width: 65px;
    margin-right: 20px;
  }
  &-page {
    color: palette-color('blue');
  }
}

.mobile-nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: auto;
  z-index: 2;
  & > li {
    display: block;
    width: 100%;
    text-align: center;
    padding: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid palette-color('blue');
    }
    .nav-link {
      padding: 0;
    }
  }
  .form-select {
    margin: auto;
  }
}
.hamburger {
  z-index: 3;
}
</style>
