<template
  ><section>
    <div class="swiper" v-swiper:homeSwiper="swiperOptions">
      <div class="swiper-wrapper text-white">
        <div class="swiper-slide slide-1 d-flex justify-content-center align-items-center text-center">
          <div class="">
            <!-- for mobile only -->
            <h3 class="font-weight-light d-lg-none">
              Creating global talents <br />
              across Africa
            </h3>
            <!-- for larger screens only -->
            <h1 class="display-4 d-none d-lg-block">
              Creating global talents <br />
              across Africa
            </h1>
            <b-button variant="yellow" class="text-white px-6 py-3 mt-3">
              Get Started
            </b-button>
          </div>
        </div>
        <div class="swiper-slide slide-2 d-flex justify-content-center align-items-center text-center">
          <div class="">
            <!-- for mobile only -->
            <h3 class="font-weight-light d-lg-none">
              Generation Z - <br />
              Training digital natives <br />
              for the future of work
            </h3>
            <h1 class="display-4 d-none d-lg-block">
              Generation Z - <br />
              Training digital natives <br />
              for the future of work
            </h1>
            <b-button variant="yellow" class="text-white px-6 py-3 mt-3">
              Get Started
            </b-button>
          </div>
        </div>
        <div class="swiper-slide slide-3 d-flex justify-content-center align-items-center text-center">
          <div class="">
            <h3 class="font-weight-light d-lg-none">
              Building the businesses<br />
              that will build a <br />
              more developed Africa
            </h3>
            <h1 class="display-4 d-none d-lg-block">
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
      <!-- Navigation -->
      <div class="d-none d-lg-block swiper-button-prev" slot="button-prev">
        <icon scale="1.5" class="nav-icons" name="arrow-left"></icon>
      </div>
      <div class="d-none d-lg-block swiper-button-next" slot="button-next">
        <icon scale="1.5" class="nav-icons" name="arrow-right"></icon>
      </div>
      <!-- Pagination -->
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
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
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: 'true'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './base.scss';

.nav-icons {
  right: 36%;
  position: absolute;
  top: 34%;
  color: white;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  z-index: 1000;
  background-color: #ffffff36;
  // top: 40px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-sizing: border-box;
  // padding-top: 11px;
  opacity: 1;
  // color: #000000;
  // text-align: center;
  cursor: pointer;

  &::after {
    content: '';
  }
}

.swiper-wrapper {
  height: 80vh;
  @media (max-width: 768px) {
    height: 60vh;
  }

  .swiper-slide {
    background: black;
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image: url('../assets/img/slide-1.jpg');
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
