<template>
  <div class="bing-container">
    <a-alert :show-icon="false" type="info">
      <template #message>
        <Breadcrumb />
      </template>
    </a-alert>
    <a-row
      type="flex"
      justify="center"
      :gutter="[6, 6]"
      style="margin-top: 6px;"
    >
      <a-col
        v-for="item in list"
        :key="item.date"
        :xs="24"
        :sm="24"
        :md="12"
        class="img-col"
        @click="onClick(item)"
        @mouseenter="current = item.date"
        @mouseleave="current = null"
      >
        <img :src="item.imgurl" :alt="item.title" />
        <p v-show="item.date === current" class="desc">
          {{ item.title }}
        </p>
      </a-col>
    </a-row>
    <a-modal
      :title="title"
      :visible="visible"
      :footer="null"
      width="100vw"
      :dialog-style="{
        top: 0,
        padding: 0,
      }"
      :body-style="{
        textAlign: 'center',
      }"
      @cancel="visible = false"
    >
      <img class="modal-img" style="width: 80%;" :src="imgUrl" :alt="title" />
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
      current: null,
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

<style lang="scss" scoped>
.bing-container {
  .img-col {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    object-fit: cover;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .desc {
      position: absolute;
      bottom: 0;
      color: #fff;
    }
  }
}
</style>
