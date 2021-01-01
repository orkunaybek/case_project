<template>
  <div>
    <h1>{{ $t('context.menu.contact') }}</h1>
    <form @submit="handleSubmit" class="contact-form">
      <div :class="{ hasError: $v.form.name.$error }">
        <input
          v-model="form.name"
          class="form-control"
          :placeholder="$t(`context.contact.name`)"
          type="text"
        />
      </div>
      <div :class="{ hasError: $v.form.email.$error }">
        <input
          v-model="form.email"
          class="form-control"
          :placeholder="$t(`context.contact.email`)"
          type="text"
        />
      </div>
      <div :class="{ hasError: $v.form.email.$error }">
        <input
          v-model="form.phonenumber"
          class="form-control"
          :placeholder="$t(`context.contact.phone`)"
          type="text"
        />
      </div>
      <Autocomplete
        :key="`${getLanguage}-list`"
        :placeholder="$t(`context.contact.country`)"
        :suggestions="countryList"
        :selection="form.country_code"
        @selected="selectSuggestion"
      />
      <div>
        <textarea
          v-model="form.text"
          class="form-control"
          :placeholder="$t(`context.contact.comment`)"
        />
      </div>

      <button class="btn btn-primary" type="submit">
        {{ $t(`context.contact.submit`) }}
      </button>
    </form>
  </div>
</template>

<script>
import Autocomplete from '@/components/CommonElements/Autocomplete';
import required from 'vuelidate/lib/validators/required';
import email from 'vuelidate/lib/validators/email';
import numeric from 'vuelidate/lib/validators/numeric';
import { countryListTr, countryListEn } from '@/constants/countryLists';
import { mapGetters } from 'vuex';

export default {
  name: 'Contact',
  components: {
    Autocomplete,
  },
  data() {
    return {
      countryList: [],
      form: {
        name: '',
        email: '',
        phonenumber: '',
        country_code: '',
        text: '',
      },
    };
  },
  computed: {
    ...mapGetters(['getUserInfo']),
    ...mapGetters(['getLanguage']),
  },
  methods: {
    selectSuggestion(value) {
      this.form.country_code = value;
    },
    sendForm() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...this.form }),
      };
      fetch('https://www.example.com', requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data.id));
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.sendForm();
    },
  },
  created() {
    this.form.name = this.getUserInfo.name || '';
    this.form.email = this.getUserInfo.email || '';
  },
  mounted() {
    this.countryList = countryListEn;
  },

  watch: {
    'getUserInfo.name': function(newVal) {
      this.form.name = newVal;
    },
    'getUserInfo.email': function(newVal) {
      this.form.email = newVal;
    },
    getLanguage: function(newVal) {
      switch (newVal) {
        case 'en':
          this.countryList = countryListEn;
          break;
        case 'tr':
          this.countryList = countryListTr;
          break;
      }
    },
  },

  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phonenumber: {
        required,
        numeric,
      },
    },
  },
};
</script>

<style lang="scss">
.contact-form {
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
  .form-control {
    width: 100%;
  }
  button {
    display: block;
    margin-left: auto;
  }
}
</style>
