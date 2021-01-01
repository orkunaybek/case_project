<template>
  <div class="footer">
    <p>Footer</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: palette-color('gray');
}
</style>
