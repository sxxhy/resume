<template>
	<div class="app-user">
		<header id="header" class="mui-bar mui-bar-nav">
			<div class="app-user-sign">
				<span class="mui-icon mui-icon-extra mui-icon-extra-notice"></span>
				<span class="mui-icon mui-icon-gear"></span>
			</div>
			<div class="app-user-login" @click="isLogin($event)">
				<span class="mui-icon mui-icon-contact"></span>
				<router-link to="#" class="app-user-info">{{uname}}</router-link>
				<span class="mui-icon mui-icon-arrowright"></span>
			</div>
		</header>
		<div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" @click="isLogin($event)">
						<div class="my-shopping-info">
							<router-link to="#">我的订单</router-link>
							<router-link to="#">
								<span>全部订单</span>
								<span class="mui-icon mui-icon-arrowright"></span>
							</router-link>
						</div>
						<div class="cart-active-show">
							<div class="active-show-item">
								<router-link to="#">
									<img src="../../../public/img/personal_icon_paid.png" width="50px" height="50px">
									<h6>待付款</h6>
								</router-link>
							</div>
							<div class="active-show-item">
								<router-link to="#">
									<img src="../../../public/img/personal_icon_receipt.png" width="50px" height="50px">
									<h6>待收货</h6>
								</router-link>
							</div>
							<div class="active-show-item">
								<router-link to="#">
									<img src="../../../public/img/personal_icon_received_goods.png" width="50px" height="50px">
									<h6>待评价</h6>
								</router-link>
							</div>
							<div class="active-show-item">
								<router-link to="#">
									<img src="../../../public/img/personal_icon_return_goods.png" width="50px" height="50px">
									<h6>退款/售后</h6>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="app-user-ads" @click="isLogin($event)">
				<router-link to="/">
					<img src="../../../public/img/newUserBanner.png" width="100%">
				</router-link>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							我的资产
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							拼团订单
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							我的收藏
						</router-link>
					</li>
				</ul>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							地址管理
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							消息中心
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/" class="mui-navigate-right">
							帮助与反馈
						</router-link>
					</li>
				</ul>
				<nav class="mui-bar-tab"></nav>
			</div>
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				uid:this.$store.state.user,
				uname:'未登录',
			}
		},
		methods:{
			isLogin(e){
				if(!this.uid){
					this.$router.push('login');
				}
			},
			setUrl(){//保存url实现返回上一页
				var url=location.href; 
				this.$store.commit('saveUrl',url);
			},
			getUserInfo(){
				var user = this.$store.state.user;
				if(user!=null){
					var uname=user.uname;
					this.uname=uname;
				}
			}
		},
		created() {
			this.setUrl();
			this.getUserInfo();
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.app-user #header {
		position: absolute;
		background-color: #EC971F;
		opacity: 0.8;
		height: 180px;
		color: #fff;
		border-radius: 0 0 30px 30px;
		padding: 0;
	}
	.app-user #header .app-user-sign .mui-icon{
		float: right;
		font-size: 30px;
	}
	.app-user #header .app-user-sign::after  {
		display: block;
		content: '';
		clear: both;
	}
	.app-user #header .app-user-sign .mui-icon-gear {
		top: -8px;
		margin-top: 15px;
		margin-right: 10px;
	}
	.app-user #header .app-user-sign .mui-icon-extra-notice {
		margin-right: 6px;
		margin-top: 10px;
	}
	.app-user #header .app-user-login {
		position: relative;
	}
	.app-user #header .app-user-login .mui-icon-contact {
		font-size: 60px;
		padding: 0 10px;
		vertical-align: middle;
	}
	.app-user #header .app-user-login .app-user-info {
		display: inline-block;
		font-size: 20px;
		margin-left: 10px;
		margin-top: 5px;
		font-family: '宋体';
		font-weight: 600;
		color: #fff;
	}
	.app-user #header .app-user-login .mui-icon-arrowright {
		position: absolute;
		right: 10px;
		top: 8px;
	}
	.app-user .mui-content {
		margin-top: 180px;
		z-index: 20;
		padding-top: 0;
		position: relative;
		background-color: #fff;
	}
	.app-user .mui-content .mui-card {
		margin: 18px 18px 0;
		top: -40px;
		border-radius: 10px;
	}
	.app-user .mui-content .cart-active-show {
		display: flex;
		justify-content: space-between;
		text-align: center;
	}
	.app-user .mui-content .cart-active-show .active-show-item a h6 {
		color: #333;
		font-size: 14px;
	}
	.app-user .mui-content .cart-active-show .active-show-item a img {
		width: 40px;
		height: 40px;
	}
	.app-user .mui-content .my-shopping-info::after {
		display: block;
		content: '';
		clear: both;
	}
	.app-user .mui-content .my-shopping-info a:first-child {
		float: left;
		line-height: 40px;
		font-size: 16px;
		color: #333;
	}
	.app-user .mui-content .my-shopping-info a:last-child {
		float: right;
		line-height: 38px;
		font-size: 15px;
		color: #999;
	}
	.app-user .mui-content .app-user-ads {
		margin-top: -38px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(3){
		margin-top: 10px;
	}
	.app-user .mui-content .app-user-ads ul li {
		padding: 14px 15px;
	}
	.app-user .mui-content .app-user-ads ul li a {
		background-color: #fff;
		font-size: 16px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(3) li:nth-child(1) a {
		background: url(../../../public/img/personal_icon_address.png) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(2) li:nth-child(1) a {
		background: url(../../../public/img/personal_icon_assets.png) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(2) li:nth-child(2) a {
		background: url(../../../public/img/pin_logo.jpg) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(2) li:nth-child(3) a {
		background: url(../../../public/img/personal_icon_collection.png) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(3) li:nth-child(2) a {
		background: url(../../../public/img/set_icon_message_new.png) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
	.app-user .mui-content .app-user-ads ul:nth-child(3) li:nth-child(3) a {
		background: url(../../../public/img/personal_icon_feedback.png) no-repeat left;
		background-size: 60px;
		padding-left: 55px;
	}
</style>
