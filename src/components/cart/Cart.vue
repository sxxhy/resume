<template>
	<div class="app-cart">
		<header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">购物车</h1>
		</header>
		
		<div class="mui-content" v-if="islogin==false">
			<img src="../../../public/img/cart_empty.png">
			<h3 class="app-cart-sign">登陆后才能看到商品哦~</h3>
			<button type="button" class="mui-btn mui-btn-outlined" @click="jump">
				立即登录
			</button>
		</div>
		<cart-info v-else></cart-info>
		<footer-nav></footer-nav>
		<div class="hidden"></div>
	</div>
</template>

<script>
	import cartInfo from './CartInfo';
	export default {
		data(){
			return {
				islogin:false,
			}
		},
		methods:{
			jump(){
				this.$router.push('/login');
			},
			isLogin(){
				var user = this.$store.state.user;
				if(user!=null)
					this.islogin = user.islogin;
			}
		},
		created() {
			this.isLogin();
		},
		components:{
			cartInfo
		}
	}
</script>

<style scoped>
	.app-cart .mui-bar.mui-bar-nav {
		background-color: #fff;
	}
	.app-cart .mui-content {
		height: 100%;
	}
	.app-cart .mui-content .mui-btn.mui-btn-outlined {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -41px;
		padding: 6px 22px;
		line-height: 2;
		margin-top: 5px;
		border: 1px solid #666;
	}
	.app-cart .app-cart-sign {
		position: absolute;
		font-size: 16px;
		top: 50%;
		left: 50%;
		margin-left: -74px;
		margin-top: -22px;
		color: #333;
		font-weight: 100;
	}
	.app-cart .mui-content img {
		width: 116px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -54px;
	}
	.app-cart .hidden {
		height: 50px;
		display: block;
	}
</style>
