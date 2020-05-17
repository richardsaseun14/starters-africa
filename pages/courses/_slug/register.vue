<template>
  <div class="">
    <div class="text-center mb-6" v-if="!link">
      <b-img class="no-course-img" fluid src="~/assets/svg/no-course.svg"></b-img>
      <h1 class="px-4 mt-4 text-darker">
        <b-link>{{ title.rendered }}</b-link> is not available at the moment
      </h1>
    </div>
    <iframe class="my-5" v-else :src="link" width="100%" height="2300" frameborder="0" marginheight="0" marginwidth="0"
      >Loading form...</iframe
    >
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, $axios }) {
    let tmp = await $axios.$get('/course?_fields=slug,id')
    let found = tmp.find(tmp => tmp.slug == params.slug)

    const { title, form_link } = await $axios.$get(`/course/${found.id}?_fields=form_link,title`)
    return { link: form_link, title: title }
  }
}
</script>

<style lang="scss" scoped>
.no-course-img {
  padding: 0 500px;
}
</style>
