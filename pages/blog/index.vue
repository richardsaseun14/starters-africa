<template>
  <section class="">
    <div class="bg-darker-25 py-3">
      <div class="container"><h3 class="text-darker">BLOG</h3></div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div v-for="post in posts" class="col-md-6" :key="post.id">
          <blog-item :blog="post"></blog-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogItem from '~/components/Blog/BlogItem'
import { mapState } from 'vuex'
export default {
  head() {
    // Set Meta Tags for this Page
    return {
      title: `Blog - Starters Africa`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // { hid: 'description', name: 'description', content: `${this.course.brief_desc}` }
      ]
    }
  },

  async asyncData({ app, params, $axios }) {
    await app.store.dispatch('getPosts')
  },

  computed: {
    ...mapState(['posts'])
  },

  components: {
    BlogItem
  }
}
</script>

<style lang="scss" scoped></style>
