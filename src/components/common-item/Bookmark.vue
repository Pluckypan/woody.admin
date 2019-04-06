<style lang="less">
.a-item-vue {
	padding: 10px 0;
	margin: 0 10px;
	.title {
		font-size: 15px;
		font-weight: bold;
	}

	&:first-of-type {
		padding-top: 0;
	}

	+ .a-item-vue {
		border-top: @border;
	}
	.bpad {
		padding: 8px 0px;
	}
	.gray666{
		color: #666666;
	}
	.gray999{
		color: #999999;
	}
}
</style>
<template>
	<div class="a-item-vue">
		<p class="title text-hover" @click="editBookmark(item.id)">{{ item.name }}</p>
		<div>
			<Button class="text-hover bpad" noBorder text-color="blue" @click="openUrl(item.url)">{{ item.url }}</Button>
			<span class="float-right gray999">{{ item.create_time }}</span>
		</div>
		<pre class="desc gray666">{{ item.desc }}</pre>
		<p class="tags"><TagInput v-model="item.tag" readonly></TagInput></p>
	</div>
</template>
<script>
export default {
	props: {
		item: Object
	},
	data() {
		return {};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {},
		openUrl(url) {
			window.open(url);
		},
		editBookmark(id) {
			this.$router.push({ name: 'bookmark', query: { id: id } });
		}
	},
	computed: {}
};
</script>
