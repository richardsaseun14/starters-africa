<template>
  <section class="py-6">
    <div class="text-center"><h2 class="font-weight-bold">Trusted by</h2></div>
    <div class="swiper mx-2" v-swiper:homeSwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="py-5 swiper-slide slide-1 d-flex flex-column text-center">
          <div class="">
            company logo
          </div>
        </div>
        <div class="py-5 swiper-slide slide-1 d-flex flex-column text-center">
          <div class="">
            company logo
          </div>
        </div>
      </div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <div
        class="swiper-pagination swiper-pagination-bullets pb-0"
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
        slidesPerView: 4,
        spaceBetween: 30,
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
// .swiper {
//   .swiper-pagination {
//     padding-bottom: 0px;
//   }
// }

// .swiper-pagination {
//   padding-bottom: 20px;
//   > .swiper-pagination-bullet {
//     background-color: #f8ad00;
//   }
// }

// .swiper-wrapper {
//   .swiper-slide {
//     background: white;
//     min-height: 100%;
//   }
// }

// .swiper-pagination {
//   padding-bottom: 20px;
//   .swiper-pagination-bullet {
//     background: #6c6c6c;
//     opacity: 1;
//   }
// }
</style>
