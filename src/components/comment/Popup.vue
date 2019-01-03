<template>
	<div class="cpopup">
		<div class="cityb" @click="closeCity"></div>
		<div class="popcity">
			<div class="popcity-title">所在地区</div>
			<div class="place-choose">
				<div class="cities" @click="tShow">请选择</div>
				<div class="counties">请选择</div>
			</div>
			<div class="city-list">
				<div id="city" v-show="!show">
					<div class="city-item" v-for="(item,i) in city" @click="isShow($event)">
						{{item[0]['name']}}
					</div>
				</div>
				<div id="county" v-show="show">
					<div class="county-item" v-for="(item,i) of county" @click="isShow($event)">{{item.name}}</div>
				</div>
			</div>
			<div class="close" @click="closeCity">
				<img src="../../../public/img/detail/15.png">
			</div>
		</div>
	</div>
</template>

<script>
	var cities = [
		[{
			"name": "北京市",
			"value": 1101
		}], // 北京
		[{
			"name": "市区",
			"value": 1201
		}], // 天津
		[{
			"name": "石家庄",
			"value": 1301
		}], // 河北
		[{
			"name": "太原",
			"value": 1401
		}], // 山西
		[{
			"name": "呼和浩特",
			"value": 1501
		}], // 内蒙
		[{
			"name": "沈阳",
			"value": 2101
		}], // 辽宁
		[{
			"name": "长春",
			"value": 2201
		}], // 吉林
		[{
			"name": "哈尔滨",
			"value": 2301
		}], // 黑龙江
		[{
			"name": "市区",
			"value": 3101
		}], // 上海
		[{
			"name": "南京",
			"value": 3201
		}], // 江苏
		[{
			"name": "杭州",
			"value": 3301
		}], // 浙江
		[{
			"name": "合肥",
			"value": 3401
		}], // 安徽
		[{
			"name": "福州",
			"value": 3501
		}], // 福建
		[{
			"name": "南昌",
			"value": 3601
		}], // 江西
		[{
			"name": "济南",
			"value": 3701
		}], // 山东
		[{
			"name": "郑州",
			"value": 4101
		}], // 河南
		[{
			"name": "武汉",
			"value": 4201
		}], // 湖北
		[{
			"name": "长沙",
			"value": 4301
		}], // 湖南
		[{
			"name": "广州",
			"value": 4401
		}], // 广东
		[{
			"name": "南宁",
			"value": 4501
		}], // 广西
		[{
			"name": "海口",
			"value": 4601
		}], // 海南
		[{
			"name": "市区",
			"value": 5001
		}], // 重庆
		[{
			"name": "成都",
			"value": 5101
		}], // 四川
		[{
			"name": "贵阳",
			"value": 5201
		}], // 贵州
		[{
			"name": "昆明",
			"value": 5301
		}], // 云南
		[{
			"name": "拉萨",
			"value": 5401
		}], // 西藏
		[{
			"name": "西安",
			"value": 6101
		}], // 陕西
		[{
			"name": "兰州",
			"value": 6201
		}], // 甘肃
		[{
			"name": "西宁",
			"value": 6301
		}], // 青海
		[{
			"name": "银川",
			"value": 6401
		}], // 宁夏
		[{
			"name": "乌鲁木齐",
			"value": 6501
		}], // 新疆
		[{
			"name": "台北",
			"value": 7101
		}], // 台湾
		[{
			"name": "市区",
			"value": 8101
		}], // 香港
		[{
			"name": "市区",
			"value": 8201
		}] // 澳门
	]
	// 区/街道
	var counties = [
		[
			[ // 北京
				{
					"name": "东城区",
					"value": 110101
				},
				{
					"name": "西城区",
					"value": 110102
				},
				{
					"name": "海淀区",
					"value": 110103
				},
				{
					"name": "昌平区",
					"value": 110104
				},
				{
					"name": "朝阳区",
					"value": 110105
				},
				{
					"name": "大兴区",
					"value": 110106
				},
				{
					"name": "房山区",
					"value": 110107
				},
				{
					"name": "丰台区",
					"value": 110108
				},
				{
					"name": "海淀区",
					"value": 110109
				},
				{
					"name": "怀柔区",
					"value": 110110
				},
				{
					"name": "密云区",
					"value": 110111
				},
				{
					"name": "平谷区",
					"value": 110112
				},
				{
					"name": "顺义区",
					"value": 110113
				},
				{
					"name": "通州区",
					"value": 110114
				},
				{
					"name": "延庆区",
					"value": 110115
				},
				{
					"name": "门头沟区",
					"value": 110116
				},
				{
					"name": "石景山区",
					"value": 110117
				}
			]
		],
		[
			[ // 天津
				{
					"name": "和平区",
					"value": 120101
				},
				{
					"name": "河东区",
					"value": 120102
				},
				{
					"name": "河西区",
					"value": 120103
				},
				{
					"name": "南开区",
					"value": 120104
				},
				{
					"name": "河北区",
					"value": 120105
				},
				{
					"name": "红桥区",
					"value": 120106
				},
				{
					"name": "海滨新区",
					"value": 120107
				},
				{
					"name": "东丽区",
					"value": 120108
				},
				{
					"name": "西青区",
					"value": 120109
				},
				{
					"name": "津南区",
					"value": 120111
				},
				{
					"name": "北辰区",
					"value": 120112
				},
				{
					"name": "武清区",
					"value": 120113
				},
				{
					"name": "宝坻区",
					"value": 120114
				},
				{
					"name": "宁河区",
					"value": 120115
				},
				{
					"name": "静海区",
					"value": 120116
				},
				{
					"name": "蓟州区",
					"value": 120117
				}
			]
		],
		[
			[{
				"name": "裕华区",
				"value": 130101
			}]
		], // 石家庄
		[
			[{
				"name": "迎泽区",
				"value": 140101
			}]
		], // 太原
		[
			[{
				"name": "赛罕区",
				"value": 150101
			}]
		], // 呼和浩特
		[
			[{
				"name": "和平区",
				"value": 210101
			}]
		], // 沈阳
		[
			[{
				"name": "朝阳区",
				"value": 220101
			}]
		], // 长春		
		[
			[{
				"name": "香坊区",
				"value": 230101
			}]
		], // 哈尔滨
		[
			[{
				"name": "闵行区",
				"value": 310101
			}]
		], // 市区
		[
			[{
				"name": "秦淮区",
				"value": 320101
			}]
		], // 南京
		[
			[{
				"name": "上城区",
				"value": 330101
			}]
		], // 杭州
		[
			[{
				"name": "蜀山区",
				"value": 340101
			}]
		], // 合肥
		[
			[{
				"name": "台江区",
				"value": 350101
			}]
		], // 福州
		[
			[{
				"name": "东湖区",
				"value": 360101
			}]
		], // 南昌
		[
			[{
				"name": "历下区",
				"value": 370101
			}]
		], // 济南
		[
			[{
				"name": "中原区",
				"value": 410101
			}]
		], // 郑州
		[
			[{
				"name": "汉阳区",
				"value": 420101
			}]
		], // 武汉
		[
			[{
				"name": "岳麓区",
				"value": 430101
			}]
		], // 长沙
		[
			[{
				"name": "荔湾区",
				"value": 440101
			}]
		], // 广州
		[
			[{
				"name": "良庆区",
				"value": 450101
			}]
		], // 南宁
		[
			[{
				"name": "龙华区",
				"value": 460101
			}]
		], // 海口
		[
			[{
				"name": "渝中区",
				"value": 500101
			}]
		], // 重庆
		[
			[{
				"name": "武侯区",
				"value": 510101
			}]
		], // 成都
		[
			[{
				"name": "南明区",
				"value": 520101
			}]
		], // 贵阳
		[
			[{
				"name": "呈贡区",
				"value": 530101
			}]
		], // 昆明
		[
			[{
				"name": "堆龙德庆区",
				"value": 540101
			}]
		], // 拉萨
		[
			[{
					"name": "新城区",
					"value": 610101
				},
				{
					"name": "莲湖区",
					"value": 610102
				},
				{
					"name": "碑林区",
					"value": 610103
				},
				{
					"name": "雁塔区",
					"value": 610104
				},
				{
					"name": "未央区",
					"value": 610105
				},
				{
					"name": "灞桥区",
					"value": 610106
				},
				{
					"name": "长安区",
					"value": 610107
				},
				{
					"name": "临潼区",
					"value": 610108
				},
				{
					"name": "阎良区",
					"value": 610109
				},
				{
					"name": "鄠邑区",
					"value": 610110
				}
			]
		], // 西安
		[
			[{
				"name": "城关区",
				"value": 620101
			}]
		], // 兰州
		[
			[{
				"name": "城中区",
				"value": 630101
			}]
		], // 西宁
		[
			[{
				"name": "金凤区",
				"value": 640101
			}]
		], // 银川
		[
			[{
				"name": "天山区",
				"value": 650101
			}]
		], // 乌鲁木齐
		[
			[{
				"name": "中正区",
				"value": 710101
			}]
		], // 台北
		[
			[{
				"name": "深水埗区",
				"value": 810101
			}]
		], // 中西区
		[
			[{
				"name": "花地玛堂区",
				"value": 820101
			}]
		] // 花地玛堂区
	]
	export default {
		data() {
			return {
				city: cities,
				county: counties[0][0],
				value: 1101,
				show: false,
				cityV: '北京市',
				countryV: '东城区'
			}
		},
		methods: {
			isShow(e) {
				var popcity = document.getElementsByClassName('popcity')[0];
				var counties = document.getElementsByClassName('counties')[0];
				var cities = document.getElementsByClassName('cities')[0];
				counties.style.display = 'block';
				cities.style.color= 'red';
				cities.style.borderBottom = '1px solid red';
				if (this.show) {
					counties.innerHTML=e.target.innerHTML.trim();
					this.countryV=counties.innerHTML;
					this.sendCityV();
					this.show = false;
					popcity.style.display = 'none';
					var cpopup = document.getElementsByClassName('cpopup')[0];
					cpopup.style.display = 'none';
				} else {
					this.show = true;
					cities.innerHTML = e.target.innerHTML.trim();
					this.cityV=cities.innerHTML;
					cities.style.color = 'black';
					cities.style.border = '0';
					this.sendCityV();
					document.body.style.overflow='';
				}
			},
			tShow() {
				var cities = document.getElementsByClassName('cities')[0];
				cities.style.color = 'red';
				this.show = false;
			},
			closeCity() {
				var cityb=document.getElementsByClassName('cityb')[0];
				var cpopup = document.getElementsByClassName('cpopup')[0];
				cpopup.style.display = 'none';
				cityb.style.display='none';
				document.body.style.overflow='';
			},
			sendCityV(){
				this.$emit('add',Array.of(this.cityV,this.countryV));
			}
		},
		mounted() {
			
		},
	}
</script>

<style scoped>
	.popcity {
		position: fixed;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		padding: 14px;
		height: 400px;
		overflow: hidden;
		z-index: 20;
	}

	.popcity .city-list {
		overflow-y: scroll;
		height: 600px;
	}

	.popcity .popcity-title {
		text-align: center;
		height: 40px;
		line-height: 40px;
		color: rgba(0, 0, 0, 0.6);
		font-size: 14px;
	}

	.popcity .place-choose {
		display: flex;
		flex: 1;
		height: 40px;
		border-bottom: 1px solid rgb(229, 229, 229);
	}

	.popcity .place-choose .cities,
	.popcity .place-choose .counties {
		cursor: pointer;
		color: red;
		font-size: 13px;
		margin: 10px;
		border-bottom: 1px solid red;
	}

	.popcity .place-choose .counties {
		display: none;
	}

	.popcity .city-list .city-item,
	.popcity .city-list .county-item {
		height: 50px;
		border-bottom: 1px solid rgb(229, 229, 229);
		line-height: 50px;
		padding-left: 10px;
		color: rgb(50, 50, 50);
		font-size: 14px;
	}

	.cpopup {
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		display: none;
	}

	.cityb {
		background-color: rgba(0, 0, 0, 0.5);
		height: 200%;
		cursor: pointer;
	}
	.cpopup .close {
		position: absolute;
		width: 43px;
		height: 43px;
		text-align: center;
		line-height: 43px;
		top: 0;
		right: 0;
		cursor: pointer;
	}
	.cpopup .close img {
		width: 11px;
		height: 11px;
	}
</style>
