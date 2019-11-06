<template>
  <div class="section" id="section3">
    <div class="slide slide1" data-anchor="slide1"> 幻灯片 1</div>
    <div class="slide slide2" data-anchor="slide2"> 幻灯片 2</div>
    <div class="slide slide3" data-anchor="slide3"> 幻灯片 3</div>
    <div class="slide slide4" data-anchor="slide4"> 幻灯片 4</div>
  </div>
</template>

<script>
  export default {
    name: "Page3",
    data() {
      return {}
    },
    methods: {
      doAnimate(index,direction) {
        console.log("我是page3index:"+index)
        this.setSlideAnimate(".slide"+ (index + 1))
       // if (direction == "left"){
       //   this.slideToLeft(".slide"+ (index + 1))
       // }
       // if (direction == "right"){
       //   this.slideToRight(".slide"+ (index + 1))
       // }
      },
      setSlideAnimate(Elename = ".slide1"){
        document.querySelectorAll(".slide").forEach(item => {
          item.style.transitionTimingFunction = "cubic-bezier(0, 0.93, 0.39, 0.98)"
          item.style.transformOrigin = "50% 50%"
          item.style.transform = "translate(0px, 0px) translateZ(0px) scale(0.3) rotate(240deg)"
          item.style.transitionDuration = "1000ms"
        })
        let slide = document.querySelector(Elename)
        slide.style.transitionTimingFunction = "cubic-bezier(0, 0.93, 0.39, 0.98)"
        slide.style.transformOrigin = "50% 50%"
        slide.style.transform = "translate(0px, 0px) translateZ(0px) scale(1) rotate(0deg)"
        slide.style.transitionDuration = "2000ms"
        slide.style.opacity = "1"
      }
    }
  }
</script>

<style scoped>
  #section3 {
    width: 100%;
    height: 100%;
  }

  #section3 .slide1 {
    background: linear-gradient(45deg, #f64f59, #c471ed, #12c2e9);
  }

  #section3 .slide2 {
    background: blanchedalmond;
  }

  #section3 .slide3 {
    background: rebeccapurple;
  }

  #section3 .slide4 {
    background: blue;
  }

  .slide {
    text-align: center;
  }

  #fp-nav ul li, .fp-slidesNav ul li {
    width: 90px;
    height: 21px;
    margin: 10px 0 0;
    vertical-align: middle;
  }

  #fp-nav ul li a, .fp-slidesNav ul li a {
    float: right;
    width: 21px;
    height: 21px;
    color: #8F9DA4;
    text-align: right;
  }

  #fp-nav ul li a span, .fp-slidesNav ul li a span {
    height: 12px;
    width: 12px;
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0);
  }

  #fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
    width: 12px;
    height: 12px;
    margin: -2px 0 0 -2px;
  }

  #fp-nav ul li a.active span, .fp-slidesNav ul li a.active span, #fp-nav ul li:hover a.active span, .fp-slidesNav ul li:hover a.active span {
    margin: -2px 0 0 -2px;
    background: #fff;
  }

  #fp-nav ul li .fp-tooltip.right {
    float: left;
    top: 5px;
    margin-right: 5px;
    font: 12px "Microsoft Yahei";
    line-height: 21px;
  }

  /*水平导航*/
  .fp-slidesNav ul li {
    width: 14px;
    height: 21px;
    margin-left: 10px;
    vertical-align: middle;
  }
</style>
