<template>
  <header class="header">
    <nav class="nav container">
      <div class="nav-brand">Nav</div>
      <ul class="nav-list">
        <li>
          <router-link class="nav-link" :to="{ path: routes[0].path }">{{
            $t('context.menu.home')
          }}</router-link>
        </li>
        <li>
          <router-link class="nav-link" :to="{ path: routes[1].path }">{{
            $t('context.menu.contact')
          }}</router-link>
        </li>
        <li class="form-select">
          <select v-model="$i18n.locale" @change="changeLanguage" name="langs">
            <option
              v-for="(lang, i) in langs"
              :key="`Lang-${i}`"
              :value="lang"
              >{{ lang }}</option
            >
          </select>
        </li>
        <div v-if="!getUserInfo" @click="openLogin" class="login">
          Login
        </div>
        <div v-else>
          Logout
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import { routes } from '@/router/routes';
import { mapGetters } from 'vuex';

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
    openLogin() {},
  },
  computed: {
    ...mapGetters(['getUserInfo']),
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
  .nav-list {
    display: flex;
  }
  .nav-link {
    display: block;
    padding: 10px;
  }
}
</style>
