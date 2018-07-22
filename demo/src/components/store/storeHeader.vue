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
            <span>·{{house}}房间已选商品·</span>
            <div class="right"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                house:localStorage.house,
            }
        }
    }
</script>
<style  scoped>
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
</style>
