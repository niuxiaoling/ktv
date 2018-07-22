<template>
    <div>
        <div class="bg"></div>
        <div class="singer">
            <img :src="singer.avatar_big" alt="">
        </div>
        <div class="zhezhao">
            <img src="../../assets/img/sg3_02.png" alt="">
        </div>
        <div class="top">
            <router-link :to="{name:'singers'}">
                <div class="back">
                    <img src="../../assets/img/icon_03.png" alt="">
                </div>
            </router-link>

            <span>{{singer.name}}</span>
            <div class="right">
                <router-link :to="{name:'musicorder'}">已点歌曲</router-link>
            </div>
        </div>
        <div class="head">
            <div class="shadow"></div>
            <div class="pic">
                <img :src="singer.avatar_big" alt="">
            </div>
            <ul class="information">
                <li>所在地 - {{singer.country}}</li>
                <li>
                    <img src="../../assets/img/sgif_pic2_06.png" alt="">
                    <span>歌曲&nbsp;&nbsp;{{singer.songs_total}}</span>
                    <img src="../../assets/img/sgif_pic2_08.png" alt="">
                    <span>MV  {{singer.songs_total}}</span>
                </li>
                <li>本月点击量：49080</li>
            </ul>
        </div>
        <div class="content">
            <ul class="list">
                <li v-for="(v,i) in singermusic">
                    <div class="id">
                       {{i}}
                    </div>
                    <div class="name">
                        <span>{{v.title}}</span>
                        <span>{{v.file_duration}}</span>
                    </div>
                    <div class="add">
                        <div :class="{addone:true}" @click="add(v,i)">
                        </div>
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
                rotate:false,
                singer:this.$route.params.singlist,
                singermusic:[],
                selected:localStorage.orderMusic?JSON.parse(localStorage.orderMusic):[],
            }
        },
        mounted:function () {
//           fetch('/api/get_songs?gid='+this.singerinfo.id)
            fetch('/api/get_songs',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                Set_Cookie:'BAEID=6F01E50FCC34D8DF63F3FF31EC364880; expires=Thu, 13-Sep-18 15:12:57 GMT; max-age=31536000; path=/; version=1',
                body:JSON.stringify({"tinguid":this.singer.ting_uid,"limit":20})
            })
              .then(res=>res.json())
              .then(r=>{
                  this.singermusic=r.data.songlist;
              })
        },
        methods:{
            add:function (v,i) {
                let lis=document.querySelectorAll('.add .addone');
                if(lis[i].className=='addone'){
                    lis[i].className='addone rotate';
                    this.selected.push(v);
                }else if(lis[i].className=='addone rotate'){
                    lis[i].className='addone';
                    this.selected=this.selected.filter(value=>v.id!=value.id)
                }
                localStorage.orderMusic=JSON.stringify(this.selected);
            }
        }
    }
</script>
<style scoped>
    /*背景开始*/
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 3rem;
        background: url("../../assets/img/sg3bg_01.png") no-repeat;
        background-size: cover;
    }

    .singer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4.2rem;
        z-index: 0;
    }

    .singer img {
        width: 100%;
        margin-top: -1rem;
    }

    .zhezhao {
        position: absolute;
        top: 3.3rem;
        left: 0;
        height: 7.18rem;
        width: 100%;
        z-index: 5;
    }

    .zhezhao img {
        width: 100%;
    }

    /*内容开始*/
    .top {
        width: 100%;
        position: absolute;
        top: 0.44rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.34rem;
        z-index: 10;
        height: 0.88rem;
    }

    .top .back {
        width: 0.88rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 0.24rem;
    }

    .top .back img {
        width: 0.4rem;
        height: 0.4rem;
    }

    .top span {
        width: 2rem;
        height: 100%;
        line-height: 0.88rem;
        text-align: center;
        color: #fff;
    }

    .top .right {
        width: 1.2rem;
        height: 0.48rem;
        border: 0.01rem solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.12rem;
        margin-right: 0.24rem;
    }

    .top .right a {
        color: #fff;
        font-size: 0.24rem;
    }

    /*歌手信息开始*/
    .head {
        position: absolute;
        top: 1.4rem;
        left: 0;
        z-index: 10;
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: 1.66rem;
    }

    .head .shadow {
        width: 1.47rem;
        height: 1.47rem;
        position: absolute;
        left: 0.24rem;
        background: rgba(255, 255, 255, .6);
        border-radius: 0.2rem;
        transform: rotate(15deg);
    }

    .pic {
        width: 1.47rem;
        height: 1.47rem;
        position: absolute;
        left: 0.24rem;
        border-radius: 0.2rem;
        border: 0.04rem solid #fff;
        overflow: hidden;
    }

    .pic img {
        width: 100%;

    }

    .information {
        width: 64%;
        height: 100%;
        position: absolute;
        right: 0;
        color: #fff;
        font-size: 0.24rem;
        margin-right: 0.24rem;
    }

    .information li {
        height: 0.5rem;
        font-size: 0.24rem;
        display: flex;
        align-items: center;
    }

    .information li:nth-child(2) {
        height: 0.6rem;
        border-bottom: 1px dashed #fff;
        margin-bottom: 0.1rem;
        width: 3.55rem;
    }

    .information li:nth-child(2) img {
        width: 0.28rem;
        height: 0.28rem;
        margin-right: 0.2rem;
    }

    .information li:nth-child(2) span {
        margin-right: 0.2rem;
    }

    /*歌曲列表开始*/
    .content {
        position: absolute;
        top: 3.9rem;
        left: 0;
        width: 100%;
        z-index: 10;
        padding: 0 0.24rem 0;
    }

    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .list li {
        display: flex;
        font-size: 0.24rem;
        justify-content: space-between;
        width: 100%;
        height: 1.17rem;
        border-bottom: 0.01rem dashed #333;
    }
    .id{
        display: flex;
        align-items: center;
        width: 0.55rem;
        height: 100%;
        line-height: 0.55rem;
        color: #F73C5F;
    }
    .name{
        width: 6rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #8C93A0;
        margin-left: 0;
    }
    .name span:nth-child(2){
        color: #ccc;
        margin-top: 0.1rem;
    }
    .add{
        width: 1.18rem;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .addone{
        width: 0.48rem;
        height: 0.48rem;
        background: url("../../assets/img/sgif_pic2_14.png") no-repeat;
        background-size: contain;
        transition: transform .5s  ease;
     }
    .rotate{
        transform:rotate(135deg);
    }
</style>
