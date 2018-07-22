<template>
    <div class="success">
         <div class="content">
            <h1>提交成功</h1>
             <div class="main">
                 <div class="center">
                     <img src="../../assets/img/tjcg.png" alt="">
                     <p>恭喜您已提交成功</p>
                 </div>
                 <router-link  :to="{name:'home' }" class="bottom">返回点歌</router-link>
             </div>
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
<style scoped>
    .success{
        background: url("../../assets/img/bg1.png") no-repeat;
        background-size: cover;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: scroll;
    }
    .content{
       width: 100%;
        height: 100%;
    }
    .content h1{
        width: 100%;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4rem;
        color: #fff;
    }
    .main{
        width: 100%;
        height: 80%;
        position: relative;
    }
    .center{
        width: 3.2rem;
        height: 5rem;
        position: absolute;
        top: 16%;
        left: 0;
        right: 0;
        margin: auto;
    }
    .center img{
        width: 3rem;
        height:3.4rem;
        margin: 0 auto;
        margin-bottom: .4rem;
    }
    .main p{
        width: 3rem;
        font-size: 0.26rem;
        border-radius: .5rem;
        padding: .2rem;
        background: url("../../assets/img/gongxi.png") center center no-repeat;
        background-size: cover;
        color: #f22a8d;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bottom{
        display: block;
        width: 6.2rem;
        height: 1rem;
        border-radius: .5rem;
        background: url("../../assets/img/bottom.png") center center no-repeat;
        background-size: cover;
        text-decoration: none;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        font-size: .3rem;
        position: absolute;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: auto;
    }

</style>
