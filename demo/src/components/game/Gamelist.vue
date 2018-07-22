
<template>
    <div class="game">
        <div class="top">
            <router-link  :to="{name:'game'}">
                <div class="back">
                    <a href="javascript:;">
                        <img src="../../assets/img/icon_03.png" alt="">
                    </a>
                </div>
            </router-link>
            <span>真心话</span>
            <div class="right">
                <span @click="replace">换一批</span>
            </div>
        </div>
        <div class="main">
            <ul class="list" v-show="state==1" >
                <!--当点击的时候当前增加显示类-->
                <li  v-for="(v,i) in  truth" @click="add(v,i)">
                    <p></p>
                </li>

            </ul>
            <ul class="list1" v-show="state==2">
                <!--当点击的时候当前增加显示类-->
                <li  v-for="(v,i) in adventure " @click="add1(v,i)">
                    <p></p>
                </li>

            </ul>
        </div>
        <div :class="{'mask':true}">
            <div class="require">
                <div class="title">
                    <h2>真心话</h2>
                    <p>The truth of your heart</p>
                </div>
                <div class="content">
                    <p></p>
                </div>
                <a href="javascript:;" class="once" @click="click(active)">再来一次</a>
                <div class="close" >
                    <a href="javascript:;" @click="close(active)">
                    </a>
                </div>
            </div>
        </div>
        <div class="careful">
             <div class="about">
                <h1>注/意/事/项</h1>
                 <h2>
                     <p>MATTERS NEDING</p>
                     &nbsp;ATTENTION
                 </h2>
             </div>
            <div class="line"></div>
            <div class="detail">
                <p>1.先选真心话还是大冒险；</p>
                <p>2.再次从上方九宫格中选取一个点击打开，如果选中的无法实现，有一次机会重新选择。</p>
            </div>
        </div>
        <div class="footer">
            <div :class="{'btn1':true, 'active':state==1 }" @click='setState(1)'>真心话</div>
            <div :class="{'btn2':true, 'active':state==2}" @click='setState(2)'>大冒险</div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                state:1,
                truth:[],
                active:1,
                adventure:[],
            }
        },
        mounted:function () {
          fetch('/api/get_game_list')
              .then(res=>res.json())
              .then(r=>{
                this.truth=r.data.filter(v=>v.lid==1);
                this.adventure=r.data.filter(v=>v.lid==2);
              })
        },
        methods:{
            add:function (v,i) {
                this.active=i;
                let lis=document.querySelectorAll('.list li');
                let mask=document.querySelector('.mask');
                let content=document.querySelector('.content> p');
                if(lis[i].className=='active'){
                }else{
                    lis[i].className='active';
                    mask.className='mask active';
                    content.innerHTML=this.adventure[i].content;
                }
            },
            add1:function (v,i) {
                this.active=i;
                let lis=document.querySelectorAll('.list1 li');
                let mask=document.querySelector('.mask');
                let content=document.querySelector('.content> p');
                if(lis[i].className=='active'){
                }else{
                    lis[i].className='active';
                    mask.className='mask active';
                    content.innerHTML=this.truth[i].content;
                }
            },
            setState:function (state) {
                return this.state=state;
            },
            close:function (i) {
                let lis=document.querySelectorAll('.list li');
                    if(lis[i].className=='active'){
                        let mask=document.querySelector('.mask');
                        mask.className='mask';
                    }
            },
            replace(){
                let length = 9;
                let empty = document.querySelectorAll("li.active");
                if(empty.length != length){
                    return;
                }
                empty.forEach(value => {
                    value.classList.remove('active');
                });
            }
        }
    }
</script>
<style scoped>
    .game{
        width: 100%;
        height:100%;
        background: url("../../assets/img/bg_01.png") no-repeat;
        background-size:100%;
    }
    .top{
        position: absolute;
        left: 0;
        top:0.44rem;
        width: 100%;
        height:0.88rem;
        display: flex;
        z-index: 8;
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
        color: #ccc;
        font-size: 0.24rem;
        border:0.01rem solid  #ccc;
        justify-content: center;
        align-items: center
    }
    .main{
        position: absolute;
        top:1.4rem;
        left:0;
        z-index: 10;
        width: 100%;
        padding: 0 0.24rem 0;
    }
    .list,.list1{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top:0.1rem;
        align-items: center;
        background: #fff;
        padding-bottom: 0.1rem;
        box-shadow: 0 0.04rem 0.15rem 0.02rem #F6BACE;
    }

    .list li,.list1 li{
        width: 2.1rem;
        height: 2.1rem;
        margin: 0.1rem;
        background: url('../../assets/img/question_03.png') no-repeat;
        background-size: cover;
    }
    .list li.active,.list1 li.active{
        background:#FE318E;
    }
    .mask{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
        transform: scale(0,0);
    }
    .mask.active{
        transform: scale(1, 1);
    }
    .require{
        position: absolute;
        top: 2rem;
        left: 0;
        width: 100%;
        height: 7rem;
        background: url("../../assets/img/zxh-background.png");
        background-size: cover;
    }
    .title{
        position: absolute;
        top: 2rem;
        left: 0;
        width: 100%;
        color: #FF3158;
        font-size: 0.26rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .title h2, .title  p{
        width: 100%;
        text-align: center;
    }
    .content{
        position: absolute;
        top: 3.5rem;
        left: 0;
        font-size: 0.26rem;
        padding-left: 2.5rem;
        padding-right: 2.3rem;
        transform: rotate(5deg);
    }
    .content P{
        text-align: center;
        color: #fff;
    }
    .once{
        position: absolute;
        top: 5.7rem;
        left: 0;
        width: 3.42rem;
        height: 0.7rem;
        font-size: 0.36rem;
        text-align: center;
        line-height: 0.7rem;
        color: #fff;
        background: url("../../assets/img/zxh-button.png") no-repeat;
        background-size: contain;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .close{
        position: absolute;
        top: 6.6rem;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0.66rem;
    }
    .close a{
        width: 0.66rem;
        height: 0.66rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: url("../../assets/img/zxh-close.png") no-repeat;
        background-size: cover;
    }

    /*注意事项开始*/
    .careful{
        position: absolute;
        top:9rem;
        left:0;
        width: 100%;
        padding:0  0.24rem 0;
        background: #fff;
        font-size: 0.24rem;
    }
    .about h1{
        font-size: 0.3rem;
        color: #FE3691;
    }
    .careful .about h2{
        letter-spacing: 0.01rem;
        font-size: 0.3rem;
        display: flex;
        line-height: 0.4rem;
        color: #FE3691;
        align-items: center;
        justify-content: flex-start;
    }
    .careful .about h2 p{
        color: #8C8C91;
        font-weight: normal;
    }
    .line{
        position: absolute;
        top: 0.85rem;
        left: 0.24rem;
        width: 0.38rem;
        height: 0.06rem;
        background: #FE318E;
    }
    .detail{
        position: absolute;
        top: 1rem;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 0.24rem 0 0.24rem;
        color: #8C8C91;
    }
    .detail p{
        height: 0.4rem;
        font-size: 0.24rem;
    }
    .footer{
        position: absolute;
        top: 11.8rem;
        left: 0;
        width: 100%;
        height: 0.7rem;
        display: flex;
        z-index:10;
        justify-content: center;
        align-items: center;
    }
    .footer div{
        background: #fff;
        color: #FE318E;
    }
    .footer div.active{
        background: #FE318E;
        color:#fff;
    }
    .btn1,.btn2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.42rem;
        height: 100%;
        margin: 0 0.1rem 0 0.1rem;
        background: #FE318E;
        border: 0.01rem solid #FE318E;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        color: #fff;
    }
</style>
