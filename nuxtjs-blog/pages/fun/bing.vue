<template>
  <div>
    <a-alert :show-icon="false" type="info">
      <template #message>
        <Breadcrumb />
      </template>
    </a-alert>
    <a-row>
      <a-col
        v-for="item in list"
        :key="item.date"
        :xs="12"
        :sm="12"
        :md="8"
        :lg="6"
        @click="onClick(item)"
      >
        <img :src="item.imgurl" :alt="item.title" />
        <p>
          {{ item.title }}
        </p>
      </a-col>
    </a-row>
    <a-modal :title="title" :visible="visible">
      <img :src="imgUrl" :alt="title" />
    </a-modal>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Bing',
  components: {
    Breadcrumb,
  },
  async asyncData({ $axios }) {
    const list = await $axios.$get('/api/bing')
    return {
      list,
    }
  },
  data() {
    return {
      visible: false,
      title: '',
      imgUrl: '',
    }
  },
  computed: {},
  created() {},
  methods: {
    onClick({ imgurl, title }) {
      this.imgUrl = imgurl
      this.title = title
      this.visible = true
    },
  },
}
</script>

<style lang="scss" scoped></style>
