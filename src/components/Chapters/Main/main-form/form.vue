<script setup>
import { ref} from 'vue';
import Input from '@/components/Shared/Inputs/input-text/input-text.vue';
import Radio from './entities/radio.vue';
import Select from '@/components/Shared/Selects/select-default/select-default.vue';
import InputFile from './entities/input-file.vue';

const formRadioData = [
  {
    state: 'good',
    id: '1',
    isChecked: true,
  },
  {
    state: 'bad',
    id: '1',
    isChecked: false,
  },
];

const deliveryDates = ['19.02.2024','20.02.2024','21.02.2024','22.02.2024'];
const deliveryTimes = ['10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00'];
const deliveryDate = ref('Выберите дату');
const deliveryTime = ref('Выберите время');

const name = ref('');
const phone = ref('');
const files = ref([]);
const isFormValid = ref(true);

//Возврат формы к изначальному состоянию после отправки
const resetForm = () => {
  name.value = '';
  phone.value = '';
  files.value = [];
  isFormValid.value = true;
};

//Проверка отправки формы
const submitForm = () => {
  //Проверка имени
  if (name.value === '') {
    isFormValid.value = false;
    return;
  }

  //Проверка телефона
  const regExp= /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
  if (!regExp.test(phone.value)) {
    isFormValid.value = false;
    return;
  }

  //Проверка селектов
  if (deliveryDate.value === 'Выберите дату' || deliveryTime.value === 'Выберите время') {
    isFormValid.value = false;
    return;
  }

  //Проверка изображений
  if (files.value.length === 0) {
    isFormValid.value = false;
    return;
  }

  console.log('Форма отправлена');
  resetForm();
};
</script>

<template>
  <form class="main-form" @submit.prevent="submitForm">
    <div class="main-form__inner">
      <div class="main-form__fields">
        <div class="form-inputs">
          <Input placeholder="Ваше имя" type="text" name="name" :value="name" v-model="name" />
          <Input placeholder="Номер телефона" type="tel" name="phone" :value="phone" v-model="phone" />
          <Select :options="deliveryDates" v-model="deliveryDate" />
          <Select :options="deliveryTimes" v-model="deliveryTime" />
        </div>
        <div class="form-radios">
          <Radio v-for="(data, index) in formRadioData" :key="index" :state="data.state" :id="data.id" :checkedStatus="data.isChecked">
          </Radio>
        </div>
        <div class="form-file">
          <InputFile :files="files" @change="files = $event" />
        </div>
      </div>
      <div class="form-sumbit">
        <button class="submit-btn" type="submit">
          Отправить
        </button>
        <div v-if="!isFormValid" class="text-error">
          <p>Необходимо полностью заполнить форму</p>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.main-form {
  width: 100%;

  // .main-form__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include media-small {
      gap: 24px;
    }
  }

  // .main-form__fields
  &__fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.form-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.form-radios {
  display: flex;
  gap: 24px;
  margin: 8px 0;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.form-sumbit {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 382px;

  @include media-large {
    max-width: 326px;
  }

  @include media-medium {
    max-width: 408px;
  }

  @include media-small {
    max-width: 312px;
  }
}

.text-error {
  color: $secondary-03;
  @include monts-r14;
}

.submit-btn {
  width: 100%;
  padding: 13px 16px;
  background-color: $primary-01;
  border-radius: 8px;
  color: $base-06;
  @include monts-r20;
  @include defaultTransition;

  @include media-medium {
    @include monts-r18;
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
</style>
