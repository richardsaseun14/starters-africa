<template>
  <div>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 py-7 pl-md-5">
            <h1 class="">
              <span class="text-yellow">Upskill</span> your people with virtual
              training
            </h1>
            <p>
              Empower your remote workforce to learn what they need, when they
              need it. Online learning from global experts across tech,
              business, wellness and more to help your employees do whatever
              comes next.
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

              <b-button class="px-3 text-white" variant="primary"
                >request demo</b-button
              >
            </b-form>
          </div>
          <div class="col-md-6 business-hero"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.business-hero {
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/business-hero.png');
}
</style>
