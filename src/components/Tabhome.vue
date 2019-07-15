<template>
        <div @click="hanadClick">
            <router-link to="/home/homeone" tag="div" active-class="active" class="li1"></router-link>
        </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    hanadClick () {
      this.$emit('evt', '首页')
    }
  }
}
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        height: 100%;
    }
</style>
