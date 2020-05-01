<template>
  <section>
    <!-- Social media navbar -->
    <b-navbar class="py-0" type="dark" variant="warning">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text class="pl-3">
          <icon name="phone-alt"></icon> +234 818 045 2762
        </b-nav-text>
        <b-nav-item class="pl-3">
          <icon name="brands/facebook"></icon>
        </b-nav-item>
        <b-nav-item class="pl-3">
          <icon name="brands/twitter"></icon>
        </b-nav-item>
        <b-nav-item class="pl-3">
          <icon name="brands/instagram"></icon>
        </b-nav-item>
        <b-nav-item class="pl-3">
          <icon name="brands/linkedin"></icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Main navigation -->
    <b-navbar class="" toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <b-img
          height="30"
          src="~/assets/img/logo.png"
          alt="Starters Africa Logo"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle class="border-0" target="nav-collapse">
        <img src="~/assets/svg/burger-black.svg" alt="burger menu" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="ml-4 font-weight-bold" to="/">
            HOME
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/academy">
            ACADEMY
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/kids">
            KIDS
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/business">
            FOR BUSINESS
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/events">
            EVENTS
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/blog">
            BLOG
          </b-nav-item>
          <b-nav-item class="ml-4 font-weight-bold" to="/contact">
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  &::before {
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    top: 17px;
    left: -6%;
    border-radius: 50%;
    background-color: #f8ad00;
    // display: inline;
  }
}

.nav-link {
  position: relative;
  &:hover {
    // color: none;
    // text-decoration: underline;
    &::before {
      content: '';
      position: absolute;
      height: 7px;
      width: 7px;
      top: 17px;
      left: -6%;
      border-radius: 50%;
      background-color: #f8ad00;
    }
  }
}
</style>
