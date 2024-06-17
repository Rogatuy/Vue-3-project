<template>
  <div class="timer">
    <div class="day time-segment">
      <div class="time-segment__numbers">
        <div class="strip" ref="dayStrip1">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
        <div class="strip" ref="dayStrip2">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
      </div>
      <div class="time-segment__text">
        <p>Дней</p>
      </div>
    </div>
    <div class="hr time-segment">
      <div class="time-segment__numbers">
        <div class="strip" ref="hrStrip1">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
        <div class="strip" ref="hrStrip2">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
      </div>
      <div class="time-segment__text">
        <p>Часов</p>
      </div>
    </div>
    <div class="min time-segment">
      <div class="time-segment__numbers">

        <div class="strip" ref="minStrip1">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
        <div class="strip" ref="minStrip2">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
      </div>
      <div class="time-segment__text">
        <p>Минут</p>
      </div>
    </div>
    <div class="sec time-segment">
      <div class="time-segment__numbers">
        <div class="strip" ref="secStrip1">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
        <div class="strip" ref="secStrip2">
          <div class="number">0</div>
          <div class="number">1</div>
          <div class="number">2</div>
          <div class="number">3</div>
          <div class="number">4</div>
          <div class="number">5</div>
          <div class="number">6</div>
          <div class="number">7</div>
          <div class="number">8</div>
          <div class="number">9</div>
        </div>
      </div>
      <div class="time-segment__text">
        <p>Секунд</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';

const dayStrip1 = ref(1);
const dayStrip2 = ref(3);
const hrStrip1 = ref(1);
const hrStrip2 = ref(2);
const minStrip1 = ref(4);
const minStrip2 = ref(5);
const secStrip1 = ref(2);
const secStrip2 = ref(5);

const screenWidth = ref(window.innerWidth);
const numberHeightValue = ref(updateNumberHeight(screenWidth.value));

function updateNumberHeight(screenWidth) {
  if (screenWidth > 1199) {
    return 58;
  }

  if (screenWidth > 991) {
    return 48;
  }

  if (screenWidth > 767) {
    return 38;
  }

  if (screenWidth > 0) {
    return 30;
  }
}

function highlight(strip, d) {
  strip.querySelector(`.number:nth-of-type(${d + 1})`).classList.add("pop");

  setTimeout(() => {
    strip.querySelector(`.number:nth-of-type(${d + 1})`).classList.remove("pop");
  }, 950);
}

function stripSlider(strip1, strip2, number) {
  let d1 = Math.floor(number / 10);
  let d2 = number % 10;

  strip1.style.transform = `translateY(${d1 * - numberHeightValue.value}px)`;
  highlight(strip1, d1);
  strip2.style.transform = `translateY(${d2 * - numberHeightValue.value}px)`;
  highlight(strip2, d2);
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onBeforeMount(() => {
  updateScreenWidth(screenWidth.value);
})

onMounted(() => {
  updateScreenWidth(screenWidth.value);

  window.addEventListener('resize', () => {
    updateScreenWidth();
    numberHeightValue.value = updateNumberHeight(screenWidth.value)
  });

  setInterval(() => {
    const startTime = new Date();
    //Дата окончания акции
    const endTime = new Date('2024-04-25');
    const differenceMs = endTime - startTime;
    const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((differenceMs % (1000 * 60)) / 1000);

    stripSlider(dayStrip1.value, dayStrip2.value, days);
    stripSlider(hrStrip1.value, hrStrip2.value, hours);
    stripSlider(minStrip1.value, minStrip2.value, mins);
    stripSlider(secStrip1.value, secStrip2.value, secs);
  }, 1000);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    updateScreenWidth();
    numberHeightValue.value = updateNumberHeight(screenWidth.value)
  });
});
</script>

<style scoped lang="scss">
.timer {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-gap: 11px;
  height: 92px;
  width: 334px;
  background-color: $primary-01;

  @include media-large {
    width: 304px;
    height: 88px;
    grid-template-columns: repeat(4, 68px);
    gap: 10px;
  }

  @include media-medium {
    width: 284px;
    height: 78px;
    grid-template-columns: repeat(4, 68px);
    gap: 4px;
  }

  @include media-small {
    width: 218px;
    height: 60px;
    grid-template-columns: repeat(4, 53px);
    gap: 1px;
  }
}

.time-segment {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  //.time-segment__numbers
  &__numbers {
    position: relative;
    display: grid;
    grid-template-columns: 34px 34px;
    align-items: start;
    height: 58px;
    overflow: hidden;

    @include media-medium {
      grid-template-columns: 32px 32px;
      height: 48px;
    }

    @include media-small {
      grid-template-columns: 23px 23px;
      height: 38px;
    }

    @include media-extra-small {
      grid-template-columns: 17px 17px;
      height: 30px;
    }
  }

  //.time-segment__text
  &__text {
    position: absolute;
    bottom: 0;
    color: $base-06;
    @include monts-r20;

    @include media-large {
      @include monts-r18;
    }

    @include media-small {
      @include monts-r14;
    }
  }
}

.strip {
  overflow: hidden;
  transition: transform 500ms ease-in-out;
}

.number {
  display: grid;
  place-items: center;
  width: 34px;
  height: 58px;
  color: $base-06;
  border-radius: 50%;
  @include monts-b48;
  opacity: 0;
  visibility: hidden;
  transition: all 500ms 100ms ease-in-out;

  @include media-medium {
    @include monts-b40;
    width: 32px;
    height: 48px;
  }

  @include media-small {
    @include monts-b32;
    width: 23px;
    height: 38px;
  }

  @include media-extra-small {
    @include monts-b24;
    width: 17px;
    height: 30px;
  }
}

.number.pop {
  opacity: 1;
  visibility: visible;
  transition: all 500ms 100ms ease-in-out;
}
</style>
