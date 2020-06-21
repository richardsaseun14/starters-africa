<template>
  <div>
    <div class="container pt-4">
      <div class="row">
        <div class="col">
          <b-link to="/blog"
            ><p class="font-weight-bold text-dark"><small>&lt;--- BACK TO BLOG</small></p></b-link
          >
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <b-badge :key="cat.id" v-for="cat in category" class="text-uppercase mb-3" variant="red">{{
            cat.name
          }}</b-badge>
          <h3 class="">{{ post.title.rendered }}</h3>
          <hr />
          <div class="d-flex align-items-center mt-4 mb-3">
            <b-avatar size="1rem" variant="green" src="~/assets/img/avatar.jpg" class="mr-2"></b-avatar>
            <p class="mb-0 text-muted text-uppercase">
              <small><span class="text-primary">Starters Africa</span> - {{ $moment(post.date).fromNow() }}</small>
            </p>
          </div>
          <b-img fluid :src="image"></b-img>

          <div class="px-md-5 px-lg-7">
            <div class="my-3 text-justify" v-html="post.content.rendered"></div>

            <div class="container-fluid">
              <h5 class="font-weight-bold">Tags in</h5>
              <b-badge :key="tag.id" v-for="tag in tags" pill class="text-uppercase rounded mr-2" variant="green">
                {{ tag.name }}
              </b-badge>
              <div class="d-flex align-items-center mt-4">
                <b-button @click="show = !show" class="mr-3" variant="outline-primary">SHARE</b-button>

                <transition name="fade">
                  <div v-if="show" class="d-flex">
                    <ShareNetwork
                      class="pointer"
                      :key="share.network"
                      v-for="share in sharing"
                      :network="share.network"
                      :url="url"
                      :title="post.title.rendered"
                      :description="post.excerpt.rendered"
                      :quote="post.title.rendered"
                      hashtags="learn,interview"
                      twitter-user="startersafrica"
                    >
                      <icon scale="1.5" :class="`text-${share.network} mr-3`" :name="`brands/${share.network}`"></icon>
                    </ShareNetwork>
                  </div>
                </transition>
              </div>
            </div>

            <div class="container-fluid mt-5 comments">
              <Disqus :lazy="false" />
            </div>
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

  async asyncData({ app, params, $axios, store }) {
    let tmp = await $axios.$get('/posts?_fields=slug,id')
    let found = tmp.find(tmp => tmp.slug == params.slug)
    // console.log('found', found)
    await app.store.dispatch('getPost', found.id)

    const resp = await $axios.$get(`/categories?post=${found.id}&_fields=id,name`)

    const resp1 = await $axios.$get(`/tags?post=${found.id}&_fields=id,name`)

    const img = await $axios.$get(`/media/${store.state.post.featured_media}?_fields=media_details`)
    return { category: resp, tags: resp1, image: img.media_details.sizes.full.source_url }
  },

  data() {
    return {
      url: `https://starters.africa/blog/${this.$route.params.slug}`,
      show: false,
      sharing: [{ network: 'facebook' }, { network: 'twitter' }, { network: 'whatsapp' }]
    }
  },

  computed: {
    pageConfig() {
      return {
        url: this.url,
        identifier: this.$route.path,
        title: this.post.title.rendered,
        slug: this.$route.params.slug
      }
    },
    ...mapState(['post'])
  },

  created() {
    this.$root.$on('share_network_close', function(network, url) {
      this.show = false
    })
  }
}
</script>

<style lang="scss" scoped>
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
