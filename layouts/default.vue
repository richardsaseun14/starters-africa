<template>
  <div>
    <the-header></the-header>
    <nuxt />
    <the-footer></the-footer>
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
