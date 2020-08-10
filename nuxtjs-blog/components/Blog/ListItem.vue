<template>
  <div class="blog-list-item">
    <nuxt-link :to="path">
      <h2>{{ title }}</h2>
    </nuxt-link>
    <div class="info">
      <span class="item">
        {{ author }}
      </span>
      <span class="item">
        {{ date }}
      </span>
      <span v-if="category" class="item">
        <a-tag v-for="item in category" :key="item" color="blue">
          {{ item }}
        </a-tag>
      </span>
    </div>
    <p class="intro">
      {{ description }}
    </p>
    <div class="end">
      <nuxt-link :to="path"> 查看全文<a-icon type="right" /> </nuxt-link>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/date'

export default {
  name: 'BlogListItem',
  components: {},
  props: {
    path: {
      type: String,
      require: true,
      default: '/blog',
    },
    title: {
      type: String,
      require: true,
      default: 'Title',
    },
    updatedAt: {
      type: String,
      require: true,
      default: '',
    },
    author: {
      type: String,
      default: 'Joey',
    },
    category: {
      type: Array,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {
    date() {
      return formatTime(new Date(this.updatedAt).getTime())
    },
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.blog-list-item {
  h1 {
    font-size: 2em;
  }
  .info {
    .item:not(:last-child):after {
      content: '·';
      margin: 0 0.4em;
      color: #b2bac2;
    }
  }
  .intro {
    margin-top: 6px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .end {
    padding-right: 16px;
    text-align: right;
  }
}
</style>
