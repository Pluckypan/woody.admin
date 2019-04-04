<style lang="less">
.a-item-vue {
	padding: 20px 0;
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
}
</style>
<template>
	<div class="a-item-vue">
		<p class="title">{{ item.name }}</p>
		<p class="tags"><TagInput v-model="item.tag" readonly></TagInput></p>
		<Button class="text-hover" noBorder text-color="blue" @click="openUrl(item.url)">{{ item.url }}</Button>
		<pre class="desc">{{ item.desc }}</pre>
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
		openUrl(url){
			window.open(url);
		}
	},
	computed: {}
};
</script>
