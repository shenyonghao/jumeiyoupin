<template>
    <div id="nav">
        <div id="header">
            <ul class="h-ul">
                <li>
                    <a>
                        <img src="../../assets/images/img1.png">
                        <div class="size">海外直供</div>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../assets/images/img2.png">
                        <div class="size">原装正品</div>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../assets/images/img3.png">
                        <div class="size">极速到货</div>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="../../assets/images/img4.png">
                        <div class="size">轻松退货</div>
                    </a>
                </li>
            </ul>
        </div>

        <!--  -->

        <div class="section">
            <div class="center">
                <span class="c-span1">
                    <img src="../../assets/images/icon_title.png">
                </span>
                <span class="c-span2">今日团购，每天10点上新</span>
            </div>
        </div>

        <!--  -->

        <ul id="ulul">
            <li class="lili" v-for="(data,index) in datalist" :key="index">
                <a class="aa" @click="handleClick(list)">
                    <div class="divdiv">
                        <div class="up">
                            <img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" class="div-img1">
                            <img :src="data.url" class="div-img2">
                        </div>
                        <!--  -->
                        <div class="aut">
                            <div id="div1">
						    	<!-- 字 -->

                                                                Louis Vuitton/路易威登 SLENDER 黑色 经典印花 男

						    </div>
                            <div id="div2">
                                <div>
                                    <span class="sp1">
                                        ￥<span class="sp2">
                                            9.9
                                        </span>
                                    </span>
                                    <span class="sp3">
                                        ￥1000000000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
      datalist: [
        { 'url': 'http://mp6.jmstatic.com/product/003/625/3625870_std/3625870_1000_1000.jpg?v=1509419250&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/404/4404616_std/4404616_1000_1000.jpg?v=1531382722&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/677/4677458_std/4677458_1000_1000.jpg?v=1548150255&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/001/647/1647284_std/1647284_1000_1000.jpg?v=1436869819&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/002/650/2650378_std/2650378_1000_1000.jpg?v=1537251774&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/374/4374254_std/4374254_1000_1000.jpg?v=1548925540&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/217/4217394_std/4217394_1000_1000.jpg?v=1522207077&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/527/4527810_std/4527810_1000_1000.jpg?v=1541562365&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/120/4120858_std/4120858_1000_1000.jpg?v=1516085918&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/003/236/3236114_std/3236114_1000_1000.jpg?v=1484553911&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/001/996/1996531_std/1996531_1000_1000.jpg?v=1450779035&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/002/742/2742722_std/2742722_1000_1000.jpg?v=1552889899&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/001/316/1316691_std/1316691_1000_1000.jpg?v=1491443446&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/004/904/4904358_std/4904358_1000_1000.jpg?v=1559035594&imageView2/2/w/264/q/90' },
        { 'url': 'http://mp6.jmstatic.com/product/001/647/1647284_std/1647284_1000_1000.jpg?v=1436869819&imageView2/2/w/264/q/90' }
        // {"url":"http://mp6.jmstatic.com/product/"},
        // {"url":"http://mp6.jmstatic.com/product/"},
        // {"url":"http://mp6.jmstatic.com/product/"},
        // {"url":"http://mp6.jmstatic.com/product/"},
      ],
      list:'ht190616p3885212t1&type=global_deal'

    }
  },
  mounted () {
    axios({
      url: '/api/v1/deal/dealactlist?card_id=4057&page=2&page_key=1560581400&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj'
    }).then(res => {
    //   console.log(res.data)
    })
  },
  methods: {
    handleClick(id){
        this.$router.push(`/detail/${id}`)  
        
         
    },
  },
}
</script>

<style lang="scss" scoped>
    #header{
        background: #fff;
        margin-bottom: .08rem;
        .h-ul{
            text-align: center;
            padding: .17rem 0;

            li{
                width: .9rem;
                display: inline-block;
                text-align: center;
                position: relative;
                a{
                    text-decoration: none;
                    color: #000;
                    img{
                        display: block;
                        width: 53.2%;
                        margin: 0 auto;
                    }
                    .size{
                        width: 100%;
                        color: #666;
                        margin-top: .025rem;
                        text-align: center;
                        font-size: .12rem;
                    }
                }
            }
        }
    }
    .section{
        margin-bottom: .085rem;
        background: #fff;
        .center{
            text-align: center;
            span{
                color: #333;
                font-size: 14px;
                display: inline-block;
            }
            .c-span1{
                width: .15rem;
                height: .4rem;
                line-height: .4rem;
                position: relative;
                top: .035rem;
                img{
                    text-align: center;
                    width: 100%;
                }
            }
            .c-span2{
                font-size: 14px;
                color: #333;
                font-weight: 400;
                display: inline-block;
            }
        }
    }

    #ulul{
        .lili{
            vertical-align: top;
            list-style: none;
            height: 1.25rem;
            background-color: white;
            .aa{
                display: block;
                text-decoration: none;
                color: #000;
                display: block;
                height: 100%;
                .divdiv{
                    border-bottom: 1px solid #eee;
                    position: relative;
                    padding: .12rem 0;
                    margin: 0 .12rem;
                    height: 1rem;
                    .up{
                        text-align: center;
                        overflow: hidden;
                        width: 1rem;
                        height: 1rem;
                        float: left;
                        position: relative;
                        z-index: 9;
                        .div-img1{
                            width: .3rem;
                            position: absolute;

                            top: 0;
                            left: 0;
                            z-index: 19;
                        }
                        .div-img2{
                            transition: all 350ms ease 0s;
                            opacity: 1;
                            width: 100%;
                        }
                    }
                    .aut{
                        width: 2.36rem;
                        height: 1rem;
                        margin-left: .12rem;
                        position: relative;
                        float: left;
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
</style>
