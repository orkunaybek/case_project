<template>
  <div>
    <Header />
    <div class="main container">
      <slot />
    </div>
    <LoginModal />
  </div>
</template>

<script>
import Header from '@/components/Header';
import LoginModal from '@/components/LoginModal';

export default {
  name: 'MainLayout',
  components: {
    Header,
    LoginModal,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
