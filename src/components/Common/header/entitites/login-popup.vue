<script setup>
import { defineProps, ref, watch} from 'vue';
import Input from '@/components/Shared/Inputs/input-text/input-text.vue';

const inputData = {
  type: 'tel',
  name: 'user-phone',
  placeholder: 'Номер телефона',
}

// Definitions
const props = defineProps({
  isPopupOpen: Boolean,
});

const phoneNumber = ref('');
const isPhoneCorrect = ref(true);

const emits = defineEmits(['changePopupOpen']);

const resetForm = () => {
  phoneNumber.value = '';
  isPhoneCorrect.value = true;
};

const closePopup = () => {
  const newValue = !props.isPopupOpen;
  emits('changePopupOpen', newValue);
  resetForm();
};


const sendPhoneCode = () => {
    //Проверка телефона
  const regExp= /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

  if (!regExp.test(phoneNumber.value)) {
    isPhoneCorrect.value = false;
    return;
  }

  console.log('Телефон корректный, запрос на код');
  resetForm();
  closePopup();
}

watch(() => props.isPopupOpen, () => {
  if (props.isPopupOpen) {
    document.querySelector('body').style="overflow: hidden";
  } else {
    document.querySelector('body').style="overflow: auto";
  }
})

</script>

<template>
  <div class="login-popup" :class="{'show': props.isPopupOpen}">
    <div class="login-popup__bg" @click="closePopup">
    </div>
    <div class="login-popup__content">
      <div class="login-popup__button-close icon-close" @click="closePopup">
      </div>
      <div class="login-popup__title">
        <p>Вход или регистрация</p>
      </div>
      <Input :placeholder="inputData.placeholder" :type="inputData.type" :name="inputData.name" :value="phoneNumber" v-model="phoneNumber" :disabled=false />
      <button class="login-popup__btn-submit" @click="sendPhoneCode">
        Отправить код
      </button>
      <div v-if="!isPhoneCorrect" class="text-error">
        <p>Введите корректный номер</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-popup {
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
    &.login-popup {
      visibility: visible;
      opacity: 1;
    }

    & .login-popup__content {
      @media (max-width: 720px) {
        transform: translateY(0);
      }
    }

    & .login-popup__bg {
      opacity: 1;
      visibility: visible;
    }
  }

  // .login-popup__bg
  &__bg {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background: rgba(31, 29, 43, 0.3);
    z-index: 1;
  }

  // .login-popup__content
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: auto;
    width: 100%;
    max-width: 500px;
    padding: 40px;
    background-color: $base-05;
    border-radius: 16px;
    @include defaultTransition;
    z-index: 2;

    @include media-medium {
      padding: 32px;
      max-width: 480px;
    }

    @media (max-width: 720px) {
      position: absolute;
      left: unset;
      top: unset;
      bottom: 0;
      transform: translateY(100%);
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 100%;
      max-height: 192px;
      width: 100%;
      max-width: 100%;
      padding: 20px 20px 30px 20px;
      border-radius: 16px 16px 0px 0px;
      @include defaultTransition;
      z-index: 2;
    }
  }

  // .login-popup__button-close
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

  // .login-popup__title
  &__title {
    color: $base-01;
    @include monts-b24;
    padding-right: 35px;

    @include media-medium {
      @include monts-b20;
    }
  }

  // .login-popup__btn-submit
  &__btn-submit {
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

.text-error {
  position: absolute;
  bottom: 10px;

  color: $secondary-03;
  @include monts-r16;

  @include media-medium {
    @include monts-r14;
  }

  @include media-small {
    @include monts-r12;
  }
}
</style>
