<style lang='less'>
.account-vue {
}
</style>
<template>
  <div class="account-vue frame-page">
    <Row :space="30">
      <Col :xs='24' :sm='24' :md='10' :lg='10' :xl='10'>
        <AccountInfoShow :account="account"></AccountInfoShow>
      </Col>
      <Col :xs='24' :sm='24' :md='14' :lg='14' :xl='14'>
        <div class="h-panel">
          <div class="h-panel-tabs-bar">
            <Tabs v-model="tab" :datas="tabs"></Tabs>
          </div>
          <AccountInfoEdit v-if="tab == 'info'" :account="account"></AccountInfoEdit>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import AccountInfoEdit from './modules/account-info-edit';
import AccountInfoShow from './modules/account-info-show';
import { mapState } from "vuex";

export default {
  components: {
    AccountInfoEdit,
    AccountInfoShow
  },
  data() {
    return {
      tabs: {
        info: '基本设置',
      },
      tab: 'info'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      
    }
  },
  computed: {
    ...mapState({
      account: 'User'
    }),
  }
}
</script>