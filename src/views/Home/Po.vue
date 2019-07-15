<template>
    <div>

        <section class="tuan-items">
            <input type="hidden" name="card_id" value="7430" id="card_id">

            <h2 class="items-title">
                <span class="head_bg">
                    <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
                </span>
                <span>精选活动</span>
            </h2>
            <ul class="ul-list">
                <li v-for="(data,index) in datalist" :key="data.itemid">
                    <a>
                        <div class="list-img">
                            <img :src="data.image_url_set.main[320]">
                            <div class="yuan">{{data.discount_string}}</div>
                        </div>
                        <div class="list-time">
                            <h1 class="list-tit">{{data.title}}</h1>
                            <div class="time">
                                <span>仅剩</span>
                                <span>03天</span>
                                <span>07时</span>
                                <span>50分</span>
                            </div>
                        </div>
                        <div class="list-logo">
                            <img :src="data.image_url_set.brand[320]">
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
      // isShow:
    }
  },
  mounted () {
    axios.get('/luxury/ajaxList?page=1&card_id=1837').then(res => {
      this.datalist = res.data.item_list
    //   console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
section{
    display: block;
}

.list-items{
    background: #fff;
    margin-bottom: .08rem;

    .items-title{
        text-align: center;
        font-weight: 400;
        .head_bg{
            width: .15rem;
            height: .4rem;
            line-height: .4rem;
            position: relative;
            top: .035rem;
            margin-right: .07rem;
            img{
                text-align: center;
                width: 100%;
            }
        }
        span{
            font-size: 14px;
            color: #333;
            font-weight: 400;
            display: inline-block;
        }
    }
    .metra-lists{
        height: 5.63rem;
        position: relative;
        a{
            width: 50%;
            display: block;
            height: 1.875rem;
            box-sizing: border-box;
            float: left;
            img{
                width:100%;
            }
        }
        .a-a{
            height: .9375rem;
        }
    }
}
.tuan-items{
    background: #fff;
    margin-bottom: .08rem;
    font-size: .14rem;
    .items-title{
        text-align: center;
        font-weight: 400;
        .head_bg{
            width: .15rem;
            height: .4rem;
            line-height: .4rem;
            position: relative;
            top: .035rem;
            margin-right: .07rem;
            img{
                text-align: center;
                width: .15rem;
            }
        }
        span{
            font-size: 14px;
            color: #333;
            font-weight: 400;
            display: inline-block;
        }
    }
}

.ul-list{
    li{
        height: 2.5rem;
        a{
            height: 2.5rem;

            .list-img{
                position: relative;
                height: 1.84rem;
                overflow: hidden;
                img{
                    width: 100%;
                }
                .yuan{
                    position: absolute;
                    color: #fff;
                    font-size: 11px;
                    text-align: center;
                    padding: 0 .023rem;
                    bottom: .141rem;
                    background-color: #000;
                    height: .18rem;
                    line-height: .18rem;
                    min-width: .66rem;
                }
            }
            .list-time{
                padding: .15rem;
                max-width: 2.6666rem;
                float: left;
                .list-tit{
                    color: #333;
                    font-size: 14px;
                    font-weight: 400;
                    margin-bottom: .05rem;
                }
                .time{
                    color: #999;
                    height: .12rem;
                    line-height: .12rem;
                    vertical-align: middle;
                    font-size: 12px;

                }
            }
            .list-logo{
                padding-top: .115rem;
                padding-right: .18rem;
                width: .73rem;
                height: .36rem;
                overflow: hidden;
                float: right;
                img{
                    width: 100%;
                }
            }
        }
    }
    >:nth-child(1){display: none}
    >:nth-child(2){display: none}
    >:nth-child(3){display: none}
    >:nth-child(4){display: none}
    >:nth-child(5){display: none}
    >:nth-child(6){display: none}
    >:nth-child(7){display: none}
    >:nth-child(8){display: none}
    >:nth-child(9){display: none}
    >:nth-child(10){display: none}
    >:nth-child(11){display: none}
    >:nth-child(12){display: none}
    >:nth-child(13){display: none}
    >:nth-child(14){display: none}
    >:nth-child(15){display: none}
    >:nth-child(16){display: none}
    >:nth-child(17){display: none}
    >:nth-child(18){display: none}
    >:nth-child(19){display: none}
    >:nth-child(20){display: none}
    >:nth-child(21){display: none}
    >:nth-child(22){display: none}
    >:nth-child(23){display: none}
    >:nth-child(24){display: none}
    >:nth-child(25){display: none}
    >:nth-child(26){display: none}
    >:nth-child(27){display: none}
    >:nth-child(28){display: none}
    >:nth-child(29){display: none}
    >:nth-child(30){display: none}

}
</style>
