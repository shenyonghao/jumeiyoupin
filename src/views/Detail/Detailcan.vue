<template>
    <div class="detailcan">
        <ul class="tuwen-c product-props" style="min-height: 574.188px;">
            <li v-for="(item,index) in properties" :key="index" >
                <span class="props-name">{{item.name}}</span>
                <span class="props-content">{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      properties: []
    }
  },
  mounted () {
    axios.get(`/product/ajaxStaticDetail?item_id=${this.$route.params.item_id}&type=jumei_pop`).then(res => {
      this.properties = res.data.data.properties
    })
  }
}
</script>
<style lang="scss" scoped>
  .detailcan{
      background:#fff;
  }
    ul,li{
    list-style:none;
    }
 .product-props {
    padding: 0.08rem;
    line-height:0.12rem;
    padding-bottom: 0.16rem;
    margin-bottom: 0.08rem;
    box-sizing: border-box;
    li{
       padding-top: 0.06rem;
        .props-name{
                float: left;
                color: #999;
                display:block;
                width:22%;
                margin-top:0.1rem;
        }
        .props-content{
            float:left;
            color: #333;
            display:block;
            width:78%;
            margin-top:0.1rem;
            line-height:0.18rem;

        }
     }
 }
</style>
