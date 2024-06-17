<script setup>
import { ref, defineProps, defineEmits} from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs } from 'swiper/modules';

const modules = [Thumbs];

const props = defineProps({
  imagesUrls: {
    type: Array,
  },
});

// Ссылка на экземпляр thumbs swiper
const thumbsSwiper = ref(null);

// Функция для установки экземпляра thumbs swiper
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div class="basket-slider">
    <div class="basket-slider__inner">
      <!-- Thumbs -->
      <swiper class="thumbs-slider" :modules="[Thumbs]" ref="thumbsSwiper" watch-slides-progress @swiper="setThumbsSwiper" :space-between="16" :breakpoints="{
          '0': {
            slidesPerView: 3,
            direction: 'horizontal',
          },
          '1199': {
            slidesPerView: 3,
            direction: 'vertical',
          },
        }">
        <swiper-slide class="thumbs-slider__slide" v-for="(image, index) in props.imagesUrls" :key="index">
          <div class="thumbs-slider__image">
            <img :src="image" alt="Thumb {{ index + 1 }}" />
          </div>
        </swiper-slide>
      </swiper>
      <!-- Main-slider -->
      <swiper class="main-basket-slider" :modules="modules" :slidesPerView="1" :thumbs="{ swiper: thumbsSwiper }">
        <swiper-slide class="main-basket-slider__slide" v-for="(image, index) in props.imagesUrls" :key="index">
          <div class="main-basket-slider__image">
            <img :src="image" alt="Slide {{ index + 1 }}" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<style lang="scss" scope>
@import 'swiper/css';

.basket-slider {

  //.basket-slider__inner
  &__inner {
    align-self: center;
    display: grid;
    grid-template-columns: 122px 398px;
    gap: 16px;
    height: 100%;

    @include media-medium {
      grid-template-columns: 388px;
      grid-template-rows: 520px 130px;
    }

    @include media-small {
      grid-template-columns: 308px;
      grid-template-rows: 386px 110px;
    }

    @media (max-width: 720px) {
      grid-template-columns: auto;
      grid-template-rows: auto;
    }
  }
}

.thumbs-slider {
  height: 520px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  @include media-medium {
    max-height: 130px;
    width: 100%;
    max-width: 388px;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  @media (max-width: 720px) {
    display: none;
  }

  // .thumbs-slider__slide
  &__slide {
    display: block;
    width: 122px;
    height: 162px;
    border-radius: 16px;
    border: 1px solid transparent;
    overflow: hidden;
    opacity: 0.3;
    @include defaultTransition;

    @include media-medium {
      width: 119px;
      height: 130px;
    }

    @include media-small {
      width: 92px;
      height: 110px;
    }

    &.swiper-slide-thumb-active {
      opacity: 1;
      border-color: $primary-01;
      @include defaultTransition;
    }
  }

  // .thumbs-slider__image
  &__image {
    position: relative;
    width: 122px;
    height: 162px;
    object-fit: cover;

    @include media-medium {
      width: 119px;
      height: 130px;
    }

    @include media-small {
      width: 92px;
      height: 110px;
    }

    & img {
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }
}

.main-basket-slider {
  height: 520px;
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;

  @include media-medium {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  @media (max-width: 720px) {
    width: 280px;
    height: 360px;
  }

  // .main-basket-slider__slide
  &__slide {
    display: block;
    width: 398px;
    height: 520px;
    border-radius: 16px;
    overflow: hidden;

    @include media-medium {
      width: 388px;
    }

    @include media-small {
      width: 308px;
      height: 386px;
    }

    @media (max-width: 720px) {
      width: 280px;
      height: 360px;
    }
  }

  // .main-basket-slider__image
  &__image {
    position: relative;
    width: 398px;
    height: 520px;
    object-fit: cover;

    @include media-medium {
      width: 388px;
    }

    @include media-small {
      width: 308px;
      height: 386px;
    }

    @media (max-width: 720px) {
      width: 280px;
      height: 360px;
    }

    & img {
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }
}
</style>
