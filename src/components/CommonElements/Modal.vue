<template>
  <div>
    <div v-on-clickaway="closeModal" class="modal-content">
      <div class="modal-content-wrapper modal-content-center">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="modal-backdrop"></div>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Modal',
  mixins: [clickaway],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit('closed', true);
    },
  },
  created() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = 'auto';
  },
};
</script>
<style scoped lang="scss">
.modal {
  &-content {
    position: fixed;
    width: 100%;
    max-width: 400px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
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
      position: relative;
    }
  }
  &-backdrop {
    position: fixed;
    z-index: 40;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
  }
}
</style>
