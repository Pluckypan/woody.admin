<style lang="less" scoped>
.basic-form-vue {
	.h-panel-body {
		padding-right: 60px;
	}
}
</style>

<template>
	<div class="app-form frame-page basic-form-vue">
		<div class="h-panel">
			<div class="h-panel-bar">
				<span class="h-panel-title">{{ this.isEdit ? '编辑书签' : '添加书签' }}</span>
			</div>
			<div class="h-panel-body">
				<Form :label-width="110" mode="twocolumn" :model="bookmark" :rules="validationRules" ref="form" showErrorTip>
					<FormItem label="分类" prop="cid"><Select v-model="bookmark.cid" :datas="cats"></Select></FormItem>
					<FormItem label="图标"><Avatar :src="bookmark.icon" :width="20"></Avatar></FormItem>
					<FormItem label="名称" prop="name"><input type="text" v-model="bookmark.name" placeholder="限制输入50个字" v-wordlimit="100" /></FormItem>
					<FormItem label="编号" readonly>{{ bookmark.id }}</FormItem>
					<FormItem label="链接" prop="url"><input type="text" v-model="bookmark.url" /></FormItem>
					<FormItem label="常用" readonly><Checkbox v-model="bookmark.hot"></Checkbox></FormItem>
					<FormItem label="排序" prop="order"><Slider v-model="bookmark.order" :range="{ start: 0, end: 255 }"></Slider></FormItem>
					<FormItem readonly label="排序">{{ bookmark.order }}</FormItem>
					<FormItem label="日期" prop="create_time">
						<DatePicker placeholder="选择日期" type="datetime" format="YYYY/MM/DD HH:mm:ss" v-model="bookmark.create_time"></DatePicker>
					</FormItem>
					<FormItem label="标签" prop="tag"><TagInput v-model="bookmark.tag"></TagInput></FormItem>
					<FormItem label="备注" prop="desc" single>
						<textarea rows="3" v-autosize v-wordcount="2000" placeholder="添加一段描述" v-model="bookmark.desc"></textarea>
					</FormItem>
					<FormItem single>
						<Button color="primary" @click="save">{{ this.isEdit ? '更新' : '保存' }}</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="reset">重置</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="del" v-if="this.isEdit">删除</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="open" v-if="this.isEdit">打开</Button>
						<Button @click="importJson" v-if="!this.isEdit">导入</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>
<script>
import manba from 'manba';
export default {
	data() {
		return {
			mode: 'single',
			bookmark: {
				cid: 'root',
				id: DB.IDMaker.gen(),
				name: '',
				desc: '',
				tag: [],
				hot: false,
				url: '',
				order: 0,
				icon: '',
				cover: '',
				create_time: manba().format('f')
			},
			cats: [{ title: '根', key: 'root' }],
			isEdit: false,
			validationRules: {
				required: ['cid', 'id', 'name', 'url', 'order', 'create_time'],
				url: ['url']
			}
		};
	},
	mounted() {
		const cid = this.$route.query.id;
		const that = this;
		if (cid) {
			that.isEdit = true;
			DB.Bookmark.find(cid, function(err, doc) {
				if (!doc) {
					return;
				}
				that.bookmark = {
					cid: doc.cid,
					id: doc.id,
					name: doc.name,
					desc: doc.icon,
					tag: doc.tag,
					hot: doc.hot,
					url: doc.url,
					icon: doc.icon,
					cover: doc.cover,
					order: doc.order,
					create_time: doc.create_time
				};
			});
		} else {
			that.isEdit = false;
		}
		DB.Category.findCats(function(err, cats) {
			that.cats = cats;
		});
	},
	methods: {
		importJson() {
			var desc = this.bookmark.desc;
			if (!desc || desc.length == 0) {
				this.$Message('请在备注中输入json');
				return;
			}
			var json = null;
			try {
				json = JSON.parse(desc);
			} catch (e) {
				json = null;
			}
			if (!json || !json.url) {
				this.$Message('请输入合法的书签信息');
				return;
			}
			this.bookmark = {
				cid: json.cid,
				id: json.id,
				name: json.name,
				desc: json.desc,
				tag: json.tag,
				icon: json.icon,
				cover: json.cover,
				url: json.url,
				create_time: manba().format('f')
			};
		},
		open() {
			window.open(this.bookmark.url);
		},
		save() {
			let validResult = this.$refs.form.valid();
			if (validResult.result) {
				const that = this;
				if (that.isEdit == true) {
					DB.Bookmark.update(this.bookmark, function(err, numReplaced) {
						if (numReplaced && numReplaced > 0) {
							that.$Message('更新成功');
						}
					});
				} else {
					DB.Bookmark.push(Utils.copy(this.bookmark), function(err, newDoc) {
						that.$Message('保存成功');
						that.reset();
					});
				}
			}
		},
		reset() {
			this.bookmark.id = DB.IDMaker.gen();
			this.bookmark.create_time = manba().format('f');
			this.bookmark.desc = '';
			this.bookmark.cid = 'root';
			this.bookmark.name = '';
			this.bookmark.url = '';
			this.bookmark.tag = [];
			this.bookmark.icon = '';
			this.bookmark.cover = '';
			this.bookmark.order = 0;
			this.isEdit = false;
			this.$refs.form.reset();
		},
		del() {
			const that = this;
			DB.Bookmark.remove(this.bookmark, function(err, numRemoved) {
				that.reset();
			});
		}
	}
};
</script>
