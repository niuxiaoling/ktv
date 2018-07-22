<template>
    <div class="bill">
        <store-header></store-header>
        <div class="num">
            <p>共<span>{{choicedLength}}</span>种</p>
        </div>
        <div class="main">
            <ul class="list">
                <li v-for="v in choicewater">
                    <div class="pic">
                        <img :src="v.pic" alt="">
                    </div>
                    <ul class="content">
                        <li class="name">{{v.name}}</li>
                        <li class="ml">{{v.info}}</li>
                        <li class="rmb">
                            <div class="numleft">
                                <span class="minus"></span>
                                <span class="addnum">{{v.num}}</span>
                                <span class="add"></span>
                            </div>
                            <div class="price">
                                {{v.price}}
                            </div>
                            <div class="img"></div>
                        </li>
                    </ul>
                </li>
                <li v-for="v in choicefood">
                    <div class="pic">
                        <img :src="v.pic" alt="">
                    </div>
                    <ul class="content">
                        <li class="name">{{v.name}}</li>
                        <li class="ml">{{v.info}}</li>
                        <li class="rmb">
                            <div class="numleft">
                                <span class="minus"></span>
                                <span class="addnum">{{v.num_food}}</span>
                                <span class="add"></span>
                            </div>
                            <div class="price">
                                {{v.price}}
                            </div>
                            <div class="img"></div>
                        </li>
                    </ul>
                </li>

            </ul>
            <div class="total">
                <div class="left"></div>
                <div class="middle"></div>
                <div class="right">
                     <div class="sum">
                         <p>总价</p>
                         <p>RMB</p>
                     </div>
                    <div class="price">{{total}}</div>
                </div>
            </div>
            <router-link :to="{name:'success'}" class="submit">
                    确认提交
            </router-link>
        </div>
    </div>
</template>
<script>
    import storeHeader from './storeHeader'
    export default{
        data(){
            return {
              house:localStorage.house,
              choicewater:this.$route.params.choicewater,
              choicefood:this.$route.params.choicefood,
              choiced:[],
            }
        },
        computed:{
           total:function () {
               let sum=0;
               this.choicewater.forEach(v=>{
                   sum+=parseFloat(v.price)*v.num;
               })
               this.choicefood.forEach(v=>{
                   sum+=parseFloat(v.price)*v.num_food;
               })
               return sum;
           },
            choicedLength:function () {
                return this.choiced.length;
            }
        },
        mounted:function () {
            this.choiced=this.choicewater;
            localStorage.choiceOrder=JSON.stringify(this.choiced);

        },
        components:{
            'store-header':storeHeader
        }
    }
</script>
<style scoped>
    .bill{
        width: 100%;
        height:100%;
        background: url("../../assets/img/bg_01.png") no-repeat;
        background-size:100%;
    }
    .num{
        position: absolute;
        top: 1.3rem;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0.4rem;
    }
    .num p{
        font-size: 0.34rem;
        color: #fff;
    }
    .main{
        position: absolute;
        top: 1.7rem;
        left: 0;
        width: 100%;
        padding-left: 0.24rem;
        padding-right: 0.24rem;
    }
    .list{
        width: 100%;
        height: auto;
        background: #fff;
        margin-top: .4rem;
        padding: .5rem 0;
        border-radius: .1rem;
        box-shadow: 0 0.1rem 0.2rem #e7e5f0;
    }
    .list li{
        width: 100%;
        height: 2.7rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .list li .pic{
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .list li .pic img{
        width: 1.8rem;
        height: 1.8rem;
    }
    .content{
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 1.72rem;
        align-items: flex-start;
        padding-right: 0.48rem;
    }
    .content li{
        display: flex;
    }
    .content .name{
        font-size: .3rem;
        color: #fc3195;
    }
    .content .ml{
        font-size: .28rem;
        color: #a2a2a2;
    }
    .rmb{
        border-top: 0.01rem dashed #CDCDCD;
        padding-top: 0.1rem;
    }
    .numleft{
        display: flex;
        justify-content: space-between;
    }
    .numleft  .minus{
        display: inline-block;
        width: .35rem;
        height: .35rem;
        background: url("../../assets/img/minus.png") center center no-repeat;
        background-size: cover;
    }
    .numleft  .addnum{
        width: .8rem;
        height: .35rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 .13rem;
        border: 1px solid #d2d2d2;
        border-radius: .18rem;
        font-size: .26rem;
        color: #858585;
    }
    .numleft .add{
        display: inline-block;
        width: .35rem;
        height: .35rem;
        background: url("../../assets/img/add.png") center center no-repeat;
        background-size: cover;
    }
    .price{
        margin-left: .3rem;
        font-size: 0.48rem;
        font-weight: bold;
        height: .4rem;
        color: #FE4E9E;
        margin-top: -0.1rem;
    }
    .img{
        width: 0.7rem;
        height: .4rem;
        background: url("../../assets/img/rmb1.png") center center no-repeat;
        background-size: 100%;
    }
    .total{
        width: 100%;
        margin-top: .72rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .total .left{
        width: 2.2rem;
        height: .6rem;
        background: url("../../assets/img/total.png") center center no-repeat;
        background-size: 100%;
    }
    .total .middle{
        width: .01rem;
        height: .6rem;
        background: url("../../assets/img/division.png") center center no-repeat;
        background-size: 100%;
        margin: 0 .1rem;
    }
    .total .right{
        display: flex;
        justify-content: space-between;
    }
    .right .sum p:nth-child(1){
        font-size: .22rem;
        color: #ff318e;
        line-height: .24rem;
    }
    .right .sum p:nth-child(2){
        font-size: .26rem;
        color: #b8b8b8;
        line-height: .24rem;
    }
    .price{
        color: #ff318e;
        font-size: .68rem;
        font-weight: 700;
        line-height: .48rem;
    }
    .submit{
        width: 6rem;
         height: 1rem;
        margin: .5rem auto;
        display: block;
        text-decoration: none;
        color: #fff;
        font-size: .3rem;
        line-height: .9rem;
        text-align: center;
        background: url("../../assets/img/done.png") center center no-repeat;
        background-size: cover;
    }

</style>
