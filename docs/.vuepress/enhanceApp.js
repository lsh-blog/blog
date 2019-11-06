import VueECharts from 'vue-echarts' //注册图表
import 'animate.css'//引入css动画库
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faAngleDoubleDown,
  faCode,
  faSchool,
  faEnvelope,
  faExchangeAlt,
  faTshirt,
  faPowerOff,
  faMusic
} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

// import VueFullPage from 'vue-fullpage.js'

library.add(faUserSecret, faCode, faSchool, faEnvelope, faGithub, faAngleDoubleDown, faExchangeAlt, faTshirt, faPowerOff, faMusic)
dom.watch()
export default ({

                  Vue, // VuePress 正在使用的 Vue 构造函数
                  options, // 附加到根实例的一些选项
                  router, // 当前应用的路由实例
                  siteData // 站点元数据

                }) => {

  // ...做一些其他的应用级别的优化
  import('vue-fullpage.js').then(module => {
    Vue.use(module.default)
  })
  // Vue.use(VueFullPage)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.config.productionTip = false
  Vue.component('v-chart', VueECharts)
}
