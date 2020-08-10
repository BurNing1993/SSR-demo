<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <nuxt-link to="/">首页</nuxt-link>
    </a-breadcrumb-item>

    <a-breadcrumb-item v-for="(item, index) in pathArray" :key="item.path">
      <span v-if="index === pathArray.length">{{ item.name }}</span>
      <nuxt-link v-else :to="item">{{ item.name | pathNameFilter }}</nuxt-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  components: {},
  filters: {
    pathNameFilter(path) {
      switch (path) {
        case 'blog':
          return '博客'
        case 'fun':
          return 'FUN'
        case 'joke':
          return '笑话'
        default:
          return path
      }
    },
  },
  data() {
    return {}
  },
  computed: {
    pathArray() {
      const path = this.$route.path
      const pathArray = path.split('/')
      pathArray.shift()
      const list = Array.from(pathArray, (path, index) => ({
        path: '/' + pathArray.slice(0, index + 1).join('/'),
        name: path,
      }))
      return list
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
