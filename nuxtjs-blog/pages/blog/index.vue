<template>
  <div>
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
import BlogList from '@/components/Blog/List'

export default {
  name: 'Blog',
  components: { BlogList },
  async asyncData({ $content }) {
    const blogs = await $content('blog').sortBy('updatedAt', 'desc').fetch()
    return {
      blogs,
    }
  },
  computed: {},
  created() {},
  methods: {},
  head() {
    return {
      title: "博客-Joey's Blog✨",
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

<style lang="scss" scoped></style>
