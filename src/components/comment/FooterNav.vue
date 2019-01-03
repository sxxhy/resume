<template>
	<div class="footer-nav">
		<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/class#content1" class="mui-tab-item">
				<span class="mui-icon mui-icon-phone"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/user" class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.mui-bar.mui-bar-tab {
		z-index: 100;
	}
	.mui-bar {
		background-color: #fff;
	}
</style>