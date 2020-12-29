<template>
  <div class="modal-wrapper force-to-close" @click="closeModal">
    <div class="modal-content">
      <div >
        <a class="modal-close force-to-close" @click="closeModal">
      kapat
        </a>
        <div v-if="title" >{{ title }}</div>
      </div>
      <div class="modal-content-wrapper modal-content-center">
        <div>
          <slot></slot>
        </div>
      </div>
 
    </div>
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
    return {
 
    };
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
.modal-header {
  position: relative;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 100%;
}
.modal {
  &-wrapper {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 40;
    top: 0;
    left: 0;
    object-fit: contain;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.7);
  }
  &-content {
    width: 650px;
    overflow: hidden; // Alt radius gorunmemesi durumu icin
    margin: auto;
    z-index: 1;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    word-break: break-word;

    &-text {
      &-center {
        text-align: center;
      }
    }
    &-wrapper {
      display: block;
      max-height: 60vh;
      overflow-y: auto;

      &-nospace {
        padding: 0 !important;
      }
    }
  }
  &-close {
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 20px;
  }
  &-button-wrapper {
    display: flex;
    padding: 2px;
  }
}
</style>
