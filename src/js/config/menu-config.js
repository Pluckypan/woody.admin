const menuConfig = [{
		title: 'Dashboard',
		key: 'Home',
		icon: 'icon-monitor',
		count: 1
	},
	{
		title: '我的书签',
		key: 'tree',
		icon: 'icon-ribbon'
	}, {
		title: '管理书签',
		key: 'woody',
		icon: 'icon-book',
		children: [{
				title: '添加分类',
				key: 'category'
			}, {
				title: '分类列表',
				key: 'categorys'
			},
			{
				title: '添加书签',
				key: 'bookmark'
			},
			{
				title: '书签列表',
				key: 'bookmarks'
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
