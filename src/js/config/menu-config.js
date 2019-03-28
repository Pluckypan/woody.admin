const menuConfig = [{
		title: 'Dashboard',
		key: 'Home',
		icon: 'icon-monitor',
		count: 1
	},
	{
		title: 'Icons',
		key: 'icons',
		icon: 'icon-heart'
	},
	{
		title: '列表应用',
		key: 'tablelist',
		icon: 'icon-grid-2',
		children: [{
				title: '基础表格',
				key: 'tableBasic'
			},
			{
				title: '查询列表',
				key: 'tableSearch'
			}
		]
	}, {
		title: '书签管理',
		key: 'woody',
		icon: 'icon-grid-2',
		children: [{
				title: '添加分类',
				key: 'add_category'
			}, {
				title: '分类列表',
				key: 'categorys'
			},
			{
				title: '书签',
				key: 'bookmark'
			}
		]
	},
	{
		title: '表单应用',
		key: 'form-folder',
		icon: 'icon-paper',
		children: [{
				title: '基础表单',
				key: 'form'
			},
			{
				title: '表单详情',
				key: 'formDetail'
			},
			{
				title: '模糊匹配',
				key: 'autocomplete2'
			}
		]
	},
	{
		title: '系统设置',
		key: 'sys-setting',
		icon: 'icon-cog',
		children: [{
				title: '个人中心',
				key: 'accountBasic'
			},
			{
				title: '安全设置',
				key: 'securitySetting'
			}
		]
	}
];

export default menuConfig;
