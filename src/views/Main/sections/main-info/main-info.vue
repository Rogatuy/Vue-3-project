<script setup>
  import MainTimer from '@/components/Chapters/Main/main-timer/main-timer.vue';
</script>

<template>
  <section>
    <div class="main-info">
      <div class="main-info__container">
        <div class="main-info__inner">
          <!-- info-banner -->
          <a class="main-info__banner info-banner">
            <picture>
              <source media="(min-width: 1200px) and (max-width: 1699px)" srcset="/assets/images/main/banner_1200.png">
              <source media="(min-width: 992px) and (max-width: 1199px)" srcset="/assets/images/main/banner_992.png">
              <source media="(min-width: 768px) and (max-width: 992px)" srcset="/assets/images/main/banner_768.png">
              <source media="(min-width: 0px) and (max-width: 767px)" srcset="/assets/images/main/banner_320.png">
              <img src="/assets/images/main/banner_1920.png" alt="баннер-скидки">
            </picture>
          </a>
          <!-- info-sales -->
          <a class="main-info__sales info-sales">
            <div class="info-sales__inner">
              <div class="info-sales__text">
                <p>Большая распродажа</p>
                <span>скидки до 50%</span>
              </div>
              <!-- sales-timer -->
              <div class="info-sales__timer">
                <MainTimer />
              </div>
            </div>
          </a>
          <!-- link-catalog-card -->
          <router-link to="/catalog/clothes">
            <div class="main-info__link-catalog link-catalog">
              <div class="link-catalog__inner">
                <p>Одежда</p>
                <div class="link-catalog__image">
                  <img src="/assets/images/main/catalog-clothes.png">
                </div>
              </div>
            </div>
          </router-link>
          <!-- link-catalog-card -->
          <router-link to="/catalog/shoes">
            <div class="main-info__link-catalog link-catalog">
              <div class="link-catalog__inner">
                <p>Обувь</p>
                <div class="link-catalog__image">
                  <img src="/assets/images/main/catalog-shoes.png">
                </div>
              </div>
            </div>
          </router-link>
          <!-- link-catalog-card -->
          <router-link to="/catalog/equipment">
            <div class="main-info__link-catalog link-catalog">
              <div class="link-catalog__inner">
                <p>Снаряжение</p>
                <div class="link-catalog__image link-catalog__image--right">
                  <!-- <img src="../../../../app/assets/images/main/catalog-equipment.png"> -->
                  <img src="/assets/images/main/catalog-equipment.png">
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-info {

  // .main-info__inner
  &__inner {
    display: grid;
    grid-template-columns: repeat(4, 398px);
    grid-template-rows: 600px 300px;
    gap: 24px;

    @include media-large {
      grid-template-columns: repeat(3, 341px);
      grid-template-rows: 560px 280px;
    }

    @include media-medium {
      grid-template-columns: repeat(3, 293px);
      grid-template-rows: 500px 240px;
      gap: 16px;
    }

    @include media-small {
      grid-template-columns: repeat(3, 218px);
      grid-template-rows: 400px 160px;
    }

    @include media-extra-small {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
    }

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto auto;
    }
  }

  // .main-info__banner
  &__banner {
    grid-row: 1 / 2;
    grid-column: 1 / 4;

    @include media-large {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    @media (max-width: 720px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }

  // .main-info__sales
  &__sales {
    grid-row: 1 / 3;
    grid-column: 4 / 5;

    @include media-large {
      grid-row: 1 / 2;
      grid-column: 3 / 4;

    }

    @media (max-width: 720px) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }

  // .main-info__link-catalog
  &__link-catalog {
    grid-row: 2 / 3;

    @include media-large {
      grid-row: unset;
    }

    @media (max-width: 720px) {
      grid-column: 1 / 2;
    }
  }
}

.info-banner {
  display: block;
  height: 100%;
  width: 100%;
  max-width: 1242px;
  max-height: 600px;
  border-radius: 16px;
  overflow: hidden;

  @include media-large {
    max-width: 707px;
    max-height: 560px;
  }

  @include media-medium {
    max-width: 603px;
    max-height: 500px;
  }

  @include media-small {
    max-width: 453px;
    max-height: 400px;
  }

  @include media-extra-small {
    max-width: 100%;
    max-height: 100%;
  }

  & img {
    height: 100%;
    width: 100%;
    max-width: 1242px;
    max-height: 600px;

    @include media-large {
      max-width: 707px;
      max-height: 560px;
    }

    @include media-medium {
      max-width: 603px;
      max-height: 500px;
    }

    @include media-small {
      max-width: 453px;
      max-height: 400px;
    }

    @include media-extra-small {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.info-sales {

  // .info-sales__inner
  &__inner {
    position: relative;
    display: grid;
    background-color: $primary-01;
    padding: 24px 31px;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;

    @include media-large {
      padding: 40px 28px;
    }

    @include media-medium {
      padding: 32px 28px;
    }

    @include media-medium {
      padding: 24px 28px;
    }

    @include media-extra-small {
      padding: 16px;
      min-height: 154px;
    }
  }

  // .info-sales__text
  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: center;
    align-items: center;

    @include media-large {
      align-self: flex-start;
      gap: 8px;
    }

    & p {
      @include monts-b24;
      color: $base-06;
      text-transform: uppercase;
      text-align: center;

      @include media-medium {
        @include monts-b20;
      }

      @include media-small {
        @include monts-b16;
      }

      @include media-extra-small {
        @include monts-b14;
      }
    }

    & span {
      @include monts-b64;
      color: $base-06;
      text-transform: uppercase;
      text-align: center;

      @include media-large {
        @include monts-b48;
      }

      @include media-medium {
        @include monts-b40;
      }

      @include media-small {
        @include monts-b32;
      }

      @include media-extra-small {
        @include monts-b24;
      }
    }
  }

  // .info-sales__timer
  &__timer {
    position: absolute;
    bottom: 24px;
    align-self: flex-end;
    left: 50%;
    transform: translate(-50%);

    @include media-medium {
      bottom: 32px;
    }

    @include media-small {
      bottom: 24px;
    }

    @include media-extra-small {
      bottom: 16px;
    }
  }
}

.sales-timer {

  // .sales-timer__inner
  &__inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 334px;

    @include media-large {
      min-width: 283px;
    }

    @include media-medium {
      min-width: 259px;
    }

    @include media-small {
      min-width: 201px;
    }

    @include media-extra-small {
      min-width: 159px;
    }
  }

  // .sales-timer__item
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @include media-extra-small {
      gap: 4px;
    }
  }

  // .sales-timer__time
  &__time {
    & span {
      @include monts-b48;
      color: $base-06;

      @include media-medium {
        @include monts-b40;
      }

      @include media-small {
        @include monts-b32;
      }

      @include media-extra-small {
        @include monts-b24;
      }
    }
  }

  // .sales-timer__description
  &__description {
    & span {
      @include monts-r20;
      color: $base-06;

      @include media-large {
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
}


.link-catalog {

  // .link-catalog__inner
  &__inner {
    position: relative;
    display: flex;
    padding: 24px;
    min-height: 300px;
    background-color: $base-05;
    border-radius: 16px;
    overflow: hidden;

    @include media-large {
      min-height: 280px;
    }

    @include media-medium {
      min-height: 240px;
      padding: 20px;
    }

    @include media-small {
      min-height: 160px;
      padding: 16px;
    }

    @include media-extra-small {
      min-height: 154px;
    }
  }

  & p {
    @include monts-b24;
    text-transform: uppercase;
    color: $base-01;

    @include media-medium {
      @include monts-b20;
    }

    @include media-small {
      @include monts-b16;
    }
  }

  // .link-catalog__image
  &__image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
    height: 100%;

    &--right {
      @include media-small {
        right: -37px;
      }
    }

    & img {
      width: auto;
      height: auto;

      @include media-large {
        max-height: 280px;
      }

      @include media-medium {
        max-height: 240px;
      }

      @include media-small {
        max-height: 160px;
      }

      @include media-extra-small {
        max-height: 154px;
      }
    }
  }
}
</style>
