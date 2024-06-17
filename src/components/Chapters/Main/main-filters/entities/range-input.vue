<script setup>
import { defineProps, defineEmits, computed, onMounted, onUnmounted, onUpdated } from "vue";
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

const props = defineProps({
  minLimit: Number,
  maxLimit: Number,
  value: Array
})

const emits = defineEmits(['on-change']);

function handleMinInputChange(event) {
  const nextValue = Number(event.target.value)
  emits('on-change', [nextValue, props.value[1]])
}
function handleMaxInputChange(event) {
  const nextValue = Number(event.target.value)
  emits('on-change', [props.value[0], nextValue])
}

</script>

<template>
  <div class="range-input">
    <div class="range-input__inner">
      <Slider :min="props.minLimit" :max="props.maxLimit" :modelValue="props.value" @update:modelValue="emits('on-change', $event)" />
      <div class="range-input__inputs">
        <div class="range-input__input range-input__input--start">
          <input type="number" :placeholder="`от ${props.minLimit}`" :value="props.value[0]" @input="handleMinInputChange" />
          <span>от</span>
        </div>
        <span class="icon-minus"></span>
        <div class="range-input__input range-input__input--end">
          <input type="number" :placeholder="`до ${props.maxLimit}`" :value="props.value[1]" @input="handleMaxInputChange" />
          <span>до</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.range-input {
  background-color: $base-06;
  border-radius: 16px;

  //.range-input__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
    height: 100%;
    padding: 24px;

    @media(max-width: 720px) {
      padding: 0;
      padding-top: 16px;
    }
  }

  //.range-input__inputs
  &__inputs {
    display: flex;
    gap: 8px;
    align-items: center;

    & span {
      position: relative;
      display: block;

      &::before {
        font-size: 24px;
        color: $base-01;
      }
    }
  }

  //.range-input__input
  &__input {
    position: relative;
    width: 100%;

    & span {
      position: absolute;
      @include monts-r20;
      color: $base-03;
      left: 24px;
      top: 50%;
      transform: translateY(-50%);

      @include media-medium {
        @include monts-r18;
      }

      @include media-small {
        @include monts-r14;
      }
    }

    & input {
      width: 100%;
      padding: 15px 16px;
      background-color: $base-05;
      border: 1px solid $base-05;
      height: 56px;
      outline: none;
      border-radius: 8px;
      color: $base-03;
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

      &::placeholder {
        @include monts-r20;
        color: $base-01;

        @include media-medium {
          @include monts-r18;
        }

        @include media-small {
          @include monts-r14;
        }
      }

      &::-moz-placeholder {
        @include monts-r20;
        color: $base-01;

        @include media-medium {
          @include monts-r18;
        }

        @include media-small {
          @include monts-r14;
        }
      }

      &::-webkit-input-placeholder {
        @include monts-r20;
        color: $base-01;

        @include media-medium {
          @include monts-r18;
        }

        @include media-small {
          @include monts-r14;
        }
      }

      @include hover {
        color: $base-01;
      }

      &:focus,
      &:active {
        color: $base-01;
      }
    }

    //.range-input__input--start
    &--start {
      & input {
        padding-left: 56px;

        @include media-small {
          padding-left: 46px;
        }
      }
    }

    //.range-input__input--end
    &--end {
      & input {
        padding-left: 60px;

        @include media-small {
          padding-left: 50px;
        }
      }
    }
  }

  & .slider-target {
    margin: 9px 5px 9px 15px;

    & .slider-tooltip {
      display: none;
    }

    & .simple-range-slider-bg-bar {
      margin: 11px 16px 11px 10px;
    }

    & .slider-handle {
      width: 24px;
      height: 24px;
      background-color: $primary-01;
      opacity: 1;
      box-shadow: none;
      border-radius: 50%;
      top: -10px;
    }

    & .simple-range-slider-bg-bar .simple-range-slider-anchor .simple-range-slider-handle {
      &:focus {
        border-radius: 50%;
        box-shadow: none;
      }
    }

    & .slider-connect {
      background-color: $primary-01 !important;
    }

    & .slider-connects {
      position: relative;
      background-color: $base-05 !important;
      overflow: visible;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -5px;
        left: -15px;
        height: 6px;
        display: block;
        background-color: $base-05;
      }
    }
  }
}
</style>
