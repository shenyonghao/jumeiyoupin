<template>
<div>
        <div class="swiper-container kerwin" >
           <div class="swiper-wrapper">
              <slot></slot>
           </div>
           <!-- 如果需要分页器 -->
           <!-- <div class="swiper-pagination"></div> -->
       </div>

  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  mounted () {
    new Swiper('.kerwin', {
      loop: true
      // pagination: {
      //   el: '.swiper-pagination',
      // }
    })
  }

}
</script>

<style lang="scss" scoped>
.swiper-wrapper{
  img{
    width:100%;
    display:block;
  }
}
</style>
