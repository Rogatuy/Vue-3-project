<script setup>
import { ref } from 'vue';
import {useOutsideClick} from '@/app/js/utils.js';

const props = defineProps({
  countRangeUse: Number,
})

</script>

<template>
  <div class="filter-price">
    <div class="filter-price__inner">
      <div class="filter-price__title">
        <p>Цена</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-price {

  // .filter-price__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  // .filter-price__title
  &__title {
    color: $base-01;
    @include monts-m14;
  }
}
</style>
