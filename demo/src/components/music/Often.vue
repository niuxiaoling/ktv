<template>
    <div class="often">
        <div class="top">
            <router-link  :to="{name:'home'}">
                <div class="back">
                    <a href="javascript:;">
                        <img src="../../assets/img/icon_03.png" alt="">
                    </a>
                </div>
            </router-link>
            <span>歌手</span>
            <div class="right">
                <router-link :to="{name:'musicorder'}">已点歌曲</router-link>
            </div>
        </div>
        <ul class="list">
            <li>
                <router-link :to="{name:'musiclist'}">
                    <img src="../../assets/img/icon_07.png" alt="" v-show="$route.name=='musiclist'">歌手
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'rank'}">
                    <img src="../../assets/img/icon_07.png" alt="" v-show="$route.name=='rank'">排行
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'often'}">
                    <img src="../../assets/img/icon_07.png" alt=""  v-show="$route.name=='often'">常唱
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'recommend'}">
                    <img src="../../assets/img/icon_07.png" alt="" v-show="$route.name=='recommend'">推荐歌单
                </router-link>
            </li>
        </ul>
        <div class="main">
            <ul class="middle">
                <li class="c1">
                    <div class="num">
                        01            <!--<img src="/public/img/zuhe0.jpg" alt="">-->
                    </div>
                    <div class="song" style="margin-left: 0;">
                        <span class="name">往事只能回味</span>
                        <span class="time">03:40</span>
                    </div>
                    <div class="add">
                        <div class="jia"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                oftenmusic: null
            }
        },
        mounted:function () {
        }
    }
</script>
<style scoped>
    .often{
        width: 100%;
        height:100%;
        background: url("../../assets/img/singer_bg_01.png") no-repeat;
        background-size:100%;
        position: absolute;
        left:0;
        top:0;
        z-index: 10;
    }
    .top{
        position: absolute;
        left: 0;
        top:0.44rem;
        width: 100%;
        height:0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.34rem;
    }
    .back{
        width: 0.88rem;
        height: 100%;
        margin-left: 0.24rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .back  >a{
        width: 0.4rem;
        height: 0.4rem;
    }
    .back >a img{
        width: 100%;
        height:100%;
    }
    .top > span{
        width: 2rem;
        text-align: center;
        color: #fff;
        line-height: 0.88rem;
    }
    .top >.right{
        width: 1.2rem;
        height: 0.48rem;
        border: 1px solid #fff;
        border-radius: 0.12rem;
        margin-right: 0.24rem;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .right  a{
        font-size: 0.24rem;
        color: #fff;
    }
    .list{
        position: absolute;
        top: 1.28rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 0.35rem;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
    }
    .list li{
        height: 100%;
        display: flex;
    }
    .list > li > a {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        color: #fff;
    }
    .list > li > a img{
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.08rem;
    }
    .top {
        position: absolute;
        left: 0;
        top: 0.44rem;
        width: 100%;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.34rem;
    }

    .top > span {
        height: 100%;
        width: 2.6rem;
        text-align: center;
        line-height: 0.88rem;
        color: #fff;
    }

    .top > .back {
        width: 0.88rem;
        height: 100%;
        margin-left: 0.24rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .back > a {
        width: 0.4rem;
        height: 0.4rem;
    }

    .back > a > img {
        width: 0.4rem;
        height: 0.4rem;
    }

    .top > .you {
        width: 1.2rem;
        height: 0.48rem;
        border: 0.01rem solid #fff;
        border-radius: 0.12rem;
        margin-right: 0.24rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .you > a {
        font-size: 0.24rem;
        color: #fff;
    }

    .liebiao {
        position: absolute;
        top: 1.28rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 0.35rem;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
    }

    .liebiao > li {
        height: 100%;
        display: flex;
    }

    .liebiao > li > a {
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        color: #fff;
    }

    .liebiao > li > a > img {
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-right: 0.08rem;
    }

    .backimg {
        position: absolute;
        top: 1.8rem;
        left: 0;
        width: 100%;
        /*height:;*/
    }

    .backimg img {
        width: 100%;
        height: 3.96rem;
    }

    .main {
        position: absolute;
        top: 2.6rem;
        left: 0;
        width: 100%;
        z-index: 9;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
    }

    .middle {
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
    }

    .middle > li {
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.56rem;
        border-bottom: 1px dotted #000;
        font-size: 0.24rem;
    }

    .shadow {
        width: 1.07rem;
        height: 1.07rem;
        position: absolute;
        left: 0.48rem;
        transform: rotate(15deg);
        background: #FE3191;
        border-radius: 0.2rem;
        z-index: 12;
    }

    .num {
        width: 1.07rem;
        height: 1.07rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 13;
    }

    .num img {
        width: 1.07rem;
        height: 1.07rem;
    }

    .song {
        width: 6rem;
        margin-left: 0.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        color: #58606D;
    }

    .song span:nth-child(2) {
        color: #CCCCCC;
    }

    .add {
        width: 1.18rem;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .add .jia {
        width: 0.48rem;
        height: 0.48rem;
        background-image: url("../../assets/img/sgif_pic2_14.png");
        background-size: contain;
        transition: all 0.4s ease;
    }

    .add > .jia.active {
        width: 1.18rem;
        height: 0.48rem;
        background-image: url("../../assets/img/sgif_pic2_14.png");
        background-size: contain;
    }
</style>
