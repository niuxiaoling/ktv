<template>
    <div class="house">
        <div class="house-bgimg">
            <img src="../assets/img/house.jpg" alt="">
        </div>
        <header>选择房间</header>
        <div class="house-num">
            <ul>
                <li v-for="(v,i) in (1,2,3,4,5,6,7,8,9)">
                    <div class="radio" @click="check(v)" :id="v"> {{v}}</div>
                </li>
            </ul>
        </div>
        <div class="house-sub" @click="mysubmit">
            确认
        </div>
    </div>
</template>
<script>
    export default {
        name:'house',
        methods:{
            check:function (n) {
                let lis = document.querySelectorAll('.radio');
                lis[n-1].classList.add('active');
                lis.forEach((v,i)=>{
//                    v.classList.remove('active');
//                    if(i+1==n){
//                        v.classList.add('active');
//                    }
                })
            },
            mysubmit:function () {
                let act = document.querySelectorAll('.active');
                let num=0;
                act.forEach((v,i)=>{
                    num+=v.id;
                })
                let house=document.querySelector(".house");
                if(act){
                    localStorage.house=act.id;
//                    fetch('/api/get_user?num='+this.num)
//                        .then(res => res.json())
//                        .then(r => {
//                            let obj = r.data.filter(v => v.num == num);
//                            if (!localStorage.house) {
//                                if (obj[0]) {
//                                    localStorage.house = obj[0].num;
//                                    this.state =null;
//                                }
//                            } else {
//                                this.state = 1;
//                            }
//                        })
                    location.href='#/home';
                }else{
                    return;
                }

            }
        },
        mounted:function () {

        },
    }
</script>
<style scoped>
    .house{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
    header{
        width: 100%;
        color: white;
        font-size: 0.42rem;
        text-align: center;
        position: absolute;
        top: 0.8rem;
        left: 0;
        z-index: 50;
    }
    .house-bgimg{
        height: 100%;
        width: 200%;
        position: absolute;
        top:0;
        left: 0%;
        animation: move 20s cubic-bezier(1,1,1,1) alternate-reverse infinite;
        z-index: 10;
    }
    .house-num{
        position: absolute;
        top: 2.4rem;
        width:80%;
        height: auto;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 60;
        color: #fff;
    }
    .house-num ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: rgba(0,0,0,0.6);
    }
    .house-num ul li{
        width: 30%;
        height: 1.6rem;
        text-align: center;
        line-height: 1.4rem;
        padding: 0.1rem;
    }
    .house-num ul li div{
        width:100%;
        height: 100%;
        border-radius: 50%;
    }
    .house-num ul li div.active{
        background: #c63c7c;
    }
    .radio{
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
    }
    .house-sub{
        width: 60%;
        height: 1.2rem;
        text-align: center;
        color: #fff;
        font-size: 0.56rem;
        line-height: 1.2rem;
        background: #FE3191;
        position: absolute;
        top:70%;
        right: 0;
        left: 0;
        margin: auto;
        z-index: 300;
        border-radius: 1rem;
    }
    @keyframes move {
        0%{
            left: -10%;
        }
        50%{
            left: -40%;
        }
        100%{
            left: -80%;
        }
    }

</style>