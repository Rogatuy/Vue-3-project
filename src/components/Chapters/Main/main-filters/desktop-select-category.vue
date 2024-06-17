<script setup>
import { ref } from 'vue';
import {useOutsideClick} from '@/app/js/utils.js';

const isDropdownOpen = ref(false);
const selectRef = ref(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

useOutsideClick(selectRef, () => {
  isDropdownOpen.value = false;
})

</script>

<template>
  <div class="filter-select" ref="selectRef" @click="toggleDropdown" :class="isDropdownOpen ? 'show' : ''">
    <div class="filter-select-header icon-arrow-down">
      Категория
    </div>
    <div v-if="isDropdownOpen" class="filter-select-options" @click.stop="">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-select {
  position: relative;

  &.show {
    & .filter-select-header {
      border-color: $base-01;

      @include hover {
        border-color: $base-01;
      }

      &:before {
        transform: rotate(180deg);
      }
    }

    & .filter-select-options {
      visibility: visible;
      opacity: 1;
    }
  }
}

.filter-select-header {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 16px;
  height: 56px;
  background-color: $base-05;
  border: 1px solid $base-05;
  border-radius: 8px;
  min-width: 398px;
  @include monts-r20;
  color: $base-01;
  @include defaultTransition;

  @include media-medium {
    min-width: 293px;
    height: 48px;
    padding: 15px 13px;
    @include monts-r18;
  }

  @include media-small {
    min-width: 219px;
    height: 40px;
    padding: 11px 16px;
    @include monts-r14;
  }



  @include hover {
    border-color: $primary-01;
  }

  &::before {
    position: absolute;
    right: 16px;
    font-size: 24px;
  }
}

.filter-select-options {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  height: auto;
  max-height: 280px;
  overflow: auto;
  background-color: $base-06;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(11, 11, 11, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 50;
  @include defaultTransition;
}
</style>
