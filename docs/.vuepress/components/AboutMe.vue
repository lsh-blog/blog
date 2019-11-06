<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <Page1 ref="page1"></Page1>
    <Page2 ref="page2"></Page2>
    <Page3 ref="page3"></Page3>
    </full-page>
  </div>
</template>

<script>
  // import fullpage from 'fullpage.js'
  import Page1 from './fullPages/Page1'
  import Page2 from './fullPages/Page2'
  import Page3 from './fullPages/Page3'
  import "fullpage.js/dist/fullpage.css"

  export default {
    name: "AboutMe",
    components: {Page1, Page2, Page3},
    data() {
      return {
        fullPage: null,
        options: {}
      }
    },
    beforeMount() {
    },
    mounted() {
        this.options = {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          menu: '#menu',
          onLeave: this.onLeave,
          afterRender: this.afterRender,
          onSlideLeave: this.onSlideLeave,
          controlArrows: false,
          loopHorizontal: false,
          scrollingSpeed: 1600,
          paddingTop: 0,
          navigation: true,
          slidesNavigation: true,
          navigationTooltips: ['个人资料', '职业技能', 'demo作品'],
          anchors: ['page1', 'page2', 'page3'],
        }
    },
    methods: {
      // 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
      afterRender: function () {
        this.$refs.page1.enterAnimate()
      },
      onLeave(index, nextIndex) {
        let last = index.index
        let now = nextIndex.index
        //从第一页切换到第二页触发动画
        if (last === 0 && now === 1) {
          this.$refs.page2.doAnimate()
          this.$refs.page1.outAnimate()
        }
        //从第二页切换到第三页触发动画
        if (last === 1 && now === 2) {
          // this.$refs.page3.doAnimate()
        }
        //从第三页切换到第二页触发动画
        if (last === 2 && now === 1) {
          this.$refs.page2.doAnimate()
        }
        if ((last === 1 || last === 2) && now === 0) {
          this.$refs.page1.enterAnimate()
        }
      },
      onSlideLeave: function (section, origin, destination, direction) {
        if (section.anchor == "page3") {
          console.log(direction)
          let index = destination.index
          this.$refs.page3.doAnimate(index, direction)
        }
      }
    },
  }
</script>

<style scoped>

</style>
