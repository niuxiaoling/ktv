<template>
    <div class="home">
        <div class="top">
            <img src="../assets/img/dingwei_03.png" alt="">
            <div class="place">
                <span>北京</span>
                <img src="../assets/img/xian.png" alt="">
            </div>
        </div>
        <div class="middle">
            <img src="../assets/img/zi_02.png" alt="">
        </div>
        <div class="bottom">
            <router-link :to="{name:'music',params:{hid:this.house}}">
                <img src="../assets/img/music.png" alt="">
            </router-link>
            <router-link :to="{name:'game'}">
                <img src="../assets/img/game.png" alt="">
            </router-link>
            <router-link :to="{name:'store',params:{hid:this.house}}">
                <img src="../assets/img/store.png" alt="">
            </router-link>
            <router-link :to="{name:'me'}">
                <img src="../assets/img/my.png" alt="">
            </router-link>
        </div>
        <!--display为真时显示，为假时隐藏-->
        <!--<div :class="{'shadow':true,'display':!state}">-->
            <!--<div class="pic">-->
                <!--<input type="text" placeholder="请输入您的房间号" v-model="house">-->
                <!--<button @click="add">确定</button>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                house: "",
//                state: 1,
            }
        },
        mounted: function () {
//             if(localStorage.house){
//                 this.state=1;
//             }else{
//                 this.state=null;
//             }
        },
        methods: {
//            add: function () {
//                fetch('/api/get_user')
//                    .then(res => res.json())
//                    .then(r => {
//                        let obj = r.data.filter(v => v.num == this.house);
//                        if (!localStorage.house) {
//                            if (obj[0]) {
//                                localStorage.house = obj[0].num;
//                                this.state =null;
//                            }
//                        } else {
//                            this.state = 1;
//                        }
//                    })
//
//            }
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background-image: url("../assets/img/bg.png");
        background-size: cover;
    }

    .back {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .top {
        position: absolute;
        left: 0.25rem;
        top: 0.59rem;
        height: 0.42rem;
        width: 100%;
        /*background: #f40;*/
        display: flex;
        justify-content: flex-start;
    }

    .top > img {
        width: 0.3rem;
        height: 100%;
    }

    .place {
        width: 0.6rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 0.24rem;
        margin-left: 0.08rem;
    }

    .place > img {
        width: 0.5rem;
        height: 0.03rem;
        margin-top: 0.02rem;
    }

    .middle {
        position: absolute;
        top: 4.69rem;
        left: 0;
    }

    .middle > img {
        width: 6.6rem;
        height: 3.65rem;
    }

    .bottom {
        width: 100%;
        position: absolute;
        left: 0;
        z-index: 10;
        top: 8.24rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .bottom a {
        width: 3.4rem;
        height: 2.3rem;
        margin: 0 0.13rem 0.22rem 0.13rem;
    }

    .bottom a img {
        width: 100%;
        height: 100%;
    }

    /*隐藏*/
    .shadow {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 12;
        transition: transform .1s ease;
        transform: scale(0, 0);
        background: rgba(0, 0, 0, .4);
    }

    /*显示*/
    .shadow.display {
        transform: scale(1, 1)
    }

    .pic {
        position: absolute;
        top: 2rem;
        left: 0;
        width: 100%;
        height: 7rem;
        background: url('../assets/img/zxh-background.png') no-repeat;
        background-size: cover;
    }

    .pic input {
        outline: none;
        border: none;
        width: 2.8rem;
        height: 1rem;
        font-size: 0.28rem;
        position: absolute;
        left: 2.5rem;
        top: 3.6rem;
    }

    .pic button {
        position: absolute;
        top: 5.6rem;
        left: 3.4rem;
        outline: none;
        border: none;
        color: #fff;
        width: 1.4rem;
        height: 0.8rem;
        font-size: 0.4rem;
        border-radius: 0.2rem;
        background: #FF318E;
    }
</style>
