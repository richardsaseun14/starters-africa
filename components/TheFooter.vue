<template>
  <section class="bg-darker py-5">
    <div class="container">
      <!-- Main Footer -->
      <div class="d-flex row text-white">
        <div class="flex-fill mx-3 my-3 my-lg-0">
          <b-nav vertical class="">
            <b-nav-text class="mb-3 pl-3 pl-lg-0">
              <b-img height="50" src="~/assets/img/logo-white.png" alt="Starters Africa Logo"></b-img>
            </b-nav-text>
            <b-nav-item target="_blank" href="tel:+2348180452762" class="mb-3 pl-0" link-classes="pl-0">
              <icon class="mr-3" scale="1.3" name="phone-alt"></icon>
              +234 818 045 2762
            </b-nav-item>
            <b-nav-item target="_blank" href="mailto:info@starters.africa" class="mb-3 pl-0" link-classes="pl-0">
              <icon class="mr-3" scale="1.3" name="envelope"></icon>
              info@starters.africa
            </b-nav-item>
          </b-nav>
        </div>
        <div class="mx-3 my-3 my-lg-0">
          <b-nav vertical>
            <b-nav-text class="font-weight-bold pl-3 mb-3">STARTERS AFRICA</b-nav-text>
            <b-nav-item to="/kids">Starters Kids</b-nav-item>
            <b-nav-item to="/academy">Starters Academy</b-nav-item>
            <b-nav-item to="/business">Starters for Business</b-nav-item>
          </b-nav>
        </div>
        <div class="mx-3 my-3 my-lg-0">
          <b-nav vertical>
            <b-nav-text class="font-weight-bold pl-3 mb-3">COMPANY</b-nav-text>
            <b-nav-item>About Us</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
            <b-nav-item to="/">Become an Instructor</b-nav-item>
          </b-nav>
        </div>
        <div class="mx-3 my-3 my-lg-0">
          <b-nav vertical>
            <b-nav-text class="font-weight-bold pl-3 mb-3">LINKS</b-nav-text>
            <b-nav-item to="/gallery">Gallery</b-nav-item>
            <b-nav-item to="/academy">Courses</b-nav-item>
            <b-nav-item to="/events">Events</b-nav-item>
            <b-nav-item to="/">FAQs</b-nav-item>
          </b-nav>
        </div>
      </div>

      <!-- Divider -->
      <hr class="bg-light my-4" />

      <!-- Copyright Footer -->
      <div class="row">
        <div class="col-md-6">
          <p class="text-white text-center text-md-left">
            Copyright 2020 <b-link to="/">Starters Africa</b-link> || Dare to Start
          </p>
        </div>
        <div class="col-md-6">
          <b-nav small class="justify-content-md-end justify-content-center">
            <b-nav-item link-classes="py-0">Privacy Policy and Cookie Policy</b-nav-item>
            <b-nav-item link-classes="py-0">Terms</b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
