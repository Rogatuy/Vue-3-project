<script setup>
// Imports
import { defineProps, defineEmits} from 'vue';

// Definitions
const props = defineProps({
  size: String,
  name: String,
  checkedStatus: Boolean,
});

const emits = defineEmits(['radioSizeValue']);

</script>

<template>
  <div class="option-sizes__checkbox size-checkbox">
    <label class="size-checkbox__label">
      <input type="radio" :value="props.size" :name="props.name" :checked="props.checkedStatus" @change="emits('radioSizeValue', props.size)" />
      <span>{{ props.size }}</span>
    </label>
  </div>
</template>


<style lang="scss" scoped>
.size-checkbox {

  // .size-checkbox__label
  &__label {
    & input {
      position: absolute;
      z-index: -1;
      visibility: hidden;
    }

    & span {
      display: flex;
      width: max-content;
      color: $base-04;
      @include monts-r20;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      @include defaultTransition;

      @include media-large {
        @include monts-r18;
      }
    }

    & input+span:hover {
      color: $base-01;
    }

    & input:checked+span {
      color: $base-01;
      border-bottom: 1px solid $base-01;
    }
  }
}
</style>
