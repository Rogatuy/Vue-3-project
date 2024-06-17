<script setup>
  import MainInfo from './sections/main-info/main-info.vue';
  import MainCatalog from './sections/main-catalog/main-catalog.vue';
  import MainRansom from './sections/main-ransom/main-ransom.vue';
</script>

<template>
  <div class="main-page">
    <div class="main-page__inner">
      <MainInfo />
      <MainCatalog />
      <MainRansom />
    </div>
  </div>
</template>

<style lang="scss">
.main-page {

  // .main-page__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 96px;
    padding-bottom: 96px;
    padding-top: 24px;

    @include media-large {
      gap: 88px;
      padding-bottom: 88px;
    }

    @include media-medium {
      gap: 80px;
      padding-bottom: 80px;
      padding-top: 16px;
    }

    @include media-small {
      gap: 72px;
      padding-bottom: 72px;
      padding-top: 20px;
    }

    @include media-extra-small {
      gap: 64px;
      padding-bottom: 64px;
    }
  }
}
</style>
