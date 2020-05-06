<template>
  <div>
    <section class="hero d-flex align-items-center">
      <div class="text-center w-100 text-white">
        <small>6th June, 2020</small>
        <h1 class="text-uppercase">Don’t miss the upcoming event</h1>
        <p class="font-weight-bold">
          How to get funding for your business: For SMEs and StartUp founders
        </p>
        <b-button variant="outline-yellow">RSVP</b-button>
      </div>
    </section>

    <!-- Color Bar -->
    <div class="color-row d-flex">
      <div class="color bg-yellow"></div>
      <div class="color bg-blue"></div>
      <div class="color bg-green"></div>
      <div class="color bg-red"></div>
    </div>

    <!-- Events Section  -->
    <section class="py-7">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="3" class="my-auto">
                  <b-card-img
                    src="~/assets/img/event-image.png"
                    alt="Image"
                    fluid
                  ></b-card-img>
                </b-col>
                <b-col md="9" class="my-auto">
                  <b-card-body class="">
                    <b-card-title class="font-weight-bold mb-0" title-tag="h2"
                      >How to get funding for your business: For SMEs and
                      StartUp founders
                    </b-card-title>
                    <b-card-text class="mt-4">
                      <icon class="text-yellow" name="regular/clock"></icon>
                      <em>6th June, 2020</em> &nbsp; &nbsp;
                      <icon class="text-yellow" name="map-marker-alt"></icon>
                      <em>Lagos, Nigeria.</em>
                    </b-card-text>
                    <b-button size="sm" class="px-4" variant="outline-yellow"
                      >Register
                    </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
          <div class="col-12 mb-5">
            <b-card no-body class="">
              <b-row no-gutters>
                <b-col md="3" class="my-auto">
                  <b-card-img
                    src="~/assets/img/event-image.png"
                    alt="Image"
                    fluid
                  ></b-card-img>
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
                    <b-button size="sm" class="px-4" variant="outline-yellow"
                      >Register
                    </b-button>
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
export default {}
</script>

<style lang="scss" scoped>
.hero {
  height: 60vh;
  // overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/event-hero.png');
}
</style>
