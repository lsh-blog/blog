<template>
  <div class="section" id="section2">
    <div class="echarts-container">
      <v-chart ref="radarChart" id="radarChart" :autoresize=true :options="radar"/>
    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入提示框和title组件
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/title");
  require("echarts/lib/component/legend");
  import 'echarts/lib/chart/radar'
  import 'echarts/lib/component/radar'
  export default {
    name: "Page2",
    data(){
      return {
        radar:  {}
      }
    },
    mounted() {
     this.radar = this.getRadarOptions()
    },
    methods:{
      doAnimate(){
        this.removeAnimate()
        this.radar = this.getRadarOptions()
        console.log("我是page2")
      },
      removeAnimate(){
        this.radar = {}
      },
      getRadarOptions(){
        return {
          baseOption: {
            title: {
              text: '个人能力雷达图',
              textStyle: {
                color: "#666"
              },
              x: "center"
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              x: "center",
              y: "bottom",
              data:['基本功','库','框架']
            },
            radar: [
              {
                indicator: [
                  {text: 'HTML', max: 100},
                  {text: 'CSS', max: 100},
                  {text: 'JS', max: 100}
                ],
                name: {
                  textStyle: {
                    color: '#fff',
                    backgroundColor: '#666',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                center: ['25%','40%'],
                radius: 80
              },
              {
                indicator: [
                  {text: 'Vue', max: 100},
                  {text: 'React', max: 100},
                  {text: 'WePY', max: 100},
                  {text: 'Bootstrap', max: 100},
                ],
                name: {
                  textStyle: {
                    color: '#fff',
                    backgroundColor: '#1b92f5',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                radius: 80,
                center: ['75%','40%'],
              },
              {
                indicator:  [
                  {text: 'JQuery', max: 100},
                  {text: 'zepto', max: 100},
                  {text: 'three.js', max: 100},
                  {text: 'Swiper.js', max: 100},
                  {text: 'animate.css', max: 100},
                  {text: 'Element.js', max: 100},
                  {text: 'Vuetify.js', max: 100},
                  {text: 'IView.js', max: 100}
                ],
                name: {
                  textStyle: {
                    color: '#fff',
                    backgroundColor: '#fb2afc',
                    borderRadius: 3,
                    padding: [3, 5]
                  }
                },
                center: ['50%','60%'],
                radius: 80
              }
            ],
            series: [
              {
                type: 'radar',
                tooltip: {
                  trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                  {
                    value: [60,73,85,40],
                    name: '基本功'
                  }
                ]
              },
              {
                type: 'radar',
                tooltip: {
                  trigger: 'item'
                },
                radarIndex: 1,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                  {
                    value: [70, 57, 64, 77],
                    name: '框架'
                  }
                ]
              },
              {
                type: 'radar',
                tooltip: {
                  trigger: 'item'
                },
                radarIndex: 2,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                  {
                    name: '库',
                    value: [56, 66, 63, 74, 60,57,76,45],
                  }
                ]
              }
            ]
          },
          media:[
            {
              query: {
                minWidth: 700               // 当容器宽度小于 500 时。
              },
              option: {
                radar: [
                  {
                    center: ['25%','40%'],
                    radius: 80
                  },
                  {
                    center: ['75%','40%'],
                    radius: 80
                  },
                  {
                    center: ['50%','60%'],
                    radius: 80
                  }
                ]
              }
            },{
              query: {
                maxWidth: 700               // 当容器宽度小于 500 时。
              },
              option: {
                radar: [
                  {
                    radius: 80,
                    center: ['28%','45%']
                  },
                  {
                    center: ['62%','25%'],
                    radius: 80
                  },
                  {
                    center: ['50%','75%'],
                    radius: 80
                  }
                ]
              },
            }
          ],
          // 颜色调整
          color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', "#00eeff", "#006eff", "#0099ff", "#0066ff"]
        }
      }
    }
  }
</script>

<style scoped>
  /**
     * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
     * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
     */
  #section2{
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    padding-top: 25px;
  }

  .echarts-container{
    width: 100%;
    height: 84vh;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
