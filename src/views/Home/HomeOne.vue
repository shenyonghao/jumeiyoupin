<template>
    <div class="up">
        <div class="up-top">
            <span class="top-l" v-for="(data,index) in datalist" :key="index" :class="index===redn?'red':''" @click="Click(index)">
                {{data}}
            </span>

        </div>
        <div class="up-bottom" v-infinite-scroll="loadMore" infinite-scroll-disabled="isT" infinite-scroll-immediate-check="false">

            <a @click="handleClick(item.item_id,item.type)" class="ud-a" v-for="(item,i) in imglist" :key="i" v-show="isLeft" >
                <div class="out">
                    <div class="inner">
                        <img :src="imglist[i].image_url_set.dx_image?imglist[i].image_url_set.dx_image.url[320]:(imglist[i].image_url_set.main?imglist[i].image_url_set.main[320]:imglist[i].image_url_set.single.url[320])">
                    </div>
                    <div class="aut" v-if="m<=8">
                        <div id="div1">
							{{item.name}}
						</div>
                        <div id="div2">
                            <div>
                                <span class="sp1">
                                    ￥<span class="sp2">{{item.jumei_price}}</span>
                                </span>
                                <span class="sp3">￥{{item.market_price}}</span>
                            </div>
                            <div class="div-83">{{item.product_desc}}</div>
                        </div>
                    </div>
                </div>
            </a>

            <a @click="handleClick(img.item_id,img.type)" class="ud-a" v-for="(img) in dataimglist" :key="img.itemid" v-show="isLeft">
                <div class="out">
                    <div class="inner">
                        <img :src="img.image_url_set.main?img.image_url_set.main[320]:img.image_url_set.dx_image.url[320]">
                    </div>
                    <div class="aut">
                        <div id="div1">
				    		{{img.name}}
				    	</div>
                        <div id="div2" v-if="img.jumei_price">
                            <div>
                                <span class="sp1">
                                    ￥<span class="sp2">{{img.jumei_price}}</span>
                                </span>
                                <span class="sp3">￥{{img.market_price}}</span>
                            </div>
                            <div class="div-83">{{img.product_desc}}</div>
                        </div>
                    </div>
                </div>
            </a>

             <a @click="handleClick(right.item_id,right.type)" class="ud-a" v-for="(right) in rightlist" :key="right.itemid" v-show="!isLeft">
                <div class="out">
                    <div class="inner">
                        <img :src="right.image_url_set.main?right.image_url_set.main[320]:right.image_url_set.dx_image.url[320]">
                    </div>
                    <div class="aut">
                        <div id="div1">
                            <span class="div1-span" v-if="right.jumei_price">[预热]</span>
				    		{{right.name}}
				    	</div>
                        <div id="div2" v-if="right.jumei_price">
                            <div>
                                <span class="sp1">
                                    ￥<span class="sp2">{{right.jumei_price}}</span>
                                </span>
                                <span class="sp3">￥{{right.market_price}}</span>
                            </div>
                            <div class="div-83">{{right.product_desc}}</div>
                        </div>
                    </div>
                </div>
            </a>
            <div class="load" v-if="isLoad">
                <div class="loading">加载中</div>
            </div>

        </div>
    </div>
</template>

<script>

import { InfiniteScroll } from 'mint-ui'

import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      isR: true,
      redn: 0,
      imglist: [],
      // imgdatalist:[]
      m: 1,
      b: 0,
      isT: false,
      dataimglist: [],
      isLeft:true,
      rightlist:[],
      type:[{name:"pre"}],
      isLoad:true
    }
  },
  mounted () {
    axios({
      url: `/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=1560409440`
    }).then(res => {
      this.datalist = [res.data.nav.tab_online_name, res.data.nav.tab_preshow_name]
      this.imglist = res.data.item_list

      this.b = 139
    })
    axios({
      url: `/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=${this.type[0].name}&page_key=1560475200`
    }).then(res => {
      this.datalist = [res.data.nav.tab_online_name, res.data.nav.tab_preshow_name]
      this.rightlist = res.data.item_list
    })
  },
  methods: {
    Click (index) {
      this.redn = index
      if(index===0){
          this.isLeft = true
          if(this.m !== 8){
            this.isLoad = true
          }
      }else{
          this.isLeft = false
          this.isLoad = false
      }
    },
    handleClick(id,url){
        this.$router.push(`/detail/${id}&type=${url}`)   
    },
    loadMore () {
      this.m++
      this.isT = true
      console.log("到底了");
      
      if (this.m >= 8) {
        console.log('结束')
        this.m=8
        this.isLoad = false
        return
      }
      
    //   http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key=
    //   http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
      axios({
        url: `/index/ajaxDealactList?card_id=4057&client_v=1&page=${this.m}&platform=wap&type=formal&page_key=1560409440`
      }).then(res => {
        if (this.m < 8) {
          this.imglist = [...this.imglist, ...res.data.item_list]
        }
        if (this.m === 8) {
          this.dataimglist = res.data.item_list
        //   console.log(res.data.item_list[3].image_url_set.main)
        }
        if (this.m > 8) {
          this.dataimglist = [...this.dataimglist, ...res.data.item_list]
        }
        this.isT = false
        // console.log(this.isT)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .up{
        // margin-bottom: .51rem;
        .up-top{
            height: 0.469334rem;
            line-height: 0.469334rem;
            color: #666;
            background: #fff;
            span{
                width: 50%;
                font-size: .14rem;
                display: inline-block;
                text-align: center;
            }
            .red{
                color:#fe4070;
            }
        }
        .up-bottom{
            .ud-a{
                margin-bottom: .08rem;
                display: block;
                .ud-a-box{
                    position: relative;
                    overflow: hidden;
                    background: #fff;
                    height: 1.29rem;
                    img{
                        height: 100%;
                    }
                }

                .out{
                    position: relative;
                    overflow: hidden;
                    background: #fff;
                    height: 1.29rem;
                    .inner{
                        position: relative;
                        height: 100%;
                        img{
                            height: 100%;
                        }
                    }
                    .aut{
                        position: absolute;
                        top: 0;
                        left: 0;
                        margin-right: 0.12rem;
                        margin-left: 1.6rem;
                        height: 100%;
                        min-width: 2.065rem;
                        #div1{
                            margin-top: 0.128rem;
                            color: #333;
                            font-size: .13rem;
                            line-height: .17rem;
                            max-height: .51rem;
                            overflow: hidden;
                            width: 2.03rem;
                            margin-bottom: .05rem;
                            font-family: Arial,helvetica,"\5FAE\8F6F\96C5\9ED1",Microsoft Yahei,sans-serif;
                        }
                        #div2{
                            position: absolute;
                            bottom: 0.12rem;
                            .sp1{
                                color: #fe4070;
                                font-size: .12rem;
                            }
                            .sp2{
                                font-size: .2rem;
                                margin: 0 .02rem;
                                color: #fe4070;
                            }
                            .sp3{
                                color: #999;
                                font-size: .12rem;
                                text-decoration: line-through;
                            }
                            .div-83{
                                color: #999;
                                font-size: .11rem;
                            }
                        }

                    }
                }
            }
        }
    }

    .load{
        color: #999;
        font-size: .14rem;
        margin: .08rem 0;
        text-align: center;
        .loading{
            background: url('../../assets/images/loading.gif') no-repeat;
            background-size: .20rem;
            background-position: 1.4rem 0rem;
        }
    }

    .div1-span{
        color: #fe4070;
        margin-right: .04rem;
        font-size: .13rem;
        line-height: .17rem;
    }

</style>
