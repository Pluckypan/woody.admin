<style lang="less">
.tree4-demo-vue {
	.h-tree-show {
		.h-tree-show-desc {
			display: none;
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
				parentName: 'pid',
				titleName: 'name',
				dataMode: 'list',
				// datas: [],
				getDatas: (parent, resolve) => {
					if(!parent){
						let that = this;
						that.getData(null, function(arr) {
							resolve(arr);
						});
					}else{
						
					}
				}
			}
		};
	},
	mounted() {
		
	},
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
		getData(nameFilter, callback) {
			const that = this;
			DB.Category.getAll(nameFilter, function(err, docs) {
				let arr = [];
				if (docs && docs.length > 0) {
					arr = docs.map(function(item) {
						item.treeIcon = 'icon-book';
						return item;
					});
				} else {
					arr.push({
						id: 'root',
						title: 'root'
					});
				}
				callback(arr);
			});
		}
	}
};
</script>
