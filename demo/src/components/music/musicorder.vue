<template>
    <div class="music-order">
         <div class="top">
             <router-link  :to="{name:'singers'}">
                 <div class="back">
                     <a href="javascript:;">
                         <img src="../../assets/img/icon_03.png" alt="">
                     </a>
                 </div>
             </router-link>

             <span>已点</span>
             <div class="right">
                 <a href="">共{{orderd.length}}首</a>
             </div>
         </div>
        <div class="shadow">
            <img src="../../assets/img/sg3_02.png" alt="">
        </div>
        <div class="main">
            <ul class="list">
                <li v-for="(v,i) in orderd" :key="v.id">
                    <div class="yinying"></div>
                    <div class="pic">
                        <router-link :to="{name:'play',params:{music:v}}">
                            <img :src="v.pic_small" alt="">
                        </router-link>
                    </div>
                    <div class="song">
                        <span class="name">{{v.title}}</span>
                        <span class="time">{{v.time}}</span>
                    </div>
                    <div class="add">
                        <div class="del" @click="de(v)"></div>
                        <div class="tip" @click="tip(v,i)" v-show="i!=0"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'musicorder',
        data(){
            return {
              orderd:localStorage.orderMusic?JSON.parse(localStorage.orderMusic):'',
            }
        },
        mounted:function () {
        },
        methods:{
           de:function (value) {
             this.orderd=this.orderd.filter(v=>value.song_id!=v.song_id)
              localStorage.orderMusic=JSON.stringify(this.orderd);
           },
            tip:function (value,index) {
               this.orderd.forEach((v,i)=>{
                   if(value.song_id==v.song_id){
                       index=i;
                   }
               })
                this.orderd.unshift(this.orderd.splice(index,1)[0]);
            }
        }
    }
</script>
<style  scoped>
    .music-order{
        width: 100%;
        height: 100%;
        padding:0 0.24rem 0;
        overflow: scroll;
        background:url("../../assets/img/singer_bg_01.png") no-repeat;
        background-size: 100%;
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
    .right  a{
        color: #fff;
    }
    /*遮罩开始*/
    .shadow{
        position: absolute;
        top:1.8rem;
        left:0;
        width: 100%;
    }
    .shadow  img{
        width: 100%;
    }
    /*列表开始*/
    .main{
        position: absolute;
        top:1.4rem;
        left:0;
        width: 100%;
        z-index: 10;
        padding:0 0.24rem 0;
    }
    .list {
        display: flex;
        flex-direction: column;
        padding:0 0.24rem 0;
        background: #fff;
        position: relative;
    }
    .list li{
        display: flex;
        align-items: center;
        width: 100%;
        height:1.56rem;
        border-bottom:0.01rem dashed #333;
        font-size: 0.24rem;
    }
    .list li .yinying{
        width: 1.07rem;
        height: 1.07rem;
        position: absolute;
        left:0.48rem;
        transform: rotate(15deg);
        background: #FE3191;
        border-radius: 0.2rem;
        z-index: 12;
    }
    .pic{
        width: 1.07rem;
        height: 1.07rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        left:0.24rem;
        z-index: 13;
    }

    .pic a{
        width: 100%;
        height: 100%;
    }
    .pic a img{
        width: 1.07rem;
        height:1.07rem;
    }
    .song{
        width: 6rem;
        margin-left:0.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #58606D;
    }
    .song  span:nth-child(2){
        color:#ccc;
        margin-top: 0.1rem;
    }
    .add{
        width: 2.18rem;
         height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .del{
        width: 0.48rem;
        height: 0.48rem;
        background-image: url(../../assets/img/btnd.png);
        background-size: contain;
        margin-left: 0.2rem;
        transition: all 0.4s ease;
    }
    .tip{
        width: 0.48rem;
        height: 0.48rem;
        background-image: url(../../assets/img/btnt.png);
        background-size: contain;
        margin-left: 0.2rem;
        transition: all 0.4s ease;
    }
</style>
