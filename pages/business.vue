<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6 py-7 py-md-10 pr-md-5">
            <h1 class="">Let’s become your <span class="text-yellow">strategic growth</span> partner</h1>
            <p>
              We are the partners you need to help impact growth to your business from Strategy stage to execution, we
              follow you through your journey of growth and development.
            </p>
            <!-- request demo form -->
            <b-form inline>
              <label class="sr-only" for="input-email">E-mail</label>
              <b-input
                id="input-email"
                type="email"
                class="mb-2 mr-sm-2 mb-sm-0 py-4 pr-6"
                placeholder="Email Address"
              ></b-input>

              <b-button @click="request" class="px-3 text-white" variant="primary">request demo</b-button>
            </b-form>
          </div>
          <div class="col-md-6 business-hero"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
    return {
      title: `Starters for Business - Starters Africa`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: `We are the partners you need to help impact growth to your business from Strategy stage to execution, we
              follow you through your journey of growth and development.`
        }
      ]
    }
  },
  methods: {
    request() {
      this.$router.push('/request-demo')
    }
  }
}
</script>

<style lang="scss" scoped>
.business-hero {
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/business-hero.png');
}
</style>
