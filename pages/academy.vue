<template>
  <div>
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12 text-white">
            <h1 class="">Starters Academy</h1>
            <p class="">
              We are creating an ecosystem of technologists, skillful creatives, software developers, enterprise
              architects, project managers, etc. creating solutions that positively impact our world and drive growth in
              the growing digital economy in Africa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Bar -->
    <div class="color-row d-flex">
      <div class="color bg-yellow"></div>
      <div class="color bg-blue"></div>
      <div class="color bg-green"></div>
      <div class="color bg-red"></div>
    </div>

    <!-- Categories Section -->
    <section class="pt-7">
      <div class="container">
        <div class="mb-5">
          <h1>Categories</h1>
        </div>
        <div class="row">
          <div v-for="(cat, index) in categories" class="col-lg-3 mb-4" :key="index">
            <div class="bg-darker-25 py-4 pl-3">
              <p class="mb-0 font-weight-bold text-capitalize">{{ cat }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses section -->
    <section class="py-7">
      <div class="container">
        <div class="">
          <h3 class="mb-3">
            We found <span class="text-yellow">{{ courses.length }}</span> courses available for you
          </h3>
        </div>

        <div class="row">
          <div v-for="course in courses" class="col-12 mb-5" :key="course.id">
            <course-card class="mb-4" :course="course"></course-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CourseCard from '~/components/CourseCard.vue'
import { mapState } from 'vuex'
export default {
  async asyncData({ app }) {
    await app.store.dispatch('getCourses')
  },

  data() {
    return {
      categories: [
        'development',
        'Data Science',
        'Design',
        'Marketing',
        'Finance & Accounting',
        'Photography',
        'Lifestyle'
      ]
    }
  },

  computed: {
    ...mapState(['courses'])
  },

  components: {
    CourseCard
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 40vh;
  // overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/academy-hero.png');
}

.color-row {
  height: 8px;
  .color {
    width: 150px;
    height: 100%;
  }
}
</style>
