<template>
  <div>
    <b-form>
      <b-form-group id="input-group-2" label="Full Name" label-for="input-2">
        <b-form-input id="input-2" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email address" label-for="input-1">
        <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Company Name" label-for="input-3">
        <b-form-input type="text" id="input-3" required placeholder="Enter conpany name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Phone Number" label-for="input-4">
        <b-form-input type="tel" id="input-4" required placeholder="Enter phone number"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Job Title" label-for="input-5">
        <b-form-input type="tel" id="input-5" required placeholder="Enter job title"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Your Training Needs" label-for="input-5">
        <b-form-textarea id="textarea" placeholder="Enter training needs" rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>

      <b-button class="text-white font-weight-bold mb-2" block type="submit" variant="primary">get in touch</b-button>
      <p>
        <small style="line-height:1;"
          >By signing up, you agree to our Terms and Privacy Statement. We may use the info you submit to contact
          you.</small
        >
      </p>
    </b-form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
