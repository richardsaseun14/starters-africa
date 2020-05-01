<template>
  <section>
    <div class="swiper py-7" v-swiper:homeSwiper="swiperOptions">
      <div class="swiper-wrapper my-auto">
        <div class="swiper-slide slide-1 d-flex flex-column text-center">
          <div class="px-3 px-lg-10">
            <h2 class="mb-5">
              The Starters Kids programme has had a huge effect on the children
              in our school, the reviews from parents have been great and we are
              very happy with the digital transformation being experienced by
              our students.
            </h2>
            <p class="mb-0">Mr. Uche Onyekpe</p>
            <small>Proprietor St. Nobert Schools</small>
          </div>
        </div>
        <div class="swiper-slide slide-2 d-flex flex-column text-center">
          <div class="px-3 px-lg-10">
            <h2 class="mb-5">
              I am more than glad I took the STarters for Business Sales &
              Strategy course, not only is my business now online but we have
              also increased sales by 80%. Thank you Starters Africa.
            </h2>
            <p class="mb-0">Mrs. Agatha Peter-Ngwu</p>
            <small>CEO Agathus Cakery & Events</small>
          </div>
        </div>
        <div class="swiper-slide slide-3 d-flex flex-column text-center">
          <div class="px-3 px-lg-10">
            <h2 class="mb-5">
              Thanks to the Starters Academy courses I’ve not only increased my
              knowledge on digital marketing but have been able to secure a job
              in a digital agency after two years of being unemployed.
            </h2>
            <p class="mb-0">Ms. Damilola</p>
            <small>Intern at Yogi Creatives</small>
          </div>
        </div>
        <div class="swiper-slide slide-4 d-flex flex-column text-center">
          <div class="px-3 px-lg-10">
            <h2 class="mb-5">
              This is the only platform where your tutors are very much
              interested in your personal growth and development as well as your
              skills improvement.
            </h2>
            <p class="mb-0">Maureen Omoze</p>
            <small>Digital Native in Training</small>
          </div>
        </div>
      </div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
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
        // effect: 'fade',
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

<style lang="scss">
.swiper {
  .swiper-pagination {
    padding-bottom: 30px;
    .swiper-pagination-bullet {
      background-color: #6c6c6c;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: #f8ad00;
    }
  }
}

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
