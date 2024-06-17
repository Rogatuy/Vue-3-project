<script setup>
  import MainForm from '@/components/Chapters/Main/main-form/form.vue';
</script>

<template>
  <section>
    <div class="main-ransom">
      <div class="main-ransom__container">
        <div class="main-ransom__inner">
          <div class="main-ransom__content">
            <div class="main-ransom__title-block ransom-title">
              <div class="ransom-title__inner">
                <h2>покупаем Б/у сноуборды и зимнюю экипировку</h2>
                <p>Оставьте свои данные и приложите фото вещей, которые хотите продать и мы сами заберем ваши вещи в удобное для вас время.</p>
              </div>
            </div>
            <MainForm />
          </div>
          <div class="main-ransom__picture ransom-picture">
            <div class="ransom-picture__inner">
              <img src="/assets/images/main/ransom-picture.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-ransom {

  // .main-ransom__inner
  &__inner {
    display: grid;
    grid-template-columns: 780px auto;
    grid-template-rows: auto;
    gap: 110px;
    align-items: center;
    padding: 40px 64px;
    background-color: $primary-03;
    border-radius: 16px;

    @include media-large {
      grid-template-columns: 667px auto;
      padding: 40px;
    }

    @include media-medium {
      grid-template-columns: 1fr;
    }

    @include media-small {
      padding: 24px;
    }

    @include media-extra-small {
      padding: 16px;
    }
  }

  // .main-ransom__content
  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include media-small {
      gap: 24px;
    }
  }
}

.ransom-title {

  // .ransom-title__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include media-extra-small {
      gap: 8px;
    }

    & h2 {
      color: $base-01;
      @include monts-b48;
      text-transform: uppercase;

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

    & p {
      color: $base-01;
      @include monts-r20;

      @include media-medium {
        @include monts-r18;
      }

      @include media-small {
        @include monts-r14;
      }
    }
  }
}

.ransom-picture {
  @include media-large {
    display: none;
  }

  // .ransom-picture__inner
  &__inner {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 628px;

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
