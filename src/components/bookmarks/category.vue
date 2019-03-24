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
					:model="data"
					:rules="validationRules"
					ref="form"
					showErrorTip
				>
					<FormItem label="父级分类" prop="pid" single>
						<Select v-model="data.pid" :datas="data.cats"></Select>
					</FormItem>
					<FormItem label="名称" prop="name">
						<input
							type="text"
							v-model="data.name"
							placeholder="限制输入10个字"
							v-wordlimit="10"
						/>
					</FormItem>
					<FormItem label="编号" readonly>{{ data.id }}</FormItem>
					<FormItem label="排序" prop="order">
						<Slider v-model="data.order" :range="{ start: 0, end: 255 }"></Slider>
					</FormItem>
					<FormItem readonly label="排序">{{ data.order }}</FormItem>
					<FormItem label="日期" prop="create_time">
						<DatePicker placeholder="选择日期" v-model="data.create_time"></DatePicker>
					</FormItem>
					<FormItem label="备注" prop="desc" single>
						<textarea
							rows="3"
							v-autosize
							v-wordcount="50"
							placeholder="添加一段描述"
							v-model="data.desc"
						></textarea>
					</FormItem>
					<FormItem :no-padding="true">
						<Button color="primary" :loading="isLoading" @click="submit">提交</Button>
						&nbsp;&nbsp;&nbsp;
						<Button color="primary" :loading="isLoading" @click="request">请求</Button>
						&nbsp;&nbsp;&nbsp;
						<Button @click="reset">重置</Button>
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
			data: {
				pid: '0x000',
				id: '0x001',
				name: '常用',
				desc: 'woody',
				order: 0,
				create_time: manba().format(),
				cats: [
					{ title: '根', key: '0x000' },
					{ title: 'Android', key: '0x001' },
					{ title: 'iOS', key: '0x002' }
				]
			},
			isLoading: false,
			validationRules: {
				required: ['pid', 'id', 'name', 'order', 'create_time']
			}
		};
	},
	methods: {
		submit() {
			let that = this;
			let _gist = Utils.getLocal('gist');
			let _token = Utils.getLocal('token');
			GH.Gist.auth(_token);
			let validResult = this.$refs.form.valid();
			if (validResult.result) {
				this.$Message('验证成功');
				var jsonFile = {
					description: '《咏柳》贺知章',
					public: false,
					files: {
						'category.json': {
							content:
								'碧玉妆成一树高，万条垂下绿丝绦。不知细叶谁裁出，二月春风似剪刀。'
						}
					}
				};
				GH.Gist.edit(_gist,jsonFile)
					.then(function(response) {
						if (response.status == 200) {
							console.log(response.data);
						}
						that.isLoading = false;
					})
					.catch(function(error) {
						that.isLoading = false;
						console.log(error);
					});
			}
		},
		request() {
			let that = this;
			let _gist = Utils.getLocal('gist');
			let _token = Utils.getLocal('token');
			GH.Gist.auth(_token);
			this.isLoading = true;
			GH.Gist.get(_gist)
				.then(function(response) {
					if (response.status == 200) {
						console.log(response.data);
					}
					that.isLoading = false;
				})
				.catch(function(error) {
					that.isLoading = false;
					//console.log(error);
					that.$Message.error('提交失败');
				});
		},
		reset() {
			this.isLoading = false;
			this.$refs.form.reset();
		}
	}
};
</script>
