import VueI18n from 'vue-i18n';
import Vue from 'vue';

import contentEN from '@/i18n/content/en';
import contentTR from '@/i18n/content/tr';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  messages: {
    tr: {
      context: { ...contentTR.context },
    },
    en: {
      context: { ...contentEN.context },
    },
  },
});
