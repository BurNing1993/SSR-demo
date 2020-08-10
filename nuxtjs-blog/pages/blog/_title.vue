<template>
  <div class="blog-content-container">
    <a-alert :show-icon="false" type="info">
      <template #message>
        <Breadcrumb />
      </template>
    </a-alert>

    <a-card class="blog-content">
      <h1>{{ content.title }}</h1>
      <div class="info">
        <div class="date">
          <a-icon type="calendar" />
          <span>{{ date }}</span>
        </div>
        <div class="author">
          <a-icon type="user" />
          <span>{{ content.author || 'Joey' }}</span>
        </div>
      </div>
      <nuxt-content :document="content" />
    </a-card>
  </div>
</template>

<script>
import { parseTime } from '@/utils/date'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'BlogContent',
  components: { Breadcrumb },
  async asyncData({ $content, params }) {
    const content = await $content(`blog/${params.title}`).fetch()

    return {
      content,
    }
  },
  data() {
    return {}
  },
  computed: {
    date() {
      return parseTime(new Date(this.content.updatedAt), '{y}-{m}-{d}')
    },
  },
  created() {},
  methods: {},
  head() {
    return {
      title: `${this.content.title}-Joey's Blog✨`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "博客-Joey's Blog 博文",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog-content-container {
  .blog-content {
    h1 {
      text-align: center;
      font-size: 2.25em;
    }
    .info {
      padding: 0 30%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .nuxt-content-container {
      margin-top: 10px;
    }
  }
}
</style>
