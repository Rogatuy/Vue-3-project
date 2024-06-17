<script setup>
import { ref } from 'vue';
import {useOutsideClick} from '@/app/js/utils.js';

const props = defineProps({
  countRangeUse: Number,
})

const isModalOpen = ref(false);
const rangeRef = ref(null);

const toggleModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
};

useOutsideClick(rangeRef, () => {
  isModalOpen.value = false;
})

</script>

<template>
  <div class="range-modal-block" ref="rangeRef" :class="isModalOpen ? 'show' : ''">
    <button class="range-modal-block__button" @click="toggleModalOpen">
      <span>Цена, ₽</span>
      <span v-if="props.countRangeUse">{{props.countRangeUse}}</span>
    </button>
    <div v-if="isModalOpen" class="range-modal" @click.stop="">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.range-modal-block {
  position: relative;

  &.show {
    & .range-modal {
      visibility: visible;
      opacity: 1;
    }

    & .range-modal-block__button {
      border: 1px solid $base-01;
    }
  }

  //.range-modal-block__button
  &__button {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 15px 24px;
    background-color: $base-05;
    border: 1px solid $base-05;
    height: 56px;
    border-radius: 8px;
    color: $base-01;
    @include monts-r20;
    @include defaultTransition;

    @include media-medium {
      padding: 13px 16px;
      height: 48px;
      @include monts-r18;
    }

    @include media-small {
      padding: 11px 16px;
      height: 40px;
      @include monts-r14;
    }

    @include hover {
      border-color: $primary-01;
    }

    & span {
      &:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background-color: $base-04;
        color: $base-03;
        @include monts-r14;
      }
    }
  }
}

.range-modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 400px;
  height: 144px;
  border-radius: 16px;
  background-color: $base-06;
  box-shadow: 2px 4px 12px 0px #0B0B0B1A;
  padding: 0;
  margin: 0;
  z-index: 50;
  @include defaultTransition;
}
</style>
