<template>
	<div class="app-plist">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
			<h1 class="mui-title">有品推荐</h1>
			<div class="nav-list">
				<div class="list"  @click="getList($event)">
					<router-link class="mui-control-item" :to="`#content${item.cid}`" v-for="(item,i) of navList" ref="a">{{item.class_title}}</router-link>
				</div>
			</div>
		</header>
		<div :id="`content${parseInt(fcid)+index}`" class="product-content mui-control-content" v-for="(list,index) of navList" ref="b">
			<div class="pc-item" v-for="item of productInfo">
				<router-link to="detail">
				<div class="pc-item-img">
					<img :src="item.p_img_url">
				</div>
				<div class="pc-item-title">
					{{item.p_title}}
				</div>
				<div class="pc-item-offer">
					{{item.P_active}}
				</div>
				<h3 class="pc-item-name">
					{{item.pname}}
				</h3>
				<span class="pc-item-rmb">
					￥
				</span>
				<span class="pc-item-price">
					{{item.p_price}}起
				</span>
				</router-link>
			</div>
			<div class="hidden"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				navList:['家电手机','服饰鞋包','家电手机','家电手机','家电手机','家电手机','家电手机','家电手机','家电手机','家电手机','家电手机','家电手机',], //导航栏信息
				pcid:1,//商品分类编号
				productInfo:[],//商品信息列表
				pcn:this.$store.state.productClassN,//获取分类列表编号,
				aContentId:'',//导航a的href数值
				fcid:this.$route.hash.slice(8),//第一个类值，让nav自动居中,默认值等于url的值
			}
		},
		methods:{
			goBack(){
				var url=sessionStorage.getItem('url');
				if(!url){
					history.go(-1);
				}else{
					location.href=url;
				}
			},
			getList(e) {
				this.getProductList();
				var div=document.getElementsByClassName('nav-list')[0];
				var num=this.$route.hash.slice(8);//当前元素下标加1
				if(num-this.fcid>=2){
					div.scrollLeft=(num-this.fcid-2)*88;
				}
				//搭建基本结构
				for (var i = 0; i < this.$refs.b.length; i++) {
					var reg = /mui-active/g;
					if ((this.$refs.b)[i].id == this.$route.hash.split("#")[1]) {
						(this.$refs.b)[i].className += " mui-active";
					} else {
						(this.$refs.b)[i].className = (this.$refs.b)[i].className.replace(reg, '');
					}
				}
			},
			getProductList() {
				//请求获取当前分类信息
				this.pcid = this.$route.hash.split('').splice(8).join('');
				this.$http.get('productlist?pcid=' + this.pcid).then(res => {
					this.productInfo=res.body.data;
					if(!res.body.data){
						this.$router.push('is404');
					}
				})
			},
			getPCN(){
				if(!this.pcn){
					this.$toast('请求失败');
					return;
				}
				this.$http.get('getclassinfo?classId=' + this.pcn).then(res => {
					this.navList=res.body.data;
					this.fcid=this.navList[0].cid;
				})
			},
		},
		mounted() {
			this.getList();
		},
		created() {
			this.getPCN();
			this.getProductList();
		}
	}
</script>

<style scoped>
	.app-plist header {
		height: 90px;
		box-shadow: none;
		border-bottom: 1px solid #ddd;
		background-color: #fff;
		width: 100%;
		overflow-x: hidden;
		padding-right: 0;
	}
	.app-plist header .mui-action-back {
		color: #999;
	}
	.app-plist .mui-bar-nav .nav-list {
		position: absolute;
		width: 100%;
		height: 59%;
		line-height: 258%;
		overflow-x: scroll;
		white-space: nowrap;
		top: 44px;
	}
	.app-plist .mui-bar-nav .nav-list .list {
		box-sizing: border-box;
	}
	.app-plist .mui-bar-nav .nav-list a {
		display: inline-block;
		padding: 0 10px;
		color: #666;
		text-align: center;
	}
	.app-plist .mui-bar-nav .nav-list a.mui-active {
		color: #EC971F;
		border-bottom: 2px solid #EC971F;
	}
	.app-plist .product-content {
		position: relative;
		top: 100px;
		display: none;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 10px;
	}
	.app-plist .product-content.mui-active {
		display: flex;
	}
	.app-plist .product-content .pc-item {
		width: 49%;
		margin-bottom: 10px;
	}
	.app-plist .product-content .pc-item .pc-item-img {
		background-color: #f6f6f6;
	}
	.app-plist .product-content .pc-item .pc-item-img img {
		width: 100%;
	}
	.app-plist .product-content .pc-item .pc-item-title {
		color: #f0ad4e9e;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background-color: #ffc0cb4d;
		font-size: 15px;
		padding: 5px;
	}
	.app-plist .product-content .pc-item .pc-item-offer {
		background-color: #FF6700;
		width: 62px;
		padding: 0 15px;
		margin: 10px 0;
		color: #fff;
		font-family: "宋体";
		font-size: 16px;
	}
	.app-plist .product-content .pc-item .pc-item-name {
		font-size: 18px;
		font-weight: 400;
		margin: 15px 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #333;
	}
	.app-plist .product-content .pc-item .pc-item-rmb {
		color: #ff5053;
		font-size: 14px;
	}
	.app-plist .product-content .pc-item .pc-item-price {
		color: #ff5053;
		font-size: 18px;
	}
	.app-plist .hidden {
		height: 50px;
		width: 100%;
	}
</style>