<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialValue: {
    type: Boolean,
    default: false
  },
  textInput: {
    type: String,
  },
  id: {
    type: String,
  },
});

const isChecked = ref(props.initialValue);

const emits = defineEmits(['checkboxChange']);

const handleChange = (event) => {
  const newValue = event.target.checked;
  emits('checkboxChange', newValue);
};

</script>

<template>
  <div class="checkbox-slider">
    <div class="checkbox-slider__inner">
      <span v-if="textInput">{{ textInput }}</span>
      <label class="checkbox-slider__label" :for="id">
        <input type="checkbox" :id="id" :checked="isChecked" @change="handleChange" />
        <div class="checkbox-slider__slider checkbox-slider__round"></div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-slider {

  // .checkbox-slider__inner
  &__inner {
    display: flex;
    gap: 16px;
    align-items: center;

    @include media-medium {
      gap: 12px;
    }

    @include media-small {
      gap: 8px;
    }

    & span {
      color: $base-01;
      @include monts-r20;

      @include media-medium {
        @include monts-r18;
      }

      @include media-small {
        @include monts-r14;
      }
    }
  }

  // .checkbox-slider__label
  &__label {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 28px;
    box-sizing: border-box;

    @include media-small {
      width: 46px;
      height: 24px;
    }

    & input {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      width: 100%;

      &:checked {
        &+.checkbox-slider__slider {
          background-color: $primary-01;

          &:before {
            transform: translate(24px, -50%);

            @include media-small {
              transform: translate(22px, -50%);
            }
          }
        }
      }
    }

  }

  // .checkbox-slider__slider
  &__slider {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 52px;
    height: 28px;
    background-color: $base-05;
    cursor: pointer;
    border-radius: 24px;
    @include defaultTransition;

    @include media-small {
      width: 46px;
      height: 24px;
    }

    @include hover {
      background-color: $primary-03;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      height: 24px;
      width: 24px;
      left: 2px;
      border-radius: 50%;
      transform: translateY(-50%);
      background-color: $base-06;
      @include defaultTransition;

      @include media-small {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
