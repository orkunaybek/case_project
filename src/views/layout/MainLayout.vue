<template>
  <div>
    <Header />
    <div class="main container">
      <slot />
      <!-- <Modal
        v-if="modal.show"
        :title="modal.title"
        @closed="closedModal"
      /> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
// import Modal from '@/components/Modal';

export default {
  name: 'MainLayout',
  components: {
    Header,
    // Modal,
  },
  data() {
    return {
      modal: {
        title: 'Login',
        show: true,
      },
    };
  },
};
</script>

<style lang="scss"></style>
