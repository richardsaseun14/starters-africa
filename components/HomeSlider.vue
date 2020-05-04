<template
  ><section>
    <div class="swiper" v-swiper:homeSwiper="swiperOptions">
      <div class="swiper-wrapper text-white">
        <div class="swiper-slide slide-1 d-flex flex-column text-center">
          <div class="pt-7">
            <h1 class="display-3">
              Creating global talents <br />
              across Africa
            </h1>
            <b-button variant="yellow" class="text-white px-6 py-3 mt-3">
              Get Started
            </b-button>
          </div>
        </div>
        <div class="swiper-slide slide-2 d-flex flex-column text-center">
          <div class="pt-7">
            <h1 class="display-3">
              Generation Z - <br />
              Training digital natives <br />
              for the future of work
            </h1>
            <b-button variant="yellow" class="text-white px-6 py-3 mt-3">
              Get Started
            </b-button>
          </div>
        </div>
        <div class="swiper-slide slide-3 d-flex flex-column text-center">
          <div class="pt-7">
            <h1 class="display-3">
              Building the businesses<br />
              that will build a <br />
              more developed Africa
            </h1>
            <b-button variant="yellow" class="text-white px-6 py-3 mt-3">
              Get Started
            </b-button>
          </div>
        </div>
        <!-- Swiper Navigation -->
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div
        class="swiper-pagination swiper-pagination-bullets"
        slot="pagination"
      ></div>
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
export default {
  directives: {
    swiper: directive
  },

  data() {
    return {
      swiperOptions: {
        // spaceBetween: 30,
        effect: 'fade',
        loop: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: true
        // },
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './base.scss';

.swiper-wrapper {
  height: 80vh;

  .swiper-slide {
    background: black;
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image: url('../assets/img/slide-1.png');
    }
    &.slide-2 {
      background-image: url('../assets/img/slide-2.png');
    }
    &.slide-3 {
      background-image: url('../assets/img/slide-3.png');
    }
  }
}
</style>
