<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <span>2019-2023 © TestShop.</span>
        <span>Вcе права защищены.</span>
      </div>
    </div>
  </footer>
</template>

<style lang='scss'>
.footer {
  background-color: $base-01;

  // .footer__inner
  &__inner {
    display: flex;
    justify-content: flex-end;
    padding: 27px 0;
    gap: 5px;
  }

  & span {
    color: $base-06;
    @include monts-r20;

    @include media-medium {
      @include monts-r18;
    }

    @include media-small {
      @include monts-r14;
    }
  }
}
</style>
