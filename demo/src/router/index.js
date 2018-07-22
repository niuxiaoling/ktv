import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Game from  '../components/Game'
import Me  from  '../components/Me'
import Music from '../components/Music'
import musiclist from '../components/music/musiclist.vue'
import musicorder from  '../components/music/musicorder'
import Rank  from '../components/music/Rank'
import Often from '../components/music/Often'
import Recommend  from  '../components/music/Recommend'
import Store  from '../components/Store'
import Swater from  '../components/store/Swater'
import Singers  from '../components/music/Singers'
import singerInfo from '../components/music/singerInfo'
import Play from '../components/Play'
import Gamelist from '../components/game/Gamelist'
import Bill  from  '../components/store/Bill'
import Success from  '../components/store/Success.vue'
import House from '../components/House'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'house',
            component: House
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: '/music',
            name: 'music',
            component: Music,
            children:[
                {
                    path:'',
                    name:'musiclist',
                    component:musiclist
                },
                {
                    path:'/music/rank',
                    name:'rank',
                    component:Rank
                },
                {
                    path:'/music/often',
                    name:'often',
                    component:Often
                },
                {
                    path:'/music/recommend',
                    name:'recommend',
                    component:Recommend
                },
            ]
        },
        {
            path: '/store',
            name: 'store',
            component: Store,
        },
        {
            path: '/store/swater',
            name: 'swater',
            component: Swater
        },
        {
            path: '/music/singers',
            name: 'singers',
            component: Singers
        },
        {
            path: '/music/singerinfo',
            name: 'singerinfo',
            component: singerInfo
        },
        {
            path:'/music/musicorder',
            name:'musicorder',
            component:musicorder
        },
        {
            path:'/play',
            name:'play',
            component:Play
        },
        {
            path:'/game/gamelist',
            name:'gamelist',
            component:Gamelist
        },
        {
            path:'/store/bill',
            name:'bill',
            component:Bill
        },
        {
            path:'/store/success',
            name:'success',
            component:Success
        },
        {
            path:'/house',
            name:'house',
            component:House
        },

    ]
})
