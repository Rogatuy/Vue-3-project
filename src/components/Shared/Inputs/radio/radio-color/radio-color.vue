<script setup>
// Imports
import { defineProps, defineEmits} from 'vue';

// Definitions
const props = defineProps({
  color: String,
  name: String,
  checkedStatus: Boolean,
});

const emits = defineEmits(['radioColorValue']);

const handleChangeColor = (event) => {
  const newValue = event.target.value;
  emits('radioColorValue', newValue);
};
</script>

<template>
  <div class="color-checkbox">
    <label class="color-checkbox__label">
      <input type="radio" :name="props.name" :value="props.color" :checked="props.checkedStatus" @change="handleChangeColor" />
      <span></span>
    </label>
  </div>
</template>


<style lang="scss" scoped>
.color-checkbox {

  // .color-checkbox__label
  &__label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    & input {
      position: absolute;
      z-index: -1;
      visibility: hidden;
    }

    & span {
      position: relative;
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 32px;
        height: 32px;
        background-color: transparent;
        border: 1px solid $base-06;
        border-radius: 50%;
        @include defaultTransition;
      }

      @include media-large {
        @include monts-r18;
      }
    }

    & input[value="black"]+span {
      background-color: $checkbox-black;
    }

    & input[value="brown"]+span {
      background-color: $checkbox-brown;
    }

    & input[value="gray"]+span {
      background-color: $checkbox-gray;
    }

    & input[value="white"]+span {
      background-color: $checkbox-white;
      border: 1px solid $base-05;
    }

    & input+span:hover {
      &:before {
        border-color: $checkbox-hover;
      }
    }

    & input:checked+span {
      &:before {
        border-color: $checkbox-active;
      }
    }
  }
}
</style>
