<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  files: Array,
});

const emits = defineEmits(['change']);

const handleFileAdd = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const nextList = [...props.files, url];

  emits('change', nextList);
};

const handleFileDelete = (link) => {
  const nextList = props.files.filter((item) => item !== link);
  emits('change', nextList );
}

</script>

<template>
  <div class="file-input-block">
    <div class="file-input-block__inner">
      <div class="file-input">
        <div class="file-input__inner">
          <input name="file" type="file" id="main-file-input" class="file-input__file" accept="image/png, image/jpeg" @change="handleFileAdd" />
          <label for="main-file-input" class="file-input__label icon-file">Приложите файл</label>
        </div>
      </div>
      <div class="uploaded-images" v-if="props.files.length > 0">
        <div class="uploaded-images__inner">
          <div v-for="(link, index) in props.files" class="uploaded-image" :key="index">
            <div class="uploaded-image__inner">
              <button type="button" class="uploaded-image__delete icon-close" @click="handleFileDelete(link)">
              </button>
              <img :src="link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-input-block {

  // .file-input-block__inner
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.file-input {

  // .file-input__inner
  &__inner {
    display: block;
    width: 100%;
    min-height: 56px;
    position: relative;
    text-align: center;

    @include media-medium {
      min-height: 48px;
    }

    @include media-small {
      min-height: 40px;
    }
  }

  // .file-input__file
  &__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 100%;
    left: 0;
  }

  // .file-input__label
  &__label {
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 15px 16px 15px 48px;
    background-color: $base-06;
    border: 1px solid $base-06;
    height: 56px;
    outline: none;
    border-radius: 8px;
    color: $base-01;
    @include monts-r20;
    @include defaultTransition;

    @include media-medium {
      padding: 13px 16px 13px 48px;
      height: 48px;
      @include monts-r18;
    }

    @include media-small {
      padding: 11px 16px 11px 44px;
      height: 40px;
      @include monts-r14;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translate(0, -50%);
      font-size: 26px;

      @include media-small {
        font-size: 20px;
      }
    }

    &::placeholder {
      @include monts-r20;
      color: $base-01;
    }

    &::-moz-placeholder {
      color: $base-01;
    }

    &::-webkit-input-placeholder {
      color: $base-01;
    }

    @include hover {
      border-color: $primary-01;
    }

    &:focus,
    &:active {
      border-color: $base-01;
    }
  }
}

.uploaded-images {

  // .uploaded-images__inner
  &__inner {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    @include media-extra-small {
      gap: 8px;
    }
  }
}

.uploaded-image {

  // .uploaded-image__inner
  &__inner {
    position: relative;
    display: block;
    width: 183px;
    height: 183px;
    overflow: hidden;
    border-radius: 8px;

    @include media-large {
      width: 154px;
      height: 154px;
    }

    @include media-medium {
      width: 153px;
      height: 153px;
    }

    @include media-small {
      width: 148px;
      height: 148px;
    }

    @include media-extra-small {
      width: 120px;
      height: 120px;
    }

    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      z-index: 4;
    }
  }

  // .uploaded-image__delete
  &__delete {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: $base-06;
    display: block;
    z-index: 5;

    @include media-extra-small {
      width: 20px;
      height: 20px;
    }

    &::before {
      font-size: 24px;
      color: $base-01;

      @include media-extra-small {
        font-size: 20px;
      }
    }
  }
}
</style>
