<template>
	<div class="app-login">
		<mt-header title="登录" fixed>
			<span slot="left">
				<mt-button icon="back" @click="goBack"></mt-button>
			</span>
		</mt-header>
		<div class="mui-content">
			<div class="milogo">
				<img src="../../../public/img/milogo@2x.png">
			</div>
			<form action="/">
				<div class="mui-input-row">
					<input type="text" placeholder="请输入小米账号/手机号/邮箱" v-model="uname">
				</div>
				<div class="mui-input-row">
					<input type="password" placeholder="请输入密码" v-model="upwd">
				</div>
				<div class="mui-content-padded">
					<button id="login" type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="login">立即登录</button>
					<div class="link-area"><a id="reg">注册账号</a> <span class="spliter">|</span> <a id="forgetPassword">忘记密码？</a>
					</div>
				</div>
			</form>
			<fieldset>
				<legend>您还可以用以下方式登录</legend>
				<div class="mui-icon mui-icon-weixin"></div>
				<div>微信登录</div>
			</fieldset>
			<div class="hidden"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uname: '',
				upwd: '',
			}
		},
		methods:{
			goBack(){
				history.go(-1);
			},
			login(){
				this.$http.post('login',{uname:this.uname,upwd:this.upwd}).then(res=>{
					if(res.body.code==-1){
						this.$toast(res.body.msg);
					}else if(res.body.code==0){
						this.$toast(res.body.msg);
					}else{
						var result=res.body.data;
						var user = {uid:result.uid,uname:result.uname,islogin:true}
						user=JSON.stringify(user);
						this.$store.commit('saveUser',user);
						location.reload();
						this.$router.push('home');
					}
				})
			}
		}
	}
</script>

<style scoped>
	.app-login header span {
		margin-left: 20px;
	}
	.app-login .mui-content {
		background-color: #fff;
		margin-top: 44px;
		padding: 0 35px;
		text-align: center;
	}

	.app-login .mui-content form input {
		border: none;
		margin-bottom: 0;
		font-size: 16px;
		height: 60px;
	}

	.app-login .mui-content form .mui-input-row {
		border-bottom: 1px solid #ddd;
	}

	.app-login header {
		background-color: #fff;
	}

	.app-login .mint-header-button a {
		margin-left: 15px;
	}

	.app-login header button {
		color: #000;
	}

	.app-login .mui-content .milogo {
		margin: 60px 0 20px;
		text-align: center;
	}

	.app-login .hidden {
		height: 50px;
		display: block;
	}

	.app-login .mui-content .mui-content-padded {
		width: 100%;
		margin: 10px 0;
	}

	.app-login .mui-content .mui-content-padded button {
		padding: 14px 0;
		background-color: #ff6700;
		border: none;
	}

	.app-login #reg,
	.app-login #forgetPassword {
		margin: 0 1rem;
		color: #333;
	}

	.app-login .mui-content fieldset {
		margin-top: 90px;
		border: none;
		border-top: 1px solid #c0c0c0;
		color: #ccc;
		font-size: 14px;
	}
	.app-login .mui-content fieldset .mui-icon-weixin {
		margin-top: 1rem;
		font-size: 30px;
	}
</style>
