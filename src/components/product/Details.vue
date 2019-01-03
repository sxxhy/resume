<template>
	<div class="app-detail">
		<header>
			<div class="back" @click="goBack">
				<img src="../../../public/img/detail/1.png">
			</div>
			<div class="title"></div>
			<div class="home" @click="goHome">
				<img src="../../../public/img/detail/2.png">
			</div>
		</header>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,i) of list" :key="i">
				<img :src="item">
			</mt-swipe-item>
		</mt-swipe>
		<div class="p-detail">
			<h3 class="p-name">{{inner}}</h3>
			<p class="p-title">{{pInfo[0].d_title}}</p>
			<div class="p-price">
				<span class="rmb">￥</span>
				<span class="p-original-price">{{pInfo[0].d_price}}</span>
				<span class="p-qi">起</span>
				<del class="p-present-price">￥{{pInfo[0].original_price}}</del>
				<span class="p-active">{{pInfo[0].d_active}}</span>
			</div>
			<div class="advertice">
				<div class="advertice-sign">
					<img src="../../../public/img/detail/3.png">
					150元新人红包
				</div>
				<div class="comeon">
					快来领取
					<img src="../../../public/img/detail/8.png">
				</div>
			</div>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell" @click="popUp">
				<a class="mui-navigate-right">
					<div class="tab-item">已选：</div> {{colorChoose}}
				</a>
			</li>
			<li class="mui-table-view-cell" @click="getCity">
				<a class="mui-navigate-right">
					<div class="tab-item">送至：</div> {{cityV}} {{countryV}}
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right explain">
					<div class="tab-item">说明：</div>
					<div>
						<p>
							<img src="../../../public/img/detail/4.png">小米有品甄选精品
						</p>
						<p>
							<img src="../../../public/img/detail/4.png">小米发货并提供售后
						</p>
						<p>
							<img src="../../../public/img/detail/4.png">支持7天无理由退货
						</p>
					</div>
				</a>
			</li>
		</ul>
		<div class="user">
			<div class="evaluate">
				<div>用户评价(4123)</div>
				<div>98% 满意<img src="../../../public/img/detail/5.png"></div>
			</div>
			<div class="scroll">
				<div class="evaluate-content">
					<div class="user-info">
						<img src="../../../public/img/detail/5.jpg" class="portrait">
						<span class="user-name">9***55030</span>
						<span class="star">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
						</span>
					</div>
					<div class="content-info">客服小姐姐，心好累。刚下单睡一觉降了两百</div>
				</div>
				<div class="evaluate-content">
					<div class="user-info">
						<img src="../../../public/img/detail/5.jpg" class="portrait">
						<span class="user-name">9***55030</span>
						<span class="star">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
							<img src="../../../public/img/detail/6.png">
						</span>
					</div>
					<div class="content-info">客服小姐姐，心好累。刚下单睡一觉降了两百</div>
				</div>
			</div>
			<div class="more">
				<router-link to="#">查看更多<img src="../../../public/img/detail/7.png"></router-link>
			</div>
		</div>
		<div class="xm">
			<img src="../../../public/img/detail/8.jpg" alt="logo">
			<div class="xm-sign">
				<div>小米自营产品</div>
				<div>为发烧而生</div>
			</div>
		</div>
		<div class="detail">
			<div class="summary active" @click="showSummary($event)">概述</div>
			<div class="parameter" @click="showParame($event)">参数</div>
		</div>
		<div id="summary" v-show="!show">
			<img :src="item" width="100%" v-for="(item,i) in summary" :key="i">

		</div>
		<div id="parameter" v-show="show">
			<img :src="item" v-for="(item,i) of parame" width="100%" :key="i">
		</div>
		<div class="nav-car">
			<div class="cart">
				<div class="car">
					<div>
						<img src="../../../public/img/detail/11.png">
					</div>
					<div class="cart-text">收藏</div>
				</div>
				<div class="car" @click="$router.push('cart')">
					<div>
						<img src="../../../public/img/detail/12.png">
					</div>
					<div class="cart-text">购物车</div>
				</div>
			</div>
			<div class="cart buy-cart">
				<div class="buy">立即购买</div>
				<div class="add-car" @click="popUp">加入购物车</div>
			</div>
		</div>
		<div class="popup">
			<div class="background" @click="close"></div>
			<div class="xm-product">
				<div class="p-head">
					<div class="smimg">
						<img :src="smImg[smIndex]" width="68px">
					</div>
					<div class="pnp">
						<div class="p-name">小米8</div>
						<div class="p-price">
							<div class="rmb">￥</div>
							<div class="p-original-price">2299</div>
						</div>
					</div>
				</div>
				<div class="p-color p-commen">
					<div class="color">颜色</div>
					<div class="p-info">
						<div class="color-item font-color" v-for="(item,i) in color" @click="setBC(i,$event)">{{item}}</div>
					</div>
				</div>
				<div class="p-parame p-commen">
					<div class="parame color">版本</div>
					<div class="p-info">
						<div class="param-item font-color" v-for="item of param" @click="setPm($event)">{{item}}</div>
					</div>
				</div>
				<div class="p-count p-commen">
					<div class="num color">数量</div>
					<div class="count-check">
						<div class="count-reduce" @click="$toast('商品数量以达最小了哟')">
							<img src="../../..../../../public/img/detail/13.png">
						</div>
						<div class="count">1</div>
						<div class="count-add" @click="$toast('商品数量以达最大了哟')">
							<img src="../../../public/img/detail/14.png">
						</div>
					</div>
				</div>
				<div class="close" @click="close">
					<img src="../../../public/img/detail/15.png">
				</div>
				<div class="tips" v-if="!isParam">请选择颜色、分类</div>
				<div class="buy-product" v-else>
					<div class="buy">立即购买</div>
					<div class="add-car" @click="addCart">加入购物车</div>
				</div>
			</div>
		</div>
		<city @add="getCityV"></city>
	</div>
	</div>
</template>

<script>
	import city from '../comment/Popup.vue';
	export default {
		data() {
			return {
				list: [], //商品信息
				dpid: Math.floor(Math.random()*2+1), //商品id
				show: false, //详情显示判断
				summary: [], //详情图片
				parame: [],
				smImg: [],
				inner: '',
				smIndex: 0,
				cityV:'北京市',
				countryV: '东城区',
				pInfo:[{d_title:'',d_price:''}],
				color:[],
				param:['4G+64GB','4G+128GB','6G+256GB','6G+128GB'],
				colorChoose:'请选颜色 型号 分类',
				isColor: false,
				isParam: false,
			}
		},
		methods: {
			getSwipeInfo() {
				this.$http.post('detailbanner', {
					dpid: this.dpid
				}).then(res => {
					var list = res.body.data[0].lgimg_url;
					list = list.split(',')
					this.list = list;
					var summary = res.body.data[0].detailimg_url;
					summary = summary.split(',');
					this.summary = summary;
					var parame = res.body.data[0].paramimg_url;
					parame = parame.split(',');
					this.parame = parame;
					var smImg = res.body.data[0].sming_url;
					smImg = smImg.split(',');
					this.smImg = smImg;
				})
			},
			showSummary(e) {
				this.show = false;
				var reg = new RegExp('active', 'ig')
				e.target.className += ' active';
				var div = e.target.nextElementSibling;
				div.className = div.className.replace(reg, '');
			},
			showParame(e) {
				this.show = true;
				var reg = new RegExp('active', 'ig')
				e.target.className += ' active';
				var div = e.target.previousElementSibling;
				div.className = div.className.replace(reg, '');
			},
			getscrollTop() {
				var div = document.getElementsByClassName('detail')[0];
			},
			popUp() {
				var pop = document.getElementsByClassName('popup')[0];
				var popup = document.querySelector('.app-detail .xm-product');
				pop.style.display = 'block';
				popup.style.height = '450px';
				document.body.style.overflow='hidden';
			},
			close() {
				var pop = document.getElementsByClassName('popup')[0];
				var popup = document.querySelector('.app-detail .xm-product');
				pop.style.display = 'none';
				popup.style.height = '0';
				document.body.style.overflow='';
			},
			getCity() {
				var cityb=document.getElementsByClassName('cityb')[0];
				var popcity = document.getElementsByClassName('popcity')[0];
				var cpopup = document.getElementsByClassName('cpopup')[0];
				cpopup.style.display = 'block';
				popcity.style.display='block';
				cityb.style.display='block';
				document.body.style.overflow='hidden';
			},
			getPInfo(){
				this.$http.get('detailinfo?dpid='+this.dpid).then(res=>{
					this.pInfo=res.body.data;
					console.log(res)
					this.color=this.pInfo[0].d_color.split(',');
				})
			},
			goBack(){
				history.go(-1);
			},
			goHome(){
				this.$router.push('home');
			},
			addCart(){
				var user = this.$store.state.user;
				if(user==null){
					this.$router.push('login');
				}else{
					var uid = user.uid;
					var address = this.cityV + this.countryV;
					var checked = 1;
					var url = 'addcart?uid='+uid+'&pid='+this.dpid+'&count='+1+'&color='+this.colorChoose+'&address='+address+'&checked='+checked;
					this.$http.get(url).then(res=>{
						this.$toast('加入成功');
					})
				}
			},
			getCityV(cc){
				this.cityV=cc[0];
				this.countryV=cc[1];
			},
			getPName(){
				if(this.dpid==1){
						this.inner = '小米8';
					}else{
						this.inner = '红米6A';
					}
			},
			setBC(i,e){
				var color = document.getElementsByClassName('color-item');
				for(var item of color){
					item.className = item.className.replace(/active/ig,'');
				}
				e.target.className+=' active';
				this.isColor = true;
				this.smIndex = i + 1;
			},
			setPm(e){
				var param = document.getElementsByClassName('param-item');
				var color = document.getElementsByClassName('color-item');
				var tip = document.getElementsByClassName('tips')[0];
				for(var i=0,len=color.length;i<len;i++){
					var num = color[i].className.indexOf('active');
					if(num!=-1){
						var index = i;
					}
				}
				for(var item of param){
					item.className = item.className.replace(/active/ig,'');
				}
				if(this.isColor){
					e.target.className+= ' active';
					this.isParam = true;
					this.colorChoose = color[index].innerHTML +' ' + e.target.innerHTML;
					var pName = document.querySelector('.app-detail .p-detail .p-name');
					var param = e.target.innerHTML.split('+');
					var inner = '';
					if(this.dpid==1){
						inner = '小米8';
					}else{
						inner = '红米6A';
					}
					pName.innerHTML = inner+` 全网通版 ${param[0]}B内存 ${color[index].innerHTML} ${param[1]}B`;
				}else{
					this.$toast('请选择颜色');
				}
			}
		},
		created() {
			this.getSwipeInfo();
			this.getPInfo();
			this.getPName();
		},
		mounted() {
			this.getscrollTop();
		},
		components: {
			city
		}
	}
</script>

<style scoped>
	.app-detail header {
		position: fixed;
		width: 100%;
		height: 48px;
		z-index: 20;
	}

	.app-detail header .title {
		width: 100%;
		text-align: center;
		line-height: 48px;
	}

	.app-detail .mint-swipe {
		height: 414px;
	}

	.app-detail .mint-swipe img {
		height: 414px;
		width: 100%;
	}

	.app-detail .back img,
	.app-detail .home img {
		position: absolute;
		z-index: 10;
		width: 48px;
		height: 48px;
		top: 0;
	}

	.app-detail .back img {
		left: 0;
	}

	.app-detail .home img {
		right: 0;
	}

	.app-detail .p-detail {
		padding: 14px;
	}

	.app-detail .p-detail .p-name {
		line-height: 22px;
		font-size: 16px;
		color: #222;
		font-weight: 400;
	}

	.app-detail .p-detail .p-price {
		color: rgb(182, 9, 9);
	}

	.app-detail .rmb {
		margin-bottom: 4px;
		font-family: Avenir-Roman;
		font-size: 13px;
	}

	.app-detail .p-detail .p-price .p-qi {
		position: relative;
		bottom: 2px;
		font-size: 13px;
	}

	.app-detail .p-detail .p-price .p-present-price {
		color: rgb(177, 177, 177);
		text-decoration: line-through;
		letter-spacing: 0;
		margin-left: 3px;
		font-size: 14px;
	}

	.app-detail .p-detail .p-price .p-active {
		display: inline-block;
		padding-left: 4px;
		padding-right: 4px;
		font-size: 11px;
		margin-left: 5px;
		position: relative;
		bottom: 2px;
	}

	.app-detail .p-detail .advertice {
		display: flex;
		justify-content: space-between;
		background-color: rgb(247, 240, 218);
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		color: rgb(51, 51, 51);
		font-size: 13px;
	}

	.app-detail .p-detail .advertice .advertice-sign img {
		width: 20px;
		height: 20px;
		vertical-align: middle;
		margin-bottom: 3px;
	}

	.app-detail .p-detail .advertice .advertice-sign {
		margin-left: 5px;
		font-size: 13px;
	}

	.app-detail .p-detail .advertice .comeon {
		margin-right: 10px;
	}

	.app-detail .p-detail .advertice .comeon img {
		width: 4px;
		height: 7px;
	}

	.app-detail .mui-navigate-right .tab-item {
		color: rgb(153, 153, 153);
		display: inline-block;
		font-size: 12px;
	}

	.app-detail .mui-table-view {
		cursor: pointer;
	}

	.app-detail .mui-navigate-right {
		color: rgb(51, 51, 51);
		font-size: 14px;
	}

	.app-detail .mui-navigate-right.explain {
		display: flex;
		justify-content: flex-start;
	}

	.app-detail .mui-navigate-right.explain img {
		width: 12px;
		margin-right: 5px;
	}

	.app-detail .user {
		padding: 14px;
		color: rgb(51, 51, 51);
		font-size: 13px;
		cursor: pointer;
		width: 100%;
		overflow-x: hidden;
	}

	.app-detail .user .evaluate {
		display: flex;
		justify-content: space-between;
		height: 50px;
		align-items: center;
	}

	.app-detail .user .evaluate img {
		width: 12px;
		height: 12px;
	}

	.app-detail .user .evaluate {
		font-size: 14px;
	}

	.app-detail .user .evaluate>:last-child {
		color: rgb(159, 128, 82);
		margin-right: 5px;
	}

	.app-detail .user .evaluate-content {
		background-color: rgb(248, 248, 248);
		border: 1px solid rgb(213, 213, 213);
		padding: 14px 0;
		touch-action: manipulation;
		margin: 10px 0;
	}

	.app-detail .user .evaluate-content .user-info {
		display: flex;
		line-height: 30px;
	}

	.app-detail .user .evaluate-content .user-info .portrait {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.app-detail .user .evaluate-content .user-info .star {
		margin-left: 7px;
	}

	.app-detail .user .evaluate-content .user-info .star img {
		width: 11px;
	}

	.app-detail .user .evaluate-content .user-info .user-name {
		margin-left: 7px;
	}

	.app-detail .user .content-info {
		margin-top: 10px;
		line-height: 19px;
		text-overflow: ellipsis;
		margin: 0 14px;
	}

	.app-detail .more {
		height: 50px;
		text-align: center;
		line-height: 50px;
	}

	.app-detail .more a {
		color: rgb(159, 128, 82);
		font-size: 14px;
		margin-right: 3px;
	}

	.app-detail .more img {
		width: 8px;
		height: 8px;
	}

	.app-detail .xm {
		display: flex;
		flex: 1;
	}

	.app-detail .xm img[alt=logo] {
		width: 38px;
		height: 38px;
		margin-left: 10px;
	}

	.app-detail .xm .xm-sign div:first-child {
		color: rgba(0, 0, 0, 0.88);
		font-size: 14px;
	}

	.app-detail .xm .xm-sign div:last-child {
		color: rgb(102, 102, 102);
		font-size: 13px;
	}

	.app-detail .detail {
		display: flex;
		justify-content: center;
		text-align: center;
		line-height: 40px;
	}

	.app-detail .detail div {
		width: 160.5px;
		height: 40px;
		cursor: pointer;
		font-size: 12px;
	}

	.app-detail .detail .active {
		color: rgb(159, 130, 87);
	}

	.app-detail .nav-car {
		display: flex;
		justify-content: space-around;
		height: 53px;
		border-top: 1px solid rgb(191, 191, 192);
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
	}

	.app-detail .nav-car .cart {
		display: flex;
		justify-content: center;
		width: 40%;
	}

	.app-detail .nav-car .buy-cart {
		width: 60%;
	}

	.app-detail .nav-car .car {
		width: 100px;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.app-detail .nav-car .car img {
		width: 20px;
		height: 20px;
	}

	.app-detail .nav-car .car .cart-text {
		color: rgb(122, 122, 122);
		font-size: 10px;
	}

	.app-detail .nav-car .buy,
	.app-detail .nav-car .add-car {
		background-color: rgb(182, 9, 9);
		margin-right: 5px;
		border-radius: 16px;
		height: 32px;
		width: 50%;
		white-space: nowrap;
		text-align: center;
		line-height: 32px;
		margin-top: 10px;
	}

	.app-detail .nav-car .buy {
		background-color: rgb(182, 9, 9);
	}

	.app-detail .nav-car .add-car {
		background-color: rgb(171, 138, 89);
	}

	.app-detail .xm-product {
		background-color: #fff;
		width: 100%;
		position: fixed;
		padding: 14px;
		z-index: 20;
		bottom: 0;
		height: 0;
		transition: height .2s ease;
	}
	.app-detail .font-color.active {
		border: 1px solid rgb(171, 138, 89);
		background-color: rgb(171, 138, 89);
	}
	.app-detail .p-commen {
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
	}

	.app-detail .p-commen .color {
		color: rgb(153, 153, 153);
		margin-bottom: 8px;
		font-size: 14px;
	}

	.app-detail .p-commen .font-color {
		color: rgb(51, 51, 51);
		border: 1px solid rgb(230, 230, 230);
		margin-right: 10px;
		padding: 7px 16px;
		font-size: 12px;
		border-radius: 5px;
		cursor: pointer;
	}

	.app-detail .p-commen .p-info {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
	}

	.app-detail .p-count .count-check {
		display: flex;
		flex: 1;
		color: rgb(221, 221, 221);
	}

	.app-detail .p-count .count-check img {
		width: 10px;
		height: 10px;
	}

	.app-detail .p-count .count-check div {
		border: 1px solid rgb(221, 221, 221);
		user-select: none;
		width: 32px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		cursor: no-drop;
	}

	.app-detail .p-head {
		display: flex;
		flex: 1;
		padding-bottom: 14px;
	}

	.app-detail .p-head .pnp {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-left: 10px;
	}

	.app-detail .p-head .pnp .p-price div {
		display: inline-block;
	}

	.app-detail .p-head .pnp .p-name {
		font-size: 15px;
		color: rgb(51, 51, 51);
	}

	.app-detail .p-head .p-price {
		color: rgb(182, 9, 9);
	}

	.app-detail .popup {
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		display: none;
	}

	.app-detail .background {
		background-color: rgba(0, 0, 0, 0.5);
		height: 200%;
		cursor: pointer;
	}

	.app-detail .popup .close {
		position: absolute;
		width: 43px;
		height: 43px;
		text-align: center;
		line-height: 43px;
		top: 0;
		right: 0;
		cursor: pointer;
	}

	.app-detail .popup .close img {
		width: 11px;
		height: 11px;
	}

	.app-detail .popup .tips {
		text-align: center;
		color: rgb(153, 153, 153);
		overflow: hidden;
		font-size: 14px;
		height: 32px;
		line-height: 32px;
	}
	.app-detail .buy-product {
		display: flex;
		justify-content: center;
		height: 32px;
		text-align: center;
		line-height: 32px;
	}
	.app-detail .buy-product .buy,.app-detail .buy-product .add-car {
		border-radius: 16px;
		cursor: pointer;
		width: 50%;
	}
	.app-detail .buy-product .buy {
    	margin-right: 22px;
		background-color: rgb(182, 9, 9);
	}
	.app-detail .buy-product .add-car {
		background-color: rgb(171, 138, 89);
	}
	.app-detail .cpopup {
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		display: none;
	}

	.app-detail .cityb {
		background-color: rgba(0, 0, 0, 0.5);
		height: 40%;
		cursor: pointer;
	}
	.app-detail #summary {
		font-size: 0;
		line-height: 0;
	}
	
</style>
