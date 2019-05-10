<style lang="less">
.tree4-demo-vue {
	.h-tree-show {
		.h-tree-show-desc {
			display: none;
		}
		.h-tree-show-expand {
			display: none;
		}
		.h-tree-item-bookmark {
			margin-left: 0.875rem;
			display: inline-block;
			vertical-align: -1px;
		}
		.h-tree-item-category {
			height: 1px;
			width: 14px;
			background: rgba(0, 0, 0, 0.65);
			display: inline-block;
			vertical-align: 3px;
		}
		.tree-show-custom {
			display: inline;
			.tree-show-title {
				font-size: 13px;
			}
		}
		.tree-edit-part {
			position: absolute;
			right: 5px;
			top: 2px;
			opacity: 0;
			i {
				font-size: 12px;
				vertical-align: middle;
				margin-right: 10px;
				cursor: pointer;
				&:hover {
					color: @primary-color;
				}
			}
		}
		&:hover {
			.tree-edit-part {
				opacity: 1;
			}
		}
	}
}
</style>

<template>
	<div class="table-basic-vue frame-page h-panel">
		<div class="h-panel-bar"><span class="h-panel-title">我的书签</span></div>
		<div class="h-panel-body tree4-demo-vue">
			<Tree :option="param" ref="demo" :filterable="false" selectOnClick className="h-tree-theme-row-selected" @open="open" @select="select" @choose="choose">
				<template slot="item" slot-scope="{ item }">
					<span><i :class="item.expIcon"></i></span>
					<div class="tree-show-custom">
						<span :class="item.treeIcon"></span>
						<span class="tree-show-title" v-if="!item.editing">{{ item.name }}</span>
						<input v-else type="text" v-model="item.editValue" @blur="updateValue(item)" @keyup.enter="updateValue(item)" />
						<span class="tree-edit-part" v-if="!item.editing">
							<!-- <i class="h-icon-plus" @click.stop="append(item)"></i>
							<i class="h-icon-edit" @click.stop="edit(item)"></i>
							<i class="h-icon-trash" @click.stop="remove(item)"></i> -->
						</span>
					</div>
				</template>
			</Tree>
		</div>
	</div>
</template>
<script>
import utils from 'hey-utils';

export default {
	data() {
		return {
			param: {
				keyName: 'id',
				// parentName: 'pid',
				titleName: 'name',
				dataMode: 'list',
				// datas: [],
				getDatas: (parent, resolve) => {
					let that = this;
					that.getData(parent, function(arr) {
						resolve(arr);
					});
				}
			}
		};
	},
	mounted() {},
	methods: {
		edit(item) {
			this.$set(item, 'editValue', item.name);
			this.$set(item, 'editing', true);
		},
		updateValue(item) {
			this.$set(item, 'editing', false);
			this.$refs.demo.updateTreeItem(item.id, { name: item.editValue });
		},
		append(item) {
			this.$refs.demo.appendTreeItem(item.id, { id: utils.uuid(), name: '测试' });
		},
		remove(item) {
			this.$refs.demo.removeTreeItem(item.id);
		},
		choose(data) {
			//log(data);
		},
		select(data) {
			//log(data);
		},
		open(data) {
			//log(data);
		},
		expand(ids) {
			this.$refs.demo.expand(ids);
		},
		expandAll() {
			this.$refs.demo.expandAll();
		},
		foldAll() {
			this.$refs.demo.foldAll();
		},
		getData(parent, callback) {
			const that = this;
			console.log(parent ? 'id=' + parent.id + ' isCat=' + parent.isCat : null);
			if (!parent || parent.isCat == true) {
				that.getCategory(parent, function(arr) {
					if (arr && arr.length > 0) {
						callback(arr);
					} else {
						that.getBookmark(parent.id, callback);
					}
				});
			} else {
				callback([]);
			}
		},
		getBookmark(cid, callback) {
			let where = {
				cid: cid
			};
			const that = this;
			DB.Bookmark.getAll(where, function(err, docs) {
				let arr = [];
				if (docs && docs.length > 0) {
					arr = docs.map(function(item) {
						item.treeIcon = 'icon-ribbon';
						item.expIcon = 'h-tree-item-bookmark';
						item.isCat = false;
						return item;
					});
				}
				callback(arr);
			});
		},
		getCategory(parent, callback) {
			let where = {
				pid: parent ? parent.id : 'root'
			};
			const that = this;
			DB.Category.search(where, 0, function(err, docs) {
				let arr = [];
				if (docs && docs.length > 0) {
					arr = docs.map(function(item) {
						item.treeIcon = 'icon-book';
						item.expIcon = 'h-tree-item-category';
						item.isCat = true;
						return item;
					});
				}
				let cid = parent ? parent.id : 'root';
				that.getBookmark(cid, function(arrB) {
					callback(arr.concat(arrB));
				});
			});
		}
	}
};
</script>
