/* 自定义全局函数 */
exports.install=function(Vue,options){
	Vue.prototype.saveUrl=function(){
		var url=location.href;
		sessionStorage.setItem('url',url);
	}
}