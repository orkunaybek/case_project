<template>
  <div>
    <div class="page-container">
      <Header />

      <div class="content-wrap container">
        <slot />
      </div>
      <Footer />
    </div>

    <LoginModal />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    LoginModal,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 100px;
}
</style>
