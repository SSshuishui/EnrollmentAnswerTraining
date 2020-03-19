import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
const Home = () => import('views/user/appHome/Home')
const Answer = () => import('views/user/appAnswer/Answer')
const Question = () => import ("views/user/question/Question");
const System = () => import ("views/manager/system/System");
const Login = () => import("views/login/Login")
const Register = () => import("views/register/Register")
const Profile = () => import('views/user/appProfile/Profile')

// 1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/question'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/answer',
    component: Answer
  },
  {
    path: '/question',
    component: Question
  },
  {
    path: '/system',
    component: System
  }
]

// 2.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出路由对象
export default router
