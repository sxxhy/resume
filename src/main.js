// 入口文件
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'mint-ui/lib/style.css';
import store from './store/store.js';
Vue.config.productionTip=false;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css';
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css';
//引入mint-ui
import mintUi from 'mint-ui';
//注册mint-ui
Vue.use(mintUi);
import vueResource from 'vue-resource'
//整个模块注册
Vue.use(vueResource)
//配置vue-resource常见属性
// 设置请求的根路径
Vue.http.options.root = "http://127.0.0.1:3000/";
//全局设置post 时候表单的数据组织格式为 application/x-www-form-urlencoded将提交的数据进行转码操作
Vue.http.options.emulateJSON = true;
//跨域访问保存session值选项
Vue.http.options.withCredentials=true;

//创建日期类型过滤器
Vue.filter('datetimeFilter',function(val){
  //创建日期对象
  var date=new Date(val);
  //获取年月日时分秒
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var mi=date.getMinutes();
  var s=date.getSeconds();
  //格式判断
  if(m<10){m='0'+m}   //m<10&&(m='0'+m)
  if(d<10){d='0'+d}  //d<10&&(d='0'+d)
  //拼接字符串返回
  var now=new Date();
  var time=(now-date)/1000/3600/24;
  if(time<1){
    return `${h}:${mi}:${s}`
  }else if(time<2) {
    return `昨天 ${h}:${mi}:${s}`
  }else if(time<3){
    return `前天 ${h}:${mi}:${s}`
  }else{
    return `${m}/${d}`
  }
})
//引入自定义的全局组件
import footerNav from './components/comment/FooterNav.vue';
var nav={
	install:function(Vue){
		Vue.component('footerNav',footerNav)
	}
}

//引入自定义函数
import saveUrl from './store/base.js';
Vue.use(saveUrl);
Vue.use(nav);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
