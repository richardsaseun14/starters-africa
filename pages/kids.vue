<template>
  <div>
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 text-white">
            <h1 class="">Starters Kids</h1>
            <p class="">
              Building a new generation of kids/young adults equipped with
              digital skills to create, innovate and thrive for the future of
              work and the growing digital economy in Africa. With our well
              trained facilitators we train kids and teenagers on digital skills
              and entrepreneurship skills through hands on fully practical
              school and home based training.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Bar -->
    <div class="color-row d-flex">
      <div class="color bg-yellow"></div>
      <div class="color bg-blue"></div>
      <div class="color bg-green"></div>
      <div class="color bg-red"></div>
    </div>

    <!-- Categories Section -->
    <section class="pt-6">
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-3 mb-4">
            <div class="">
              <b-img fluid src="~/assets/img/kid-coding.png"></b-img>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-4">
            <div class="">
              <b-img fluid src="~/assets/img/kid-creatives.png"></b-img>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-4">
            <div class="">
              <b-img fluid src="~/assets/img/kid-robotics.png"></b-img>
            </div>
          </div>
          <div class="col-6 col-lg-3 mb-4">
            <div class="">
              <b-img fluid src="~/assets/img/kid-game.png"></b-img>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row"></div>
      </div>
    </section>

    <!-- Gallery section -->
    <section class="bg-yellow d-flex align-items-center p-5">
      <div class="w-100 gallery-section text-center text-white py-6">
        <h1 class="font-weight-light mb-3">Photo Gallery</h1>
        <b-button variant="yellow" class="text-white">view gallery</b-button>
      </div>
    </section>

    <testimonial-slider></testimonial-slider>

    <!-- become an instructor  -->
    <section class="d-flex instructor-section align-items-center p-5">
      <div class="w-100 text-center text-white py-6">
        <h1 class="text-uppercase font-weight-light mb-0">
          become an instructor?
        </h1>
        <p>Join our pool of instructors and start earning money!</p>
        <b-button variant="outline-light" class="mt-3">get started</b-button>
      </div>
    </section>
  </div>
</template>

<script>
import TestimonialSlider from '~/components/TestimonialSlider.vue'
export default {
  data() {
    return {
      // categories: [
      //   'kid-coding.png',
      //   'kid-creative.png',
      //   'kid-robotics.png',
      //   'kid-game.png',
      //   'Finance & Accounting',
      //   'Photography',
      //   'Lifestyle'
      // ]
    }
  },
  components: {
    TestimonialSlider
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 40vh;
  // overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/kid-hero.png');
}

.color-row {
  height: 8px;
  .color {
    width: 150px;
    height: 100%;
  }
}

.gallery-section {
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/kid-gallery.png');
}

.instructor-section {
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/instructor-bg.png');
}
</style>
