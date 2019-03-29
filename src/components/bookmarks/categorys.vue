<style lang="less">
.table-basic-vue {
}
.waction {
	padding-left: 0rem;
	padding-right: 0rem;
}
</style>
<template>
	<div class="table-basic-vue frame-page h-panel">
		<div class="h-panel-bar"><span class="h-panel-title">分类列表</span></div>
		<div class="h-panel-body">
			<div>
				<Tabs
					:datas="tabs"
					className="common-status-filter-tabs"
					v-model="type"
					@change="getData(true)"
				>
					<template slot-scope="{ tab }" slot="item">
						<p class="code">{{ counts[`${tab.key}`] || 0 }}</p>
						<p class="name">{{ tab.title }}</p>
					</template>
				</Tabs>
			</div>
			<div class="h-panel-bar waction">
				<ButtonGroup>
					<Button icon="h-icon-inbox" color="primary" @click="addCategory">新建</Button>
					<Button icon="h-icon-trash" color="primary" @click="removeSelect">删除</Button>
				</ButtonGroup>
				<div class="h-panel-right">
					<Search @search="search" v-model="searchText1"></Search>
				</div>
			</div>
			<Table :loading="loading" :datas="datas" @select="onselect" ref="table" stripe checkbox>
				<TableItem title="序号" :width="100">
					<template slot-scope="{ index }">
						{{ index + 1 }}
					</template>
				</TableItem>
				<TableItem :width="100" prop="pid" title="父级编号"></TableItem>
				<TableItem :width="100" prop="id" title="编号"></TableItem>
				<TableItem :width="100" prop="name" title="名称"></TableItem>
				<TableItem :width="150" prop="create_time" title="创建时间" sort="auto"></TableItem>
				<TableItem :width="100" prop="order" title="排序" sort="auto"></TableItem>
				<TableItem :width="200" title="描述">
					<template slot-scope="{ data }">
						<span class="text-hover" @click="open(data)">
							<TextEllipsis
								:text="data.desc"
								:height="20"
								v-width="100"
								:useTooltip="false"
							>
								<template slot="more">
									<span>...</span>
								</template>
							</TextEllipsis>
						</span>
					</template>
				</TableItem>
				<TableItem title="操作" :width="100">
					<template slot-scope="{ data }">
						<span class="text-hover" @click="remove(data)">删除</span>
					</template>
				</TableItem>
				<template slot="expand" slot-scope="{ data }">
					<Form readonly mode="twocolumn">
						<FormItem label="名称">{{ data.name }}</FormItem>
						<FormItem label="描述">{{ data.desc }}</FormItem>
					</Form>
					<Loading :loading="data.loading"></Loading>
				</template>
			</Table>
			<p></p>
			<Pagination
				v-if="pagination.total > 0"
				:size="pagination.size"
				:cur="pagination.page"
				align="right"
				:total="pagination.total"
				@change="changePage"
			/>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			pagination: {
				page: 1,
				size: 20,
				total: 0
			},
			tabs: [{ key: 'all', title: '全部分类' }, { key: 'm3', title: '最近添加' }],
			type: 'China',
			datas: [],
			counts: {},
			loading: false,
			searchText1: null
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.getData();
			this.getCounts();
		},
		search(data) {
			this.$Message.info(`查询“${data}”`);
		},
		onselect(data, event) {
			console.log(this.$refs.table.getSelection());
		},
		shortString(str) {
			if (str && str.length > 10) {
				return str.substr(0, 10) + '...';
			} else {
				return str;
			}
		},
		changePage(page) {
			this.pagination.page = page.cur;
			this.pagination.size = page.size;
			this.getData();
		},
		open(data) {
			if (data.desc && data.desc.length > 10) {
				this.$set(data, '_expand', !data._expand);
			}
		},
		addCategory(){
			this.$router.push({name: 'add_category'});
		},
		removeSelect() {
			const that=this
			var selArr = this.$refs.table.getSelection();
			if (selArr && selArr.length > 0) {
				selArr.forEach(function(item, index) {
					that.remove(item)
				});
			}
		},
		remove(data) {
			this.datas.pop(data);
			DB.Category.remove(data);
		},
		getCounts() {
			setTimeout(() => {
				this.counts = {
					all: 100,
					m3: 10
				};
			}, 1000);
		},
		getData(reload = false) {
			if (reload) {
				this.pagination.page = 1;
			}
			this.loading = true;
			setTimeout(() => {
				this.datas = DB.Category.getAll();
				this.pagination.total = 100;
				this.loading = false;
			}, 1000);
		}
	},
	computed: {}
};
</script>
