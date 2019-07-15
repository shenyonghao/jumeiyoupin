<template>
    <div>
        <ul>

        <router-link :to="`/detail/${value_id}/detailtu`" tag="li" activeClass="active"><span >图文详情</span></router-link>
        <router-link :to="`/detail/${value_id}/detailcan`" tag="li" activeClass="active"><span>商品参数</span></router-link>
        <router-link :to="`/detail/${value_id}/detailping`" tag="li" activeClass="active"><span>评价</span></router-link>
        </ul>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['value_id']

}
</script>
<style lang="scss" scoped>
    ul{
    background:#fff;
    }

    .active{
        color:#fe4070;;
        border-bottom:0.02rem solid #fe4070;
    }
    li{
    display: inline-block;
    width: 33.33%;
    line-height: 0.44rem;
    text-align:center;
    color:#666;

    }

</style>
