<style lang="less">
.tree4-demo-vue {
	min-height: 580px;
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
	.divider {
		border-top: 1px dashed #e8e8e8;
		display: block;
		height: 0px;
		width: 100%;
		margin: 12px 0;
		clear: both;
	}
	.right-fixed-container {
		top: 180px;
		position: fixed;
		padding-left: 20px;
	}
}
</style>

<template>
	<div class="table-basic-vue frame-page h-panel">
		<div class="h-panel-bar" v-font="20">
			<span class="h-panel-title">我的书签</span>
			<i @click="submit" :class="submiting ? 'h-icon-spinner float-right' : 'h-icon-upload float-right'"></i>
		</div>
		<div class="h-panel-body tree4-demo-vue">
			<Row>
				<Cell :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
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
				</Cell>
				<Cell :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
					<div class="right-fixed-container">
						<Form :readonly="true" v-if="selectItem != null && selectItem.isCat == true">
							<FormItem label="编码">{{ selectItem.id }}</FormItem>
							<FormItem label="名称">{{ selectItem.name }}</FormItem>
							<FormItem label="日期">{{ selectItem.create_time }}</FormItem>
							<FormItem label="备注" v-if="selectItem.desc && selectItem.desc.length > 0">{{ selectItem.desc }}</FormItem>
							<FormItem>
								<Button color="primary" @click="editCat(selectItem.id)">编辑</Button>
								<Button @click="deleteCat(selectItem)" :disabled="selectItem.expIcon != 'h-tree-item-bookmark'">删除</Button>
							</FormItem>
						</Form>
						<Form :readonly="true" v-if="selectItem != null && selectItem.isCat == false">
							<FormItem label="编码">{{ selectItem.id }}</FormItem>
							<FormItem label="名称">{{ selectItem.name }}</FormItem>
							<FormItem label="日期">{{ selectItem.create_time }}</FormItem>
							<FormItem label="链接">
								<a :href="selectItem.url" target="_blank">{{ selectItem.url }}</a>
							</FormItem>
							<FormItem label="备注" v-if="selectItem.desc && selectItem.desc.length > 0">{{ selectItem.desc }}</FormItem>
							<div class="divider" style="margin-left: 40px;" v-if="selectItem.tag && selectItem.tag.length > 0"></div>
							<FormItem label="标签" v-if="selectItem.tag && selectItem.tag.length > 0">
								<TagInput v-model="selectItem.tag" style="width: 100%" :readonly="true"></TagInput>
							</FormItem>
							<FormItem>
								<Button color="primary" @click="editBookmark(selectItem.id)">编辑</Button>
								<Button @click="deleteBookmark(selectItem)">删除</Button>
							</FormItem>
						</Form>
					</div>
				</Cell>
			</Row>
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
				parentName: 'pid',
				titleName: 'name',
				dataMode: 'list',
				// datas: [],
				getDatas: (parent, resolve) => {
					let that = this;
					that.getData(parent, function(arr) {
						resolve(arr);
					});
				}
			},
			selectItem: null,
			submiting: false
		};
	},
	mounted() {},
	methods: {
		submit() {
			let that = this;
			if (that.submiting) return;
			that.submiting = true;
			Runner.submit(function(err, data) {
				that.submiting = false;
				if (err) {
					console.log('提交出错:' + err);
					that.$Message(`提交出错`);
				} else {
					that.$Message(`提交成功.`);
				}
			});
		},
		editBookmark(id) {
			this.$router.push({ name: 'bookmark', query: { id: id } });
		},
		deleteBookmark(data) {
			const that = this;
			DB.Bookmark.remove(data, function(err, numRemoved) {
				if (numRemoved && numRemoved > 0) {
					that.remove(data);
				}
			});
		},
		editCat(id) {
			this.$router.push({ name: 'category', query: { id: id } });
		},
		deleteCat(data) {
			const that = this;
			DB.Category.remove(data, function(err, numRemoved) {
				if (numRemoved && numRemoved > 0) {
					that.remove(data);
				}
			});
		},
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
		removeTreeItem(key) {
			let tree = this.$refs.demo;
			let item = tree.treeObj[key];
			console.log(item);
			if (item) {
				let index = tree.treeDatas.indexOf(item);
				console.log(index + ' ' + item.parentKey + ' ' + tree.treeObj[item.parentKey]);
				if (index > -1) {
					tree.treeDatas.splice(index, 1);
				} else if (item.parentKey && tree.treeObj[item.parentKey]) {
					let parent = tree.treeObj[item.parentKey];
					console.log(parent);
					if (parent.children.indexOf(item) > -1) {
						parent.children.splice(parent.children.indexOf(item), 1);
					}
				}
				delete tree.treeObj[key];
			}
		},
		remove(item) {
			this.$Message('删除成功');
			this.selectItem = null;
			// this.$refs.demo.removeTreeItem(item.id);
			this.removeTreeItem(item.id);
		},
		choose(data) {},
		select(data) {
			console.log(this.$refs.demo);
			this.selectItem = data;
		},
		open(data) {
			data.isOpen = !data.isOpen;
			if (!data.isCat) return;
			if (data.expIcon == 'h-icon-angle-right' || data.expIcon == 'h-icon-angle-down') {
				log(data.isOpen);
				if (data.isOpen) {
					data.expIcon = 'h-icon-angle-right';
				} else {
					data.expIcon = 'h-icon-angle-down';
				}
			}
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
						if (parent) {
							parent.expIcon = 'h-icon-angle-down';
						}
					} else {
						if (parent) {
							parent.expIcon = 'h-tree-item-bookmark';
							that.getBookmark(parent.id, callback);
						} else {
							callback([]);
						}
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
						item.treeIcon = 'icon-folder';
						item.expIcon = 'h-icon-angle-right';
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
