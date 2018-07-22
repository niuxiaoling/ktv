<template>
    <div>
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
        <div class="search">
            <img src="../../assets/img/search_03.png" alt="">
            <input type="text" placeholder="请输入您要搜索的歌手">
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
    .search{
        position: absolute;
        top: 1.8rem;
        left: 0;
        width: 100%;
        height: 0.7rem;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
        display: flex;
    }
    .search > input {
        width: 100%;
        height: 100%;
        border-radius: 0.12rem;
        text-align: center;
        outline: none;
        border:none;
        position: relative;

    }
    .search img{
        position: absolute;
        top: 0.2rem;
        left: 2.1rem;
        z-index: 13;
        width: 0.28rem;
        height: .28rem;
    }
</style>
