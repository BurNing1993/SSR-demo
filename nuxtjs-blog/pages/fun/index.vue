<template>
  <div>
    <a-alert message="Something fun!" type="info" />
    <a-row style="margin-top: 8px;" :gutter="8">
      <FunBox
        cover="https://ae01.alicdn.com/kf/Hac18c86bcaca4f13b7e668121eedd7e1g.jpg"
        title="天气预报"
        description="http://wttr.in/ 天气预报"
        path="http://wttr.in/"
      />
      <FunBox
        cover="https://ae01.alicdn.com/kf/Hc97eacd9689b4cdb8f317988b866f4cab.jpg"
        title="笑话"
        description="随机笑话一则"
        path="/fun/joke"
      />
    </a-row>
  </div>
</template>

<script>
import FunBox from '@/components/FunBox'

export default {
  name: 'Fun',
  components: { FunBox },
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
  head() {
    return {
      title: "Fun-Joey's Blog✨",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Fun-Joey's Blog 有趣",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
