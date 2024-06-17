<script setup>
// Imports
import { defineProps} from 'vue';

// Definitions
const { state, id, checkedStatus } = defineProps({
  state: String,
  id: String,
  checkedStatus: Boolean,
});

// Methods
const getTitleCheckbox = (value) => {
  switch (value) {
    case 'good':
      return 'Хорошее состояние';
    case 'bad':
      return 'Плохое состояние';
    default:
      return ''
  }
}

const radioName = `state-equipment-checkbox-${id}`;
</script>

<template>
  <div class="state-equipment-checkbox">
    <label class="state-equipment-checkbox__label">
      <input type="radio" :name="radioName" :value="state" :checked="checkedStatus" />
      <span>{{ getTitleCheckbox(state) }}</span>
    </label>
  </div>
</template>


<style lang="scss" scoped>
.state-equipment-checkbox {

  // .state-equipment-checkbox__label
  &__label {
    & input {
      position: absolute;
      z-index: -1;
      visibility: hidden;
    }

    & span {
      position: relative;
      display: flex;
      width: max-content;
      padding-left: 40px;
      color: $base-01;
      @include monts-r20;
      cursor: pointer;
      @include defaultTransition;

      @include media-medium {
        @include monts-r18;
        padding-left: 36px;
      }

      @include media-small {
        @include monts-r14;
        padding-left: 28px;
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: $base-06;
        border: 1px solid $base-04;
        @include defaultTransition;
        z-index: 0;

        @include media-small {
          width: 20px;
          height: 20px;
        }
      }

      &::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: $base-06;
        opacity: 0;
        visibility: hidden;
        @include defaultTransition;
        z-index: 1;

        @include media-small {
          left: 7px;
        }
      }
    }

    & input+span:hover {
      &:after {
        border: 1px solid $primary-01;
      }
    }

    & input:checked+span {
      &:after {
        background-color: $primary-01;
        border: 1px solid $primary-01;
        @include defaultTransition;
      }

      &::before {
        opacity: 1;
        visibility: visible;

      }
    }
  }
}
</style>
