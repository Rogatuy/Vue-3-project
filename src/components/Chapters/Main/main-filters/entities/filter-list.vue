<script setup>
import { ref, watch, onMounted, onUnmounted, defineEmits, defineProps, computed } from 'vue';

const props = defineProps({
  options: Array,
  selected: Array
});

const emits = defineEmits(['on-change']);

const toggleCheckbox = (category) => {
  let nextArray = [];
  if (props.selected.includes(category)) {
    nextArray = props.selected.filter((item) => item !== category);
  } else {
    nextArray = [...props.selected, category];
  }
  emits('on-change', nextArray);
};
</script>

<template>
  <div class="filter-list">
    <div class="checkbox-select" v-for="option in props.options" :key="option.id">
      <label class="checkbox-select__label " :for="option.id">
        <input type="checkbox" :id="option.id" :value="option.category" :checked="props.selected.includes(option.category)" @change="toggleCheckbox(option.category)" />
        <span class="checkbox-select__icon icon-check"></span>
        <span class="checkbox-select__text">{{ option.russianCategory }}</span>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-list {
  background-color: $base-06;
  list-style: none;
}

.checkbox-select {

  // .checkbox-select__label
  &__label {
    position: relative;
    display: flex;
    padding: 15px 16px 15px 56px;
    background-color: $base-06;
    cursor: pointer;

    @include hover {
      & .checkbox-select__icon {
        border-color: $primary-01;

        &::before {
          color: $primary-03;
        }
      }
    }

    @include media-medium {
      padding: 13px 16px 13px 56px;
    }

    @include media-small {
      padding: 11px 16px 11px 44px;
    }

    @media (max-width: 720px) {
      padding: 10px 16px 10px 28px;
    }

    & input {
      position: absolute;
      z-index: -1;
      visibility: hidden;

      &:checked {
        &+.checkbox-select__icon {
          background-color: $primary-01;
          border-color: $primary-01;

          &::before {
            color: $base-06;
          }
        }
      }
    }
  }

  // .checkbox-select__icon
  &__icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: $base-06;
    border: 1px solid $base-04;
    @include defaultTransition;

    @include media-small {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 720px) {
      left: 0;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      color: $base-06;
      @include defaultTransition;

      @include media-small {
        font-size: 20px;
      }
    }
  }

  // .checkbox-select__text
  &__text {
    position: relative;
    display: flex;
    width: max-content;
    color: $base-01;
    @include monts-r20;
    @include defaultTransition;

    @include media-medium {
      @include monts-r18;
    }

    @include media-small {
      @include monts-r14;
    }
  }
}
</style>
