<template>
  <nav>
      <ul>
          <router-link to="/home" tag="li" active-class="active" class="li1">
                首页
          </router-link>
          <router-link to="/yiqituan" tag="li" active-class="active" class="li2">
                拼团
          </router-link>
          <router-link to="/cart" tag="li" active-class="active" class="li3">
                购物车
          </router-link>
          <router-link to="/my" tag="li" active-class="active" class="li4">
                我的
          </router-link>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    nav{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        // line-height: 0.5rem;
        background-color: white;
        border-top: 1px solid rgb(238, 238, 238);
        color: rgb(153, 153, 153);
        z-index: 10;
        ul{
            text-align: center;
            height: 100%;
            li{
                display: inline-block;
                width: .84rem;
                text-align: center;
                list-style: none;
                padding-top: .28rem;
                background-repeat: no-repeat;
                background-size: .24rem .20rem;
                background-position: center .07rem;
            }
            .li1{
                background-image: url("//p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png")
            }
            .li2{
                background-image: url("//p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png")
            }
            .li3{
                background-image: url("//p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png")
            }
            .li4{
                background-image: url("//p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png")
            }
            .active.li1{
                color:rgb(254, 64, 112);
                background-image: url("//p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png")
            }
            .active.li2{
                color:rgb(254, 64, 112);
                background-image: url("//p12.jmstatic.com/mcms/562fb7b2ae7bf1cacdc8ed91493e53af.png")
            }
            .active.li3{
                color:rgb(254, 64, 112);
                background-image: url("//p12.jmstatic.com/mcms/35143fe7ab8afbaa41da2ea6e766d62b.png")
            }
            .active.li4{
                color:rgb(254, 64, 112);
                background-image: url("//p12.jmstatic.com/mcms/482fb198341f583f92f1151eff6b99f0.png")
            }

        }
    }
</style>
