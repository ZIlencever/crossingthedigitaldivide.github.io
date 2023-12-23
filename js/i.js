							
    var myChart1 = echarts.init(document.getElementById('main1'));
    var data = [
		{
			name: '新闻资讯',
			children: [
				{
				name: '社交类',
				children: [
					{
						name: '腾讯新闻',
						value: 15,
					},
					{
						name: '新浪微博',
						value: 15,
					},
					{
						name: '今日头条',
						value: 10,
					}
				]}
			]
		},
		{
			name: '社交通讯',
			children: [
			{
				name: '社交类',
				children: [
				{
					name: '微信',
					value: 15
				},
				{
					name: 'QQ',
					value: 15
					
				}
				]
			},
			{
				name: '电信类',
				children: [
				{
					name: '电信',
					value: 15
				},
				{
					name: '移动',
					value: 15
					
				},
				{
					name: '联通',
					value: 15
					
				}
				]
			}
			]
		},
		{
			name: '生活购物',
			children: [
			{
				name: '购物',
				children: [
				{
					name: '淘宝',
					value: 15
				},
				{
					name: '京东',
					value: 15
				},
				{
					name: '拼多多',
					value: 15
				},
				{
					name: '闲鱼',
					value: 15
				}
				]
			},
			{
				name: '购物',
				children: [
				{
					name: '淘宝',
					value: 15
				},
				{
					name: '京东',
					value: 15
				},
				{
					name: '拼多多',
					value: 15
				},
				{
					name: '闲鱼',
					value: 15
				}
				]
			},
			{
				name: '美食外卖类',
				children: [
				{
					name: '饿了么',
					value: 15
				},
				{
					name: '美团',
					value: 15
				}
				]
			},
			{
				name: '住房',
				children: [
				{
					name: '链家',
					value: 15
				},
				{
					name: '贝壳',
					value: 15
				}
				]
			},
			{
				name: '购物',
				children: [
				{
					name: '抖音',
					value: 15
				},
				{
					name: '火山小视频',
					value: 15
				},
				{
					name: '喜马拉雅听书',
					value: 15
				},
				{
					name: '爱奇艺',
					value: 15
				},
				{
					name: '优酷',
					value: 15
				},
				{
					name: '全民K歌',
					value: 15
				},
				{
					name: '唱吧',
					value: 15
				}
				]
			},
			{
				name: '工具',
				children: [
				{
					name: '百度',
					value: 15
				},
				{
					name: '搜狗',
					value: 15
				}
				]
			}
			]
		},
		{
			name: '金融服务',
			children: [
			{
				name: '支付类',
				children: [
				{
					name: '支付宝',
					value: 15
				},
				{
					name: '微信支付',
					value: 15
				}
				]
			},
			{
				name: '银行类',
				children: [
				{
					name: '中国银行',
					value: 15
				},
				{
					name: '工行等App',
					value: 15
				}
				]
			}
			]
		},
		{
			name: '旅游出行',
			children: [
			{
				name: '地图类',
				children: [
				{
					name: '高德地图',
					value: 15
				},
				{
					name: '百度地图',
					value: 15
				},
				{
					name: '腾讯地图',
					value: 15
				}
				]
			},
			{
				name: '网约车类',
				children: [
				{
					name: '滴滴出行',
					value: 15
				}
				]
			},
			{
				name: '票务类',
				children: [
				{
					name: '铁路12306',
					value: 15
				},
				{
					name: '携程出行',
					value: 15
				}
				]
			}
			]
		},
		{
			name: '医疗健康',
			children: [
			{
				name: '寻医问诊类',
				children: [
				{
					name: '114健康',
					value: 15
				},
				{
					name: '好大夫在线',
					value: 15
				},
				{
					name: '微医',
					value: 15
				}
				]
			},
			{
				name: '医药类',
				children: [
				{
					name: '京东到家',
					value: 15
				},
				{
					name: '叮当快药',
					value: 15
				}
				]
			}
			]
		}
	];
	option1 = {
	color: ['#980000','#ec3a17','#5e1000'],
	series: {
		type: 'sunburst',
		data: data,
		radius: [0, '100%'],
		label: {
		rotate: 'radial'
		}
	}
	};
	myChart1.setOption(option1);