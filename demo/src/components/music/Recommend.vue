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
        <div class="main">
            <ul class="middle">
                <li>
                    <img src="../../assets/img/recommend0_03.png" class='re'  alt="">
                    <p>摔跤吧，爸爸</p>
                    <div class="son">
                        <img src="../../assets/img/recommend01 (1).png" alt="">
                        27万&nbsp;&nbsp;
                        <img src="../../assets/img/recommend01 (2).png" alt="">
                        86首              </div>
                    <a href="javascript:;"></a>
                </li>
                <li>
                    <img src="../../assets/img/recommend0_06.png" class='re'  alt="">
                    <p>青春励志歌曲</p>
                    <div class="son">
                        <img src="../../assets/img/recommend01 (1).png" alt="">
                        27万&nbsp;&nbsp;
                        <img src="../../assets/img/recommend01 (2).png" alt="">
                        86首                </div>
                    <a href=""></a>
                </li>
                <li>
                    <img src="../../assets/img/recommend0_08.png" class='re'  alt="">
                    <p>一人一首成名曲</p>
                    <div class="son">
                        <img src="../../assets/img/recommend01 (1).png" alt="">
                        27万&nbsp;&nbsp;
                        <img src="../../assets/img/recommend01 (2).png" alt="">
                        86首                </div>
                    <a href=""></a>
                </li>
                <li>
                    <img src="../../assets/img/recommend0_03.png" class='re'  alt="">
                    <p>摔跤吧，爸爸</p>
                    <div class="son">
                        <img src="../../assets/img/recommend01 (1).png" alt="">
                        27万&nbsp;&nbsp;
                        <img src="../../assets/img/recommend01 (2).png" alt="">
                        86首                </div>
                    <a href=""></a>
                </li>

            </ul>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
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
     .main {
         position: absolute;
         top: 2rem;
         left: 0;
         width: 100%;
         z-index: 9;
         height: calc(100% - 1.67rem );
         overflow: scroll;
         padding-left: 0.24rem;
         padding-right: 0.24rem;
         box-sizing: border-box;
     }

     .middle {
         display: -webkit-flex;
         display: flex;
         flex-direction: column;
         width: 100%;

     }

     .middle li {
         width: 100%;
         height: 3.18rem;
         margin-bottom: 0.3rem;
         border-radius: 0.3rem;
         box-shadow: 0 4px 15px 2px #F6BACE;
         color: #fff;
         font-size: 0.24rem;
         position: relative;
     }

     .middle li .re {
         border: 0.1rem solid #fff;
         width: 100%;
         height: 100%;
         border-radius: 0.2rem;
     }

     .middle li a {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
     }

     .middle li p {
         width: 3.2rem;
         height: 0.5rem;
         display: flex;
         justify-content: center;
         align-items: center;
         position: absolute;
         top: 2.35rem;
         left: 0.7rem;
     }

     .middle li .son {
         width: 3.2rem;
         height: 0.5rem;
         display: flex;
         justify-content: center;
         align-items: center;
         position: absolute;
         top: 2.2rem;
         left: 3.3rem;
     }

     .middle li .son img {
         width: 0.2rem;
         height: 0.2rem;
         margin-left: 0.1rem;
         margin-right: 0.1rem;
     }
</style>
