<template>
  <div>
    <h1>{{ $t('context.menu.home') }}</h1>
    <p class="main-content">{{ $t('context.home.content') }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: auto;
}
</style>
