<template>
	<div class="app-home">
		<!-- 主页面标题 -->
		<header class="mui-bar mui-bar-nav">
			<span class="logo"></span>
			<h1 class="mui-title">
				<div class="mui-input-row mui-search" @click="goSearch">
					<span class="mui-icon mui-icon-search"></span>
					<input type="search" class="mui-input-clear" placeholder="搜一搜">
					<span class="mui-icon-extra mui-icon-extra-sweep"></span>
				</div>
			</h1>
			<span class="mui-icon-extra mui-icon-extra-notice"></span>
		</header>
		<!-- 主页面内容容器 -->
		<div class="mui-content mui-scroll-wrapper">
			<div class="mui-scroll">
				<!-- 主界面具体展示内容 -->
				<mt-swipe :auto="4000">
					<mt-swipe-item v-for="(item,i) of list" :key="i">
						<img :src="item.img_url" />
					</mt-swipe-item>
				</mt-swipe>
				<div class="home-content-info">
					<div class="active-show">
						<div class="active-show-item">
							<router-link to="#">
								<img src="../../public/img/xinpin.jpg" width="50px" height="50px">
								<h6>每日新品</h6>
							</router-link>
						</div>
						<div class="active-show-item">
							<router-link to="#">
								<img src="../../public/img/chou.jpg" width="50px" height="50px">
								<h6>小米众筹</h6>
							</router-link>
						</div>
						<div class="active-show-item">
							<router-link to="#">
								<img src="../../public/img/miao.jpg" width="50px" height="50px">
								<h6>限时抢购</h6>
							</router-link>
						</div>
						<div class="active-show-item">
							<router-link to="#">
								<img src="../../public/img/bang.jpg" width="50px" height="50px">
								<h6>热销排行</h6>
							</router-link>
						</div>
						<div class="active-show-item">
							<router-link to="#">
								<img src="../../public/img/shi.jpg" width="50px" height="50px">
								<h6>有品市集</h6>
							</router-link>
						</div>
					</div>
					<div class="yp-recomment">
						<h3 class="recomment-title">有品推荐</h3>
						<div class="recomment-content">
							<div class="recomment-item">
								<router-link to="#">
									<div class="item-title">畅销好物补单购</div>
									<div class="item-active">最高立省900元</div>
									<div class="item-img">
										<img src="../../public/img/index01.jpg">
									</div>
								</router-link>
							</div>
							<div class="recomment-item">
								<router-link to="#">
									<div class="item-title">最高直降400</div>
									<div class="item-active">鞋靴箱包分会场</div>
									<div class="item-img">
										<img src="../../public/img/index02.jpg">
									</div>
								</router-link>
							</div>
							<div class="recomment-item">
								<router-link to="#">
									<div class="item-title">下单返180元卷包</div>
									<div class="item-active">最高直降900元 MIX3抢购</div>
									<div class="item-img">
										<img src="../../public/img/index03.jpg">
									</div>
								</router-link>
							</div>
							<div class="recomment-item">
								<router-link to="#">
									<div class="item-title">爆品8折起</div>
									<div class="item-active">最高直降100元</div>
									<div class="item-img">
										<img src="../../public/img/index04.jpg">
									</div>
								</router-link>
							</div>
						</div>
					</div>
					<div class="xm-crowd">
						<div class="xm-crowd-title">
							<h3>小米众筹</h3>
							<router-link to="">
								更多
								<img src="../../public/img/more.jpg">
							</router-link>
						</div>
						<div class="crowd-content-top">
							<div class="cc-text-content">
								<div class="cc-title">
									CHI ZHANG轻便热能羽绒服（男 女 同 款）
								</div>
								<div class="cc-intro">
									时尚设计师小虎牙创意
								</div>
								<div class="cc-price">￥229</div>
								<div class="cc-fans">
									<span>2234</span>
									<span>/ 1000人支持</span>
									<span class="fire fire-re">热</span>
								</div>
							</div>
							<div class="cc-top-img">
								<img src="../../public/img/jacket.png" width="100%" height="95%">
								<span>244%</span>
							</div>
						</div>
						<div class="progress"></div>
						<div class="crowd-content-body">
							<div class="ccb-item">
								<div class="ccb-item-title">
									小白家庭云盘
								</div>
								<div class="ccb-img-price">
									<span class="ccb-item-price">￥699</span>
									<div class="ccb-img">
										<img src="../../public/img/yunpan.png" width="100%" height="100%">
									</div>
								</div>
								<div class="ccb-item-fans">
									<span class="per-num">1000</span>
									<span class="standy">人支持</span>
									<span class="fire fire-huo">火</span>
									<span class="ccb-item-percen">295%</span>
								</div>
								<div class="progress ccb-progress"></div>
							</div>
							<div class="ccb-item">
								<div class="ccb-item-title">
									小白家庭云盘
								</div>
								<div class="ccb-img-price">
									<span class="ccb-item-price">￥699</span>
									<div class="ccb-img">
										<img src="../../public/img/minichuan.png" width="100%" height="100%">
									</div>
								</div>
								<div class="ccb-item-fans">
									<span class="per-num">1000</span>
									<span class="standy">人支持</span>
									<span class="fire fire-re">热</span>
									<span class="ccb-item-percen">295%</span>
								</div>
								<div class="progress ccb-progress"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="hidden-nav"></div>
			</div>
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			//获取轮播图的图片
			getSwipeInfo() {
				this.$http.get('imglist').then(res => {
					this.list = res.body;
				})
			},
			goSearch() {
				this.$router.push('search');
			}
		},
		created() {
			this.getSwipeInfo(); //轮播图
		},
		mounted() {
			this.saveUrl();//使用全局函数保存url的方法
		}
	}
</script>

<style scoped>
	.app-home .mui-scroll-wrapper {
		position: static;
	}

	.app-home .mui-scroll {
		position: static;
	}

	.app-home .mui-content {
		background-position-y: 44px;
	}

	.app-home .mui-bar {
		box-shadow: none;
	}

	.app-home .mui-bar .mui-title {
		left: 75px;
	}

	.app-home .mui-bar .mui-icon-search {
		position: absolute;
		top: 50%;
		margin-top: -12px;
		left: 10px;
		color: #fff;
	}

	.app-home .mui-bar .mui-icon-extra-sweep {
		position: absolute;
		right: 10px;
		top: 14px;
		font-size: 20px;
		color: #fff;
	}

	.app-home .mui-bar .mui-icon-extra-notice {
		position: absolute;
		right: 5px;
		top: 50%;
		margin-top: -12px;
		color: #666;
	}

	.app-home .mui-bar .mui-search .mui-input-clear {
		padding-left: 45px;
	}

	.app-home .logo {
		display: inline-block;
		width: 60px;
		height: 100%;
		font-size: 26px;
		line-height: 44px;
		background: url(../../public/img/logo.png) center no-repeat;
		background-size: 70px;
	}

	.app-home .mint-swipe {
		cursor: pointer;
		height: 150px;
		margin-top: 5px;
	}

	.app-home .mint-swipe img {
		width: 100%;
		height: 150px;
		display: flex;
	}

	.app-home .mui-content .mui-scroll .home-content-info {
		/* padding: 0 10px; */
		background-color: #fff;
	}

	.app-home .mui-content .active-show {
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
	}

	.app-home .mui-content .active-show img {
		border-radius: 50%;
	}

	.app-home .mui-content .active-show h6 {
		color: #333;
	}

	.app-home .mui-content .yp-recomment {
		margin: 10px;
	}

	.app-home .mui-content .yp-recomment .recomment-title {
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		font-family: "bookman old style";
		font-weight: 400;
	}

	.app-home .mui-content .yp-recomment .recomment-content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.app-home .mui-content .recomment-content .recomment-item {
		width: 49%;
		padding: 10px;
		background-color: #ededf2;
		margin: 1px;
	}
	.app-home .recomment-item .item-title{
		font-size: 18px;
		color: #ff6700d4;
	}
	.app-home .recomment-item .item-active {
		font-size: 14px;
		color: #999;
	}
	.app-home .recomment-item .item-img {
		text-align: center;
	}
	.app-home .recomment-item .item-img img {
		width: 80%;
	}
	
	.app-home .mui-content .xm-crowd {
		margin: 0 10px 10px;
	}
	.app-home .mui-content .xm-crowd .xm-crowd-title {
		display: flex;
		justify-content: space-between;
		height: 30px;
		line-height: 30px;
	}
	.app-home .mui-content .xm-crowd .xm-crowd-title h3 {
		font-size: 18px;
		font-family: "bookman old style";
		font-weight: 500;
	}
	.app-home .mui-content .xm-crowd .xm-crowd-title a {
		font-size: 14px;
		color: #666;
	}
	.app-home .mui-content .xm-crowd .xm-crowd-title a img {
		width: 20px;
		vertical-align: middle;
	}
	.app-home .mui-content .crowd-content-top {
		display: flex;
		position: relative;
		padding: 10px 10px 0;
		background-color: #f0ad4e36;
	}
	.app-home .mui-content .crowd-content-top .cc-text-content {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.app-home .mui-content .crowd-content-top .cc-top-img {
		width: 40%;
	}
	.app-home .mui-content .crowd-content-top .cc-top-img span {
		position: absolute;
		bottom: 2%;
		right: 4%;
		font-size: 14px;
		color: #ff6700c9;
	}
	.app-home .mui-content .crowd-content-top .cc-title {
		color: #242424;
		margin-bottom: 5px;
	}
	.app-home .mui-content .crowd-content-top .cc-intro {
		color: #999;
		font-size: 14px;
		margin-bottom: 3%;
	}
	.app-home .mui-content .crowd-content-top .cc-price {
		color: #FF5053;
		font-size: 16px;
	}
	.app-home .mui-content .crowd-content-top .cc-fans span:first-child {
		color: #FF5053;
		font-size: 12px;
	}
	.app-home .mui-content .crowd-content-top .cc-fans span:nth-child(2){
		color: #999;
		font-size: 12px;
	}
	.fire {
		font-size: 12px;
		padding: 0 2px;
		color: #fff;
		border-radius: 3px;
		margin-left: 5px;
	}
	.fire-re {
		background-color: #FF6700;
	}
	.fire-huo {
		background-color: #FF5053;
	}
	.progress {
		height: 5px;
		background: linear-gradient(top left,#f0ad4eba,#ff6700e0);
		width: 100%;
		margin-bottom: 8px;
	}
	.app-home .mui-content .crowd-content-body {
		display: flex;
		justify-content: space-between;
	}
	.app-home .mui-content .crowd-content-body .ccb-item {
		width: 49%;
		padding: 10px 10px 0;
		background-color: #ededf2;
		position: relative;
	}
	.app-home .mui-content .crowd-content-body .ccb-item-title {
		color: #242424;
		margin-bottom: 5px;
	}
	.app-home .mui-content .crowd-content-body .ccb-img-price {
		display: flex;
		justify-content: space-between;
	}
	.app-home .mui-content .crowd-content-body .ccb-item-price {
		color: #FF5053;
		font-size: 16px;
		display: inline-block;
	}
	.app-home .mui-content .crowd-content-body .ccb-img {
		width: 60%;
	}
	.ccb-progress {
		margin-left: -10px ;
		margin-bottom: 0;
		width: 111%;
	}
	.app-home .mui-content .crowd-content-body .ccb-item-percen {
		float: right;
		position: absolute;
		bottom: 4%;
		right: 4%;
		font-size: 14px;
		color: #ff6700c9;
	}
	.app-home .mui-content .crowd-content-body .per-num {
		color: #FF5053;
		font-size: 12px;
	}
	.app-home .mui-content .crowd-content-body .standy {
		color: #999;
		font-size: 12px;
	}
	
	.app-home .hidden-nav {
		height: 50px;
		background-color: #fff;
	}
</style>
