import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Class from './components/category/Class.vue';
import Cart from './components/cart/Cart.vue';
import User from './components/personal/User.vue';
import Login from './components/login/Login.vue';
import ProductList from './components/product/ProductList.vue';
import Search from './components/search/Search.vue';
import CartInfo from './components/comment/CartInfo.vue';
import is404 from './components/comment/404.vue';
import Details from './components/product/Details.vue';
Vue.use(Router);
export default new Router({
	linkActiveClass:'mui-active',
	routes: [
		{path:'/',redirect: '/home'},
		{path:'/home',component: Home},
		{path:'/class',component:Class},
		{path:'/cart',component:Cart},
		{path:'/user',component:User},
		{path:'/login',component:Login},
		{path:'/productlist',component:ProductList},
		{path:'/search',component:Search},
		{path:'/cartinfo',component:CartInfo},
		{path:'/is404',component:is404},
		{path:'/detail',component:Details}
	]
})