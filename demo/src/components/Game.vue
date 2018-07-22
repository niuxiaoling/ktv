<template>
    <div class="game">
        <div class="top">
            <router-link  :to="{name:'home'}">
                <div class="back">
                    <a href="javascript:;">
                        <img src="../assets/img/icon_03.png" alt="">
                    </a>
                </div>
            </router-link>
            <span>游戏</span>
            <div class="right"></div>
        </div>
          <div class="mainbox">
             <ul class="main">
                 <router-link :to="{name:'gamelist'}">
                     <li>
                         <img src="../assets/img/game_content_03.png" alt="">
                         <p>真心话大冒险</p>
                     </li>
                 </router-link>
                 <li>
                     <img src="../assets/img/game_content_05.png" alt="">
                     <p>真心话大冒险</p>
                 </li>
                 <li>
                     <img src="../assets/img/game_content_03.png" alt="">
                     <p>真心话大冒险</p>
                 </li>
                 <li>
                     <img src="../assets/img/game_content_05.png" alt="">
                     <p>真心话大冒险</p>
                 </li>
                 <li>
                     <img src="../assets/img/game_content_03.png" alt="">
                     <p>真心话大冒险</p>
                 </li>
                 <li>
                     <img src="../assets/img/game_content_05.png" alt="">
                     <p>真心话大冒险</p>
                 </li>
             </ul>
          </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style  scoped>
    .game{
        width: 100%;
        height:100%;
        background: url("../assets/img/bg_01.png") no-repeat;
        background-size:100%;
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
        border-radius: 0.12rem;
        margin-right: 0.24rem;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .mainbox{
        position: absolute;
        top:1.4rem;
        left:0;
        width: 100%;
        padding: 0 0.24rem 0;
    }
    .main{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        background: #fff;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        box-shadow: 0 2px 15px 2px #F6BACE
    }
    .main  li{
        width: 3rem;
        height: 3rem;
        margin: 0.2rem;
        box-shadow: 0 4px 15px 2px #F6BACE;
        font-size: 0.24rem;
        position: relative;
    }
    .main  li img{
        width: 100%;
        height:100%;

    }
    .main  li p{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2.1rem;
        left: 0.75rem;
    }

</style>
