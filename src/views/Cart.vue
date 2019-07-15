<template>
    <div class="filx">
       <div class="head">
            <a class="head-al">
                <tabhome @evt="hanEvt"></tabhome>
            </a>
            <div class="head-center">购物车</div>
            <a class="head-ar">
                <tabhome @evt="hanEvt"></tabhome>
            </a>
        </div>
        <div class="cart-no-goods"> <div class="oops"></div> <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div> <div class="go-stroll">去逛逛<tabhome @evt="hanEvt"></tabhome></div> </div>
    </div>
</template>

<script>
import tabhome from '@/components/Tabhome'
export default {
    components: {
        tabhome
    },
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
}
</script>

<style lang="scss" scoped>
.filx{
    display: flex;
    flex-direction: column;
    height: 6.15rem;
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

.cart-no-goods{
    display: flex;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    .oops{
        width: .86rem;
        height: .82rem;
        background: url("../assets/images/no-card-oops.png") no-repeat;
        background-size: 100% 100%;
    }
    .empty-cart{
        font-size: .15rem;
        line-height: .15rem;
        color: #333;
        margin-top: .16rem;
        padding: 0 .12rem;
        text-align: center;
    }
    .go-stroll{
        width: 1.25rem;
        height: .36rem;
        border-radius: .2rem;
        color: #fff;
        background: #fe4070;
        line-height: .36rem;
        text-align: center;
        margin-top: .23rem;
        font-size: .15rem;
    }
}
</style>
