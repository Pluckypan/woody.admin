<style lang='less'>
.account-info-show-vue {
  .account-image {
    .h-avatar {
      width: 100px;
      margin:0 auto;
    }
  }
  .account-name {
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .account-desc {
    text-align: center;
    width: 200px;
    margin: 0 auto;
  }
  .account-detail-desc {
    margin-top: 40px;
    p {
      margin-bottom: 10px;
      > span {
        margin-left: 10px;
      }
    }
  }
  .divider {
    border-top: 1px dashed #e8e8e8;
    display: block;
    height: 0px;
    width: 100%;
    margin: 24px 0;
    clear: both;
  }
  .account-detail-tags-title {
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 12px;
  }
  .h-taginput > span {
    margin-bottom: 5px;
  }
}
</style>
<template>
  <div class="h-panel account-info-show-vue">
    <div class="h-panel-body">
      <p class="account-image">
        <Avatar :src="account.avatar_url" :width="100"></Avatar>
      </p>
      <p class="account-name">{{account.login}}</p>
      <p class="account-desc"><pre>{{account.type}}</pre></p>
      <div class="account-detail-desc">
        <p><i class="icon-mail"></i><span>{{account.id}}</span></p>
        <p><i class="icon-briefcase"></i><span><a :href="account.html_url" target="_blank">{{account.html_url}}</a></span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    account: Object
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(this.account);
    }
  },
  computed: {
    
  }
}
</script>