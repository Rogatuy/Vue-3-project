<script setup>
  import { ref } from 'vue';
  import LoginPopup from '@/components/Common/header/entitites/login-popup.vue';

  const isPopupOpen = ref(false);

  function changePopupOpen(value) {
    isPopupOpen.value = value;
  };

  function openPopup() {
    isPopupOpen.value = true;
  }

</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__inner">
        <button class="header__login login-button" @click="openPopup">
          <i class="icon-profile"></i>
        </button>
        <router-link to="/">
          <div class="header__logo header-logo">
            <p>Testshop</p>
          </div>
        </router-link>
        <button class="header__basket basket-button">
          <i class="icon-bag"></i>
        </button>
      </div>
    </div>
    <LoginPopup :isPopupOpen="isPopupOpen" @changePopupOpen="changePopupOpen" />
  </header>
</template>

<style lang='scss'>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $base-01;
  z-index: $header-z-index;

  // .header__inner
  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 21px 0;

    @include media-small {
      padding: 17px 0;
    }
  }
}

.login-button {
  display: block;
  width: 32px;
  height: 32px;

  @include media-small {
    width: 24px;
    height: 24px;
  }

  & i {
    display: block;
    width: 32px;
    height: 32px;
    color: $base-06;

    @include media-small {
      width: 24px;
      height: 24px;
    }

    &::before {
      font-size: 32px;

      @include media-small {
        font-size: 24px;
      }
    }
  }
}

.header-logo {
  color: $base-06;
  @include monts-b32;
  text-transform: uppercase;

  @include media-small {
    @include monts-b24;
  }
}

.basket-button {
  display: block;
  width: 32px;
  height: 32px;

  @include media-small {
    width: 24px;
    height: 24px;
  }

  & i {
    display: block;
    width: 32px;
    height: 32px;
    color: $base-06;

    @include media-small {
      width: 24px;
      height: 24px;
    }

    &:before {
      font-size: 32px;

      @include media-small {
        font-size: 24px;
      }
    }
  }
}
</style>
