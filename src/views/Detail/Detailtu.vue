<template>
    <div>
        <div v-html="description_info.description" class="description_info" ></div>
       <div class="maybeyoulike">也许您还喜欢</div>
                <ul class="recommend-list" v-for="(list,index) in item_list" :key="index" >
                    <li>
                        <a href="#">
                        <img style="width:100%;" :src="list.image_url_set.dx_image[320]" alt="">
                            <span class="fs14">{{list.name}}</span>
                            <span class="color-jm fs18">¥{{list.jumei_price}}</span>
                            <del class="color9 fs13">¥{{list.market_price}}</del>
                        </a>
                        </li>
                </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      description_info: '',
      item_list: []
    }
  },
  mounted () {
    axios.get(`/product/ajaxStaticDetail?item_id=${this.$route.params.item_id}`).then(res => {
      this.description_info = res.data.data.description_info
    })

    axios.get(`/recommend/sale?item_id=${this.$route.params.item_id}`).then(res => {
      this.item_list = res.data.item_list
    })
  }
}
</script>
<style lang="scss" scoped>
ul{
    list-style:none;
}
      a{
        text-decoration:none;
    }
   .description_info{
        /deep/ img{
        width:100%;
        display:block;
        }
   }
 .maybeyoulike{
     height:0.44rem;
     text-align:center;
     line-height:0.44rem;
     background:#f5f5f5;
 }
 .recommend-list{
     background:#f5f5f5;
     padding-left:0.04rem;
     li{
         text-decoration:none;
        width: 1.8rem;
        height:2.51rem;
        background:#fff;
        margin-right: 0.05rem;
        margin-bottom: 0.05rem;
        float: left;
        padding: 0.08rem;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        a{
            img{
                width: 1.62rem;
                height: 1.62rem;
                border: 0;
                display: block;
                margin-bottom: 0.08rem;
            }
            .fs14{
                overflow: hidden;
                display: -webkit-box;
                height: 32px;
                line-height: 16px;
                margin-bottom: 10px;
                color: #333;
            }
            .fs18{
                color:#ed145b;
                font-size:18px;
            }
            .fs13{
                margin-left:4px;
                font-size:13px;
                color:#999;
                text-decoration: line-through;
                }
            }
        }
    }

</style>
