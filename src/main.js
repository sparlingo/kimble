import InfiniteLoading from 'vue-infinite-loading'
import '~/assets/css/main.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(InfiniteLoading)
  Vue.component('Layout', DefaultLayout)
}
