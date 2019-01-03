<template>
	<div class="app-class">
		<header class="mui-bar mui-bar-nav">
			<div class="mui-input-row mui-search" @click="goSearch">
				<span class="mui-icon mui-icon-search"></span>
				<input type="search" class="mui-input-clear" placeholder="请输入搜索内容">
			</div>
		</header>
		<div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
				 @click="getList($event)">
					<router-link class="mui-control-item" :to="`#content${i+1}`" v-for="(item,i) of leftlist" ref="a">{{item}}</router-link>
				</div>
				<nav class="mui-bar-tab"></nav>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
				<div :id="`content${index+1}`" class="mui-control-content" v-for="(list,index) of leftlist" ref="b">
					<div class="class-content">
						<div class="class-banner">
							<img :src="banner" width="100%" height="30%">
						</div>
						<div class="class-content-info">
							<div class="class-content-item" v-for="item of classContentInfo">
								<router-link :to="`productlist#content${item.cid}`">
									<img :src="item.img_url">
									<h6>{{item.class_title}}</h6>
								</router-link>
							</div>
						</div>
					</div>
					<nav class="mui-bar-tab"></nav>
				</div>
			</div>
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				leftlist: ['有品推荐', '家居家纺', '家用电器', '智能家庭', '餐具厨房', '服装配饰', '鞋靴箱包', '手机电脑', '电视影音', '运动健康', '出行户外', '洗护美妆', '日杂文创',
					'母婴亲子', '饮食酒水', '数码配件'
				],
				classId: 1, //url后缀 id
				classContentInfo: [],//分类信息列表
				banner:'',//banner广告
			}
		},
		created() {
			this.getClassInfo();
			this.getClassBanner();
		},
		methods: {
			getList(e) {
				this.getUrl();//获取当前网页url
				this.getClassInfo(); //点击按钮时获取当前页面信息
				this.getClassBanner();//广告图片
				var div=document.getElementsByClassName('mui-col-xs-3')[0];
				var num=this.$route.hash.slice(8);//当前元素下标加1
				if(num>7){
					div.scrollTop=(num-7)*50;
				}else{
					div.scrollTop=0;
				}
				// console.log(this.$route.hash.split('').splice(8).join(''))
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
			getClassInfo() {
				//请求获取当前分类信息
				this.classId = this.$route.hash.split('').splice(8).join('');
				this.$http.get('getclassinfo?classId=' + this.classId).then(res => {
					// console.log(res);
					this.classContentInfo = res.body.data;
				})
			},
			getClassBanner() {
				//请求获取当前banner信息
				this.classId = this.$route.hash.split('').splice(8).join('');
				this.$http.get('getclassbanner?classId=' + this.classId).then(res => {
					//console.log(res);
					this.banner = res.body.data[0].img_url;
				})
			},
			goSearch(){   //跳转到搜索页面
				this.$router.push('search');
			},
			getUrl(){	//保存当前网页url  实现返回上个页面
				var url=location.href;
				var pcn = this.$route.hash.split('').splice(8).join('');
				this.$store.commit('saveUrl',url);//保存url
				this.$store.commit('savePCN',pcn);//保存分类商品id
				this.$store.state.productClassN=sessionStorage.getItem('pcn');
			},
		},
		mounted() {
			this.getList(); //dom数加载完成后可执行点击函数
		},
	}
</script>

<style scoped>
	.mui-row.mui-fullscreen>[class*="mui-col-"] {
		height: 100%;
	}

	.mui-col-xs-3,
	.mui-control-content {
		overflow-y: auto;
		height: 100%;
	}
	
	.app-class .mui-col-xs-9 {
		padding: 10px;
	}

	.mui-segmented-control .mui-control-item {
		line-height: 50px;
		width: 100%;
		transition: border 0.2s linear;
	}

	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
		background-color: #fff;
		color: #ff6700;
		border-left: 5px solid #ff6700;
	}

	.app-class header .mui-icon-search {
		position: absolute;
		left: 1rem;
	}

	.app-class header .mui-input-clear {
		padding-left: 50px;
	}

	.app-class .mui-content {
		background-color: #fff;
	}

	.app-class .mui-content .class-content .class-content-info {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.app-class .mui-content .class-content .class-content-item {
		width: 30%;
		margin: 10px 4px;
	}

	.app-class .mui-content .class-content .class-banner {
		display: flex;
		justify-content: center;
	}

	.app-class .mui-content .class-content .class-content-item img {
		width: 100%;
		height: 70%;
	}

	.app-class .mui-content .class-content .class-content-item h6 {
		text-align: center;
		font-size: 16px;
	}
</style>
