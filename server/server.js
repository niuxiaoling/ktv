"use strict";
const express=require('express');
const server=express();
const path=require('path');
const mysql=require('mysql');
const wymusic=require('wymusic');
const request=require('request');
const fs=require('fs');
const querystring=require('querystring');
const mymusic =wymusic();
const bodyParser=require('body-parser');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:18080,
    password:'root',
    database:'ktv'
});
// const con=mysql.createConnection({
//     host:'sqld.duapp.com',
//     user:'4593d7dea5f04e4b81bb220960832edc',
//     password:'cd3c0f8793284db8b7fffda8a3494c11',
//     database:'IiVqVMQqSztTAoUvfrgq',
//     port:4050,
// })

server.use(bodyParser.json());
server.use(express.static('./public'));
server.get('/',(req,res)=>{
    res.sendFile(path.resolve('./index.html'));
});
//获取房间号
server.get('/api/get_user',(req,res)=>{
    let sql='select num from house';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            if(result.length){
                res.json({code:2,message:'ok',data:result});
            }else{
                res.json({code:4,message:'err',data:result});
            }
        }
    })
})
//获取商品分类
server.get('/api/get_food',(req,res)=>{
    let sql='select * from goods';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            if(result.length){
                res.json({code:2,message:'ok',data:result})
            }else{
                res.json({code:4,message:'no'})
            }
        }
    })
})
server.get('/api/get_categories',(req,res)=>{
    let sql='select * from store';
    con.query(sql,(err,result)=>{
        if(result.length){
            res.json({code:2,message:'ok',data:result})

        }else{
            res.json({code:4,message:'no'});
        }
    })
});
//获取歌手组合信息
server.get('/api/get_songcates',(req,res)=>{
    let sql='select * from songcates';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err.message);
        }else{
            if(result.length){
               res.json({code:2,message:'ok',data:result})
            }else{
                res.json({code:4,message:'no'})
            }
        }
    })
})
//获取组合歌手列表
server.post('/api/get_singers',(req,res)=>{
    // let sql='select * from singers where sid=?';
    // con.query(sql,[req.query.sid],(err,result)=>{
    //     if(result.length){
    //         res.json({code:2,message:'ok',data:result})
    //     }else{
    //         res.json({code:4,message:'no'})
    //     }
    // })
    let sex=req.body.sex;
    let area=req.body.area;
    mymusic.getArtistList(
        {
            area: area, sex: sex, limit: 20
        },
        function(result){
            res.json({code:2,message:'ok',data:result.artist});
        })
})
//获取歌手所有歌曲
server.post('/api/get_songs',(req,res)=>{
   // let sql='select * from singer_list where gid=?';
   // con.query(sql,[req.query.gid],(err,result)=>{
   //     if(result.length){
   //         res.json({code:2,message:'ok',data:result})
   //     }else{
   //         res.json({code:4,message:'no'})
   //     }
   // })
   let tinguid=req.body.tinguid;
   let limit=req.body.limit;
   console.log("准备查询");
    mymusic.getSongList(
        {
            tinguid:tinguid,
            limits: limit
        },
        function(result){
            console.log("准备完毕");
            res.json({code:2,message:'ok',data:result});
        }
    );
})

// 获取指定歌曲地址
server.post('/api/get_music_info',(req,res)=>{
    let songid=req.body.song_id;
    mymusic.getSong(
        {
            songid: songid,
        },
        function(result){
            if(result){
                // console.log(result);
                res.send(result);
            }
        }
    );
})
let i = 0 ;
server.post('/api/get_music',(req,res)=>{
    let url = req.body.url;
    var options = {
        url: url
    };
    i += 1;
    if(i>1000){
        i=0;
    }
    var name = i + ".mp3";
    var dir = "./public/index/audio/";
    var visDir = "/index/audio/";
    function read(dir,fn) {
        let a=fs.readdirSync(dir);
        a.forEach(file=>{
            let abpath=path.join(dir,file);
            fn(abpath);
        })
    }
    read("public/index/audio",(pathFile)=>{
        fs.unlink(pathFile, () => {
            var writeStream=fs.createWriteStream(dir + name,{autoClose:true})
            request(options).pipe(writeStream);
            let resdir = '';
            writeStream.on('finish',function(){
                console.log("文件写入成功");
                resdir = visDir + name;
                res.json(resdir);
                console.log(resdir);
            })
        });
    });
})
// //获取歌词
server.post('/api/getSong',(req,res)=>{
    let lrclink = req.body.lrclink;
    var options = {
        lrclink: lrclink
    };
    var name = 1 + ".lrc";
    var dir = "./public/index/lyr/";
    var visDir = "/index/lyr/";
    function readlic(dir,fn) {
        let a=fs.readdirSync(dir);
        a.forEach(file=>{
            let abpath=path.join(dir,file);
            fn(abpath);
        })
    }
    readlic("public/index/lyr",(pathFile)=>{
        fs.unlink(pathFile, () => {
            var writeStream=fs.createWriteStream(dir + name,{autoClose:true})
            request(options.lrclink).pipe(writeStream);
            let lrc = '';
            writeStream.on('finish',function(){
                console.log("歌词写入成功");
                lrc = './public'+visDir + name;
                res.end((fs.readFileSync(lrc)).toString());
                console.log(lrc);
            })
        });
    });
})
//获取所有的游戏内容
server.get('/api/get_game_list',(req,res)=>{
    let sql='select * from game_list';
    con.query(sql,(err,result)=>{
        if(result.length){
            res.json({code:2,message:'ok',data:result})
        }else{
            res.json({code:4,message:'no'})
        }
    })
})


const port=18080;
server.listen(port);


