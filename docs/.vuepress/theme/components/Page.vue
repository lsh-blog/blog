<template>
  <main class="page">
    <slot name="top"/>

    <Content class="content default"/>
    <footer class="page-edit" v-if="!$page.frontmatter.hideFooter">
      <div
        class="edit-link"
        v-if="editLink"
      >
        <a
          :href="editLink"
          target="_blank"
          rel="noopener noreferrer"
        >{{ editLinkText }}</a>
        <OutboundLink/>
      </div>

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
        <!-- id 将作为查询条件 -->
        <span :id="$route.path" class="leancloud_visitors time" :data-flag-title="title">
      <em class="post-meta-item-text"> · 阅读量 </em>
      <i class="leancloud-visitors-count">0</i>
    </span>
      </div>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>
    <slot name="bottom"/>
  </main>
</template>

<script>
  import {resolvePage, normalize, outboundRE, endingSlashRE} from '../util'

  export default {
    props: ['sidebarItems'],
    data() {
      return {
        title: ""
      }
    },
    mounted() {
      this.renderValine()
    },
    watch: {
      $route(a, b) {
        if (a.path != b.path) {
          this.renderValine()
        }
      }
    },
    computed: {
      lastUpdated() {
        return this.$page.lastUpdated
      },

      lastUpdatedText() {
        if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
          return this.$themeLocaleConfig.lastUpdated
        }
        if (typeof this.$site.themeConfig.lastUpdated === 'string') {
          return this.$site.themeConfig.lastUpdated
        }
        return 'Last Updated'
      },

      prev() {
        const prev = this.$page.frontmatter.prev
        if (prev === false) {
          return
        } else if (prev) {
          return resolvePage(this.$site.pages, prev, this.$route.path)
        } else {
          return resolvePrev(this.$page, this.sidebarItems)
        }
      },

      next() {
        const next = this.$page.frontmatter.next
        if (next === false) {
          return
        } else if (next) {
          return resolvePage(this.$site.pages, next, this.$route.path)
        } else {
          return resolveNext(this.$page, this.sidebarItems)
        }
      },

      editLink() {
        if (this.$page.frontmatter.editLink === false) {
          return
        }
        const {
          repo,
          editLinks,
          docsDir = '',
          docsBranch = 'master',
          docsRepo = repo
        } = this.$site.themeConfig

        let path = normalize(this.$page.path)
        if (endingSlashRE.test(path)) {
          path += 'README.md'
        } else {
          path += '.md'
        }
        if (docsRepo && editLinks) {
          return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
        }
      },

      editLinkText() {
        return (
          this.$themeLocaleConfig.editLinkText ||
          this.$site.themeConfig.editLinkText ||
          `Edit this page`
        )
      }
    },
    methods: {
      renderValine() {
        this.$nextTick(() => {
          let $page = document.querySelector('.page')
          let vcomments = document.getElementById('vcomments')
          this.title = document.title;
          // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
          let leancloud_visitors = document.getElementsByClassName('leancloud_visitors')[0]
            if(leancloud_visitors){
              leancloud_visitors.id = this.$route.path
            }
          if (!vcomments) {
            vcomments = document.createElement('div')
            vcomments.id = 'vcomments'
          }
          if (this.$page.frontmatter.hideFooter) {
            vcomments.remove();
          } else {
            if ($page && !vcomments) {
              $page.appendChild(vcomments)
            } else {
              $page = document.querySelector('.page')
              $page.appendChild(vcomments)
            }
            this.valine()
          }
        })
      },
      valine() {
        const Valine = require('valine')
        const leancloudStorage = require('leancloud-storage')
        // require window
        if (typeof window !== 'undefined') {
          window.AV = leancloudStorage
        }
        // 初始化valine
        new Valine({
          el: '#vcomments',
          appId: 'a5cCwBNybxC2QdogX4cJO4fA-MdYXbMMI',// your appId
          appKey: '1LBcFebP8cUVQx7O68AwbbVt', // your appKey
          verify: false,
          notify: true,
          visitor: true,
          avatar: 'wavatar',
          placeholder: '春霄苦短，少女前进吧！' + '\n' +
            '夜は短し歩けよ乙女！' + '\n' +
            'Yoru wa Mijikashi Arukeyo Otome!' + '\n' +
            'The Night is Short, Walk on Girl!',
          path: window.location.pathname
        });
      },
      createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
        const bitbucket = /bitbucket.org/
        if (bitbucket.test(repo)) {
          const base = outboundRE.test(docsRepo)
            ? docsRepo
            : repo
          return (
            base.replace(endingSlashRE, '') +
            `/${docsBranch}` +
            (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
            path +
            `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
          )
        }

        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`

        return (
          base.replace(endingSlashRE, '') +
          `/edit/${docsBranch}` +
          (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
          path
        )
      }
    }
  }

  function resolvePrev(page, items) {
    return find(page, items, -1)
  }

  function resolveNext(page, items) {
    return find(page, items, 1)
  }

  function find(page, items, offset) {
    const res = []
    items.forEach(item => {
      if (item.type === 'group') {
        res.push(...item.children || [])
      } else {
        res.push(item)
      }
    })
    for (let i = 0; i < res.length; i++) {
      const cur = res[i]
      if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
        return res[i + offset]
      }
    }
  }
</script>

<style lang="stylus">
  @require '../styles/wrapper.styl'

  #vcomments {
    position: relative
    width: 68%;
    padding: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index 999999999
  }

  .page
    padding-bottom 2rem
    display block

  .page-edit
    @extend $wrapper
    padding-top 1rem
    padding-bottom 1rem
    overflow auto

    .edit-link
      display inline-block

      a
        color lighten($textColor, 25%)
        margin-right 0.25rem

    .last-updated
      float right
      font-size 0.9em

      .prefix
        font-weight 500
        color lighten($textColor, 25%)

      .time
        font-weight 400
        color #aaa

  .page-nav
    @extend $wrapper
    padding-top 1rem
    padding-bottom 0

    .inner
      min-height 2rem
      margin-top 0
      border-top 1px solid $borderColor
      padding-top 1rem
      overflow auto

    // clear float

    .next
      float right

  @media (max-width: $MQMobile)
    .page-edit
      .edit-link
        margin-bottom .5rem

      .last-updated
        font-size .8em
        float none
        text-align left

</style>
