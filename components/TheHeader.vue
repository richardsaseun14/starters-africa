<template>
  <section>
    <!-- Social media navbar -->
    <b-navbar class="py-0 bg-yellow" type="dark">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item target="_blank" href="tel:+2348180452762" class="pl-3 text-white">
          <icon class="text-white" name="phone-alt"></icon> <span class="text-white">+234 818 045 2762</span>
        </b-nav-item>
        <b-nav-item :href="social.link" v-for="social in socials" class="pl-3" :key="social.name">
          <icon :id="social.id" class="text-white" :name="social.name"></icon>
          <b-tooltip :target="social.id">{{ social.tip }}</b-tooltip>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <!-- Main navigation -->
    <b-navbar class="border-bottom" toggleable="lg" type="light">
      <b-navbar-brand to="/">
        <b-img height="30" src="~/assets/img/logo.png" alt="Starters Africa Logo"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle class="border-0" target="nav-collapse">
        <img src="~/assets/svg/burger-black.svg" alt="burger menu" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" class="my-2 my-lg-0" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-for="link in links"
            link-classes="link-up"
            exact-active-class="exact-active"
            class="ml-4 font-weight-bold text-uppercase"
            :to="link.link"
            :key="link.text"
          >
            {{ link.text }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'home', link: '/' },
        { text: 'academy', link: '/academy' },
        { text: 'kids', link: '/kids' },
        { text: 'business', link: '/business' },
        { text: 'events', link: '/events' },
        { text: 'blog', link: '/blog' },
        { text: 'contact', link: '/contact' }
      ],
      socials: [
        {
          id: 'facebook-nav',
          name: 'brands/facebook',
          link: 'https://www.facebook.com',
          tip: 'Facebook'
        },
        { id: 'twitter-nav', name: 'brands/twitter', link: 'https://twitter.com/', tip: 'Twitter' },
        {
          id: 'instagram-nav',
          name: 'brands/instagram',
          link: 'https://www.instagram.com',
          tip: 'Instagram'
        },
        {
          id: 'linkedin-nav',
          name: 'brands/linkedin',
          link: 'https://www.linkedin.com',
          tip: 'LinkedIn'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-nav {
  li {
    border: solid 1px bottom;
  }
}

.exact-active {
  &::before {
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    top: 17px;
    left: -6%;
    border-radius: 50%;
    background-color: #f8ad00;
    // display: inline;
  }
}

.link-up {
  position: relative;
  &:hover {
    // color: none;
    // text-decoration: underline;
    &::before {
      content: '';
      position: absolute;
      height: 7px;
      width: 7px;
      top: 17px;
      left: -6%;
      border-radius: 50%;
      background-color: #f8ad00;
    }
  }
}
</style>
