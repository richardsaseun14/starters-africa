<template>
  <div>
    <b-modal scrollable="" button-size="sm" hide-footer body-class="pt-0" centered size="lg" id="course-modal">
      <template v-slot:modal-title>
        <h5>Course Registration Form</h5>
      </template>

      <template v-slot:default>
        <div class="text-center mb-6" v-if="!course.form_link">
          <b-img class="no-course-img" fluid src="~/assets/svg/no-course.svg"></b-img>
          <h3 class="px-4 mt-4 text-darker">{{ course.title.rendered }} is not available at the moment</h3>
        </div>
        <div v-else class="iframe-container">
          <!-- <iframe class="my-5" :src="course.form_link" width="100%" frameborder="0" marginheight="0" marginwidth="0"
            >Loading form...</iframe
          > -->
          <b-embed class="" type="iframe" aspect="1by1" :src="course.form_link"></b-embed>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object
    }
  },

  methods: {
    resizeFrame(obj) {
      console.log(obj)
      // obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
    }
  }
  // async mounted() {
  //   let tmp = await this.$axios.$get('/course?_fields=slug,id')
  //   let found = tmp.find(tmp => tmp.slug == params.slug)

  //   const { title, form_link } = await this.$axios.$get(`/course/${found.id}?_fields=form_link,title`)
  // }
}
</script>

<style lang="scss" scoped>
.no-course-img {
  padding: 0 200px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
}
// .iframe-container {
//   overflow: hidden;
//   // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
//   padding-top: 56.25%;
//   position: relative;
// }

// .iframe-container iframe {
//   border: 0;
//   height: 100%;
//   left: 0;
//   position: absolute;
//   top: 0;
//   width: 100%;
// }
</style>
