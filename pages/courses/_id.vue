<template>
  <div>
    <section class="hero d-flex align-items-center py-6">
      <div class="container">
        <div class="row">
          <div class="col-md-8 text-darker">
            <!-- for mobile only -->
            <h3 class="font-weight-light d-lg-none">
              {{ course.title.rendered }}
            </h3>
            <!-- for larger screens only -->
            <h1 class="display-4 d-none d-lg-block">
              {{ course.title.rendered }}
            </h1>
            <!-- <h1 class="display-3">Frontend Mastery: Zero to Hero</h1> -->
            <p class="">{{ course.brief_desc }}</p>
          </div>
          <div class="col-md-3">
            <div class="bg-darker p-4">
              <h3 class="text-white text-center text-uppercase">
                {{ course.price == 0 ? 'free' : '&#8358;' + course.price }}
              </h3>
            </div>
            <b-button size="lg" block class="text-white" variant="primary">register</b-button>
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

    <div class="container my-5">
      <div class="row">
        <div class="col-12 d-flex flex-wrap">
          <!-- instructor -->
          <div class="d-flex mr-3 my-3 my-lg-0">
            <b-avatar size="2.5rem" variant="primary" src="https://placekitten.com/300/300" class="mr-2"></b-avatar>
            <div class="mt-n1">
              <small class="text-muted text-capitalize">instructor</small>
              <p class="mb-0 mt-n1 text-uppercase">{{ course.instructor }}</p>
            </div>
          </div>
          <!-- category -->
          <div class="d-flex mr-3 px-md-3 my-3 my-lg-0">
            <b-avatar size="2.5rem" variant="dark" class="mr-2"
              ><icon class="text-white" name="grip-horizontal"></icon
            ></b-avatar>
            <div class="mt-n1">
              <small class="text-muted text-capitalize">category</small>
              <p class="mb-0 mt-n1 text-uppercase">{{ course.category }}</p>
            </div>
          </div>
          <!-- category -->
          <div class="d-flex mr-3 px-md-3 my-3 my-lg-0">
            <b-avatar size="2.5rem" variant="dark" class="mr-2">{{ course.rating }}</b-avatar>
            <div class="mt-n1">
              <small class="text-muted text-capitalize">ratings</small>
              <b-form-rating class="p-0 mt-n2" size="sm" v-model="course.rating" no-border readonly></b-form-rating>
              <span></span>
            </div>
          </div>
          <!-- duration -->
          <div class="d-flex mr-3 px-md-3 my-3 my-lg-0">
            <b-avatar size="2.5rem" variant="dark" class="mr-2"
              ><icon class="text-white" name="regular/calendar"></icon
            ></b-avatar>
            <div class="mt-n1">
              <small class="text-muted text-capitalize">duration</small>
              <p class="mb-0 mt-n1 text-uppercase">{{ course.duration }} weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="container mt-6">
      <b-nav pills align="center">
        <b-nav-form>
          <b-button @click.prevent="show = !show" class="px-3 text-white" variant="primary" type="submit"
            >Overview</b-button
          >
        </b-nav-form>
        <b-nav-form class="mx-2">
          <b-button @click.prevent="show = !show" class="px-3 text-white" variant="primary" type="submit"
            >Curriculum</b-button
          >
        </b-nav-form>
        <!-- <b-nav-form>
          <b-button size="sm" class="px-3 text-white" variant="primary" type="submit">Resources</b-button>
        </b-nav-form> -->
      </b-nav>
    </div>
    <!-- Nav objects -->
    <div class="container">
      <!-- Course Overview -->
      <div v-if="show" class="row mt-5">
        <div class="col-12">
          <h3 class="mb-3">Description</h3>
          <span v-html="course.content.rendered" class=""></span>
          <!-- What you'll learn -->
          <h3 class="mb-3">What you'll learn</h3>
          <b-list-group class="mb-4">
            <b-list-group-item v-for="(learn, index) in learning" :key="index"
              ><icon name="check-double"></icon> &nbsp; {{ learn }}</b-list-group-item
            >
          </b-list-group>
          <!-- Requirements -->
          <h3 class="mb-3">Requirements</h3>
          <b-list-group class="mb-4">
            <b-list-group-item v-for="(req, index) in requirements" :key="index">{{ req }} </b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <!-- Curriculum -->
      <div v-else class="row mt-5">
        <div class="col-12">
          <!-- html -->
          <b-list-group class="mb-4">
            <b-list-group-item class="border-0 pb-3 pl-0 text-uppercase"
              ><icon name="regular/file-alt"></icon> &nbsp; HTML</b-list-group-item
            >
            <hr class="w-100 my-1 bg-darker" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Introduction</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Element and Attribute</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Text Editor & Formatting</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Style and Paragraph</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">formatting and quotes</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Comments and Colors </b-list-group-item>
          </b-list-group>

          <!-- css -->
          <b-list-group class="mb-4">
            <b-list-group-item class="border-0 pb-3 pl-0 text-uppercase"
              ><icon name="regular/file-alt"></icon> &nbsp; CSS</b-list-group-item
            >
            <hr class="w-100 my-1 bg-darker" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Intro & Syntax</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Selector & Ways to use</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Border & Margins & Padding</b-list-group-item>
          </b-list-group>

          <!-- javascript -->
          <b-list-group class="mb-4">
            <b-list-group-item class="border-0 pb-3 pl-0 text-uppercase"
              ><icon name="regular/file-alt"></icon> &nbsp; Javascript</b-list-group-item
            >
            <hr class="w-100 my-1 bg-darker" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Intro & Syntax</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">outputs</b-list-group-item>
            <hr class="w-100 my-1 bg-darker-25" />
            <b-list-group-item class="border-0 text-capitalize py-1 pl-0">Statements</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>

    <div class="bg-darker-25 mt-5 py-5">
      <div class="container">
        <h1 class="text-center">Testimonies From Our Student</h1>
        <alumni-slider></alumni-slider>
      </div>
    </div>
  </div>
</template>

<script>
import AlumniSlider from '~/components/AlumniSlider'
import { mapState } from 'vuex'
export default {
  async asyncData({ app, params }) {
    await app.store.dispatch('getCourse', params.id)
  },

  data() {
    return {
      show: true,
      value: 4.5
    }
  },

  computed: {
    learning() {
      return this.course.learn.split('\n')
    },
    requirements() {
      return this.course.requirements.split('\n')
    },
    ...mapState({
      course: 'course'
    })
  },

  components: {
    AlumniSlider
  }
}
</script>

<style lang="scss" scoped>
.course-img {
  background-image: url('../../assets/img/course-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.hero {
  // height: 40vh;
  // overflow: hidden;
  background-position: center;
  background-size: cover;
  // background-image: url('../../assets/img/course-image.png');
  background-color: #ffffff;
}

.color-row {
  height: 8px;
  .color {
    width: 150px;
    height: 100%;
  }
}
</style>
