<template>
  <div>
    {joke}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Joke',
  components: {},
  async asyncData() {
    const joke = await axios.get('https://api.muxiaoguo.cn/api/xiaohua')
    // eslint-disable-next-line no-console
    console.log(joke)
    return {
      joke,
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
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
