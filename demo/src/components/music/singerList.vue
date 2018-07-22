<template>
    <div class="main">
        <ul class="singer-list">
            <li v-for="v  in  singer">
                <router-link :to="{name:'singerinfo',params:{singlist:v}}">
                    <div class="bg" :style="{'background-image':`url(${v.avatar_big})`}"></div>
                </router-link>
                <h3>{{v.name}}({{v.songs_total}})</h3>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                singer:[],
                info:this.$route.params.music,
            }
        },
        mounted:function () {
//            fetch('/api/get_singers')
//                .then(res=>res.json())
//                .then(r=>{
//                    this.singer=r.data;
//                })
            fetch('/api/get_singers',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(this.info)
            })
                .then(res=>res.json())
                .then(r=>{
                    this.singer=r.data;
                })
        }
    }
</script>
<style  scoped>
    .main{
       position: absolute;
        top:2.75rem;
        left:0;
        width:100%;
        padding:0 0.24rem 0;
        box-sizing: border-box;
    }
    .singer-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding-top: 0.02rem;
    }
    .singer-list li{
        width: 2.1rem;
        height: 3.52rem;
    }
    .singer-list li a{
        display: block;
        width: 100%;
        height:2.94rem;
    }
    .singer-list li a .bg{
        width: 100%;
        height:100%;
        background: url("../../assets/img/zuhe0.jpg") no-repeat;
        background-size:cover;
    }
    .singer-list li h3{
        font-size: 0.24rem;
        height: 0.58rem;
        line-height: 0.58rem;
        font-weight: normal;
        text-align: center;
    }
</style>
