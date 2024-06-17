<script setup>
  import { computed, ref} from 'vue';
  import { useStore } from 'vuex';

  import MainSlider from '@/components/Chapters/Main/main-slider/slider.vue';
  import BasketPopup from '@/components/Chapters/Main/main-basket-popup/basket-popup.vue';

  const store = useStore();
  const stateProductCard = computed(() => store.state.cardItems);

  //Получение нового списка карточек с учетом фильтров
  const filteredProducts = computed(() => {
    let filteredCards = [];

    //фильтрация по категории
    filteredCards = stateProductCard.value.filter(obj => obj.category === 'shoes');

    return filteredCards;
  });

  //Открытие попапа корзины с товаром
  const idCardBasket = ref('');
  const isPopupBasketOpen = ref(false);

  function toggleInfoBasketModal(options) {
    idCardBasket.value = options;
    isPopupBasketOpen.value = true;
  }

  const cardForBasket = computed(() => {
    const getCard = filteredProducts.value.find(obj => obj.id === idCardBasket.value);
    return getCard;
  })

  const changePopupOpenBasket = (value) => {
    isPopupBasketOpen.value = value;
  }

</script>

<template>
  <section>
    <div class="catalog">
      <div class="catalog__container">
        <div class="catalog__inner">
          <div class="catalog__title ">
            <h2>Каталог обуви</h2>
          </div>
          <div class="catalog__content">
            <div class="catalog__slider catalog-slider">
              <MainSlider :cardItems="filteredProducts" @openBasketModal="toggleInfoBasketModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BasketPopup :isPopupOpen="isPopupBasketOpen" :card="cardForBasket" @changePopupOpen="changePopupOpenBasket" />
    />
  </section>
</template>

<style lang="scss" scoped>
.catalog {

  // .catalog__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include media-large {
      gap: 32px;
    }

    @include media-small {
      gap: 24px;
    }
  }

  // .catalog__title
  &__title {
    text-transform: uppercase;
    color: $base-01;
    @include monts-b48;

    @include media-large {
      @include monts-b40;
    }

    @include media-medium {
      @include monts-b32;
    }

    @include media-small {
      @include monts-b24;
    }
  }

  // .catalog__content
  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }

  // .catalog__filters
  &__filters {
    width: 100%;
  }

  //.__no-item
  &__no-item {
    margin: 40px 0;

    p {
      color: $base-01;
      @include monts-r24;

      @include media-medium {
        @include monts-r20;
      }

      @include media-small {
        @include monts-r16;
      }
    }
  }
}

.main-filters {

  //.main-filters__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }

  // .main-filters__input-section
  &__input-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;

    @include media-medium {
      height: 48px;
    }

    @include media-small {
      height: 40px;
    }

    @media (max-width: 720px) {
      display: none;
    }
  }

  //.main-filters__filters
  &__filters {
    display: flex;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }

  // .main-filters__output-section
  &__output-section {
    display: flex;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
}

.output-section {

  // .output-section__category
  &__category {
    display: flex;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }

  // .output-section__price
  &__price {
    display: flex;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 8px;

  & span {
    @include monts-r20;
    color: $base-01;

    @include media-medium {
      @include monts-r18;
    }

    @include media-small {
      @include monts-r14;
    }
  }

  & i {
    display: block;
    width: 24px;
    height: 24px;

    @include media-small {
      width: 20px;
      height: 20px;
    }

    &::before {
      font-size: 24px;
      color: $base-01;

      @include media-small {
        font-size: 20px;
      }
    }
  }
}
</style>
