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
				<Tabs :datas="tabs" className="common-status-filter-tabs" v-model="type" @change="tabchange">
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
				<div class="h-panel-right"><Search @search="search" v-model="searchText1"></Search></div>
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
							<TextEllipsis :text="data.desc" :height="20" v-width="100" :useTooltip="false">
								<template slot="more">
									<span>...</span>
								</template>
							</TextEllipsis>
						</span>
					</template>
				</TableItem>
				<TableItem title="操作" :width="100">
					<template slot-scope="{ data }">
						<Poptip content="确定删除这条数据吗？" @confirm="remove(data)"><span class="text-hover">删除</span></Poptip>
						<span class="text-hover" @click="editCategory(data)">编辑</span>
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
			<Pagination v-if="pagination.total > 0" :size="pagination.size" :cur="pagination.page" align="right" :total="pagination.total" @change="changePage" />
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
			counts: {
				all: 0,
				m3: 0
			},
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
			const that = this;
			DB.Category.getThreeMonthCount(function(err, count) {
				that.counts['m3'] = count ? count : 0;
			});
			DB.Category.getAllCount(function(err, count) {
				that.counts['all'] = count ? count : 0;
			});
		},
		tabchange(data) {
			if (data.key == 'all') {
				this.getData(null);
			} else if (data.key == 'm3') {
				this.loading = true;
				const that = this;
				DB.Category.getThreeMonth(function(err, docs) {
					that.datas = docs;
					const m3 = docs ? docs.length : 0;
					that.pagination.total = m3;
					that.counts['m3'] = m3;
					that.loading = false;
				});
			}
		},
		search(data) {
			this.getData(data);
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
			this.getData(null);
		},
		open(data) {
			if (data.desc && data.desc.length > 10) {
				this.$set(data, '_expand', !data._expand);
			}
		},
		addCategory() {
			this.$router.push({ name: 'category' });
		},
		editCategory(data) {
			this.$router.push({ name: 'category', query: { id: data.id } });
		},
		removeSelect() {
			const that = this;
			var selArr = this.$refs.table.getSelection();
			if (selArr && selArr.length > 0) {
				this.$Confirm('确定删除选中的数据吗？', 'WOODY ADMIN')
					.then(() => {
						const newArr = this.datas.filter(item => selArr.indexOf(item) == -1);
						this.datas = newArr;
						DB.Category.removeArray(selArr, function(err, numRemoved) {
							console.log(numRemoved);
						});
					})
					.catch(() => {});
			}
		},
		remove(data) {
			const that = this;
			DB.Category.remove(data, function(err, numRemoved) {
				console.log(numRemoved);
				if (numRemoved && numRemoved > 0) {
					that.datas = that.datas.filter(item => data.id != item.id);
				}
			});
		},
		getData(nameFilter) {
			this.pagination.page = 1;
			this.loading = true;
			const that = this;
			DB.Category.getAll(nameFilter, function(err, docs) {
				that.datas = docs;
				const all = docs ? docs.length : 0;
				that.pagination.total = all;
				that.loading = false;
			});
		}
	},
	computed: {}
};
</script>
