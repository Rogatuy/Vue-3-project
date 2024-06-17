<script setup>
import { defineProps, defineEmits, ref} from 'vue';

const props = defineProps({
  value: {
    type: String,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  name: String,
  disabled: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <input class="main-form-input" :type="type" :name="name" :placeholder="placeholder" :value="props.value" @input="emit('update:modelValue', $event.target.value)"
    :disabled="disabled" />
</template>

<style lang="scss" scoped>
.main-form-input {
  width: 100%;
  padding: 15px 16px;
  background-color: $base-06;
  border: 1px solid $base-06;
  height: 56px;
  outline: none;
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
    border-color: $primary-01;
  }

  &:focus,
  &:active {
    border-color: $base-01;
  }
}
</style>
