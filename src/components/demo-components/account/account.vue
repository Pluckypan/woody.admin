<style lang='less'>
.account-vue {
}
</style>
<template>
  <div class="account-vue frame-page">
    <Row :space="30">
      <Col :xs='24' :sm='24' :md='24' :lg='24' :xl='24'>
        <AccountInfoShow :account="account"></AccountInfoShow>
      </Col>
    </Row>
  </div>
</template>
<script>

import AccountInfoShow from './modules/account-info-show';
import { mapState } from "vuex";

export default {
  components: {
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