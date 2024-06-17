<script setup>
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue';
import {useOutsideClick} from '@/app/js/utils.js';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(props.modelValue);
const selectRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);
  isOpen.value = false;
};

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue;
});

useOutsideClick(selectRef, () => {
  isOpen.value = false;
})

</script>

<template>
  <div class="custom-select" ref="selectRef" :class="isOpen ? 'show' : ''">
    <div class="selected-option icon-arrow-down" @click="toggleDropdown">{{ selectedOption }}</div>
    <ul class="dropdown">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;

  &.show {
    & .dropdown {
      visibility: visible;
      opacity: 1;
    }

    & .selected-option {
      border: 1px solid $base-01;

      &::before {
        transform: rotate(180deg);
      }
    }
  }
}

.selected-option {
  padding: 15px 16px;
  background-color: $base-06;
  border: 1px solid $base-06;
  height: 56px;
  outline: none;
  border-radius: 8px;
  color: $base-01;
  @include monts-r20;
  cursor: pointer;
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

  &::before {
    position: absolute;
    right: 16px;
    font-size: 24px;

    @include media-small {
      top: 10px;
      font-size: 20px;
    }
  }

  @include hover {
    border: 1px solid $primary-01;
  }
}

.dropdown {
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
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 50;
  @include defaultTransition;
}

.dropdown li {
  padding: 16px;
  @include monts-r20;
  cursor: pointer;
  @include defaultTransition;

  @include media-medium {
    height: 48px;
    @include monts-r18;
  }

  @include media-small {
    height: 40px;
    @include monts-r14;
  }

  @include hover {
    background-color: $select-hover;
  }
}
</style>
