<template>
  <Modal
    v-if="showModal"
    :title="$t(`context.login.login`)"
    @closed="closeModal"
  >
    <div>
      <div class="form-select lang">
        <select
          v-model="$i18n.locale"
          @change="changeLanguage"
          class="form-control"
        >
          <option v-for="(lang, i) in langs" :key="`Lang-${i}`" :value="lang">{{
            lang
          }}</option>
        </select>
      </div>
      <form @submit="saveUser">
        <input
          v-model="user.name"
          class="form-control"
          :placeholder="$t(`context.login.name`)"
          type="text"
        />
        <input
          v-model="user.email"
          class="form-control"
          :placeholder="$t(`context.login.email`)"
          type="email"
        />
        <input
          v-model="user.password"
          class="form-control"
          :placeholder="$t(`context.login.password`)"
          type="password"
        />
        <button class="btn btn-primary" type="submit">
          {{ $t(`context.login.login`) }}
        </button>
      </form>
    </div>
  </Modal>
</template>
<script>
import Modal from '@/components/Modal';
import { mapGetters } from 'vuex';

const initUser = {
  name: '',
  email: '',
  password: '',
};

export default {
  name: 'LoginModal',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'Login',
      user: { ...initUser },
      langs: [...Object.keys(this.$i18n.messages)],
    };
  },
  computed: {
    ...mapGetters(['getModalStatuses']),
    showModal() {
      return this.getModalStatuses.loginModal;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('setModalStatus', {
        modalName: 'loginModal',
        modalStatus: false,
      });
      this.user = { ...initUser };
    },
    saveUser(e) {
      e.preventDefault();
      this.$store.dispatch('setUserInfo', this.user);
      this.closeModal();
    },
    changeLanguage() {
      this.$store.dispatch('setLanguage', this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss"></style>
