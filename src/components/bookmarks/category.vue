<style lang="less">
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
				<span class="h-panel-title">{{ this.isEdit ? '编辑分类' : '添加分类' }}</span>
			</div>
			<div class="h-panel-body">
				<Form :label-width="110" mode="twocolumn" :model="category" :rules="validationRules" ref="form" showErrorTip>
					<FormItem label="父级分类" prop="pid" single><Select v-model="category.pid" :datas="cats"></Select></FormItem>
					<FormItem label="名称" prop="name"><input type="text" v-model="category.name" placeholder="限制输入10个字" v-wordlimit="10" /></FormItem>
					<FormItem label="编号" readonly>{{ category.id }}</FormItem>
					<FormItem label="排序" prop="order"><Slider v-model="category.order" :range="{ start: 0, end: 255 }"></Slider></FormItem>
					<FormItem readonly label="排序">{{ category.order }}</FormItem>
					<FormItem label="日期" prop="create_time">
						<DatePicker placeholder="选择日期" type="datetime" format="YYYY/MM/DD HH:mm:ss" v-model="category.create_time"></DatePicker>
					</FormItem>
					<FormItem label="常用" readonly><Checkbox v-model="category.hot"></Checkbox></FormItem>
					<FormItem label="备注" prop="desc" single>
						<textarea rows="3" v-autosize v-wordcount="50" placeholder="添加一段描述" v-model="category.desc"></textarea>
					</FormItem>
					<FormItem single>
						<Button color="primary" @click="save">{{ this.isEdit ? '更新' : '保存' }}</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="reset">重置</Button>
						&nbsp;&nbsp;&nbsp;
						<Button color="primary" :loading="submitting" @click="submit">提交</Button>
						&nbsp;&nbsp;&nbsp;
						<Button color="primary" :loading="syncing" @click="sync">同步</Button>
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
			category: {
				pid: 'root',
				id: DB.IDMaker.gen(),
				name: '',
				desc: '',
				order: 0,
				hot: false,
				create_time: manba().format('f')
			},
			cats: [{ title: '根', key: 'root' }],
			submitting: false,
			syncing: false,
			isEdit: false,
			validationRules: {
				required: ['pid', 'id', 'name', 'order', 'create_time']
			}
		};
	},
	mounted() {
		const cid = this.$route.query.id;
		if (cid) {
			const that = this;
			DB.Category.find(cid, function(err, doc) {
				if (!doc || !doc.id) {
					that.isEdit = false;
					return;
				}
				that.category = {
					pid: doc.pid,
					id: doc.id,
					name: doc.name,
					desc: doc.desc,
					order: doc.order,
					hot: doc.hot,
					create_time: doc.create_time
				};
				that.isEdit = true;
			});
		} else {
			this.isEdit = false;
		}
	},
	methods: {
		submit() {
			let that = this;
			DB.Category.getAll(null, function(err, docs) {
				let _gist = Utils.getLocal('gist');
				let _token = Utils.getLocal('token');
				GH.Gist.auth(_token);
				var jsonFile = {
					files: {
						'category.json': {
							content: JSON.stringify(docs)
						}
					}
				};
				that.submitting = true;
				GH.Gist.edit(_gist, jsonFile)
					.then(function(response) {
						if (response.status == 200) {
							console.log(response.data);
						}
						that.submitting = false;
					})
					.catch(function(error) {
						that.submitting = false;
						console.log(error);
					});
			});
		},
		sync() {
			let that = this;
			let _gist = Utils.getLocal('gist');
			let _token = Utils.getLocal('token');
			GH.Gist.auth(_token);
			this.syncing = true;
			GH.Gist.get(_gist)
				.then(function(response) {
					if (response.status == 200) {
						console.log(response.data);
					}
					that.syncing = false;
				})
				.catch(function(error) {
					that.syncing = false;
					//console.log(error);
					that.$Message.error('提交失败');
				});
		},
		save() {
			let validResult = this.$refs.form.valid();
			if (validResult.result) {
				this.$Message('保存成功');
				const that = this;
				if (that.isEdit == true) {
					DB.Category.update(this.category, function(err, numReplaced) {
						console.log(numReplaced);
					});
				} else {
					DB.Category.push(Utils.copy(this.category), function(err, newDoc) {
						that.reset();
					});
				}
			}
		},
		reset() {
			this.category.id = DB.IDMaker.gen();
			this.category.create_time = manba().format('f');
			this.category.desc = '';
			this.category.name = '';
			this.category.pid = 'root';
			this.category.hot = false;
			this.category.order = 0;
			this.submitting = false;
			this.syncing = false;
			this.isEdit = false;
			this.$refs.form.reset();
		}
	}
};
</script>
