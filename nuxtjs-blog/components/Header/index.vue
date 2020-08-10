<template>
  <header class="header">
    <NuxtLink class="logo" to="/">
      <img class="img" src="@/static/logo.png" alt="logo" />
      <span class="title">Joey's Blog</span>
    </NuxtLink>
    <a-menu v-model="active" mode="horizontal" :style="{ lineHeight: '44px' }">
      <a-menu-item key="/">
        <NuxtLink to="/"> <a-icon type="home" />首页 </NuxtLink>
      </a-menu-item>
      <a-menu-item key="/blog">
        <NuxtLink to="/blog"> <a-icon type="file-text" />博文 </NuxtLink>
      </a-menu-item>
      <a-menu-item key="/fun">
        <NuxtLink to="/fun"> <a-icon type="bulb" />FUN </NuxtLink>
      </a-menu-item>
    </a-menu>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {}
  },
  computed: {
    active: {
      get() {
        return [this.$route.path] || ['/']
      },
      set() {},
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss">
.header {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 1px solid #e8e8e8;
  .ant-menu-horizontal {
    border-bottom: none;
  }
  .logo {
    height: 44px;
    display: flex;
    align-items: center;
    .img {
      height: 34px;
    }
    .title {
      font-size: 20px;
      font-weight: 300;
    }
  }
}
</style>
