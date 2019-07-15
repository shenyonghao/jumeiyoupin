<template>
  <div>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {
  components: {
    tabbar
  }
}
</script>

<style lang="scss">

</style>
