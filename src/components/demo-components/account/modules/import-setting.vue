<style lang="less">
.notice-setting-vue {
}
</style>
<template>
	<div class="notice-setting-vue">
		<div class="subframe-title">导入设置</div>
		<div class="common-list-container">
			<div class="common-list-item">
				<div class="common-list-meta">
					<p class="font-bold">Voblet</p>
					<input type="password" v-model="vobletToken" placeholder="请输入Voblet授权码" />
				</div>
				<div class="common-list-action">
					<Button @click="sync">
						<i :class="syncing ? 'h-icon-spinner' : ''"></i>
						导入
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			vobletToken: '',
			syncing: false
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.vobletToken = Utils.getLocal('vobletToken');
		},
		sync() {
			let that = this;
			if (!this.vobletToken || this.vobletToken.length == 0) {
				this.$Message(`Token require.`);
				return;
			}
			this.syncing = true;
			Voblet.sync(this.vobletToken, function(data) {
				that.syncing = false;
				if (data) {
					that.$Message(`Import success.`);
					Utils.saveLocal('vobletToken', that.vobletToken);
				}else{
					that.$Message(`Import failed.`);
				}
			});
		}
	},
	computed: {}
};
</script>
