<template>
  <div>
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 text-white">
            <h1 class="">Starters Academy</h1>
            <p class="">
              We are creating an ecosystem of technologists, skillful creatives,
              software developers, enterprise architects, project managers, etc.
              creating solutions that positively impact our world and drive
              growth in the growing digital economy in Africa.
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
    <section class="pt-7">
      <div class="container">
        <div class="mb-5">
          <h1>Categories</h1>
        </div>
        <div class="row">
          <div
            v-for="(cat, index) in categories"
            class="col-lg-3 mb-4"
            :key="index"
          >
            <div class="bg-darker-25 py-4 pl-3">
              <p class="mb-0 font-weight-bold text-capitalize">{{ cat }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses section -->
    <section class="py-7">
      <div class="container">
        <div class="">
          <h1 class="">
            We found <span class="text-yellow">3</span> courses available for
            you
          </h1>
        </div>

        <div class="row">
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="4" class="my-auto">
                  <b-card-img
                    src="~/assets/img/course-image.png"
                    alt="Image"
                    fluid
                  ></b-card-img>
                </b-col>
                <b-col md="8" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >Zero to Hero: Frontend Mastery</b-card-title
                    >
                    <b-card-sub-title
                      sub-title-tag="small"
                      class="text-uppercase"
                      >development</b-card-sub-title
                    >
                    <b-card-text class="mt-4">
                      Building a new generation of kids/young adults equipped
                      with digital skills to create, innovate and thrive for the
                      future of work and the growing digital economy in Africa.
                    </b-card-text>
                    <b-button variant="yellow" class="text-white"
                      >see full course</b-button
                    >
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="4" class="my-auto">
                  <b-card-img
                    src="~/assets/img/course-image.png"
                    alt="Image"
                    fluid
                  ></b-card-img>
                </b-col>
                <b-col md="8" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >Zero to Hero: Frontend Mastery</b-card-title
                    >
                    <b-card-sub-title
                      sub-title-tag="small"
                      class="text-uppercase"
                      >development</b-card-sub-title
                    >
                    <b-card-text class="mt-4">
                      Building a new generation of kids/young adults equipped
                      with digital skills to create, innovate and thrive for the
                      future of work and the growing digital economy in Africa.
                    </b-card-text>
                    <b-button variant="yellow" class="text-white"
                      >see full course</b-button
                    >
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="4" class="my-auto">
                  <b-card-img
                    src="~/assets/img/course-image.png"
                    alt="Image"
                    fluid
                  ></b-card-img>
                </b-col>
                <b-col md="8" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >Zero to Hero: Frontend Mastery</b-card-title
                    >
                    <b-card-sub-title
                      sub-title-tag="small"
                      class="text-uppercase"
                      >development</b-card-sub-title
                    >
                    <b-card-text class="mt-4">
                      Building a new generation of kids/young adults equipped
                      with digital skills to create, innovate and thrive for the
                      future of work and the growing digital economy in Africa.
                    </b-card-text>
                    <b-button variant="yellow" class="text-white"
                      >see full course</b-button
                    >
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'development',
        'Data Science',
        'Design',
        'Marketing',
        'Finance & Accounting',
        'Photography',
        'Lifestyle'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 40vh;
  // overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/academy-hero.png');
}

.color-row {
  height: 8px;
  .color {
    width: 150px;
    height: 100%;
  }
}
</style>
