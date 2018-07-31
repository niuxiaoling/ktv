DROP  TABLE  IF  EXISTS  house;
CREATE TABLE  house(
   id INT (12)  PRIMARY KEY  AUTO_INCREMENT,
   num  VARCHAR (255)
)DEFAULT CHARSET=utf8;

INSERT INTO house(id,num)
VALUES
(1,'001'),(2,'002'),(3,'003');



DROP TABLE  IF  EXISTS  store;
CREATE TABLE store(
   id  INT (12)  PRIMARY KEY  AUTO_INCREMENT,
   name VARCHAR (255)
)DEFAULT CHARSET=utf8;
INSERT INTO store(id,name)
VALUES
(1,'酒水'),(2,'零食');

DROP TABLE IF  EXISTS  goods;
CREATE  TABLE goods(
   id  INT (12)  PRIMARY KEY  AUTO_INCREMENT,
   hid VARCHAR (255),
   sid  INT (255),
   name VARCHAR (255),
   price VARCHAR (255),
   info VARCHAR (255),
   pic VARCHAR (255)
)DEFAULT  CHARSET=utf8;
INSERT INTO goods(id,sid,hid,name,price,info,pic)
VALUES
(1,1,1,'HELMSAN啤酒','8','350ml','/index/img/1.png'),
(2,1,1,'HELMSAN啤酒','3','350ml','/index/img/2.png'),
(3,1,1,'HELMSAN啤酒','8','350ml','/index/img/3.png'),
(4,1,1,'HELMSAN啤酒','9','350ml','/index/img/1.png'),
(5,1,2,'MUI','8','100g','/index/img/4.png'),
(6,1,2,'Mwef','3','200g','/index/img/4.png'),
(7,1,2,'Mc','8','150g','/index/img/5.png'),
(8,1,2,'MUIC','9','50g','/index/img/5.png');


DROP TABLE IF EXISTS  songcates;
CREATE TABLE songcates(
  id INT (12) PRIMARY KEY  AUTO_INCREMENT,
  name VARCHAR (255),
  area VARCHAR(255),
  sex  VARCHAR (255),
  pic  VARCHAR (255)
)DEFAULT  CHARSET=utf8;
INSERT INTO songcates(id,name,area,sex,pic)
VALUES
(1,' 华语偶像组合',1,3,'/index/img/pic_07.png'),
(2,' 内地男歌手',1,1,'/index/img/pic_11.png'),
(3,' 港台歌手',2,3,'/index/img/pic_16.png'),
(4,' 日韩女歌手',4,2,'/index/img/pic_18.png'),
(5,' 内地女歌手',1,2,'/index/img/pic_03.png'),
(6,' 青春偶像歌手',5,3,'/index/img/pic_07.png');

DROP TABLE  IF EXISTS singers;
CREATE TABLE  singers(
   id INT (12)  PRIMARY KEY  AUTO_INCREMENT,
   sid VARCHAR (255),
   name  VARCHAR (255),
   total  VARCHAR (255),
   pic  VARCHAR (255)
)DEFAULT CHARSET=utf8;
INSERT INTO singers(id, sid, name, total, pic)
VALUES
(1,1,'好妹妹乐队','382','/index/img/zuhe0.jpg'),
(2,1,'Beyond','123','/index/img/zuhe1.jpg'),
(3,1,'五月天','123','/index/img/zuhe1.jpg'),
(4,1,'五月天','123','/index/img/zuhe1.jpg'),
(5,1,'TFBOYS','432','/index/img/zuhe3.jpg'),
(6,1,'南拳妈妈','334','/index/img/zuhe3.jpg'),
(7,1,'苏打绿','234','/index/img/zuhe3.jpg'),
(8,1,'逃跑计划','123','/index/img/zuhe3.jpg'),
(9,1,'Beyond','123','/index/img/zuhe3.jpg');

DROP TABLE  IF EXISTS singer_list;
CREATE TABLE singer_list(
  id  INT(12)  PRIMARY KEY  AUTO_INCREMENT,
  gid VARCHAR (255),
  name VARCHAR (255),
  time VARCHAR (255),
  music VARCHAR (255)
)DEFAULT  CHARSET=utf8;
INSERT INTO singer_list(id, gid, name, time, music)
VALUES
(01,1,'往事只能回味','03:40','/index/audio/飘洋过海来看你'),
(02,1,'不说再见','03:40','/index/audio/飘洋过海来看你'),
(03,1,'风从海面吹过来','03:40','/index/audio/飘洋过海来看你'),
(04,1,'你飞到城市另一边','03:40','/index/audio/飘洋过海来看你'),
(05,1,'我也可以是流浪诗人','03:40','/index/audio/飘洋过海来看你'),
(06,1,'一个人的北京','03:40','/index/audio/飘洋过海来看你'),
(07,1,'再一次的再见','03:40','/index/audio/飘洋过海来看你');

DROP TABLE  IF EXISTS game_list;
CREATE TABLE game_list(
  id INT(12)  PRIMARY KEY  AUTO_INCREMENT,
  lid VARCHAR (255),
  content VARCHAR (255)
)DEFAULT  CHARSET=utf8;
INSERT INTO game_list(id,lid,content)
VALUES
(1,1,'你会不会在意ta的过去，为什么'),
(2,1,'你最怕的事情或东西是什么,说出三件'),
(3,1,'谈过几次恋爱?'),
(4,1,'让你一直念念不忘的一位异性的名字？原因？'),
(5,1,'高中时代，你看哪位老师最不顺眼?'),
(6,1,'在现场所有同学中，你看哪位异性同学最舒服?'),
(7,1,'你吻过几个人？'),
(8,1,'大学所有考试中，你考到最低的一门是什么课，考了几分?'),
(9,1,'大学一共挂过几门课?'),
(10,2,'对着门外喊“打雷了，下雨收衣服啊'),
(11,2,'对一个陌生人说：“打扰了，我不会看表，请您看一下我的手表上显示的是几点。'),
(12,2,'去肯德基或麦当劳买一杯可乐，等店员问你要中杯还是大杯时说：我要D罩杯'),
(13,2,'与离你最近的异性相遇，男生说：你好，我姓锄名禾，你呢?女生说：我名叫当午。男生女生同时说：哦!原来是锄禾日当午啊!'),
(14,2,'用笔在额头上画一个乌龟。直到游戏结束。'),
(15,2,'蹲在凳子上作便秘的样子。然后边吃东西，20秒。'),
(16,2,'和离你最近的异性面对面相隔一厘米，然后做接吻陶醉状10秒。'),
(17,2,'吻从你右手边数起第三位异性的鼻子'),
(18,2,'抱一位离你最远的异性直到下一轮真心话大冒险结束');

