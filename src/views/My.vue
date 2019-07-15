<template>
    <div class="my">
        <div class="header">
        <div class="head">
            <div class="head_left"><a href=""></a></div>
            <div class="head_title">我的聚美</div>
            <div class="head_right">
                <tabhome @evt="hanEvt"></tabhome>
            </div>
        </div>
        <div class="user-unlogin">
        <div class="noportrait"></div>
        <div class="operation">
            <a class="signup" href="">注册</a>
            <div style='margin-top:4px;' class="separator"></div>
            <a class="login" href="">登录</a>
        </div>
    </div>
    </div>
        <div class="block">
        <div class="block-title">
            <i class="block-title-icon"></i>
            我的订单
            <a href="" class="block-title-nav">
                <span>查看我的全部订单</span>
                <i class="arrow-right"></i>
            </a>
        </div>
        <div class="block-content">
            <a class="block-item" href="">
                <i class="unpaid"></i>
                <span>待付款</span>
            </a>
            <a class="block-item" href="">
                <i class="unconfirm"></i>
                <span>待收货</span>
            </a>
            <a class="block-item" href="">
                <i class="uncomment"></i>
                <span>待评价</span>
            </a>
            <a class="block-item" href="">
                <i class="refund"></i>
                <span>退货/退款</span>
            </a>
        </div>
        </div>
        <div class="fund">
        <div class="fund-title">
            <i class="fund-title-icon myfund"></i>
            我的资产
        </div>
        <div class="fund-content">
                <a class="fund-item" href="">
                <div class="value"></div>
                <span>现金券</span>
            </a>
                <a class="fund-item" href="">
                <div class="value"></div>
                <span>红包</span>
            </a>
            <a class="fund-item" href="">
                <div class="value"></div>
                <span>聚美余额</span>
            </a>
            <a class="fund-item" href="">
                <div fund="value"></div>
                <span>礼品卡</span>
            </a>
        </div>
        </div>
        <div class="list">
        <a class="list-item" href="">
            <i class="list-item-icon rmaservice"></i>
            <span>售后服务</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="">
            <i class="list-item-icon feedback"></i>
            <span>意见反馈</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="">
            <i class="list-item-icon address"></i>
            <span>收货地址</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item logout" href="">
            <i class="list-item-icon logout"></i>
            <span>退出登录</span>
            <i class="arrow-right"></i>
        </a>
        <a class="list-item" href="">
            <i class="list-item-icon tel"></i>
            <span>400-123-8888</span>
            <i class="arrow-right"></i>
        </a>
    </div>
        <div class="hint" style="padding-bottom:.0625rem">
            客服热线400-123-8888 (8:00-22:00)<br>拨打前请记录您的UID  0    
        </div>
    </div>
</template>

<script>
import tabhome from '@/components/Tabhome'
export default {
    methods: {
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
    components: {
      tabhome
    },
}
</script>

<style lang="scss" scoped>
.my{
    .header{
        background-image: -webkit-linear-gradient(294deg,#fd465f 0,#fc5e9f 100%);
        background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
    .head{
        height:.4rem;
        width: 100%;
        font-size: .16rem;
        text-align: center;
        line-height: .4rem;
        position: relative;
        .head_left{
            position: absolute;
            left: 0;
            top: 0;
            width: .1rem;
            height: .4rem;
            a{
            background: url(../assets/image/back_white_bg.png)left center no-repeat;
            background-size: .25rem .25rem;
            padding-left: .2rem;
            text-decoration: none;
            color: #fff;
            }
        }
        .head_title{
            position: static;
            color: #fff;
            float: left;
            width: 100%;
            text-align: center;
            line-height: .4rem;
        }
        .head_right{
            position: absolute;
            right: 0;
            top: 0;
            width: .4rem;
            height: .4rem;
            background: url(../assets/image/home_white_bg.png) center center no-repeat;
            background-size: .25rem .25rem;
        }
    }
    .user-unlogin{
        padding-top: .5rem;
        box-sizing: border-box;
        height: 1.6rem;
        padding-top: .15rem;
        .noportrait{
            background-image: url(../assets/image/noportrait.png);
            width: .6rem;
            height: .6rem;
            background-size: .6rem;
            margin: auto;
        }
        .operation{
            padding: .3rem;
            // width: 100%;
            margin: auto;
            display: flex;
            justify-content: center;
            .signup{
                line-height: .25rem;
                color: #fff;
                font-weight: 700;
                font-size: .25rem;
                text-decoration: none;
                display: inline-block;
                text-align: center;
                width: 1rem;
            }
            .div{
                background: #fff;
                width: 1px;
                display: inline-block;
                height: .15rem;
                vertical-align: middle;
            }
            .login{
                line-height: .25rem;
                color: #fff;
                font-weight: 700;
                font-size: .25rem;
                text-decoration: none;
                display: inline-block;
                text-align: center;
                width: 1rem;
            }
        }
    }
    }
    .block{
        background: #fff;
        margin-top: .2rem;
    .block-title{
        padding-left: .1rem;
        border-bottom: 1px solid #eaeaea;
        height: .34rem;
        line-height: .34rem;
        font-size: .15rem;
        .block-title-icon{
            display: inline-block;
            vertical-align: middle;
            width: .2rem;
            height: .2rem;
            background-size: .2rem;
            margin-right: .1rem;
            background-image: url(../assets/image/myorder.png);
        }
        .block-title-nav{
            float: right;
            text-decoration: none;
            color: #999;
            font-size: .15rem;
            margin-right: 5px;
            span{
                text-decoration: none;
                color: #999;
                font-size: .15rem;
                margin-right: 5px;
            }
            i{
                background-image: url(../assets/image/advance_bg.png);
                background-size: .2rem;
                display: inline-block;
                vertical-align: middle;
                width: .2rem;
                height: .2rem;
            }
        }

    }
    .block-content{
        display: flex;
        .block-item{
                text-align: center;
                display: inline-block;
                margin: 0;
                padding: 10px 0;
                text-decoration: none;
                font-size: .15rem;
                color: #666;
                flex: 1;
                i{
                    display: block;
                    width: .25rem;
                    height: .25rem;
                    margin: 5px auto;
                    background-size: .25rem;
                    }
                    i.unpaid{
                        background-image: url(../assets/image/unpaid.png)
                    }
                    i.unconfirm{
                        background-image: url(../assets/image/unconfirm.png)
                    }
                    i.uncomment{
                        background-image: url(../assets/image/uncomment.png)
                    }
                    i.refund{
                        background-image: url(../assets/image/refund.png)
                    }

        }
    }
    }
    .fund{
        background: #fff;
        margin-top: .2rem;
        .fund-title{
            padding-left: .1rem;
            border-bottom: 1px solid #eaeaea;
            height: .34rem;
            line-height: .34rem;
            font-size: .15rem;
        i.myfund{
            background-image: url(../assets/image/myfund.png)
        }
        i.fund-title-icon {
            display: inline-block;
            vertical-align: middle;
            width: .2rem;
            height: .2rem;
            background-size: .2rem;
            margin-right: .1rem;
        }
        }
        .fund-content{
            display: flex;
            .fund-item{
                text-align: center;
                display: inline-block;
                margin: 0;
                padding: .1rem 0;
                text-decoration: none;
                font-size: .15rem;
                color: #666;
                flex: 1;
            }
        }
    }
    .list{
        background: #fff;
        margin-top: .2rem;
        .list-item{
            display: block;
            text-decoration: none;
            color: #333;
            padding-left: .1rem;
            border-bottom: 1px solid #eaeaea;
            height: .34rem;
            line-height: .34rem;
            font-size: .15rem;
            i.list-item-icon{
                display: inline-block;
                vertical-align: middle;
                width: .2rem;
                height: .2rem;
                background-size: .2rem;
                margin-right: .1rem;
            }
            i.rmaservice{
                background-image: url(../assets/image/rmaservice.png)
            }
            i.feedback{
                background-image: url(../assets/image/feedback.png)
            }
            i.address{
                background-image: url(../assets/image/address.png)
            }
            i.logout{
                background-image: url(../assets/image/logout.png)
            }
            i.tel{
                background-image: url(../assets/image/tel.png)
            }
            i.arrow-right{
                background-image: url(../assets/image/advance_bg.png);
                background-size: .2rem;
                display: inline-block;
                vertical-align: middle;
                width: .2rem;
                height: .2rem;
                float: right;
            }
        }
        
    }
    .hint{
            color: #999;
            font-size: .15rem;
            margin: .15rem;
            line-height: .15rem;
    }
}
</style>
