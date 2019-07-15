<template>
<div class="box">
    <nav><img :src="banner[480]" alt=""></nav>
    <div class="prod-detail-up">
        <span class="prod-detail-up-cc">{{group_jumei_price}}</span>
        <del class="prod-detail-up-ll">{{group_single_price}}</del>
        <span class="prod-detail-up-mm">{{buyer_number_text}}</span>
    </div>
   <detailtuannav :value_id="kerwin"></detailtuannav>
            <!-- ----------------------底部导航-------------------------- -->
    <div class="buy-box bgc-f tac fs10">
        <div class="icon-block block-style fl">
            <a href="" class="store-link fs10">
            <span class="iconfont  lalala">&#xe648;</span>店铺
            </a> 
            <a href="" class="shopping-cart fs10">
            <span class="iconfont lalala">&#xe655;</span>购物车   
            </a>
        </div> 
        <div class="button-block block-style fl">
            <a href="cart" class="fl add-shopping-cart-new">加入购物车</a> 
            <a href="my" class="add-shopping-cart add-shopping-cart-direct fs14 fl">立即购买</a>
        </div>
    </div>   
</div>
</template>
<script>
import axios from "axios"
import detailtuannav from './Detailtuan/Detailtuannav'
export default {
    data(){
        return {
          banner:"",
          buyer_number_text:"",
          group_jumei_price:"",
          group_single_price:"",
          kerwin:"",
        }
    },
    components:{
        detailtuannav
    },
    mounted(){
        this.$store.commit("ShowTabbarMutation",false)
        this.kerwin = this.$route.params.item_id
        axios.get(`/yiqituan/ajaxDetail?item_id=${this.$route.params.item_id}&type=global_deal&tid=`).then(res=>{
        this.banner = res.data.data.buy_alone.image_url_set.single
        this.buyer_number_text = res.data.data.buyer_number_text
        this.group_jumei_price = res.data.data.group_jumei_price
        this.group_single_price = res.data.data.group_single_price
        console.log(res.data.data)
        })
    },
    beforeDestory(){
        this.$store.commit("ShowTabbarMutation",true);
    }
}
</script>
<style lang="scss" scoped>
nav{
    img{
        width:100%;
        display:block;
    }
}
.box{
    margin-bottom:0.48rem;
}
     .prod-detail-up{
         padding:0 0.12rem;
         background:#fff;
          height:0.38rem;
         .prod-detail-up-cc{
             float: left;
             font-size: 28px;
             color: #F33873;
             height:0.28rem;
         }
         .prod-detail-up-ll{
             float: left;
            color: #666666;
            font-size: 13px;
            margin-left:0.1rem;
            margin-top:0.14rem;
         }
         .prod-detail-up-mm{
            float: right;
            text-align: right;
            font-weight: 400;
            color: #666;
            font-size: 13px;
            margin-top:0.14rem;
         }
      }
      //-----------------------底部导航样式--------------------------- 
    .buy-box {
       a {
          display: inline-block;
      }
      position: fixed;
      bottom: -1px;
      width: 3.75rem;
      height: 0.48rem;
      border-top: solid 1px #eee;
      overflow: hidden;
      background-color: #fff;
      text-align: center;
      font-size: 10px;
      .icon-block {
        width: 1.19rem;
        height: 100%;
        text-align: center;
        float: left;
        a{
          color:#979797
        }
        .iconfont{
          height:0.16rem;
        }
        .store-link{
          width:50%;
          .lalala{
            display:inline-block;
            width:100%;
            padding-top:0.08rem;
          }

        }
        .shopping-cart{
          width:50%;
            .lalala{
              display:inline-block;
              width:100%;
              padding-top:0.08rem;
           }
        }
       }
       .button-block {
          width: 2.55rem;
          height: 100%;
          text-align: center;
          float: left;
          .add-shopping-cart-new {
            line-height:0.48rem;
              width: 50%;
             background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
             color: #fe4070;
          }
          .add-shopping-cart-direct {
            line-height:0.48rem;
             width: 50%;
             background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%); 
              color: #fff;
        }
      }
   }
</style>


