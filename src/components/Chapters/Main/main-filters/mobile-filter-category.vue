<script setup>

</script>

<template>
  <div class="filter-category">
    <div class="filter-category__inner">
      <div class="filter-category__title">
        <p>Категория</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-category {

  // .filter-category__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  // .filter-category__title
  &__title {
    color: $base-01;
    @include monts-m14;
  }
}
</style>
