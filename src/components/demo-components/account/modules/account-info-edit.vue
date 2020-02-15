<style lang="less">
.account-info-vue {
	padding: 30px 30px 30px 0;
	width: 500px;
}
</style>
<template>
	<div class="account-info-vue">
		<Form :model="acc" :rules="rules" ref="form" showErrorTip>
			<FormItem label="Gist" prop="name"><input type="text" v-model="acc.name" /></FormItem>
			<FormItem label="Token" prop="email"><input type="text" v-model="acc.email" /></FormItem>
			<FormItem label="" prop="location">
				<Button color="primary" @click="save" :loading="saveloading">保存</Button>
				<Button @click="reset">重置</Button>
			</FormItem>
		</Form>
	</div>
</template>
<script>
import store from 'js/vuex/store';

export default {
	props: {
		account: Object
	},
	data() {
		return {
			acc: Utils.copy(this.account),
			rules: {
				required: ['name', 'email', 'org'],
				email: ['email']
			},
			options: {
				max_file_size: '1mb',
				filters: {
					mime_types: [{ title: 'Image files', extensions: 'jpg,gif,png' }]
				}
			},
			saveloading: false
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {},
		save() {
			if (!this.$refs.form.valid().result) return;
			this.saveloading = true;
			setTimeout(() => {
				this.saveloading = false;
				store.dispatch('updateAccount', Utils.copy(this.acc));
			}, 1000);
		},
		reset() {
			this.$refs.form.reset();
			this.acc = Utils.copy(this.account);
		}
	},
	computed: {}
};
</script>
