<template>
	<div class="app-search">
		<header class="mui-bar mui-bar-nav">
			<div class="search-left">
				<span class="mui-icon mui-icon-arrowleft" @click="goBack"></span>
			</div>
			<div class="search-center">
				<span class="mui-icon mui-icon-search"></span>
				<input type="search" class="mui-input-clear" placeholder="请输入搜索内容" autofocus>
			</div>
			<div class="search-right">
				<router-link to="#" class="search-btn">搜索</router-link>
			</div>
		</header>
		<div class="app-search-content">
			<div class="pop-search">
				<h3>热门搜索</h3>
			</div>
			<div class="pop-search-kw">
				<router-link to="#" v-for="item of kws" class="kws-item" ref="ac">
					{{item}}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				kws:['咖啡机','料理机','保温杯','加湿器','扫地机器人','记录仪','AI音箱','空气净化器','电视','洗衣机'],
				//关键字随机颜色列表
				colorList:['#007aff38','#dd524d3d','#4cd9642b','#f0ad4e3d','#8a6de957'],
				
			}
		},
		methods:{
			setBgc(){
				for(var item of this.$refs.ac){
					var i=parseInt(Math.random()*this.colorList.length);
					item.$el.style.background=this.colorList[i];
				}
			},
			goBack(){
				history.go(-1);
			}
		},
		mounted() {
			this.setBgc();
		}
	}
</script>

<style scoped>
	.app-search .mui-bar-nav {
		display: flex;
		justify-content: space-between;
	}
	.app-search .mui-bar-nav .search-center {
		position: relative;
		width: 78%;
		line-height: 42px;
	}
	.app-search .mui-bar-nav .search-left,.app-search .mui-bar-nav .search-right {
		width: 10%;
		text-align: center;
		line-height: 44px;
	}
	.app-search .mui-bar-nav .search-right a {
		color: #333;
	}
	.app-search .mui-bar-nav .mui-icon-arrowleft {
		margin-right: -23px;
		margin: 0;
		padding: 0;
	}
	.app-search header {
		background-color: #fff;
	}
	.app-search header .mui-icon-search {
		position: absolute;
		left: 10px;
	}

	.app-search header .mui-input-clear {
		padding-left: 40px;
		margin: 0;
		position: relative;
		top: 1px;
	}
	.app-search header .search-btn {
		line-height: 44px;
	}
	.app-search .app-search-content {
		margin-top: 44px;
	}
	.app-search .app-search-content .pop-search {
		height: 40px;
		background-color: #FAFAFA;
	}
	.app-search .app-search-content .pop-search h3 {
		font-size: 16px;
		font-weight: 500;
		height: 100%;
		line-height: 50px;
		padding-left: 5%;
		color: #aaa;
		font-family: "agency fb";
	}
	.app-search .app-search-content .pop-search-kw {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		width: 85%;
		margin-top: 15px;
	}
	.app-search .app-search-content .pop-search-kw .kws-item {
		margin-left: 5%;
		padding: 5px 8px;
		margin-bottom: 10px;
		background-color: #007aff38;
		font-size: 14px;
		color: #333;
		border-radius: 3px;
	}
</style>
