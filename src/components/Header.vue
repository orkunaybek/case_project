<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav-left">
        <img class="nav-brand" src="~@/assets/logo.png" alt="logo" />
        <div class="nav-page">{{ routeName }}</div>
      </div>

      <ul class="nav-list">
        <li v-for="route in routes" :key="`${route.key}-link`">
          <router-link class="nav-link" :to="{ path: route.path }">{{
            $t(`context.menu.${route.key}`)
          }}</router-link>
        </li>
        <li class="form-select lang">
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
        </li>
        <div v-if="!getUserInfo.password" @click="openLogin" class="login">
          {{ $t(`context.login.login`) }}
        </div>
        <div v-else @click="logout">
          {{ $t(`context.login.logout`) }}
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import { routes } from '@/router/routes';
import { mapGetters } from 'vuex';

const initUser = {
  name: '',
  email: '',
  password: '',
};

export default {
  name: 'Header',
  data() {
    return {
      routes: routes,
      langs: [...Object.keys(this.$i18n.messages)],
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
    logout() {
      this.$store.dispatch('setUserInfo', initUser);
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
</style>
