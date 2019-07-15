<template>
    <div class="box-1">
        <ul  @click="handClick">
            <router-link to="/home/homeone" tag="li" active-class="active" class="li1" >
                <span class="li-span">首页</span>
            </router-link>
            <router-link to="/home/global" tag="li" active-class="active" class="li2" >
                <span class="li-span">极速免税店</span>
            </router-link>
            <router-link to="/home/mbaby" tag="li" active-class="active" class="li3" >
                <span class="li-span">母婴</span>
            </router-link>
            <router-link to="/home/luxu" tag="li" active-class="active" class="li4" >
                <span class="li-span">轻奢</span>
            </router-link>
            <router-link to="/home/po" tag="li" active-class="active" class="li5" >
                <span class="li-span">名品特卖</span>
            </router-link>
      </ul>
    </div>
</template>

<script>
function namenull () {
  // console.log(document.querySelector('.box-1 .active').firstChild);
  if (document.querySelector('.box-1 .active').firstChild.innerHTML === null) {
    return '首页'
  } else {
    return document.querySelector('.box-1 .active').firstChild.innerHTML
  }
}

export default {
  methods: {

    handClick () {
      // console.log(document.querySelector('.router-link-exact-active').firstChild.innerHTML)
      this.$emit('myevent', namenull())
    }

  },
  data () {
    return {
      inner: '首页'

    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
    .box-1{
        height: 0.4394rem;
        position: relative;
        z-index: 20;
        background: #fff;
        // overflow: auto;
        overflow-y: hidden;
        border-bottom: solid .0075rem #eee;
        ul{
            width: 4.15rem;
            height: 100%;

            li{
                float: left;
                list-style:none;
                position: relative;
                width: auto;
                height: 100%;
                padding: 0 .1875rem;
                text-align: center;
                line-height: 0.4694rem;
                color: #666;

            }
            .active{
                color: #fe4070;
                span{
                    display: block;
                    height: 0.41rem;
                    border-bottom: .03rem solid #fe4070;
                    text-align: center;

                }
            }
        }
    }
</style>
