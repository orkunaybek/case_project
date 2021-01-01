<template>
  <div v-on-clickaway="close" class="dropdown-container">
    <div @click="toggle" class="dropdown-toggle">
      {{ getUserInfo.name }}
    </div>
    <div v-if="isOpen" class="dropdown-menu">
      <li class="dropdown-link">{{ getUserInfo.email }}</li>
      <li class="dropdown-link logout" @click="logout">Logout</li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';

const initUser = {
  name: '',
  email: '',
  password: '',
};

export default {
  name: 'UserDropdown',
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters(['getUserInfo']),
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      this.$store.dispatch('setUserInfo', initUser);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  &-container {
    position: relative;
    z-index: 3;
  }
  &-menu {
    position: absolute;
    top: calc(100% + $gutter);
    right: 0;
    padding: $gutter $gutter * 2;
    background: #fff;
    box-shadow: $secondary-shadow;
    max-width: 250px;
    border-radius: $main-radius;
  }
  &-link {
    cursor: pointer;
    color: palette-color('blue');
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: $gutter 0;
    &:hover {
      color: palette-color('green');
    }
    &.logout {
      color: palette-color('red');
    }
  }
}
</style>
