<template>
  <a-row>
    <a-col :xs="24" :sm="24" :md="18" :lg="20">
      <BlogList :blogs="blogs" />
    </a-col>
    <a-col :xs="0" :sm="0" :md="6" :lg="4">
      <About />
    </a-col>
  </a-row>
</template>

<script>
import About from '@/components/About'
import BlogList from '@/components/Blog/List'

export default {
  name: 'Home',
  components: {
    About,
    BlogList,
  },
  async asyncData({ $content }) {
    const blogs = await $content('blog').sortBy('updatedAt', 'desc').fetch()
    return {
      blogs,
    }
  },
}
</script>

<style></style>
