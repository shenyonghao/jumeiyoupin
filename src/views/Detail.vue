<template>
    <div class="box" >
      <!------------------------nav------------------------------>
        <nav class='touch-header'>
            <a href="" class="touch-header-back">
               <router-link to="/home"> <span class="iconfont">&#xe62a;</span></router-link>
            </a>
            <div class="touch-header-title">{{product_name}}</div>
            <a href="" class="touch-header-home ">
                <router-link to="/home"> <span class="iconfont" >&#xe651;</span></router-link>
            </a>
        </nav>
      <!------------------------detailswiper子组件----------------------->
       <detailswiper :key="banner.length">
          <div class="swiper-slide" v-for="(item,index) in banner" :key='index'>
                <img :src="item"/>
            </div>
       </detailswiper>
       <!------------------------product----------------------->
        <div class="prod-detail">
           <div class="prod-detail-up">
               <span class="prod-detail-up-cc">￥{{jumei_price}}</span>
               <del class="prod-detail-up-ll">￥{{market_price}}</del>
               <span class="prod-detail-up-mm">{{buyer_number_text}}</span>
           </div>
           <div class="prod-detail-down">还剩13:22:18</div>
           <div class="normal_desc">{{product_name}}</div>
           <!-- <div class="select_site">
               <span class="site_label">地址</span>
               <span class="site_choice">至<i></i>北京市-市辖区-东城区</span>
               <span class="iconfont">&#xe629;</span>
            </div> -->
            <!------------------------运费----------------------->
            <div class="postage-wrap">
                <div class="postage-type">运费</div>
                <div class="postage-content">
                    <span class="tip-word">{{freight}}</span>
                    <span class="arrow-icon-right iconfont">&#xe629;</span>
                </div>
            </div>
            <!------------------------说明----------------------->
            <div class="introductions-content introduction-fold">
                <div class="introduction-type">说明</div>
                <div class="introduction-item">
                <p class="introduction-list-title" v-for="(item,index) in icon_tag" :key="index">
                    <span class="instruction-title-icon iconfont">&#xe633;</span>
                    <span class="instruction-title-text" >
                    {{item.name}}
                    </span>
                </p>
                  <span class="iconfont caicai">&#xe629;</span>
                </div>
                <div class="kongbai"></div>
            </div>
      </div>
             <!------------------------进入店铺----------------------->

           <a class="shop-wrap" style="" v-if="logo_url!==undefined">
               <div class="kongge"></div>
           <div class="shopcontent">
               <div class="shop-left">
                   <img :src="logo_url[320]" alt="">
                </div>
               <div class="shop-right">
                   <div class="shop-info">
                       <p class="shopname">{{shop_info.store_title}}</p>
                   </div>
                </div>
           </div>
            <div class="btn-wrap">
                <p class="shop-btn">
                    <span class="dianpu">{{shop_info.button_text}}</span>
                    <!-- <span class="iconfont fangxiang">&#xe629;</span> -->
                </p>
            </div>
             <div class="kongge"></div>
          </a>

        <!------------------------detailnav子组件----------------------->
        <detailnav :value_id="kerwin"></detailnav>
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
             <a href="/cart" class="fl add-shopping-cart-new">加入购物车</a> 
              <a href="/my" class="add-shopping-cart add-shopping-cart-direct fs14 fl">立即购买</a>
          </div>
      </div>

 </div>
</template>

<script>

import detailnav from './Detail/DetailNav'
import detailswiper from './Detail/DetailSwiper'
import axios from 'axios'
export default {
  data () {
    return {
      product_name: '',
      banner: [],
      jumei_price: '',
      market_price: '',
      buyer_number_text: '',
      freight: '',
      icon_tag: [],
      description_info: '',
      detail: '',
      item_list: [],
      kerwin: '',
      shop_info: '',
      logo_url: '',
      type:''

    }
  },
  components: {
    detailnav,
    detailswiper

  },
  mounted () {
    this.$store.commit("HideTabbarMutation",false);

    this.kerwin = this.$route.params.item_id
    this.type = this.$route.params.url
    console.log(this.$route.params);
    
    axios.get(`/product/ajaxStaticDetail?item_id=${this.$route.params.item_id}`).then(res => {
      this.product_name = res.data.data.qrshare_product_name
      this.banner = res.data.data.image_url_set.single_many[0]
      this.description_info = res.data.data.description_info
      this.detail = res.data.data.description_url_set.detail
      //   console.log(res.data.data.description_url_set.detail)
    })
               
    axios.get(`/product/ajaxDynamicDetail?item_id=${this.$route.params.item_id}`).then(res => {
      this.jumei_price = res.data.data.result.jumei_price
      this.market_price = res.data.data.result.market_price
      this.buyer_number_text = res.data.data.result.buyer_number_text
      this.icon_tag = res.data.data.result.icon_tag
    })


    axios.get(`/product/ajaxDynamicDetail?item_id=${this.$route.params.item_id}`).then(res => {
      this.freight = res.data.data.result.freight.text
      this.shop_info = res.data.data.result.shop_info
      this.logo_url = res.data.data.result.shop_info.logo_url
      this.jumei_price = res.data.data.result.jumei_price
      console.log(this.logo_url);
      
    })
  },
    beforeDestroy(){
    this.$store.commit("ShowTabbarMutation",true);

     }

}
</script>

<style lang="scss" scoped>
    ul,li{
        list-style:none;
    }
  .box{
      width:3.75rem;
      overflow:hidden;
      background:#f5f5f5;
      margin-bottom:0.48rem;

  }

    a{
        text-decoration:none;
        color:#666666;
    }
 .touch-header{
    background:white;
    text-align: center;
    height: 0.44rem;
    width: 100%;
    z-index: 1;
    border-bottom: 1px solid #eee;
    .touch-header-back {
    width: 0.375rem;
    height: 0.44rem;
    float:left;
    line-height: 0.44rem;
     .iconfont{
         color:#666;
         font-size:22px;
     }
    }
    .touch-header-title {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #333;
    height:0.44rem;
    line-height: 0.44rem;
    width:2.94rem;
    float:left;
    }
   .touch-header-home {
    width: 0.375rem;
    height: 0.44rem;
    float:left;
    line-height: 0.44rem;
     .iconfont{
         color:#666;
         font-size:22px;
      }
    }
 }

  .prod-detail{
      background:#fff;
      padding:0.1rem;
     .prod-detail-up{
          height:0.28rem;
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
      .prod-detail-down{
          margin-top:0.2rem;
          margin-left:0;
          color: #666666;
         font-size: 13px;
      }
      .normal_desc{
        color: inherit;
        font-size: 14px;
        margin-top:0.06rem;
        margin-bottom:0.06rem;
      }

      .postage-wrap{

          .postage-type{
              background:#fff;
                width: 19%;
                color: #999;
                display: inline-block;
                font-size: 13px;
                line-height: 0.13rem;
                padding-top: 0.13rem;
                float: left;
          }
          .postage-content{
              background:#fff;
              font-size: 13px;
               color: #333;
                display: inline-block;
                width: 81%;
                overflow: hidden;
                position: relative;
                padding-top: 0.13rem;
                padding-bottom: 0.1rem;
                float:left;
                .arrow-icon-right{
                  background:#fff;
                      position:absolute;
                      right:0;
                      top:0.15rem;
                      color: #999;
                }
          }

      }

  }

  .introductions-content{
      background:#fff;
      .introduction-type{
          background:#fff;
           width: 19%;
            color: #999;
            display: inline-block;
            font-size: 13px;
            line-height: 13px;
            margin-top:0.13rem;
            float:left;

      }
      .introduction-item{
          background:#fff;
         width:81%;
        float: left;
         color: #333;
        font-size: 13px;
        position:relative;
        .introduction-list-title{
            background:#fff;
            display:inline-block;
             padding-top: 0.1rem;
             .instruction-title-icon{
                 background:#fff;
                 color:#fe4070;
                 font-size:13px;
                 margin-right:0.03rem;

             }
             .instruction-title-text{
                 background:#fff;
                 margin-right:0.1rem;
                 font-size:13px;
             }

        }
        .caicai{
            background:#fff;
            position:absolute;
            right:0;
            color:#999;
        }
      }
        .kongbai{
            float:left;
            width:100%;
            height:0.1rem;
      }
  }

     //  ------------------进入店铺样式--------------------------

    .shop-wrap {
        width:3.75rem;
        box-sizing: border-box;
        background: #FFF;
        display: block;
        float:left;
        .shopcontent{
            width:100%;
            height:0.44rem;
            padding:0.12rem;
            .shop-left{

                    float: left;
                    width: 42px;
                    height: 42px;
                    border: 1px solid #eee;
                        img {
                        display: block;
                        width: 100%;

                      }
                 }
            .shop-right {
                float: left;
                margin-left: 10px;
                padding-top: 4px;
                .shop-info {
                    line-height: 16px;
                    font-size: 14px;
                    color: #333;
                    width: 100%;
                    overflow: hidden;
                }
            }
        }
         .btn-wrap{
             height:0.38rem;
             padding-bottom:0.12rem;
             padding-left:1.2rem;
             .shop-btn{
                 width:1.35rem;
                 height:0.38rem;
                border-radius:0.22rem;
                border:1px solid #ccc;
                text-align:center;
                line-height:0.38rem;

             }
         }

        .kongge{
            height:0.11rem;
            width:100%;
            background:#f5f5f5;
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
