<script setup>
  import Catalog from './sections/catalog/catalog.vue';
</script>

<template>
  <div class="catalog-page">
    <div class="catalog-page__inner">
      <Catalog />
    </div>
  </div>
</template>

<style lang="scss">
.catalog-page {

  // .catalog-page__inner
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
