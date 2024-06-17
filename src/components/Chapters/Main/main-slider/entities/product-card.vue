<script setup>
// Imports
import { ref, defineProps} from 'vue';
import RadioSize from '@/components/Shared/Inputs/radio/radio-size/radio-size.vue';
import RadioColor from '@/components/Shared/Inputs/radio/radio-color/radio-color.vue';

// Definitions
const props = defineProps({
  productCard: Object,
});

// Refs
const activeSize = ref(props.productCard.options?.sizes?.[0]);
const activeColor = ref(props.productCard.options?.colors?.[0])
</script>

<template>
  <!-- slide -->
  <div class="product-card">
    <div class="product-card__inner">
      <div class="product-card__image">
        <img :src="props.productCard.imageMain" alt="товар">
      </div>
      <div class="product-card__info">
        <div class="product-card__price product-price">
          <div class="product-price__inner">
            <div class="product-price__price">
              <p>{{ props.productCard.price }} ₽</p>
            </div>
            <div class="product-price__old-price">
              <p>{{ props.productCard.oldPrice }} ₽</p>
            </div>
          </div>
        </div>
        <div class="product-card__description">
          <p>{{ props.productCard.title }}</p>
        </div>
        <div class="product-card__options product-options" v-if="props.productCard.options">
          <div class="product-options__inner">
            <div class="product-options__sizes option-sizes">
              <form class="option-sizes__inner">
                <RadioSize v-for="(size) in props.productCard.options.sizes" :key="size" :size="size" name="option-sizes-1" :checkedStatus="activeSize === size">
                </RadioSize>
              </form>
            </div>
            <div class="product-options__colores option-colores">
              <form class="option-colores__inner">
                <RadioColor v-for="(color) in props.productCard.options.colors" :key="color" :color="color" name="option-colors-1" :checkedStatus="activeColor === color">
                </RadioColor>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  height: auto;

  // .product-card__inner
  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 520px auto;
    height: auto;
    width: 100%;
    gap: 16px;

    @include media-large {
      grid-template-rows: 440px auto;
    }

    @include media-medium {
      grid-template-rows: 400px auto;
    }

    @include media-small {
      grid-template-rows: 300px auto;
      gap: 12px;
    }

    @include media-extra-small {
      grid-template-rows: 180px auto;
      gap: 8px;
    }
  }

  // .product-card__image
  &__image {
    position: relative;
    max-width: 398px;
    border-radius: 16px;
    overflow: hidden;

    @include media-large {
      max-width: 341px;
    }

    @include media-medium {
      max-width: 293px;
    }

    @include media-small {
      max-width: 219px;
    }

    @include media-extra-small {
      max-width: 132px;
    }

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }

  // .product-card__info
  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 1px;

    @include media-small {
      gap: 8px;
    }

    @include media-extra-small {
      gap: 4px;
    }
  }

  // product-card__description
  &__description {
    color: $base-01;
    @include monts-r20;

    @include media-medium {
      @include monts-r18;
    }

    @include media-small {
      @include monts-r14;
    }

    @include media-extra-small {
      @include monts-r8;
    }
  }
}

.product-price {

  // .product-price__inner
  &__inner {
    display: flex;
    gap: 12px;

    @include media-small {
      gap: 8px;
    }

    @include media-extra-small {
      gap: 4px;
    }
  }

  // .product-price__price
  &__price {
    color: $base-01;
    @include monts-m20;

    @include media-medium {
      @include monts-m18;
    }

    @include media-small {
      @include monts-m14;
    }

    @include media-extra-small {
      @include monts-r8;
    }
  }

  // .product-price__old-price
  &__old-price {
    position: relative;
    display: block;
    color: $base-03;
    @include monts-m20;

    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 50%;
      width: 100%;
      border-bottom: 1px solid $base-03;
      transform: translateY(-50%)
    }

    @include media-medium {
      @include monts-m18;
    }

    @include media-small {
      @include monts-m14;
    }

    @include media-extra-small {
      @include monts-r8;
    }
  }
}

.product-options {
  @include media-small {
    display: none;
  }

  // .product-options__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 1px;
  }
}

.option-sizes {

  // .option-sizes__inner
  &__inner {
    display: flex;
    gap: 16px;
  }
}

.option-colores {

  // .option-colores__inner
  &__inner {
    display: flex;
    gap: 8px;
  }
}
</style>
