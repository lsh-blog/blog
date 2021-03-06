<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      class="slide-bar"
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>
    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
    <!--回到顶部箭头-->
    <BackToTop></BackToTop>
    <!--音乐播放器-->
    <APlayer></APlayer>
    <!--live2d看板娘-->

  </div>
</template>

<script>
  import Home from '../components/Home.vue'
  import Navbar from '../components/Navbar.vue'
  import Page from '../components/Page.vue'
  import Sidebar from '../components/Sidebar.vue'
  import BackToTop from '../components/BackToTop.vue'
  import APlayer from '../../components/APlayer.vue'
  import {resolveSidebarItems} from '../util'

  export default {
    components: {Home, Page, Sidebar, Navbar, BackToTop, APlayer},

    data() {
      return {
        isSidebarOpen: false,
        isPc: false,
      }
    },

    computed: {

      shouldShowNavbar() {
        const {themeConfig} = this.$site
        const {frontmatter} = this.$page
        if (
          frontmatter.navbar === false ||
          themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title ||
          themeConfig.logo ||
          themeConfig.repo ||
          themeConfig.nav ||
          this.$themeLocaleConfig.nav
        )
      },

      shouldShowSidebar() {
        const {frontmatter} = this.$page
        return (
          !frontmatter.home &&
          frontmatter.sidebar !== false &&
          this.sidebarItems.length
        )
      },

      sidebarItems() {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },

      pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      }
    },

    mounted() {
      //判断当前网页大小是否大于760px
      if (document.documentElement.clientWidth > 760){
        this.isPc = true
      }
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })
    },

    methods: {
      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },

      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      }
    }
  }
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style scoped>
  .slide-bar{
    padding-bottom: 66px;
  }
</style>
