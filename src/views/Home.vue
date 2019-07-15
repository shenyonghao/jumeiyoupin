<template>
    <div>
        <div class="nav" ref="divnav">
            <img class="img" src="data:image/png;base64,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">
            <div class="text">
                <p>聚美优品·我为自己代言</p>
            </div>
            <a href="http://newjumppub.jumei.com/jumeiApp" class="a1">前往聚美</a>
            <div class="aaa">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAADu7u7y8vLt7e3w8PDu7u7u7u7v7+/v7+/u7u7x8fHv7+/w8PD////////39/f19fXS0tKYmJjNzc3FxcUebRjIAAAADnRSTlMAo/j27N3EsYBZT0AgCw2xnhUAAADVSURBVDjLhZNBFoQgCEC1zLRMsLr/WaenEvloko2L/0tAUI8IXk/jOGkf1Fsss8EaZl4EXi0CxBIQAe3acjcQJmlwD7zpG7MBeruFwqVB3BUuFVfzGwSnPEqmlrgMm+vHvwLgcglz5XAmAsdJxqxUMPSDtKfKd1LBBOURIht0UKBXGq+TDfqeBK2mLLCRJRYmNWaBjcxZGLtCe8Uhr5BJpjbJZ5mHKBPQU6OYN4YJr61O3OruY30/N9juwHyOHIDrDW137D8WB+Lg5OpFkKvXX97u+v8AVSErTb/YhHcAAAAASUVORK5CYII=">
            </div>
        </div>

        <div class="head" v-show="isInner">
            <a class="head-al">
                <tabhome @evt="hanEvt"></tabhome>
            </a>
            <div class="head-center">{{innerHTML}}</div>
            <a class="head-ar">
                <tabhome @evt="hanEvt"></tabhome>
            </a>
        </div>

        <div class="header" ref="divheader">
            <header>
                <a class="header-a" @click="aClick">
                    <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" class="a-img">
                    <span>搜索商品 分类 功效</span>
                </a>
                <span class="span" @click="spanClick()">
                    <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" class="span-img">
                </span>
            </header>
            <div class="diled">
                <div class="block" v-show="isRight" @click="hide" :class="isWidth?'width':''"></div><!-- 遮罩层 -->
                <div class="two_page" :class="isRight?'right':''" ><!-- 二级菜单 -->
                    <div class="updata"><!-- 搜索框+返回-->
                        <a class="updata-a" v-show="isWidth" @click="houtui"><!-- 后退< -->
                            <img src="../assets/images/left.png" class="da-a-img">
                        </a>
                        <div class="updata-up" @click="inputClick"><!-- 搜索框 -->
                            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="" class="updata-img"><!-- 放大镜 -->
                            <input type="text" placeholder="搜索商品名称、品牌、功效" class="updata-input">
                        </div>
                        <a class="a-f" v-if="isFanhui" @click="fanhui">返回</a>
                        <a class="a-s" v-else>搜索</a>
                    </div>
                    <ul class="downdata" v-show="!isWidth">
                        <li v-for="(data,index) in datalist" :key="data.category_id" @click="bottom(index)" :class="ccc===index?'li-top':''" class="dd-li">
                            {{data.name}}
                            <span></span>
                            <ul class="li-ul" v-show="ccc===index">
                                <li v-for="(item,i) in datalist[index].sub_categories" :key="item.category_id" @click="liUl(i)" >
                                    <a :href="`http://h5.jumei.com/search/index?category_id=${item.category_id}`">
                                        {{item.name}}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <tabnav :class="isAAA?'fixed':''" @myevent="handEvent"></tabnav>
        <section>
            <router-view></router-view>
        </section>
        <div class="footer">
            <div class="footer-div">
                <a onclick="window.location.href='http://d.jumei.com'" class="foo-a">
                    <img src="//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg">
                </a>
            </div>
            <ul>
                <li><a href="http://localhost:8080/home/homeone" class="lll">触屏版</a></li>
                <li><a href="">电脑版</a></li>
            </ul>
            <div class="shahao">
                <p>©2017 聚美优品 Jumei.com</p>
            </div>
        </div>
    </div>
</template>

<script>
import tabnav from '@/components/Tabnav'
import axios from 'axios'
import tabhome from '@/components/Tabhome'
export default {
  components: {
    tabnav,
    tabhome
  },
  data () {
    return {
      isAAA: false,
      isRight: false,
      isFanhui: true,
      datalist: [],
      isBottom: false,
      ccc: Number,
      itemlist: [],
      isWidth: false,
      innerHTML: '首页',
      isInner: false
    }
  },
  mounted () {
    window.onscroll = this.handleScroll
    axios({
      url: `/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json`
    }).then(res => {
      this.datalist = res.data.data
      // this.itemlist = res.data.data
      // console.log(this.itemlist);
    //   console.log(this.datalist[0].sub_categories)
    })
    
    if (this.innerHTML !== '首页') {
      this.isInner = true
    }
  },
  methods: {
    handleScroll () {
      //   console.log(this.$refs.divnav.offsetHeight+this.$refs.divheader.offsetHeight);
      if (document.documentElement.scrollTop >= this.$refs.divnav.offsetHeight + this.$refs.divheader.offsetHeight) {
        this.isAAA = true
      } else {
        this.isAAA = false
      }
    },
    spanClick () {
      this.isRight = true
      this.isWidth = false
    },
    hide () {
      this.isRight = false
      this.ccc = Number
    },
    bottom (index) {
      if (this.ccc === index) {
        this.ccc = Number
      } else {
        this.ccc = index
      }
    },
    fanhui () {
      this.isRight = false
      this.ccc = Number
    },
    aClick () {
      this.isRight = true
      this.isWidth = true
      this.isFanhui = false
    },
    houtui () {
      this.isWidth = false
      this.isFanhui = true
      this.ccc = Number
    },
    inputClick () {
      if (this.isWidth === false) {
        this.isWidth = true
        this.isFanhui = false
      }
    },
    handEvent (data) {
    //   console.log('传来了', data)

      this.innerHTML = data
      if (data === '首页') {
        this.isInner = false
      } else {
        this.isInner = true
      }
    },
    hanEvt (data) {
      // console.log(data)
      this.innerHTML = data
      if (this.innerHTML === '首页') {
        this.isInner = false
      } else {
        this.isInner = true
      }
    }
  },
  destroyed () {
    window.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        display: block;
        cursor: pointer;
    }
    .nav{
        background: url(//images.jumei.com/mobile/icon/bg_01.png);
        background-repeat: repeat;
        height: .56rem;
        overflow: hidden;
        position: relative;
        top: 0rem;
        width: 100%;
        z-index: 1;
        .img{
            width: .42rem;
            margin-top: .06rem;
            margin-left: .08rem;
            margin-right: .12rem;
            float: left;
            display: block;
            margin-bottom: .08rem;
        }
        .text{
            color: #444;
            width: 1.48rem;
            margin-left: .58rem;
            padding-top: .02rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            p{
                font-size: .14rem;
                font-weight: bold;
                height: .27rem;
                line-height: .27rem;
                font-family: '\9ED1\4F53',Arial,Verdana,Sans-serif;
            }
        }
        .a1{
            position: absolute;
            top: .13rem;
            width: .84rem;
            height: .30rem;
            line-height: .30rem;
            text-align: center;
            color: #fff;
            border: none;
            border-radius: .20rem;
            right: .22rem;
            font-size: .12rem;
            background: #FE4478;
            text-decoration: none;
        }
        .aaa{
            position: absolute;
            top: .05rem;
            right: .05rem;
            overflow: hidden;
            img{
                width: .12rem;
                height: .12rem;
            }
        }
    }
    .head{
        text-align: center;
        height: .45rem;
        position: relative;
        background: #fff;
        margin: 0;
        padding: 0;
        width: 100%;
        z-index: 11;
        border-bottom: 1px solid #eee;
        .head-al{
            position: absolute;
            top: .15rem;
            left: .245rem;
            width: .075rem;
            height: .15rem;
            background: url("../assets/images/left.png") center no-repeat;
            background-size: contain;
        }
        .head-center{
            display: block;
            text-align: center;
            margin: 0 0.4375rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .16rem;
            color: #333;
            height: .45rem;
            line-height: 0.45rem;
        }
        .head-ar{
            width: .2rem;
            height: .2rem;
            position: absolute;
            background: url('../assets/images/home.png') center center no-repeat;
            background-size: contain;
            top: .12rem;
            right: .13rem;
            text-decoration: none;
            color: #000;
        }
    }
    .header{
        .diled{
            .block{
                position: fixed;
                top: 0px;
                right: 0px;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 21;
            }
            .width+div{
                width: 100%;
                .updata{
                    width: 2.76rem;
                    padding: .065rem .17rem .065rem .54rem;
                    .a-s{
                        right:-0.198rem;
                    }
                }
            }
            .two_page{
                position: fixed;
                top: 0px;
                z-index: 22;
                right: -100%;
                width: 84.375%;
                height: 100%;
                background: #fff;
                transform: translateX(100%);
                transition:all .2s;
                transition: .2s transform ease-in-out .2s;

                .updata{
                    border-bottom: solid .01rem #f5f5f5;
                    background: #fff;
                    position: relative;
                    padding: .07rem .6rem .07rem 0.16rem;
                    height: .35rem;
                    .updata-a{
                        display: block;
                        transform-origin: 0px 0px;
                        opacity: 1;
                        text-decoration: none;
                        color: #333;
                        position: absolute;
                        top: .15rem;
                        left: .245rem;
                        width: .075rem;
                        height: .15rem;
                        overflow: hidden;
                        .da-a-img{
                            width:100%;
                        }
                    }
                    .updata-up{
                        border-radius: .20rem;
                        background: #F5F5F5;
                        position: relative;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.05) inset;
                        height: .31rem;
                        .updata-img{
                            width: .15rem;
                            height: .15rem;
                            position: absolute;
                            top: .085rem;
                            left: .17rem;
                        }
                        .updata-input{
                            border: none;
                            background: transparent;
                            padding-left: 0.3732rem;
                            color: #999;
                            width: 100%;
                            height: 0.3306rem;
                            -webkit-appearance: none;
                            outline: none;
                            text-transform: none;
                            -webkit-tap-highlight-color: rgba(255,0,0,0);
                            font-size: 14px;
                        }
                    }
                    .a-f{
                        color: #999;
                        position: absolute;
                        top: 0.1546rem;
                        right: 0.128rem;
                    }
                    .a-s{
                        color: #999;
                        position: absolute;
                        top: 0.1546rem;
                        right: 0.128rem;
                    }
                }
                .downdata{
                    list-style: none;
                    padding: 0px;
                    color: #666;
                    margin: 0px;
                    overflow-y: scroll;
                    height: 6.21rem;
                    transform-origin: 0px 0px;
                    opacity: 1;
                    .dd-li{
                        border-bottom: solid 1px #eee;
                        position: relative;
                        line-height: 0.4694rem;
                        padding-left: .16rem;
                        span{
                            position: absolute;
                            right: 0.1626rem;
                            top: 0.2106rem;
                            width: .1rem;
                            height: .1rem;
                            background: url('../assets/images/bottom.png') no-repeat;
                            background-size: contain;
                        }
                        .li-ul{
                            border-top: solid 1px #eee;
                            overflow: hidden;
                            // display: none;
                            margin-left: -.16rem;
                            list-style: none;
                            padding: 0px;
                            color: #666;

                            li{
                                line-height: 0.4694rem;
                                margin-top: 0px;
                                background: #f5f5f5;
                                text-indent: .30rem;
                                a{
                                    color: #666;
                                    text-decoration: none;
                                    display: block;
                                }
                            }
                        }
                    }
                    .li-top{
                        color: #fe4070;
                        span{
                            background: url('../assets/images/top.png') no-repeat;
                            position: absolute;
                            right: 0.1626rem;
                            top: 0.2106rem;
                            width: .1rem;
                            height: .1rem;
                            background-size: contain;
                        }
                    }
                }
            }
            .right{
                transform: translateX(0);
                right: 0;
            }
        }
        header{
            background: #fff;
            overflow: hidden;
            position: relative;
            display: block;
            .header-a{
                margin: .08rem .54rem .065rem .2rem;
                color: #999;
                background: #F5F5F5;
                border-radius: .35rem;
                height: .3rem;
                line-height: .3rem;
                position: relative;
                display: block;
                box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
                font-size: .14rem;
                text-align: center;
                .a-img{
                    width: .175rem;
                    display: inline-block;
                    position: relative;
                    top: .0375rem;
                    left: -.0375rem;
                }
            }
            .span{
                width: .256rem;
                height: .2rem;
                position: absolute;
                bottom: .11rem;
                right: .125rem;
                z-index: 12;
                .span-img{
                    width: 100%
                }
            }
        }
    }
    .footer{
        padding-left: .125rem;
        padding-right: .125rem;
        padding-bottom: .625rem;
        background: #fff;
        overflow: hidden;
        display: block;
        .footer-div{
            padding-top: .13rem;
            .foo-a{
                img{
                    width:100%;
                }
            }
        }
        ul{
            text-align: center;
            width: 3.75rem;
            margin: .10rem auto 0;
            li{
                border: .01rem solid #e3e3e3;
                line-height: .31rem;
                color: #666;
                font-size: .14rem;
                height: .31rem;
                width: .85rem;
                margin-right: .46rem;
                display: inline-block;
                border-radius: .25rem;
                a{
                    text-decoration: none;
                    color: #333;
                }
                .lll{
                    color: #fe4070;
                }
            }
        }
        .shahao{
            position: relative;
            margin: .25rem auto .125rem;
            color: #999;
            font-size: .16rem;
            width: 100%;
            text-align: center;
            p{
                font-size: .14rem;
            }
        }
    }

    .fixed{
        position: fixed;
        left: 0;
        top: 0;
    }
</style>
