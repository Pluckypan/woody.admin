<style lang="less" scoped></style>
<template>
	<div class="search-list-vue frame-page h-panel">
		<div class="h-panel-bar"><span class="h-panel-title">书签列表</span></div>
		<div class="h-panel-bar">
			<div class="search-picker">
				<SearchFilter v-model="params" :datas="dicts.category" prop="category" title="分类"></SearchFilter>
				<SearchFilter v-model="params" :datas="dicts.tags" prop="tags" multiple title="标签"></SearchFilter>
				<SearchFilter v-model="params" :datas="dicts.time" prop="time" title="时间"></SearchFilter>
			</div>
		</div>
		<div class="h-panel-body">
			<Bookmark v-for="d of datas" :key="d.id" :item="d"></Bookmark>
			<Loading :loading="loading"></Loading>
			<Pagination v-if="pagination.total > 0" :size="pagination.size" :cur="pagination.page" align="right" :total="pagination.total" @change="changePage" />
		</div>
	</div>
</template>
<script>
import manba from 'manba';
export default {
	data() {
		return {
			dicts: {
				category: [],
				tags: [],
				time: [
					{ key: '7', title: '1个星期内' },
					{ key: '30', title: '1个月' },
					{ key: '180', title: '6月' },
					{ key: '360', title: '1年内' },
					{ key: '361', title: '1年以上' }
				]
			},
			pagination: {
				page: 1,
				size: 20,
				total: 0
			},
			datas: [],
			allDatas: [],
			loading: false,
			params: {
				tags: [],
				category: null,
				time: null
			}
		};
	},
	mounted() {
		const that = this;
		DB.Category.search({}, 10, function(err, docs) {
			if (docs && docs.length > 0) {
				that.dicts.category = docs.map(function(item) {
					return {
						key: item.id,
						title: item.name
					};
				});
			}
		});
		DB.Bookmark.findTags(10, function(err, tags) {
			that.dicts.tags = tags.map(function(item) {
				return {
					key: item.key,
					title: item.key
				};
			});
		});
		this.init();
	},
	watch: {
		params() {
			var where = {};
			if (this.params.time) {
				if (this.params.time == 361) {
					where.create_time = {
						$gte: manba()
							.add(1, manba.YEAR)
							.format('f')
					};
				} else {
					where.create_time = {
						$lte: manba()
							.add(this.params.time, manba.DAY)
							.format('f')
					};
				}
			}
			if (this.params.category) {
				where.cid = this.params.category;
			}
			let iTags = this.params.tags;
			if (iTags && iTags.length > 0) {
				where.tag = {
					$in: iTags
				};
			}
			this.getData(where);
		}
	},
	methods: {
		changePage(page) {
			this.pagination.page = page.cur;
			this.pagination.size = page.size;
			let start = (page.cur - 1) * 20;
			let end = start + page.size;
			this.datas = this.allDatas.slice(start, end);
		},
		init() {
			this.getData();
		},
		getData(where = {}) {
			const that = this;
			that.pagination.page = 1;
			that.loading = true;
			DB.Bookmark.getAll(where, function(err, docs) {
				that.allDatas = docs;
				that.pagination.total = docs ? docs.length : 0;
				that.loading = false;
				that.changePage({
					cur: 1,
					size: 20
				});
			});
		}
	},
	computed: {}
};
</script>
