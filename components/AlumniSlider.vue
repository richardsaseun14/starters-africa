<template>
  <section>
    <div class="swiper py-4" v-swiper:homeSwiper="swiperOptions">
      <div class="swiper-wrapper my-auto">
        <div v-for="alumni in alumnis" class="swiper-slide d-flex flex-column text-center" :key="alumni.name">
          <div class="">
            <b-avatar
              size="5rem"
              variant="primary"
              src="https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
              class="mb-3"
            ></b-avatar>
            <p class="mb-0">{{ alumni.name }}</p>
            <p class="font-weight-light mb-5 mt-3">
              {{ alumni.text }}
            </p>
          </div>
        </div>
      </div>
      <!-- Navigation -->
      <!-- <div class="d-none d-lg-block swiper-button-prev" slot="button-prev">
        <icon scale="1.5" class="nav-icons" name="arrow-left"></icon>
      </div>
      <div class="d-none d-lg-block swiper-button-next" slot="button-next">
        <icon scale="1.5" class="nav-icons" name="arrow-right"></icon>
      </div> -->
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
        spaceBetween: 25,
        // effect: 'fade',
        slidesPerView: 3,
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
          prevEl: '.swiper-button-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
      },
      alumnis: [
        {
          text: `A very interesting and valuable experience. I learnt a lot and it gave me a good grounding in the basics.
              It really made me think, and I liked how it enabled me to interact wiht people through the practical work.`,
          name: 'Bisola Saseun'
        },
        {
          text: ` I have really improved my knowledge in this field. It has also given me the confidence to start my own
              small business in Digital Marketing.`,
          name: 'Emem Isong'
        },
        {
          text: `Thanks to the Starters Academy courses I’ve not only increased my knowledge on digital marketing but have
              been able to secure a job.
`,
          name: 'Blessing Chuckson'
        },
        {
          text: `This is the only platform where your tutors are very much interested in your personal growth and
              development as well as your skills improvement.
`,
          name: 'Imodumeh Eshio John'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
  background-color: #00000036;
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

.swiper {
  // &:hover {
  //   .swiper-button-prev,
  //   .swiper-button-next {
  //   }
  // }
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
