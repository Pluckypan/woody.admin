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
				<span class="h-panel-title">{{ this.isEdit ? '编辑书签' : '添加书签' }}</span>
			</div>
			<div class="h-panel-body">
				<Form :label-width="110" mode="twocolumn" :model="bookmark" :rules="validationRules" ref="form" showErrorTip>
					<FormItem label="分类" prop="cid" single><Select v-model="bookmark.cid" :datas="cats"></Select></FormItem>
					<FormItem label="名称" prop="name"><input type="text" v-model="bookmark.name" placeholder="限制输入10个字" v-wordlimit="10" /></FormItem>
					<FormItem label="编号" readonly>{{ bookmark.id }}</FormItem>
					<FormItem label="链接" prop="url"><input type="text" v-model="bookmark.url" /></FormItem>
					<FormItem label="热门" readonly>
						<Checkbox v-model="bookmark.hot"></Checkbox>
					</FormItem>
					<FormItem label="排序" prop="order"><Slider v-model="bookmark.order" :range="{ start: 0, end: 255 }"></Slider></FormItem>
					<FormItem readonly label="排序">{{ bookmark.order }}</FormItem>
					<FormItem label="日期" prop="create_time">
						<DatePicker placeholder="选择日期" type="datetime" format="YYYY/MM/DD HH:mm:ss" v-model="bookmark.create_time"></DatePicker>
					</FormItem>
					<FormItem label="备注" prop="desc" single>
						<textarea rows="3" v-autosize v-wordcount="50" placeholder="添加一段描述" v-model="bookmark.desc"></textarea>
					</FormItem>
					<FormItem single>
						<Button color="primary" @click="save">保存</Button>
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
			bookmark: {
				cid: 'root',
				id: DB.IDMaker.gen(),
				name: '',
				desc: '',
				tag: '',
				hot: false,
				url: '',
				order: 0,
				create_time: manba().format('f')
			},
			cats: [{ title: '根', key: 'root' }],
			isEdit: false,
			validationRules: {
				required: ['cid', 'id', 'name', 'url', 'order', 'create_time']
			}
		};
	},
	mounted() {
		const cid = this.$route.query.id;
		if (cid) {
			const that = this;
			that.isEdit = true;
		} else {
			this.isEdit = false;
		}
	},
	methods: {
		save() {
			let validResult = this.$refs.form.valid();
			if (validResult.result) {
				this.$Message('保存成功');
				const that = this;
				if (that.isEdit == true) {
				} else {
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
			this.bookmark.order = 0;
			this.isEdit = false;
			this.$refs.form.reset();
		}
	}
};
</script>
