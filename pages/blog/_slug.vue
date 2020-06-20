<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <b-badge :key="cat.id" v-for="cat in category" class="text-uppercase mb-3" variant="red">{{ cat.name }}</b-badge>
          <h3 class="">{{ post.title.rendered }}</h3>
          <hr />
          <div class="d-flex align-items-center mt-4 mb-3">
            <b-avatar size="1rem" variant="green" src="~/assets/img/avatar.jpg" class="mr-2"></b-avatar>
            <p class="mb-0 text-muted text-uppercase">
              <small><span class="text-primary">Starters Africa</span> - {{ $moment(post.date).fromNow() }}</small>
            </p>
          </div>
          <b-img
            fluid
            src="https://wp.starters.africa/wp-content/uploads/2020/06/adeniran_2-scaled-e1592622928402.jpg"
          ></b-img>

          <div class="my-3" v-html="post.content.rendered"></div>
          <div class="">
            <h5 class="font-weight-bold">Tags in</h5>
            <b-badge :key="tag.id" v-for="tag in tags" pill class="text-uppercase rounded mr-2" variant="primary">{{
              tag.name
            }}</b-badge>
          </div>
          <!-- <b-button class="mt-3" variant="outline-red">SHARE</b-button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    // Set Meta Tags for this Page
    return {
      title: `${this.post.title.rendered} - Starters Africa`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // { hid: 'description', name: 'description', content: `${this.course.brief_desc}` }
      ]
    }
  },

  async asyncData({ app, params, $axios }) {
    let tmp = await $axios.$get('/posts?_fields=slug,id')
    let found = tmp.find(tmp => tmp.slug == params.slug)
    console.log('found', found)
    await app.store.dispatch('getPost', found.id)

    const resp = await $axios.$get(`/categories?post=${found.id}&_fields=id,name`)

    const resp1 = await $axios.$get(`/tags?post=${found.id}&_fields=id,name`)
    return { category: resp, tags: resp1 }
  },

  computed: {
    ...mapState(['post'])
  }
}
</script>

<style lang="scss" scoped></style>
