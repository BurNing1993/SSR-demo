<template>
  <div>
    <a-alert :show-icon="false" type="info">
      <template #message>
        <Breadcrumb />
      </template>
    </a-alert>
    <a-spin :spinning="loading">
      <a-card :title="title" style="margin-top: 6px;">
        <a-button slot="extra" type="link" @click="fetchJoke">
          换一个!
        </a-button>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="content"></p>
      </a-card>
    </a-spin>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Joke',
  components: { Breadcrumb },
  async asyncData({ $axios }) {
    const { title, content } = await $axios.$get('/api/joke')
    return {
      title,
      content,
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {},
  created() {},
  methods: {
    async fetchJoke() {
      try {
        this.loading = true
        const { title, content } = await this.$axios.$get('/api/joke')
        this.title = title
        this.content = content
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
  head() {
    return {
      title: "笑话-Joey's Blog✨",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "笑话-Joey's Blog 随机笑话",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
