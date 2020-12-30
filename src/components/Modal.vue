<template>
  <div>
    <div class="modal-content">
      <div v-if="title">{{ title }}</div>
      <div class="modal-content-wrapper modal-content-center">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="modal-backdrop force-to-close" @click="closeModal"></div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  created() {
    document.body.style.overflow = 'hidden';
  },
  methods: {
    closeModal(e) {
      if (e.target.classList.contains('force-to-close')) {
        this.$emit('closed', true);
        document.body.style.overflow = 'unset';
      }
    },
  },
};
</script>
<style scoped lang="scss">
.modal {
  &-content {
    position: fixed;
    width: 40vw;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    overflow: hidden; // Alt radius gorunmemesi durumu icin
    margin: auto;
    z-index: 41;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 30px;

    &-text {
      &-center {
        text-align: center;
      }
    }
    &-wrapper {
      display: block;
      max-height: 60vh;
      overflow-y: auto;
      position: relative;

      &-nospace {
        padding: 0 !important;
      }
    }
  }
  &-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
  }
}
</style>
