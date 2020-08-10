<template>
  <a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="4" class="fun-box">
    <a-card hoverable>
      <img slot="cover" alt="example" class="cover-img" :src="cover" />
      <template slot="actions" class="ant-card-actions">
        <a
          v-if="isExternal"
          :href="path"
          :title="'go ' + title"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a-icon key="go" type="arrow-right" />
        </a>
        <nuxt-link v-else :to="path" :title="'go ' + title">
          <a-icon key="go" type="arrow-right" />
        </nuxt-link>
      </template>
      <a-card-meta :title="title" :description="description"> </a-card-meta>
    </a-card>
  </a-col>
</template>

<script>
export default {
  name: 'FunBox',
  components: {},
  props: {
    cover: {
      type: String,
      default:
        'https://ae01.alicdn.com/kf/H87026c278c764fcb88c95abfd9344e34M.jpg',
    },
    path: {
      type: String,
      require: true,
      default: '/',
    },
    title: {
      type: String,
      require: true,
      default: 'title',
    },
    description: {
      type: String,
      require: true,
      default: 'description',
    },
  },
  data() {
    return {}
  },
  computed: {
    isExternal() {
      return /^(https?:|mailto:|tel:)/.test(this.path)
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.fun-box {
  .cover-img {
    height: 200px;
    object-fit: contain;
  }
}
</style>
