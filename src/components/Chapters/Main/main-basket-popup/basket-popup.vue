<script setup>
import { defineProps, ref, watch } from "vue"
import { useStore } from "vuex"
import RadioSize from "@/components/Shared/Inputs/radio/radio-size/radio-size.vue"
import RadioColor from "@/components/Shared/Inputs/radio/radio-color/radio-color.vue"
import BasketSlider from "./entities/basket-slider/basket-slider.vue"

// Definitions
const props = defineProps({
  isPopupOpen: Boolean,
  card: Object,
})

const emits = defineEmits(["changePopupOpen"])

const closePopup = () => {
  const newValue = !props.isPopupOpen
  emits("changePopupOpen", newValue)
}

// Refs
const activeSize = ref(props.card?.options?.sizes?.[0])
const activeColor = ref(props.card?.options?.colors?.[0])

watch(
  () => props.card,
  (nextCard) => {
    activeSize.value = nextCard.options?.sizes?.[0]
    activeColor.value = nextCard.options?.colors?.[0]
  }
)

const store = useStore()

function radioColorValue(value) {
  activeColor.value = value
}

function radioSizeValue(value) {
  activeSize.value = value
}

//Добавление товара в корзину
const onClickToBasket = () => {
  const newItem = {}
  newItem.id = props.card.id

  if (props.card.options && props.card.options.colors) {
    newItem.color = activeColor.value
  }

  if (props.card.options && props.card.options.sizes) {
    newItem.size = activeSize.value
  }

  store.commit("addToBasket", newItem)
  console.log("Товар добавлен в корзину в store")
  closePopup()
}

watch(
  () => props.isPopupOpen,
  () => {
    if (props.isPopupOpen) {
      document.querySelector("body").style = "overflow: hidden"
    } else {
      document.querySelector("body").style = "overflow: auto"
    }
  }
)
</script>

<template>
  <div class="basket-popup" :class="{ show: props.isPopupOpen }" v-if="props.card">
    <div class="basket-popup__bg" @click="closePopup"></div>
    <div class="basket-popup__content">
      <div class="basket-popup__button-close icon-close" @click="closePopup"></div>
      <div class="basket-popup__title-mobile">
        <p>{{ props.card.title }}</p>
      </div>
      <div class="basket-popup__slider">
        <BasketSlider :imagesUrls="props.card.imagesUrls" />
      </div>
      <div class="basket-popup__info-card info-card">
        <div class="info-card__inner">
          <div class="info-card__title">
            <p>{{ props.card.title }}</p>
          </div>
          <div class="info-card__colors info-colors" v-if="props.card.options && props.card.options.colors">
            <div class="info-colors__inner">
              <h3>Цвет:</h3>
              <form class="info-colors__grid">
                <RadioColor v-for="color in props.card.options.colors" :key="color" :color="color" name="option-colors-2" :checkedStatus="activeColor === color"
                  @radioColorValue="radioColorValue">
                </RadioColor>
              </form>
            </div>
          </div>
          <div class="info-card__sizes info-sizes" v-if="props.card.options && props.card.options.sizes">
            <div class="info-sizes__inner">
              <h3>Размеры:</h3>
              <div class="info-sizes__grid">
                <RadioSize v-for="size in props.card.options.sizes" :key="size" :size="size" name="option-sizes-2" :checkedStatus="activeSize === size"
                  @radioSizeValue="radioSizeValue">
                </RadioSize>
              </div>
            </div>
          </div>
          <div class="info-card__description info-description">
            <div class="info-description__inner">
              <h3>Описание:</h3>
              <p>{{ props.card.description }}</p>
            </div>
          </div>
          <div class="info-card__price info-price">
            <p>{{ props.card.price }} ₽</p>
          </div>
          <button class="info-card__add-to-basket" v-if="props.card.inStock" @click="onClickToBasket">
            Добавить в корзину
          </button>
          <button class="info-card__add-to-basket" v-if="!props.card.inStock" disabled>
            Нет в наличии
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basket-popup {
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

  &.show {
    &.basket-popup {
      visibility: visible;
      opacity: 1;
    }

    & .basket-popup__content {
      @media (max-width: 720px) {
        transform: translateY(0);
      }
    }

    & .basket-popup__bg {
      opacity: 1;
      visibility: visible;
    }
  }

  // .basket-popup__bg
  &__bg {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background: rgba(31, 29, 43, 0.3);
    z-index: 1;
  }

  // .basket-popup__content
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 536px 536px;
    gap: 24px;
    height: auto;
    max-height: 100vh;
    overflow: auto;
    width: 100%;
    max-width: 1192px;
    padding: 40px;
    background-color: $base-06;
    border-radius: 16px;
    @include defaultTransition;
    z-index: 2;

    @include media-large {
      grid-template-columns: 536px 416px;
      max-width: 1072px;
    }

    @include media-medium {
      padding: 32px;
      grid-template-columns: 388px 428px;
      max-width: 912px;
    }

    @include media-small {
      padding: 24px;
      grid-template-columns: 1fr 1fr;
      max-width: 688px;
    }

    @media (max-width: 720px) {
      position: absolute;
      left: unset;
      top: unset;
      bottom: 0;
      transform: translateY(100%);
      grid-template-columns: 1fr;
      gap: 20px;
      height: 100%;
      max-height: 100vh;
      width: 100%;
      max-width: 100%;
      padding: 20px;
      border-radius: 16px 16px 0px 0px;
      @include defaultTransition;
      z-index: 2;
    }
  }

  // .basket-popup__button-close
  &__button-close {
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    right: 16px;
    top: 16px;
    cursor: pointer;

    &:before {
      font-size: 24px;
      color: $base-01;
    }
  }

  //.basket-popup__title-mobile
  &__title-mobile {
    display: none;

    @media (max-width: 720px) {
      display: block;
    }

    & p {
      color: $base-01;
      @include monts-b16;
      text-transform: uppercase;
    }
  }
}

.info-card {

  // .info-card__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 720px) {
      gap: 20px;
    }
  }

  // .info-card__title
  &__title {
    color: $base-01;
    @include monts-b24;
    text-transform: uppercase;
    padding-right: 35px;

    @include media-medium {
      @include monts-b20;
    }

    @media (max-width: 720px) {
      display: none;
    }
  }

  // .info-card__add-to-basket
  &__add-to-basket {
    width: 100%;
    padding: 15px 16px;
    background-color: $primary-01;
    border-radius: 8px;
    color: $base-06;
    @include monts-r20;
    @include defaultTransition;

    @include media-medium {
      @include monts-r18;
      padding: 13px 16px;
    }

    @include media-small {
      padding: 11px 16px;
      @include monts-r14;
    }

    @include hover {
      background-color: $primary-02;
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}

.info-colors {

  // .info-colors__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & h3 {
      color: $base-01;
      @include monts-m20;

      @include media-medium {
        @include monts-m18;
      }

      @media (max-width: 720px) {
        @include monts-m14;
      }
    }
  }

  // .info-colors__grid
  &__grid {
    display: flex;
    gap: 8px;
  }
}

.info-sizes {

  // .info-sizes__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & h3 {
      color: $base-01;
      @include monts-m20;

      @include media-medium {
        @include monts-m18;
      }

      @media (max-width: 720px) {
        @include monts-m14;
      }
    }
  }

  // .info-sizes__grid
  &__grid {
    display: flex;
    gap: 16px;
  }
}

.info-description {

  // .info-description__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & h3 {
      color: $base-01;
      @include monts-m20;

      @include media-medium {
        @include monts-m18;
      }

      @media (max-width: 720px) {
        @include monts-m14;
      }
    }

    & p {
      color: $base-01;
      @include monts-r20;

      @include media-medium {
        @include monts-r18;
      }

      @media (max-width: 720px) {
        @include monts-r14;
      }
    }
  }
}

.info-price {
  & p {
    color: $base-01;
    @include monts-b24;
  }
}

.basket-popup {
  // .basket-popup__info-card

  &__info-card {}
}

.info-card {
  // .info-card__inner

  &__inner {}

  // .info-card__title

  &__title {}

  // .info-card__colors

  &__colors {}

  // .info-card__sizes

  &__sizes {}

  // .info-card__description

  &__description {}

  // .info-card__price

  &__price {}

  // .info-card__add-to-basket

  &__add-to-basket {}
}
</style>
