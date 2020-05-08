<template>
  <b-card no-body class="">
    <b-row no-gutters>
      <b-col md="3" class="my-auto">
        <b-card-img src="~/assets/img/course-image.png" alt="Image"></b-card-img>
      </b-col>
      <b-col md="9" class="my-auto">
        <b-card-body class="">
          <b-card-sub-title sub-title-tag="small" class="text-uppercase">development</b-card-sub-title>
          <b-card-title class="font-weight-bold mb-0" title-tag="h2">{{ course.title.rendered }}</b-card-title>
          <b-card-text class="mt-4 mt-lg-2 pr-lg-4">
            {{ course.brief_desc }}
          </b-card-text>
          <b-button :to="{ path: `/courses/${course.id}` }" variant="yellow" class="text-white"
            >see full course</b-button
          >
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    course: {
      type: Object
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped></style>
