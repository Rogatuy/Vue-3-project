<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  countFiltersMobile: Number,
})

const isModalOpen = ref(false);

const toggleModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
};

watch(isModalOpen, (value) => {
  if (value) {
    document.querySelector('body').style="overflow: hidden";
  } else {
    document.querySelector('body').style="overflow: auto";
  }
})

</script>

<template>
  <div class="filters-mobile" :class="isModalOpen ? 'show' : ''">
    <button class="filters-mobile__button" @click="toggleModalOpen">
      <span>Фильтр</span>
      <span v-if="props.countFiltersMobile">{{props.countFiltersMobile}}</span>
    </button>
    <div class="filters-modal" :class="{'show': isModalOpen.value}">
      <div class="filters-modal__bg" @click="toggleModalOpen">
      </div>
      <div class="filters-modal__content">
        <div class="filters-modal__button-close icon-close" @click="toggleModalOpen">
        </div>
        <div class="filters-modal__title">
          <p>Фильтры</p>
        </div>
        <slot></slot>
        <button class="filters-modal__add-filters" @click="toggleModalOpen">
          Применить
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters-mobile {
  position: relative;
  display: none;

  @media (max-width: 720px) {
    display: block;
  }

  &.show {
    & .filters-modal {
      visibility: visible;
      opacity: 1;
    }

    & .filters-modal__content {
      transform: translateY(0);
    }

    & .filters-modal__bg {
      opacity: 1;
      visibility: visible;
    }
  }

  //.filters-mobile__button
  &__button {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    max-width: max-content;
    padding: 11px 16px;
    height: 40px;
    @include monts-r14;
    background-color: $base-05;
    border: 1px solid $base-05;
    border-radius: 8px;
    color: $base-01;
    @include defaultTransition;

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

.filters-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  @include defaultTransition;
  z-index: 100;

  // .filters-modal__bg
  &__bg {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background: rgba(31, 29, 43, 0.3);
    z-index: 1;
  }

  // .filters-modal__content
  &__content {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 100%;
    max-height: 554px;
    padding: 20px;
    background-color: $base-06;
    @include defaultTransition;
    z-index: 2;
  }

  //.filter-modal__button-close
  &__button-close {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    right: 20px;
    top: 20px;
    cursor: pointer;

    &:before {
      font-size: 20px;
      color: $base-01;
    }
  }

  // .filter-modal__title
  &__title {
    color: $base-01;
    @include monts-b16;
  }

  //.filter-modal__add-filters
  &__add-filters {
    width: 100%;
    padding: 11px 16px;
    @include monts-r14;
    background-color: $primary-01;
    border-radius: 8px;
    color: $base-06;

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
</style>
