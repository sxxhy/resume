//导入Vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)
//导出vuex
export default new Vuex.Store({
  state:{
	  previousPage:sessionStorage.getItem('url') || '',//保存上一页的url实现返回
	  productClassN:sessionStorage.getItem('pcn'),//商品大类编号传入下个页面
	  pdcN:sessionStorage.getItem('cid'),//商品分类编号传入写个页面
	  user:JSON.parse(sessionStorage.getItem('user')),//获取用户信息
  },
  mutations:{
	  saveUrl(state,url){//保存上一页的url实现返回
		  sessionStorage.setItem('url',url);
	  },
	  savePCN(state,pcn){//商品大类编号传入下个页面
		  sessionStorage.setItem('pcn',pcn);
	  },
	  saveUser(state,user){//商品分类编号传入写个页面
		  sessionStorage.setItem('user',user);
	  }
  },
})