<template>
  <div class="section" id="section1">
    <div class="part-one">
      <img class="part-one-image" :src="headImage" alt="头像">
      <p>姓&emsp;&emsp;名：黑猫警长</p>
      <p>学&emsp;&emsp;历：专科</p>
      <p>工作年限：应届毕业生</p>
      <p>年&emsp;&emsp;龄：22</p>
      <p>联系电话：18818881888</p>
      <p>电子邮箱：1743369777@qq.com</p>
      <p>GitHub：<a href="https://github.com/lsh-blog/lsh-blog.git" target="_blank">lsh-blog</a></p>
    </div>
    <!--<video id="myVideo" preloader loop muted controls="false" data-autoplay data-keepplaying>-->
      <!--<source src="../../public/video/lol_hayato.mp4" type="video/mp4">-->
      <!--<source src="../../public/video/lol_hayato.mp4" type="video/webm">-->
    <!--</video>-->
    <img class="video-placeholder" src="/img/lol_yasso.jpg">
  </div>
</template>

<script>
  export default {
    name: "partOne",
    data() {
      return {
        headImage: require('../../public/img/little_luffy.png')
      }
    },
    methods:{
      enterAnimate(){
        this.removeAnimate()
        let avatar = document.querySelector('.part-one-image')
        let ps = document.querySelectorAll('.part-one > p');
        avatar.classList.add("animated", "zoomIn");
        Array.from(ps).forEach((item,i) =>{
          item.classList.add("animated", "slideInLeft")
          item.style.animationDelay = i / 10 + "s";
        })
      },
      outAnimate(){
        this.removeAnimate()
        let ps = document.querySelectorAll('.part-one > p');
        let avatar = document.querySelector('.part-one-image')
        avatar.classList.remove("animated", "zoomIn");
        Array.from(ps).forEach((item,i) =>{
          item.classList.add("animated", "fadeOutRight")
          item.style.animationDelay = (ps.length - i) / 10 + "s";
        })
      },
      removeAnimate(){
        let ps = document.querySelectorAll('.part-one > p');
        for (let item of ps) {
          item.classList.remove("animated", "slideInLeft","fadeOutRight")
        }
      }
    }
  };
</script>

<style scoped>
  a {
    color: deepskyblue;
  }
  a:hover {
    color: rgb(118, 190, 248);
  }
  p {
    line-height: 30px;
  }
  #section1{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .part-one {
    position: absolute;
    left: 50%;
    top: 46%;
    z-index: 10;
    transform: translate(-50%,-50%);
    padding: 60px 100px;
    margin: 0 auto;
    color: white;
    border-radius: 20px;
    background: rgba(0,0,0,.4);
    /*border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;*/
  }
  .part-one-image {
    width: 150px;
    height: 150px;
  }

  #myVideo{
    position: absolute;
    left: 0;
    bottom: 0;
    top:0;
    right:0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    /* in case the video doesn't fit the whole page*/
    /*background: linear-gradient(45deg, #f64f59, #c471ed, #12c2e9) no-repeat center center;*/
    /*background:  url("/img/lol_yasso.jpg") no-repeat center;*/
    object-fit: cover; /*cover video background */
    z-index:0;
  }
.video-placeholder{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f64f59, #c471ed, #12c2e9) no-repeat center center;
  z-index: -99;
  object-fit: cover;
}
  video::-webkit-media-controls {
    display:none !important;
  }

  @media (max-width: 624px) {
    .part-one{
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 60px 0;
      box-sizing: border-box;
    }
  }
</style>
