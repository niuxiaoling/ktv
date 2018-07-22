<template>
    <div class="music">
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
        <div class="rank">
            <ul class="ranking">
                <li :class="{'active':state==1}" @click.prevent="setState(1)"><a href="javascript:;"  >月排行</a></li>
                <li :class="{'active':state==2}" @click.prevent="setState(2)"><a href="javascript:;" >季排行</a></li>
                <li :class="{'active':state==3}" @click.prevent="setState(3)"><a href="javascript:;" >年排行</a></li>
            </ul>
            <el-carousel :interval=4000 arrow="hover" indicator-position="none" height="3rem">
                <el-carousel-item v-for="item in 3" :key="item" height="3rem">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="main">
                <ul class="middle">
                    <li class="c632">
                        <div class="num">
                            01
                        </div>
                        <div class="song" style="margin-left: 0;">
                            <span class="name">光辉岁月</span>
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
              state:1,
            }
        },
        methods:{
            setState:function (m) {
               return this.state=m;
            }
        }
    }
</script>
<style scoped>
    .music{
        width: 100%;
        height:100%;
        background: url("../../assets/img/bg_01.png") no-repeat;
        background-size:100%;
        position: absolute;
        left:0;
        top:0;
        z-index: 0;
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
    .rank {
        width: 100%;
        height: 0.6rem;
        position: absolute;
        top: 1.76rem;
        left: 0;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
    }
    .rank .ranking {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.1rem;
        background: #fff;
        padding: 0.04rem;
    }
    .rank .ranking li {
        width: 33.3%;
        height: 100%;
    }
    .rank .ranking li a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.28rem;
        color: #7E8C8D;
    }
    .ranking li.active {
        background: #FF318D;
    }
    .ranking li.active a {
        color: #fff;
    }
    .el-carousel{
        width: 100%;
        padding:0 0.24rem 0;
        margin-top: 0.3rem;
        height: 3.19rem;

    }
    /*.el-carousel__item h3 {*/
        /*color: #475669;*/
        /*font-size: 14px;*/
        /*opacity: 0.75;*/
        /*line-height: 200px;*/
        /*margin: 0;*/
    /*}*/
    .el-carousel__item:nth-child(4) {
        background:url("../../assets/img/rc2.png")  no-repeat;
        background-size: 100%;
    }
    .el-carousel__item:nth-child(5) {
        background: url("../../assets/img/rc1.png")  no-repeat;
        background-size: 100%;
    }
    .el-carousel__item:nth-child(3) {
        background: url("../../assets/img/rc3.png")  no-repeat;
        background-size: 100%;
    }


    /*.banner {*/
        /*position: absolute;*/
        /*top: 2.6rem;*/
        /*left: 0;*/
        /*width: 100%;*/
        /*height: 3.19rem;*/
        /*padding-left: 7%;*/
        /*padding-right: 7%;*/
    /*}*/

    /*.banner img {*/
        /*width: 100%;*/
        /*height: 3.19rem;*/
    /*}*/

    /*.swiper-container {*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/

    /*.swiper-slide {*/
        /*text-align: center;*/
        /*font-size: 18px;*/
        /*background: #fff;*/
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-box-pack: center;*/
        /*-ms-flex-pack: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
        /*-webkit-box-align: center;*/
        /*-ms-flex-align: center;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/
    /*}*/

    /*.swiper-slide-prev {*/
        /*transform: translate(92%);*/
        /*z-index: 10;*/
    /*}*/

    /*.swiper-slide-active {*/
        /*z-index: 11;*/
    /*}*/

    /*.swiper-slide-next {*/
        /*transform: translate(-92%);*/
        /*z-index: 9;*/
    /*}*/

    .main {
        position: absolute;
        top: 6rem;
        left: 0;
        width: 100%;
        z-index: 9;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
        background: #fff;
    }

    .middle {
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        width: 100%;
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
        left: 0.24rem;
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

    .song span:nth-child(2) {
        color: #CCCCCC;
    }
</style>
