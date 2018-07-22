<template>
    <div class="store">
        <div class="top">
            <router-link :to="{name:'home'}">
                <div class="back">
                    <a href="javascript:;">
                        <img src="../assets/img/icon_03.png" alt="">
                    </a>
                </div>
            </router-link>
            <span>发现</span>
            <div class="right"></div>
        </div>
        <div class="select">
            <ul class="store-food">
                <li  @click="setState(i)" :class="{'choice1':i==0,'active':state==i+1,'choice2':i==1}" v-for="(v,i) in categories">
                    <span>{{v.name}}</span>
                    <span v-if="i==0">{{totalWater}}</span>
                    <span v-if="i==1">{{totalFood}}</span>
                </li>
                <li  class="choice3"></li>
            </ul>
        </div>
        <div class="content">
            <ul v-show="state==1">
                <li class="list" v-for="v in water" :key="v.id">
                    <div class="img">
                        <img :src="v.pic" alt="">
                    </div>
                    <ul class="list-content">
                        <li>
                            <span class="title">{{v.name}}</span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                        </li>
                        <li>
                            <span>
                                ￥
                                <span class="price">{{v.price}}</span>
                                元/瓶
                            </span>
                        </li>
                        <li class="choice">
                            <span class="cleft" @click="min(v)" v-if="v.num"></span>
                            <span class="center">{{v.num}}</span>
                            <span class="cright" @click="add(v)"></span>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul v-show="state==2">
                <li class="list" v-for="s in food" :key="s.id">
                    <div class="img">
                        <img :src="s.pic" alt="">
                    </div>
                    <ul class="list-content">
                        <li>
                            <span class="title">{{s.name}}</span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                            <span class="fire"></span>
                        </li>
                        <li>
                            <span>
                                ￥
                                <span class="price">{{s.price}}</span>
                                元/包
                            </span>
                        </li>
                        <li class="choice">
                            <span class="cleft" @click="min_food(s)" v-if="s.num_food"></span>
                            <span class="center">{{s.num_food}}</span>
                            <span class="cright" @click="add_food(s)"></span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <sfooter :choicewater="choicewater" :choicefood="choicefood"></sfooter>
    </div>
</template>
<script>
    import Sfooter from './store/Sfooter.vue'
    export default{
        name:"store",
        components:{'sfooter':Sfooter},
        data(){
            return {
                house:localStorage.house,
                state:1,
                water:[],
                food:[],
                categories:[],
            }
        },
        mounted:function () {
            fetch('/api/get_categories')
                .then(res=>res.json())
                .then(r=>{
                    this.categories=r.data;
                })
            fetch('/api/get_food')
                .then(res=>res.json())
                .then(result=>{
                    let water1 = result.data.filter(v=>v.hid==1);
                    //给水增加num属性
                    water1.map(v=>{
                        v.num=0;
                        this.water.push(v);
                    })
                    let  food1=result.data.filter(v=>v.hid==2);
                    //给食物增加num属性
                    this.food=food1.map(v=>{
                        v.num_food=0;
                        return v;
                    })
                })
        },
        computed: {
           choicewater:function () {
              return this.water.filter(v=>v.num);
           },
           choicefood:function () {
               return this.food.filter(v=>v.num_food);
           },
            totalWater:function () {
                let n=0;
                if(this.choicewater){
                    this.choicewater.forEach(v=>{
                        n+=v.num;
                    })
                }
                return n;
            },
            totalFood:function () {
                let n=0;
                if(this.choicefood){
                    this.choicefood.forEach(v=>{
                        n+=v.num_food;
                    })
                }

                return n;
            }
        },
        methods:{
            setState:function(i){
                 this.state=i+1;
            },
            add:function (v) {
                v.num+=1;
            },
            min:function (v) {
                v.num-=1;
            },
            add_food:function (s) {
                s.num_food+=1;
            },
            min_food:function (s) {
                s.num_food-=1;
            }

        },



    }
</script>
<style scoped>
    .store{
        height:100%;
        width: 100%;
        background-image: url("../assets/img/bg1.png");
        background-size: 100%;
        background-repeat: no-repeat;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
    }
    .top {
        position: absolute;
        left: 0;
        width: 100%;
        height: 0.88rem;
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
    .select{
        position: absolute;
        top: 1rem;
        left: 0;
        width: 100%;
    }
    .select ul.store-food{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.06rem;
        height: 0.66rem;
        background: #fff;
        border-radius: .5rem;
        padding: .1rem;
        margin: 0 auto;
        font-size: 0.26rem;
        transition: all 1s ease;
        position: relative;
    }
    ul.store-food li{
        width: 50%;
        float: left;
        height: 100%;
        text-align: center;
        border-radius: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 12;
        color: #FF318D;
    }
    ul.store-food li.choice1{
        transition: all  1s ease;
    }
    ul.store-food li.choice3{
        position: absolute;
        left: 0.1rem;
        width: 1.4rem;
        height: 70%;
        border-radius: .3rem;
        background: #FF318D;
        z-index: 9;
        transition: all 0.7s ease
    }
    ul.store-food .choice2.active, ul.store-food li.choice1.active{
        color: #fff;
    }
    ul.store-food .choice2.active ~ .choice3 {
        transform: translate3d(1.5rem, 0, 0);
    }
    .content{
        position: absolute;
        top: 2.6rem;
        left: 0;
        width: 100%;
        height: 8.6rem;
        overflow:scroll;
        box-sizing: border-box;
    }
    .list{
        width: 100%;
        height: 2.7rem;
        display: flex;
        align-items: center;
    }

    .list  .img{
        display: flex;
        width: 50%;
        justify-content: center;
        align-items: center;
    }
    .list  .img img{
        width: 2.35rem;
        heght:1.72rem;
    }
    ul.list-content{
        display: flex;
        width: 50%;
        flex-direction: column;
        height: 1.72rem;
        align-items: flex-start;
    }

    .list-content>li{
        display: flex;
        height: 33.3%;
    }
    .list-content>li .fire{
        width: .16rem;
        height: .22rem;
        margin-left: .1rem;
        background: url("../assets/img/fire.png") no-repeat 50% 100%;
        background-size: 100%;
    }

    .list-content>li .title{
        font-size: .24rem;
    }
    .list-content>li:nth-child(2) >span{
        color: #FF326C;
        font-size: .3rem;
    }
    .choice{
        display: flex;
        padding: 0.1rem  0;
        align-items: flex-start;
    }
    .choice span.cleft{
        display: inline-block;
        width: .35rem;
        height: .35rem;
        border-radius: 50%;
        background: url(../assets/img/minus.png) center center no-repeat;
        background-size: 100%;
    }
    .choice span.center{
        display: flex;
        justify-content: center;
        align-items: center;
        width: .8rem;
        height: .35rem;
        border-radius: .18rem;
        border: 1px solid #D2D2D2;
        font-size: .26rem;
        color: #858585;
        margin-left: 0.15rem;
        margin-right: 0.15rem
    }
    .choice span.cright{
        display: inline-block;
        width: .35rem;
        height: .35rem;
        border-radius: 50%;
        background: url(../assets/img/add.png) center center no-repeat;
        background-size: 100%;
    }
</style>
