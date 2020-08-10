<template>
  <a-card class="about">
    <a-avatar
      :size="100"
      src="https://ae01.alicdn.com/kf/Hf3e4f71cc2294e889a65661d2f2fb678N.jpg"
    />
    <div class="info">
      <div class="name">
        Joey
      </div>
      <div>
        Web前端开发
      </div>
    </div>
    <a-divider>社交账号</a-divider>
    <div class="social">
      <a
        href="https://github.com/BurNing1993"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a-icon style="font-size: 20px;" type="github" />
      </a>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'About',
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  margin-left: 8px;
  .info {
    text-align: center;
    .name {
      font-size: 20px;
      padding: 6px;
    }
  }
  .social {
    display: flex;
  }
}
</style>
