<template>
    <div class="me">
        <div class="head">
           <router-link :to="{name:'home'}" class="back">
           </router-link>
            <p class="title">
                个人中心
            </p>
        </div>
        <div class="content">
            <div class="logo">
                <div class="write"></div>
                <div class="name">牛晓玲</div>
            </div>
            <ul class="metitle">
                <li>夏沫</li>
                <li>ZHONG GUO SHANG HAI</li>
                <li>1085476331</li>
            </ul>
            <ul class="mulu">
               <li :class="{'active':state==1}"   @click="setState(1)">
                   <p class="num">
                      {{orderlength}}
                   </p>
                   <p class="order">
                      我的订单
                   </p>
               </li>
                <li :class="{'active':state==2}"  @click="setState(2)">
                    <p class="num">
                        {{musiclength}}
                    </p>
                    <p class="order">
                        我的歌单
                    </p>
                </li>
            </ul>
            <div class="order">
                <div class="otitle" v-if="state==2">我的歌单</div>
                <div class="otitle" v-else>我的订单</div>
                <ul class="olist" v-show="state==2">
                    <li v-for="v in orderMusic">
                        <p class="song-name">{{v.album_title}}</p>
                        <p class="song-name">{{musictime(v)}}</p>
                    </li>

                </ul>
                <ul class="olist1" v-show="state==1">
                    <li v-for="v in choiceOrder">
                        <p class="song-name">{{v.name}}</p>
                        <p class="song-name">数量*{{v.num}}</p>
                        <p class="song-name">价格{{v.price}}</p>
                    </li>

                </ul>
            </div>
            <div class="musicorder"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                state:1,
                choiceOrder:localStorage.choiceOrder?JSON.parse(localStorage.choiceOrder):'',
                orderMusic:localStorage.orderMusic?JSON.parse(localStorage.orderMusic):'',
            }
        },
        computed:{
            orderlength:function () {
                if(this.choiceOrder){
                    return this.choiceOrder.length;
                }
            },
            musiclength:function () {
                if(this.orderMusic.length){
                    return this.orderMusic.length;
                }
            }
        },
        methods:{
           setState:function (i) {
               this.state=i;
           },
            musictime:function (v) {
                let time=v.file_duration;
                return parseInt(time/60)+':'+time%60;

            },
        }
    }
</script>
<style scoped>
    .me{
        width: 100%;
        height: 100%;
        padding:0 0.24rem;
        display: flex;
        flex-direction: column;
         background: url('../assets/img/bg4.jpg') no-repeat;
        background-size: cover;
    }
    .head{
        width: 100%;
        margin-top: 0.44rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        position: relative;
        color: #fff;
    }
    .back{
        width: .5rem;
        height: .5rem;
        background: url("../assets/img/icon_03.png") center center no-repeat;
        background-size: cover;
        position: absolute;
        z-index: 10;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .title{
        position: relative;
        font-size:0.4rem;
        font-weight: 600;
    }
    .title:before,.title:after{
        content:'';
        position: absolute;
        top: 40%;
        width: .06rem;
        height: .06rem;
        border-radius: 50%;
        background: #fff;

    }
    .title:before{
        left:30%;
    }
    .title:after{
        right:30%;
    }
    .content{
        width: 100%;
        height: 10.64rem;
        background: url("../assets/img/grzx.png") center center no-repeat;
        background-size: cover;
        margin-top: 1.16rem;
        position: relative;
        border-radius: 3px;
    }
    .logo{
        width: 1.8rem;
        height: 1.8rem;
        background: url("../assets/img/yxtx.png") center center no-repeat;
        background-size: cover;
        position: absolute;
        top: -.9rem;
        right: .5rem;
    }
    .logo  .write{
        width: .44rem;
        height: .44rem;
        position: absolute;
        bottom: .1rem;
        right: .1rem;
        background: url("../assets/img/write.png") center center no-repeat;
        background-size: cover;
    }
    .logo .name{
        position: absolute;
        top: 10%;
        left: -58%;
        color: #fff;
        font-size: .26rem;
    }
    ul.metitle{
        width: 100%;
        padding-top: 1rem;
        padding-right: .8rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

    }
    ul.metitle  li{
        color: #22B0FC;
        font-size: .3rem;
    }
    ul.metitle  li:nth-child(3){
        color: #000;
    }
    .mulu{
        height: 1.98rem;
        padding: .3rem .15rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-content: space-around;
    }
    .mulu  li{
        width:50%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 0 7px 0 #f0f0ff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 .2rem;
        position: relative;
        transition: all .5s ease;
        background: url("../assets/img/yxdd.png") center center no-repeat;
        background-size: cover;
    }
    .mulu  li.active{
        border:0.01rem solid #FF3D94;
        color: #fff !important;
        border-radius: 1.2rem;
    }
    .num{
        font-size: .46rem;
        font-weight: 600;
        color: #FF3D94;
    }
    .order{
        font-size: .3rem;
        color: #22b0fc;
    }
    .otitle{
        width: 100%;
        padding: 0 .24rem;
        box-sizing: border-box;
        font-size: .3rem;
        font-weight: 600;
        color: #F94299;
    }
    .olist,.olist1{
        width: 100%;
        padding: .2rem .24rem;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    .olist li,.olist1 li{
        height: 1rem;
        padding: .1rem 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: space-around;
        justify-content: space-around;
        border-bottom: 1px dashed #BDBDBD;
        font-size: .3rem;
        color: #89919E;
    }
    .song-name{
        color: #89919E;
    }
</style>
