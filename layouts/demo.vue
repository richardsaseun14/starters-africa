<template>
  <div>
    <!-- <the-header></the-header> -->
    <b-navbar class="border-bottom" toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand to="/">
          <b-img height="30" src="~/assets/img/logo.png" alt="Starters Africa Logo"></b-img>
        </b-navbar-brand>

        <!-- <b-navbar-toggle class="border-0" target="nav-collapse">
          <template v-slot:default="{ expanded }">
            <img height="14" v-if="expanded" src="~/assets/svg/close.svg" alt="burger menu" />
            <img height="14" v-else src="~/assets/svg/burger-black.svg" alt="burger menu" />
          </template>
        </b-navbar-toggle> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item
              v-for="link in links"
              link-classes="link-up"
              exact-active-class="exact-active"
              class="ml-4 font-weight-bold text-uppercase"
              :to="link.link"
              :key="link.text"
            >
              {{ link.text }}
            </b-nav-item> -->
        </b-navbar-nav>
      </div>
    </b-navbar>
    <nuxt />
    <!-- <the-footer></the-footer> -->
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style></style>
