<template>
  <div>
    <b-badge :key="cat.id" v-for="cat in category" class="text-uppercase mb-3" variant="red">{{ cat.name }}</b-badge
    ><br />
    <div class=""><b-img alt="image" fluid class="mb-4" :src="image"></b-img></div>
    <h3 class="">
      <b-link :to="{ path: `/blog/${blog.slug}` }">{{ blog.title.rendered }}</b-link>
    </h3>
    <div class="d-flex align-items-center mb-2">
      <b-avatar size="1rem" src="~/assets/img/avatar.jpg" class="mr-2"></b-avatar>
      <p class="mb-0 text-muted text-uppercase">
        STARTERS AFRICA <span class="font-weight-bolder text-primary">-</span> {{ $moment(blog.date).fromNow() }}
        <span class="font-weight-bolder text-primary">-</span> <DisqusCount :identifier="`/blog/${blog.slug}`" />
      </p>
    </div>
    <p class="" v-html="blog.excerpt.rendered"></p>
    <hr class="my-5" />
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object
    }
  },

  data() {
    return {
      image: '',
      category: {}
    }
  },

  async created() {
    const img = await this.$axios.$get(`/media/${this.blog.featured_media}?_fields=media_details`)
    this.image = img.media_details.sizes.large.source_url

    const resp = await this.$axios.$get(`/categories?post=${this.blog.id}&_fields=id,name`)
    this.category = resp
  }
}
</script>

<style lang="scss" scoped></style>
