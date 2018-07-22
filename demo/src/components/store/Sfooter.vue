<template>
    <div class="footer">
        <div class="choiced">
            <p>已选</p>
            <div class="box">
                <nobr class="shop" v-for="v in choicewater">
                    {{v.name}} <p>{{v.num}}</p>瓶
                </nobr>
                <nobr class="shop" v-for="v in choicefood">
                    {{v.name}} <p>{{v.num_food}}</p>包
                </nobr>
            </div>
            <div class="dian">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="sum">
            <div class="money">
                <span class="s1">合计</span>
                <span class="s2">{{total}}</span>
                <span class="s3">RMB</span>
            </div>
            <router-link :to="{name:'bill',params:{'choicewater':choicewater,'choicefood':choicefood}}">
                ·  选好了  ·
            </router-link>
        </div>

    </div>
</template>
<script>
    export default{
        props:['choicewater','choicefood'],
        data(){
            return {

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
            }
        }
    }
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 15;
        width: 100%;
        height: 2.4rem;
        background: #fff;
        padding: .2rem;
        box-sizing: border-box
    }
    .choiced {
        width: 100%;
        height: 0.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .choiced p{
        font-size: 0.26rem;

    }
    .box{
        width: 80%;
        height: 0.7rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll
    }
    .box nobr{
        height: 0.42rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.24rem;
        background: #FF318E;
        margin-left: 0.15rem;
        color: #fff;
        padding: 0.1rem;
        border-radius: 0.13rem;
    }
    .dian{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .dian span {
        display: block;
        width: .09rem;
        height: .09rem;
        border-radius: 50%;
        margin: 0 .04rem;

    }
    .dian span:nth-child(1){
        background: #FF318E;
    }
    .dian span:nth-child(2){
        background: #FF83BB;
    }
    .dian span:nth-child(3){
        background: #FFD6E8
    }
   .sum{
       top: 0.4rem;
       width: 100%;
       height: .88rem;
       margin-top: .4rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
    .money{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        color: #FA3C72;
    }
    .money .s1{
        font-size: .34rem;
        margin-right:0.2rem;
    }
    .money .s2{
        font-size: .44rem;
        font-weight: 700;
        margin-right:0.2rem;
    }
    .money .s3{
        font-size: .28rem;
        font-weight: 700;
    }
    .sum >a{
        display: flex;
        text-decoration: none;
        width: 3.58rem;
        color: #fff;
        font-size: .3rem;
        justify-content: center;
        align-items: center;
        height: 100%;
        background: url("../../assets/img/done.png") center center no-repeat;
        background-size: cover;
    }
</style>
