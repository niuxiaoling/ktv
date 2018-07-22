<template>
    <div class="play" :style="{'background-image':`url(${music.pic_big})`}">
         <div class="shadow"></div>
         <div class="shadow1"></div>
        <div class="ktv">
            <input type="hidden" value="飘洋过海来看你">
            <audio  controls src=""></audio>
            <div class="head">
                <router-link :to="{name:'musicorder'}">
                   <div class="back">
                   </div>
                </router-link>
                <h3>{{music.title}}--{{music.author}}</h3>
            </div>
            <ul class="lyrics"  ref="lyrics">
                <li v-for="(v,i) in lyrics" :class="{hot:index==i}">
                    {{v.text}}
                </li>
            </ul>
            <ul class="btn">
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/btn1.png" alt="">
                        <span>原/伴</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/btn2.png" alt="">
                        <span>切歌</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <!--停止播放-->
                        <img src="../assets/img/btn3.png" alt="" class="show"  v-show="play==false" @click="stop(false)">
                        <!--开始播放-->
                        <img src="../assets/img/btn3s.png" alt="" class="show" v-show="play==true" @click="start(true)">
                    </a>
                </li>
                <li>
                    <a href="javascript:;" >
                        <img src="../assets/img/btn4.png" alt="">
                        <span>重唱</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/img/btn5.png" alt="">
                        <span>录歌</span>
                    </a>
                </li>
            </ul>
            <div class="voice">
                 <div class="voice1">
                     <div class="micro"></div>
                     <div class="time1">00:00</div>
                     <div class="length">
                         <div class="length1"></div>
                        <div class="circle"></div>
                     </div>
                     <div class="time2">00:00</div>
                 </div>
                <div class="voice2">
                    <div class="sounds"></div>
                    <div class="sound">
                        <div class="slong"></div>
                        <div class="circles"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                play:false,
                //获取本次音乐的所有信息
                music:this.$route.params.music,
                //获取歌词
                lyrics:null,
                //获取歌曲地址
                song1:'fsdfsdf',
                //获取歌词地址
                musicsrc:null,
                //需要传的音乐地址
                url:'',
                //获取播放时间
                time:0,
            }
        },

        methods:{
            start:function(ok){
                var audio=document.querySelector('audio');
                audio.pause();
                this.play=!ok;
            },
            stop:function (ok) {
                var audio=document.querySelector('audio');
                audio.play();
                this.play=!ok;
            },
            str2ms:function (str) {
                let ms=0;
                console.log(str.split(':'));
                str.split(':').forEach((v,i)=>{
                    v = parseInt(v);
                    if(v) {
                        switch (i) {
                            case 0:
                                ms += v * 60 * 1000;
                                break;
                            case 1:
                                ms += v * 1000;
                                break;
                            case 2:
                                ms += Number(v);
                        }
                    }
                });
                console.log("ms: " + ms);
                return ms;
            }
        },
        computed: {
            index:function () {
//                time  102
//                lyric=[90,95,100,105]
                let index1=0;
                this.lyrics.forEach((v,i)=>{
                    if(this.time>=v.time){
                        index1=i;
                    }
                })
                this.$refs.lyrics.scrollTop=11*index1-100;
                return index1;
            }
        },
        mounted:function () {
            fetch('/api/get_music_info',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({song_id:this.music.song_id})
            })
                .then(res=>res.json())
                .then(r=>{
                    this.url=r.file_link;
                    this.musicsrc=r.lrclink;
                    fetch('/api/get_music',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({url:this.url})
                    })
                        .then(res=>res.json())
                        .then(d=>{
                            console.log("this.song1:" + this.song1);
                            document.querySelector("audio").src=d;
//                            this.song1="/static/audio/1.mp3";
                            console.log(this.song1);
                            console.log("this.play:" + this.play);
                        });
                    fetch(this.musicsrc)
                        .then(res=>res.text())
                        .then(data=>{
                            console.log("歌词返回来了");

                            if(data){
                                let r=data.split('\n');
                                let o=[];
                                r.forEach(v=>{
                                    if(v){
                                        var time =this.str2ms(v.match(/\[(.*)\]/)[1]);
                                        o.push({time:time,text:v.replace(/\[.*\]/,'')})
                                    }
                                    this.lyrics=o;
                                })
                            }

                            console.log(this.lyrics);
                        })
                })

            var audio=document.querySelector('audio');
//            当前时间
            var currTime=Math.round(audio.currentTime);
//            总时间
            var sumTime=Math.round(audio.duration);
            var currenPrograss=document.querySelector('.length1');
            var circleWidth=document.querySelector('.circle');
            var time1=document.querySelector('.time1');
            var time2=document.querySelector('.time2');
            if(this.play){
               audio.play();
            }else{
                audio.pause();
            }
            audio.ontimeupdate=()=>{
                move();
                this.time=audio.currentTime*1000;

            }
            function move() {
                //歌曲播放的时间进度
                currTime=Math.round(audio.currentTime);
                var m=Math.trunc(currTime/60)>=10?Math.trunc(currTime/60):'0'+Math.trunc(currTime/60);
                var s=Math.trunc(currTime%60)>=10?Math.trunc(currTime%60):'0'+Math.trunc(currTime%60);
                time1.innerHTML=`${m}:${s}`;
                //歌曲总的播放时间
                sumTime=Math.round(audio.duration);
                var sm=Math.trunc(sumTime/60)>=10?Math.trunc(sumTime/60):'0'+Math.trunc(sumTime/60);
                var ss=Math.trunc(sumTime%60)>=10?Math.trunc(sumTime%60):'0'+Math.trunc(sumTime%60);
                time2.innerHTML=`${sm}:${ss}`;
                //设置歌曲播放的进度条
                currenPrograss.style.width=(currTime/sumTime)*100+'%';
                circleWidth.style.left=(currTime/sumTime)*100+'%';
                //音量的操作
//                移动的音量条
                var currVol=document.querySelector('.slong');
                var circlevol=document.querySelector('.circles');
//                总的音量条
                var parvol=document.querySelector('.sound');
                let currentVol=1;
                audio.onvolumechange=function () {
                    format();
                }
                function format() {
                    currVol.style.width=audio.volume*currVol+'px';
                    circlevol.style.left=audio.volume*currVol-2+'px';
                }
                parvol.onclick=function (e) {
                    let target=e.target||e.srcElement;
                    if(target.className=='circlevol'){
                        return;
                    }
                    let Width=e.offsetX;
                    currVol.style.width=Width+'px';
                    circlevol.style.left=Width-2+'px';
                    audio.volume=Width/currVol.parentElement.offsetWidth;
                    currentVol=audio.volume;
                    audio.volume = Width / currVol.parentElement.offsetWidth;
                }
            }


        }
    }
</script>
<style scoped>
     audio{
         position:absolute;
         left:0;
         top:0;
         z-index:999;
         display:none;
     }
    .play{
        width: 100%;
        height: 100vh;
        /*background: url('../assets/img/zuhe1.jpg') no-repeat;*/
        background-size: cover;
    }
    .shadow{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height:80%;
        opacity: 0.6;
        z-index: 0;
        background: url('../assets/img/play_bg.png') no-repeat;
        background-size: cover;
    }
    .shadow1{
        position: fixed;
        left:0;
        bottom:0;
        width: 100%;
        height: 40%;
        z-index: 0;
        background: url('../assets/img/play_bg2.png') no-repeat;
        background-size: cover;
    }
    .ktv{
        width: 100%;
        height: 100%;
        padding:0 0.24rem 0;
        box-sizing: border-box;
    }
    .head{
        width: 100%;
        height: 10%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .head .back{
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        margin: auto;
        background: url("../assets/img/icon_03.png") no-repeat;
        background-size: cover;
    }
    .back a{
        width: 100%;
        height: 100%;
        display: block;
    }
    .head  h3{
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 0.36rem;
        color: #fff;
    }
    .lyrics{
        width: 96%;
        height:55%;
        margin-top: 0.1rem;
        overflow-y: scroll;
        overflow-x: hidden;
        z-index: 10;
    }
     .lyrics li.hot{
         color: yellow;
         transform:scale(1.2);
     }
    .lyrics li{
        marign:.1rem 0;
        font-size: 0.3rem;
        color: #fff;
        transform: scale(1,1);
        transition: all 1s ease;
        text-align: center;
    }
    .btn{
        position: relative;
        width: 100%;
        height:15%;
        display: flex;
        z-index: 999;
        align-items: center;
        justify-content: space-around;
        padding-top:.5rem;
    }
    .btn li{
        display: list-item;
    }
    .btn li a{
        width: 100%;
        display: block;
        align-items: center;
    }
    .btn li a img{
        width: 0.88rem;
        height: 0.88rem;
        margin-bottom: 0.18rem;
        display: block;
    }
    .btn li a span{
        display: block;
        text-align: center;
        font-size: 0.22rem;
    }
    .btn .show{
        width: 1.1rem;
        height: 1.1rem;
        margin-top: -0.3rem;
    }
    .voice{
        position: relative;
        width: 100%;
        height: 1.44rem;
    }
    .voice .voice1,.voice2{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .voice1 .micro{
        width: 0.33rem;
        height: 0.44rem;
        background: url("../assets/img/v1.png") no-repeat;
        background-size: cover;
    }
    .time1,.time2{
        font-size:.22rem;
    }
    .length{
        width: 70%;
        height: 0.14rem;
        border-radius: 0.05rem;
        background: #ddd;
        position: relative;
    }
    .length1{
        width:0;
        height: 100%;
        border-radius: 0.05rem;
        background: #FA62A5;
    }
    .circle{
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background: #fff;
        top:50%;
        transform: translateY(-50%);
        box-shadow: 0 0.01rem 0.15rem 0.01rem rgba(0,0,0,.3);
        left:0;
    }
    .sounds{
        width: 0.44rem;
        height: 0.43rem;
        background: url("../assets/img/v2.png") no-repeat;
        background-size: cover;
    }
    .sound{
        width: 70%;
        height: 0.14rem;
        border-radius: 0.05rem;
        background: #ddd;
        position: relative;
    }
    .slong{
        width:100%;
        height: 100%;
        border-radius: 0.05rem;
        background: #FA62A5;
    }
    .circles{
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background: #fff;
        top:50%;
        transform: translateY(-50%);
        box-shadow: 0 0.01rem 0.15rem 0.01rem rgba(0,0,0,.3);
        left:100%;
    }
     /*.lyrics li.active{*/
         /*color:red;*/
     /*}*/
</style>
