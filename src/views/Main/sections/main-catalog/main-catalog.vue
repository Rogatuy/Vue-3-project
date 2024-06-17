<script setup>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';

  import MainSlider from '@/components/Chapters/Main/main-slider/slider.vue';
  import CheckboxSlider from '@/components/Shared/Inputs/checkbox-slider/checkbox-slider.vue';
  import DesktopSelectCategory from '@/components/Chapters/Main/main-filters/desktop-select-category.vue';
  import MobileCategoryFilter from '@/components/Chapters/Main/main-filters/mobile-filter-category.vue';
  import FilterList from '@/components/Chapters/Main/main-filters/entities/filter-list.vue';
  import DesktopRangeSlider from '@/components/Chapters/Main/main-filters/desktop-range.vue';
  import MobileRangeSlider from '@/components/Chapters/Main/main-filters/mobile-range.vue';
  import VueRangeSlider from '@/components/Chapters/Main/main-filters/entities/range-input.vue';
  import MobileFilters from '@/components/Chapters/Main/main-filters/mobile-filters.vue';
  import BasketPopup from '@/components/Chapters/Main/main-basket-popup/basket-popup.vue';

  const store = useStore();
  const stateProductCard = computed(() => store.state.cardItems);
  const optionFilterDefault = ref(getOptionsFilterDefault());
  const selected = ref([]);
  const inStock = ref(false);

  //Логика взаимодействия с селектом фильтров
  function getRussianCategory(category) {
    switch (category) {
      case 'clothes':
        return 'Одежда';
      case 'shoes':
        return 'Обувь';
      case 'accessories':
        return 'Аксессуары, электроника';
      case 'cross-country-skis':
        return 'Беговые лыжи';
      case 'downhill-skis':
        return 'Горные лыжи';
      default:
        return '';
    }
  }

  //Формируем начальный список категорий для select
  function getOptionsFilterDefault() {
    let resultArray = [];
    let categories = new Set([]);
    let index = 0;

    stateProductCard.value.forEach((element) => {
      if (!categories.has(element.category)) {
        //Добавляем категорию в Set
        categories.add(element.category);
        //создаем элемент с данными для выпадающего списка
        const newOption = {};
        newOption.id = index;
        newOption.category = element.category;
        newOption.russianCategory = getRussianCategory(element.category);
        resultArray.push(newOption);
        index++;
      }
    })

    return resultArray;
  }

  //Обновление списка фильтра выбранных категорий
  function onFilterChange(options) {
    selected.value = options;
  };

  //Удаление категории из фильтров по нажатию кнопки
  function handleClickButtonOption(value) {
    let newOptionState = selected.value.filter((item) => item !== value);
    selected.value = newOptionState;
  }

  //Изменение чекбокса "в наличии"
  function handleCheckboxChange(newValue) {
    inStock.value = newValue;
  };

  // Выбор диапазона цены
  // Находим минимальную и максимальную цену на товары
  function findMinMaxPrices(items) {
    if (items.length === 0) {
      return { minPrice: undefined, maxPrice: undefined };
    }

    const initialMinMax = { minPrice: Infinity, maxPrice: -Infinity };

    return items.reduce((acc, item) => {
      const { price } = item;
      return {
        minPrice: Math.min(acc.minPrice, price),
        maxPrice: Math.max(acc.maxPrice, price),
      };
    }, initialMinMax);
  }

  const minLimit = ref(findMinMaxPrices(stateProductCard.value).minPrice);
  const maxLimit = ref(findMinMaxPrices(stateProductCard.value).maxPrice);

  // Значения в range
  const rangeValue = ref([
    findMinMaxPrices(stateProductCard.value).minPrice,
    findMinMaxPrices(stateProductCard.value).maxPrice
  ]);

  const minValue = computed(() => rangeValue.value[0])
  const maxValue = computed(() => rangeValue.value[1])

  // Метка, выбирал ли пользователь диапазон цен или нет
  const countRangeUse = computed(() => {
    let count = 0;
    if (minLimit.value !== rangeValue.value[0]) {
      count += 1;
    }

    if (maxLimit.value !== rangeValue.value[1]) {
      count += 1;
    }

    return count;
  });

  function handleClickButtonPrice() {
    rangeValue.value[0] = minLimit.value;
    rangeValue.value[1] = maxLimit.value;
  }

  //Метка, выбирал ли пользователь фильтры на мобилке
  const countFiltersMobile= computed(() => {
    let count = 0;

    if (minLimit.value !== rangeValue.value[0] || maxLimit.value !== rangeValue.value[1]) {
      count += 1;
    }

    if (selected.value.length !== 0) {
      count += 1;
    }

    if (inStock.value) {
      count += 1;
    }

    return count;
  });

  //Получение нового списка карточек с учетом фильтров
  const filteredProducts = computed(() => {
    let filteredCards = [];

    //фильтрация по наличию
    if (!inStock.value) {
      filteredCards = stateProductCard.value;
    } else {
      filteredCards = stateProductCard.value.filter(obj => obj.inStock === inStock.value);
    }

    //фильтрация по категориям
    if (selected.value.length !== 0) {
      filteredCards = filteredCards.filter(obj => selected.value.includes(obj.category));
    }

    // фильтрация по цене
    // Минимальная
    if (minLimit.value !== rangeValue.value[0]) {
      filteredCards = filteredCards.filter(obj => obj.price >= Number(rangeValue.value[0]));
    }

    // Максимальная
    if (maxLimit.value !== rangeValue.value[1]) {
      filteredCards = filteredCards.filter(obj => obj.price <= Number(rangeValue.value[1]));
    }

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
    <div class="main-catalog">
      <div class="main-catalog__container">
        <div class="main-catalog__inner">
          <div class="main-catalog__title ">
            <h2>Каталог</h2>
          </div>
          <div class="main-catalog__content">
            <div class="main-catalog__filters main-filters">
              <div class="main-filters__inner">
                <div class="main-filters__input-section">
                  <div class="main-filters__filters">
                    <DesktopSelectCategory>
                      <FilterList :options="optionFilterDefault" :selected="selected" @on-change="onFilterChange" />
                    </DesktopSelectCategory>
                    <DesktopRangeSlider :countRangeUse="countRangeUse">
                      <VueRangeSlider :minLimit="minLimit" :maxLimit="maxLimit" :value="rangeValue" @on-change="rangeValue = $event" />
                    </DesktopRangeSlider>
                  </div>
                  <CheckboxSlider :inStock="inStock" id="checkbox-slider-in-stock" textInput="Показывать только в наличии" @checkboxChange="handleCheckboxChange" />
                </div>
                <div class="main-filters__output-section" v-if="selected.length > 0 || minLimit !== minValue || maxLimit !== maxValue">
                  <div class="output-section__category" v-if="selected.length > 0">
                    <button v-for="(category, index) in selected" :key="index" :value="category" class="filter-button" @click="handleClickButtonOption(category)">
                      <span>{{ getRussianCategory(category) }}</span>
                      <i class="icon-close"></i>
                    </button>
                  </div>
                  <div class="output-section__price" v-if="minLimit !== minValue || maxLimit !== maxValue">
                    <button value="price" class="filter-button" @click="handleClickButtonPrice">
                      <span v-if="minLimit !== minValue">от {{ minValue }}</span>
                      <span v-if="maxLimit !== maxValue">
                        до {{ maxValue }}
                      </span>
                      <span>₽</span>
                      <i class="icon-close"></i>
                    </button>
                  </div>
                </div>
                <MobileFilters :countFiltersMobile="countFiltersMobile">
                  <MobileCategoryFilter>
                    <FilterList :options="optionFilterDefault" :selected="selected" @on-change="onFilterChange" />
                  </MobileCategoryFilter>
                  <MobileRangeSlider>
                    <VueRangeSlider :minLimit="minLimit" :maxLimit="maxLimit" :value="rangeValue" @on-change="rangeValue = $event" />
                  </MobileRangeSlider>
                  <CheckboxSlider :inStock="inStock" id="checkbox-slider-in-stock-mobile" textInput="Показывать только в наличии" @checkboxChange="handleCheckboxChange" />
                </MobileFilters>
              </div>
            </div>
            <div class="main-catalog__slider main-slider">
              <MainSlider :cardItems="filteredProducts" @openBasketModal="toggleInfoBasketModal" />
            </div>
            <div class="main-catalog__no-item" v-if="filteredProducts.length === 0">
              <p>К сожалению, товары с выбранными параметрами отсутствуют</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BasketPopup :isPopupOpen="isPopupBasketOpen" :card="cardForBasket" @changePopupOpen="changePopupOpenBasket" />
  </section>
</template>

<style lang="scss" scoped>
.main-catalog {

  // .main-catalog__inner
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

  // .main-catalog__title
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

  // .main-catalog__content
  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include media-medium {
      gap: 16px;
    }
  }

  // .main-catalog__filters
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
