<template>
    <div class="music">
        <mheader></mheader >
        <div class="music-main">
            <ul class="list">
                <li  v-for="v in singer">
                    <router-link :to="{name:'singers',params:{music:v}}">
                        <h2> {{v.name}}</h2>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import  Mheader  from  './Mheader.vue'
    export default{
        name:'musiclist',
        data(){
            return {
                singer: [],
                sid:null,
            }
        },
        mounted:function () {
           fetch('/api/get_songcates')
               .then(res=>res.json())
               .then(r=>{
                   this.singer=r.data;
               })
        },
        methods:{
        },
        components:{
            'mheader':Mheader,
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
    .music-main{
        position: absolute;
        top: 2.75rem;
        left: 0;
        width: 100%;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
        box-sizing: border-box;
    }
    ul.list{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background: #fff;
        padding-top: 0.02rem;
    }
    ul.list li:nth-child(1){
        width: 100%;
        height: 3.95rem;
        background: url(../../assets/img/pic_03.png) 50%;
        background-size: cover;
    }
    ul.list li >a{
        color: #fff;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul.list li{
        margin: 0.02rem 0.02rem;
    }
    ul.list li >a h2{
        font-size: .24rem;
    }
    ul.list li:nth-child(2){
        width: 40%;
        height: 2.13rem;
        background: url(../../assets/img/pic_07.png) 50%;
        background-size: cover;
    }
    ul.list li:nth-child(3) {
        width: 29%;
        height: 2.13rem;
        background: url(../../assets/img/pic_07.png) 50%;
        background-size: cover;
    }
    ul.list li:nth-child(4){
        width: 29%;
        height: 2.13rem;
        background: url(../../assets/img/pic_11.png) 50%;
        background-size: cover;
    }
    ul.list li:nth-child(5){
        width: 39%;
        height: 3.29rem;
        background: url(../../assets/img/pic_16.png) 50%;
        background-size: cover;
    }
    ul.list li:nth-child(6){
        width: 59%;
        height: 3.29rem;
        background: url(../../assets/img/pic_18.png) 50%;
        background-size: cover;
    }
</style>
