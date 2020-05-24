<template>
  <b-card no-body class="">
    <b-row no-gutters>
      <b-col md="3" class="my-auto">
        <b-card-img style="object-fit: cover;" class="img-fluid" :src="img" alt="Image"></b-card-img>
      </b-col>
      <b-col md="9" class="my-auto">
        <b-card-body class="">
          <b-card-sub-title sub-title-tag="small" class="text-uppercase">{{ category }}</b-card-sub-title>
          <b-card-title class="font-weight-bold mb-0" title-tag="h2">{{ course.title.rendered }}</b-card-title>
          <b-card-text class="mt-4 mt-lg-2 pr-lg-4">
            {{ course.brief_desc }}
          </b-card-text>
          <b-button :to="{ path: `/courses/${course.slug}` }" variant="yellow" class="text-white"
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

  data() {
    return {
      category: '',
      img: ''
    }
  },
  async created() {
    const img = await this.$axios.$get(`/media/${this.course.featured_media}?_fields=media_details`)
    const [resp] = await this.$axios.$get(`/course_category?post=${this.course.id}&_fields=name`)
    // console.log('image', img)
    this.img = img.media_details.sizes.medium.source_url
    this.category = resp.name
  }
}
</script>

<style lang="scss" scoped></style>
