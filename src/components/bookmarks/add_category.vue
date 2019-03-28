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
			<div class="h-panel-bar"><span class="h-panel-title">添加分类</span></div>
			<div class="h-panel-body">
				<Form
					:label-width="110"
					mode="twocolumn"
					:model="category"
					:rules="validationRules"
					ref="form"
					showErrorTip
				>
					<FormItem label="父级分类" prop="pid" single>
						<Select v-model="category.pid" :datas="cats"></Select>
					</FormItem>
					<FormItem label="名称" prop="name">
						<input
							type="text"
							v-model="category.name"
							placeholder="限制输入10个字"
							v-wordlimit="10"
						/>
					</FormItem>
					<FormItem label="编号" readonly>{{ category.id }}</FormItem>
					<FormItem label="排序" prop="order">
						<Slider v-model="category.order" :range="{ start: 0, end: 255 }"></Slider>
					</FormItem>
					<FormItem readonly label="排序">{{ category.order }}</FormItem>
					<FormItem label="日期" prop="create_time">
						<DatePicker
							placeholder="选择日期"
							type="datetime"
							format="YYYY/MM/DD HH:mm:ss"
							v-model="category.create_time"
						></DatePicker>
					</FormItem>
					<FormItem label="备注" prop="desc" single>
						<textarea
							rows="3"
							v-autosize
							v-wordcount="50"
							placeholder="添加一段描述"
							v-model="category.desc"
						></textarea>
					</FormItem>
					<FormItem single>
						<Button color="primary" @click="save">保存</Button>
						&nbsp;&nbsp;&nbsp;
						<Button color="primary" @click="read">读取</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="clear">清空</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="reset">重置</Button>
						&nbsp;&nbsp;&nbsp;
						<Button color="primary" :loading="submitting" @click="submit">
							提交
						</Button>
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
				pid: '0',
				id: DB.IDMaker.gen(),
				name: '常用',
				desc: 'woody',
				order: 0,
				create_time: manba().format('f')
			},
			cats: [{ title: '根', key: '0' }],
			submitting: false,
			syncing: false,
			validationRules: {
				required: ['pid', 'id', 'name', 'order', 'create_time']
			}
		};
	},
	methods: {
		clear() {
			DB.Category.clearAll();
		},
		submit() {
			let that = this;
			let _gist = Utils.getLocal('gist');
			let _token = Utils.getLocal('token');
			GH.Gist.auth(_token);
			var jsonFile = {
				files: {
					'category.json': {
						content: JSON.stringify(DB.Category.getAll())
					}
				}
			};
			this.submitting = true;
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
				this.$Message('验证成功');
				const _id = DB.Category.push(Utils.copy(this.category));
				console.log(_id);
			}
		},
		read() {
			const _all = DB.Category.getAll();
			if (_all && _all.length) {
				this.category.desc = _all.length;
			}
		},
		reset() {
			this.category.id = DB.IDMaker.gen();
			this.submitting = false;
			this.syncing = false;
			this.$refs.form.reset();
		}
	}
};
</script>
