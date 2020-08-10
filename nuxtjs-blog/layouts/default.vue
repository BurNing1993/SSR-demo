<template>
  <a-layout style="min-height: 100vh;">
    <Header />
    <a-row class="main-content" type="flex" justify="center">
      <a-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
        <Nuxt />
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'AppLayout',
  components: {
    Header,
  },
}
</script>

<style lang="scss">
.main-content {
  min-height: calc(100vh - 46px);
  padding: 8px 12px;
}
</style>
