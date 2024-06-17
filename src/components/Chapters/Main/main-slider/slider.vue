<script setup>
import { ref, defineProps, defineEmits} from 'vue';

import ProductCard from './entities/product-card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const modules = [Navigation];

const props = defineProps({
  cardItems: {
    type: Array,
  },
});

const idCardClick = ref('');
const emits = defineEmits(['openBasketModal']);

const handleSlideClick = (id) => {
  idCardClick.value = id;

  emits('openBasketModal', idCardClick.value);
};

</script>

<template>
  <swiper :slides-per-view="4" :space-between="24" :navigation="{
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    }" :modules="modules" :breakpoints="{
      '0': {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '1200': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      '1700': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    }">
    <!-- slide -->
    <swiper-slide class="main-slider__product-card" v-for="(card, index) in cardItems" :key="index" @click="handleSlideClick(card.id)">
      <ProductCard :productCard="card" />
    </swiper-slide>

  </swiper>
  <div class="main-slider__navigation">
    <div class="slider-button slider-button--prev icon-arrow-left"></div>
    <div class="slider-button slider-button--next icon-arrow-right"></div>
  </div>
</template>

<style lang="scss" scope>
@import 'swiper/css';

.main-slider {
  position: relative;

  // .main-slider__product-card
  &__product-card {
    max-width: 398px;
    // min-width: 398px;

    @include media-large {
      max-width: 341px;
      // min-width: 341px;
    }

    @include media-medium {
      max-width: 293px;
      // min-width: 293px;
    }

    @include media-small {
      max-width: 219px;
      // min-width: 219px;
    }

    @include media-extra-small {
      max-width: 132px;
      // min-width: 132px;
    }
  }
}

.swiper {
  @include media-small {
    overflow: visible;
  }
}

.slider-button {
  position: absolute;
  top: 221px;
  display: block;
  width: 56px;
  height: 56px;
  background-color: $base-06;
  border-radius: 50%;
  z-index: 5;
  opacity: 1;
  visibility: visible;
  cursor: pointer;
  @include defaultTransition;

  @include media-large {
    top: 192px;
  }

  @include media-medium {
    width: 48px;
    height: 48px;
    top: 176px;
  }

  @include hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }

  @include media-small {
    display: none;
  }

  &--prev {
    left: -28px;

    @include media-medium {
      left: -24px;
    }
  }

  &--next {
    right: -28px;

    @include media-medium {
      right: -24px;
    }
  }

  &.swiper-button-disabled {
    opacity: 0;
    visibility: hidden;
    cursor: default;

  }

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;

    @include media-medium {
      font-size: 20px;
    }
  }
}
</style>
