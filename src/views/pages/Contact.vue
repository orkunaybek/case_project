<template>
  <div>
    <h1>{{ $t('context.menu.contact') }}</h1>
    <form @submit="sendForm" class="contact-form">
      <input
        v-model="form.name"
        class="form-control"
        :placeholder="$t(`context.contact.name`)"
        type="text"
      />
      <input
        v-model="form.email"
        class="form-control"
        :placeholder="$t(`context.contact.email`)"
        type="text"
      />
      <input
        v-model="form.phone"
        class="form-control"
        :placeholder="$t(`context.contact.phone`)"
        type="text"
      />
      <div class="form-select">
        <select v-model="form.country_code" class="form-control">
          <option value="none" selected disabled hidden>
            {{ $t(`context.contact.country`) }}
          </option>
          <option
            v-for="country in countryList"
            :key="country.id"
            :value="country.id"
            >{{ country.name }}</option
          >
        </select>
      </div>

      <textarea
        v-model="form.text"
        class="form-control"
        :placeholder="$t(`context.contact.comment`)"
      />
      <button class="btn btn-primary" type="submit">
        {{ $t(`context.contact.submit`) }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Contact',
  data() {
    return {
      countryList: [
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        country_code: 'none',
        text: '',
      },
    };
  },
  computed: {
    ...mapGetters(['getUserInfo']),
  },
  methods: {
    sendForm(e) {
      e.preventDefault();
    },
  },
  created() {
    this.form.name = this.getUserInfo.name || '';
    this.form.email = this.getUserInfo.email || '';
  },

  watch: {
    'getUserInfo.name': function(newVal) {
      this.form.name = newVal;
    },
    'getUserInfo.email': function(newVal) {
      this.form.email = newVal;
    },
  },
};
</script>

<style lang="scss">
.contact-form {
  width: 400px;
  margin: auto;
  .form-control {
    width: 400px;
  }
}
</style>
