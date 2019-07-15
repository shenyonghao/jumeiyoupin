<template>
<div>
    <div class="nav">
       <div class="outer">
           <div class="inner">
               <a :class="{active:index===current}" v-for="(data,index) in datalist" :key="index" @click="activeClass(index)" >{{data.text}}<span></span></a>
            </div>
       </div>
    </div>
            <section>
          <div class="list">
            <ul v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false" infinite-scroll-disabled="isDisabled">
                <li v-for="(item,i) in imglist" :key="i">
                    <a class="good">
                        <div class="people-number">{{item.buyer_number_text}}</div>
                        <div class="good-topsmall">
                            <img :src="item.image">
                        </div>
                        <div class="good-middle">
                            <span class="good-num">{{item.group_name_tag}}</span>
                            {{item.short_name}}
                        </div>
                        <div class="good-foot">
                            <div class="price-left">
                                <span class="ct-price">{{item.jumei_price}}</span>
                                <span class="sc-price"></span>
                                <span class="jm-price">{{item.single_price}}</span>
                            </div>
                            <div class="right">
                                <span class="good-btn" @click="handleClick(item.item_id)">去开团</span>
                            </div>
                            <!-- <div class="start">
                                <span class="good-btn">6月14日10点开团</span>
                            </div>
 -->
                        </div>
                    </a>
                </li>
            <div class="show" v-if="isShow">
                <span></span>
                加载更多
            </div>
            <div class="hide" v-else>已到当前页面最底部，看看其他页面吧~</div>
            </ul>
          </div>
        </section>
    <div class="go_top" @click="gotop()">
            <img src="http://f0.jmstatic.com/btstatic/h5/index/go_top.png">
        </div>
        </div>
</template>

<script>
import List from './Yiqituan/List'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [{ text: '推荐', name: 'coutuan_home' }, { text: '母婴健康', name: 'coutuan_baby' },
        { text: '美妆', name: 'coutuan_makeup' }, { text: '礼品箱包', name: 'coutuan_bag' },
        { text: '饰品配饰', name: 'coutuan_jewellery' }, { text: '内衣', name: 'coutuan_underwear' },
        { text: '食品保健', name: 'coutuan_food' }, { text: '家居', name: 'coutuan_furniture' },
        { text: '数码家电', name: 'coutuan_3c' }, { text: '女装', name: 'coutuan_ladies' },
        { text: '运动户外', name: 'coutuan_sports' }, { text: '鞋类', name: 'coutuan_shose' },
        { text: '下期预告', name: 'coutuan_pre' }],
      current: 0,
      imglist: [],
      has_more: '',
      isShow: true,
      aaa: 1
    }
  },
  beforeMount () {
    axios({
      url: `/yiqituan/tab_list?tab=${this.datalist[0].name}&page=1&per_page=20`
    }).then(res => {
      this.imglist = res.data.data
      this.has_more = res.data.has_more
      // console.log(this.imglist)
      // console.log(this.has_more)
    })
  },
  methods: {
   handleClick(id){
    this.$router.push(`/detailtuan/${id}`)
    },
    gotop: function () {
      let gotop = document.documentElement.scrollTop = document.body.scrollTop = 0
    },
    activeClass: function (index) {
      this.current = index
      this.aaa = index
      let gotop = document.documentElement.scrollTop = document.body.scrollTop = 0
      axios({
        url: `/yiqituan/tab_list?tab=${this.datalist[index].name}&page=1&per_page=20`

      }).then(res => {
        this.imglist = res.data.data
        this.has_more = res.data.has_more
        // console.log(this.imglist)
      })
    },
    loadMore () {
      // index=this.datalist[index]
      this.aaa++
      this.isDisabld = true
      name = this.datalist.name
      if (this.has_more === '0') {
        console.log('到底了')
        this.isShow = false
        return
      }
      axios({

        url: `/yiqituan/tab_list?tab=${this.datalist[this.current].name}&page=${this.aaa}&per_page=20`
      }).then(res => {
        this.imglist = [...this.imglist, ...res.data.data]
        this.isDisabld = false
        this.has_more = res.data.has_more
      })
    }
  }

}
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.active{
    color:#fe4070 !important;
    span{
    display: block;
    background: #fe4070;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    }
}
.nav{

    // overflow: hidden;
    .outer{
        overflow-x: scroll;
        height:.45rem;
        // overflow-y: hidden;
        // width: 1080px;
        width: 100%;
        // overflow: hidden;
        // z-index: 10;
        position:fixed;
        left: 0;
        top: 0;
        z-index: 996;
        .inner{
            width:11rem;
            height:.45rem;
            padding:.1rem;
            white-space:nowrap;
            border-bottom:2px solid #eee;
            background:#fff;
            display:flex;
            align-items: center;
            justify-content: space-around;

            // overflow: auto
            a{
                font-size: .15rem;
                height:.45rem;
                line-height:.45rem;
                padding: 5px;
                color: #666;
                display: inline-block;
                text-align: center;
                position: relative;
                text-decoration: none;
                // flex:1;
            }
        }
    }

}
.list{
    background: #f5f5f5;
    padding-top:.45rem;
    ul{
        list-style: none;
        li{
            margin-bottom: .1rem;
            background: #fff;
            width: 100%;
            .good{
                width: 100%;
                display: block;
                overflow: hidden;
                position: relative;
                text-decoration: none;
                .people-number{
                    font-size: .15rem;
                    padding: 4px 7px;
                    position: absolute;
                    left: 0;
                    top: .5rem;
                    z-index: 1;
                    border: 1px solid #eeeeee;
                    border-left: 0;
                    color: #666;
                    background: rgba(251,251,251,.8);
                }
                .good-topsmall{
                    overflow: hidden;
                    text-align: center;
                    img{
                        margin: 0 auto;
                        height: 1.6rem;
                    }
                }
                .good-middle{
                    font-size: .15rem;
                    max-height: .35rem;
                    line-height: .18rem;
                    padding: 0 .12rem;
                    margin-top: .1rem;
                    color: #424242;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    .good-num{
                        margin-left: 2px;
                        color: #fe4070;
                        display: inline-block;
                    }
                }
                .good-foot{
                    padding: .15rem;
                    overflow: hidden;
                    
                    .price-left{
                        float: left;
                        font-family: Arial;
                        display:block;
                        font-size:.2rem;
                        .ct-price{
                            font-size: .2rem;
                            color: #fe4070;
                        }
                        .sc-price{
                            font-size: .15rem;
                            padding-left: 4px;
                            color: #999;
                            text-decoration: line-through;
                        }
                        .jm-price{
                            font-size: .15rem;
                            color: #999;
                            display: block;
                        }
                    }
                    .right{
                        display: block;
                        margin-top:.05rem;
                        border-radius: .25rem;
                        float:right;
                        border: 2px solid #fe4070;
                        
                        background: #fe4070;
                        .good-btn{
                            height: .26rem;
                            border-radius: .26rem;
                            line-height: .26rem;
                            font-size: .15rem;
                            width: .8rem;
                            background: #fe4070;
                            float: right;
                            color: #fff;
                            text-align: center;
                        }
                    }
                    .start{
                        font-size: .15rem;
                        padding: .1rem .25rem;
                        border-radius: .25rem;
                        float: right;
                        text-align: center;
                        color: #fe4070;
                        border: .0625rem solid #fe4070;
                    }
                }
            }
        }
        .show{
            font-size: .15rem;
            padding-top: .1rem;
            margin-bottom: .1rem;
            line-height: .2rem;
            transform-origin: 0px 0px 0px;
            opacity: 1;
            width: 100%;
            color: #999;
            text-align: center;
            span{
                margin-right: 2px;
                height: .16rem;
                width: .2rem;
                display: inline-block;
                vertical-align: middle;
                background: url(http://a2.jmstatic.com/aac8bb0d547421ec/loading.png) no-repeat;
                background-size: 16px auto;
            }
        }
        .hide{
            font-size: .15rem;
            margin-bottom: .1rem;
            line-height: .2rem;
            width: 100%;
            color: #999;
            text-align: center;
        }
    }

}
    .go_top{
        display: block;
        transform-origin: 0px 0px 0px;
        opacity: 1;
        background: #fff;
        border-radius: 50%;
        border: none;
        width: .45rem;
        height: .45rem;
        position: fixed;
        right: .2rem;
        bottom: .5rem;
        img{
            width: .45rem;
            height: 45px;
        }
    }
</style>
