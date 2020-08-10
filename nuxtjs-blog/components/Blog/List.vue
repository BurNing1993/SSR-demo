<template>
  <a-card>
    <a-list item-layout="horizontal" :data-source="blogs">
      <a-list-item slot="renderItem" slot-scope="item">
        <BlogListItem
          :title="item.title"
          :path="item.path"
          :updated-at="item.updatedAt"
          :author="item.author"
          :category="item.category"
          :description="item.description"
        ></BlogListItem>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script>
import BlogListItem from './ListItem'

export default {
  name: 'BlogList',
  components: { BlogListItem },
  props: {
    blogs: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
