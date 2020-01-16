<style lang="less">
.security-setting-vue {
}
</style>
<template>
	<div class="security-setting-vue">
		<div class="subframe-title">系统设置</div>
		<div class="common-list-container">
			<div class="common-list-item">
				<div class="common-list-meta">
					<p class="font-bold">同步书签数据</p>
					<p>自动拉取数据异常的情况下,可手动从 Gist 同步书签数据</p>
				</div>
				<div class="common-list-action">
					<Button @click="sync">
						<i :class="syncing ? 'h-icon-spinner' : ''"></i>
						更新书签
					</Button>
				</div>
			</div>
			<div class="common-list-item">
				<div class="common-list-meta">
					<p class="font-bold">提交书签数据</p>
					<p>在提交书签异常的情况下,可手动提交本地数据至 Gist.一般建议先拉取再提交.</p>
				</div>
				<div class="common-list-action">
					<Button @click="submit">
						<i :class="submiting ? 'h-icon-spinner' : ''"></i>
						提交书签
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
			syncing: false,
			submiting: false
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {},
		sync() {
			let that = this;
			if (that.syncing) return;
			that.syncing = true;
			Runner.sync(function(err, data) {
				that.syncing = false;
				if (err) {
					that.$Message(`同步出错“${err}”`);
				} else {
				}
			});
		},
		submit() {
			let that = this;
			if (that.submiting) return;
			that.submiting = true;
			Runner.submit(function(err, data) {
				that.submiting = false;
				if (err) {
					this.$Message(`跳转至关键词“${this.keyword}”的搜索`);
				} else {
					console.log(data);
				}
			});
		}
	},
	computed: {}
};
</script>
