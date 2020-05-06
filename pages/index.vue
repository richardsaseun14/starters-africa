<template>
  <div>
    <!-- Home slider -->
    <home-slider></home-slider>

    <!-- Color Bar -->
    <div class="color-row d-flex">
      <div class="color bg-yellow"></div>
      <div class="color bg-blue"></div>
      <div class="color bg-green"></div>
      <div class="color bg-red"></div>
    </div>

    <!-- Starters Africa sub section -->
    <section class="container py-7">
      <!-- Academy row -->
      <div class="row">
        <div class="col-lg-4 order-lg-2">
          <b-img fluid src="~/assets/img/sub-academy.png"></b-img>
        </div>
        <div class="col-lg-8 my-auto order-lg-1">
          <h2 class="font-weight-bold pt-5 pt-md-0">Starters Academy</h2>
          <p>
            We are creating an ecosystem of technologists, skillful creatives, software developers, enterprise
            architects, project managers, etc. creating solutions that positively impact our world and drive growth in
            the growing digital economy in Africa.
          </p>
          <b-button to="/academy" variant="yellow" class="text-white mt-4">view courses</b-button>
        </div>
      </div>
      <!-- Kids row -->
      <div class="row my-7">
        <div class="col-lg-4">
          <b-img fluid src="~/assets/img/sub-kids.png"></b-img>
        </div>
        <div class="col-lg-8 my-auto text-lg-right">
          <h2 class="font-weight-bold pt-5 pt-md-0">Starters Kids</h2>
          <p>
            Building a new generation of kids/young adults equipped with digital skills to create, innovate and thrive
            for the future of work and the growing digital economy in Africa. With our well trained facilitators we
            train kids and teenagers on digital skills and entrepreneurship skills through hands on fully practical
            school and home based training.
          </p>
          <b-button to="/kids" variant="yellow" class="text-white mt-4">view curriculum</b-button>
        </div>
      </div>
      <!-- Business row -->
      <div class="row">
        <div class="col-lg-4 order-lg-2">
          <b-img fluid src="~/assets/img/sub-business.png"></b-img>
        </div>
        <div class="col-lg-8 my-auto order-lg-1">
          <h2 class="font-weight-bold pt-5 pt-md-0">Starters for Business</h2>
          <p>
            Businesses are moving in the digital direction so we educate SMEs, individuals and even the large scale
            enterprise on how to move with the trend. There are different modes of operations and skills set required
            for advancement of business and we provide that and much more. We aim to help businesses grow, enabling
            startups with the necessary support required to bring them into the limelight of growth, innovation and
            digitalization.
          </p>
          <b-button to="/business" variant="yellow" class="text-white mt-4">learn more</b-button>
        </div>
      </div>
    </section>

    <!-- Courses section -->
    <section class="bg-darker-25 py-7">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="">Learn a digital skill</h1>
          <p class="">
            Apply now to be one of the new students to join the next cohort
          </p>
        </div>

        <div class="row">
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="3" class="my-auto">
                  <b-card-img src="~/assets/img/course-image.png" alt="Image"></b-card-img>
                </b-col>
                <b-col md="9" class="my-auto">
                  <b-card-body class="">
                    <b-card-sub-title sub-title-tag="small" class="text-uppercase">development</b-card-sub-title>
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >Zero to Hero: Frontend Mastery</b-card-title
                    >
                    <b-card-text class="mt-4 mt-lg-2 pr-lg-4">
                      This course is for anyone who wants to become a pro in front end web development skills
                    </b-card-text>
                    <b-button variant="yellow" class="text-white">see full course</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial section -->
    <testimonial-slider></testimonial-slider>

    <!-- Events Section  -->
    <section class="bg-darker-25 py-7">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="">Upcoming Events</h1>
          <p class="">
            Upcoming Starters sponsored Events to network and attend.
          </p>
        </div>
        <div class="row">
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="3" class="my-auto">
                  <b-card-img src="~/assets/img/event-image.png" alt="Image" fluid></b-card-img>
                </b-col>
                <b-col md="9" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >How to get funding for your business: For SMEs and StartUp founders
                    </b-card-title>
                    <b-card-text class="mt-4">
                      <icon class="text-yellow" name="regular/clock"></icon>
                      <em>6th June, 2020</em> &nbsp; &nbsp;
                      <icon class="text-yellow" name="map-marker-alt"></icon>
                      <em>Lagos, Nigeria.</em>
                    </b-card-text>
                    <b-button size="sm" class="px-4" variant="outline-yellow">Register </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="3" class="my-auto">
                  <b-card-img src="~/assets/img/event-image.png" alt="Image" fluid></b-card-img>
                </b-col>
                <b-col md="9" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >Effective Communication for Increased sales
                    </b-card-title>
                    <b-card-text class="mt-4">
                      <icon class="text-yellow" name="regular/clock"></icon>
                      <em>19th June, 2020</em> &nbsp; &nbsp;
                      <icon class="text-yellow" name="map-marker-alt"></icon>
                      <em>Lagos Nigeria. </em>
                    </b-card-text>
                    <b-button size="sm" class="px-4" variant="outline-yellow">Register </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Slider -->
    <company-slider></company-slider>
  </div>
</template>

<script>
import HomeSlider from '~/components/HomeSlider.vue'
import TestimonialSlider from '~/components/TestimonialSlider.vue'
import CompanySlider from '~/components/CompanySlider.vue'

export default {
  components: {
    HomeSlider,
    TestimonialSlider,
    CompanySlider
  }
}
</script>

<style lang="scss" scoped></style>
