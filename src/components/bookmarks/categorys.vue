<style lang='less'>
  .table-basic-vue {}
</style>
<template>
  <div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title">分类列表</span></div>
    <div class="h-panel-body">
      <div>
        <Tabs :datas="tabs" className="common-status-filter-tabs" v-model="type" @change="getData(true)">
          <template slot-scope="{tab}" slot="item">
            <p class="code">{{counts[`${tab.key}`] || 0}}</p>
            <p class="name">{{tab.title}}</p>
          </template>
        </Tabs>
      </div>
      <div class="common-filter-bar">
        <div class="float-right">
          <Select class="common-filter-select" autosize v-width="160" v-model="sort" :datas="sortList" :no-border="true" @input="getData(true)" :null-option="false" placeholder="请选择您的内容"></Select>
        </div>
      </div>
      <Table :loading="loading" :datas="datas">
        <TableItem title="序号" :width="100">
          <template slot-scope="{index}">{{index+1}} </template>
        </TableItem>
				<TableItem :width="100" prop="pid" title="父级编号"></TableItem>
        <TableItem :width="100" prop="id" title="编号"></TableItem>
        <TableItem :width="200" prop="name" title="名称"></TableItem>
        <TableItem :width="200" prop="create_time" title="创建时间"></TableItem>
        <TableItem :width="100" prop="order" title="排序"></TableItem>
        <TableItem :width="300" prop="desc" title="描述"></TableItem>
      </Table>
      <p></p>
      <Pagination v-if="pagination.total>0" :size="pagination.size" :cur="pagination.page" align="right" :total="pagination.total" @change="changePage" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        keyword: '',
        sort: 'updatedAt:desc',
        sortList: {
          'updatedAt:desc': '更新时间倒序',
          'updatedAt:asc': '更新时间正序',
          'createdAt:desc': '创建时间倒序',
          'createdAt:asc': '创建时间正序',
        },
        pagination: {
          page: 1,
          size: 20,
          total: 0
        },
        tabs: [
            {key: 'all', title: '全部分类'},
						{key: 'm3', title: '最近添加'}
        ],
        type: 'China',
        datas: [],
        counts: {},
        loading: false,
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getData();
        this.getCounts();
      },
      changePage(page) {
        this.pagination.page = page.cur;
        this.pagination.size = page.size;
        this.getData();
      },
      getCounts() {
        setTimeout(() => {
          this.counts = {
            all: 100,
						m3: 10
          }
        }, 1000)
      },
      getData(reload = false) {
        if (reload) {
          this.pagination.page = 1;
        }
        this.loading = true;
        setTimeout(() => {
          this.datas = DB.Category.getAll()
          this.pagination.total = 100;
          this.loading = false;
        }, 1000)
      }
    },
    computed: {

    }
  }
</script>