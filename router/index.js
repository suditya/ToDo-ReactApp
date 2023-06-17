import Router from 'vue-router';

import PageNotFound from '../components/PageNotFound.vue';
import LoginPage from '../components/LoginPage.vue'
import GameComponentEasy from '../components/GameComponentEasy';
import RegisterPage from '../components/RegisterPage';
import LeaderBoard from '../components/LeaderBoard'
import GameComponentMedium from '../components/GameComponentMedium'
import GameComponentHard from '../components/GameComponentHard'
import LevelComponent from '../components/LevelComponent';
import StarterComponent from '../components/StarterComponent';



const router = new Router(
    {
        mode: 'history',
        routes: [
            {
                name: 'home',
                path: '/',
                component: StarterComponent
            },
            {
                name: 'login',
                path: '/login',
                component: LoginPage
            },
            {
                name:'register',
                path:'/register',
                component:RegisterPage
            },
            {
                name:'LeaderBoard',
                path:'/leaderboard',
                component:LeaderBoard
            },
            {
                name:'GameComponentEasy',
                path:'/easyGame',
                component:GameComponentEasy
            },
            {
                name:'GameComponentMedium',
                path:'/mediumGame',
                component:GameComponentMedium
            },
            {
                name:'GameComponentHard',
                path:'/hardGame',
                component:GameComponentHard
            },
            {
                name:'LevelComponent',
                path:'/level',
                component:LevelComponent
            },
            {
                name: 'page-not-found',
                path: '*',
                component: PageNotFound
            }
        ]
    }
);


export default router;