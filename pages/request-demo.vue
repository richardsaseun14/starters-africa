<template>
  <div class="container py-6">
    <div class="row">
      <div class="col-md-6">
        <h1 class="display-2 text-primary">Get your demo</h1>
        <h2 class="font-weight-light my-4">
          See why leading organizations choose Udemy for Business as their destination for employee learning
        </h2>
        <div class="my-5">
          <h4>In your demo, learn more about:</h4>
          <ul class="py-3">
            <li class="py-2">
              Unlimited access to the top 30+ courses selected from Starters Africa – anytime
            </li>
            <li class="py-2">
              Fresh content taught by over 10 experts and real-world practitioners – for any learning style
            </li>
            <li class="py-2">Actionable learning insights and admin functionality</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6"><demo-form></demo-form></div>
    </div>
  </div>
</template>

<script>
import DemoForm from '../components/DemoForm'
export default {
  head() {
    // Set Meta Tags for this Page
    return {
      title: `Request A Demo - Starters for Business`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: ` See why leading organizations choose Udemy for Business as their destination for employee learning`
        // }
      ]
    }
  },

  layout: 'demo',

  components: {
    DemoForm
  }
}
</script>

<style lang="scss" scoped></style>
