// 导包
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 组件注册
import home from '../views/home'
import charactor from '../components/charactor/'
import animal from '../components/animal/'
import scenery from '../components/scenery/'
import architect from '../components/architecture/'
// 组件规则
const routes = [
    {path:'/',component:home,children:[
        {path:'/',component:charactor},
        {path:'/charactor',component:charactor},
        {path:'/animal',component:animal},
        {path:'/scenery',component:scenery},
        {path:'/architect',component:architect},
    ]},
]

// 组件实例
const router = new VueRouter({
    routes
})


// 暴露接口
export default router