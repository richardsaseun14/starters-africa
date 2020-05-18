<template>
  <div>
    <div class="container py-6">
      <div class="row">
        <div class="col-12 text-center">
          <h6 class="text-uppercase">got a question?</h6>
          <h2 class="mb-0 text-primary">Contact Starters Africa</h2>
          <p>Need to get in touch with the team? We are all ears.</p>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <div class="col-md-7">
          <div>
            <b-form @submit.prevent="submitForm">
              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.subject" type="text"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Message:" label-for="input-3">
                <b-form-textarea
                  id="input-3"
                  v-model="form.message"
                  type="text"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
              <b-button size="sm" class="text-white px-4" type="submit" variant="primary">Submit</b-button>
            </b-form>
          </div>
        </div>

        <div class="col-md-5">
          <icon name="phone-alt"></icon>
          <p class="">
            +234 818 045 2762
          </p>
          <icon name="envelope"></icon>
          <p class="">
            info@starters.africa
          </p>
          <icon name="envelope"></icon>
          <p class="">
            361 Borno Way, Yaba 100001, Lagos
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },

  methods: {
    async submitForm() {
      const formData = new FormData()
      formData.append('your-name', form.name)
      formData.append('your-email', form.email)
      formData.append('your-subject', form.subject)
      formData.append('your-message', form.message)

      // console.log(formData)

      // this.$axios.setBaseURL('wp.starters.africa/wp-json')
      // const resp = await this.$axios.$post('/contact-form-7/v1/contact-forms/48/feedback', formData)
      // console.log(r  esp)
    }
  }
}
</script>

<style lang="scss" scoped></style>
