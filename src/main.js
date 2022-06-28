import './banner.js';
import './tabs.js';
// import imgUrl from './assets/logo_small.png';
// import './styles/index.css';
import './styles/index.less';
import $ from 'jquery';
import App from '../src/App.vue';

// var app = new Vue({
//   render: h => h(App),

//   //注册路由信息，当这里书写router的时候，组件身上都拥有$route , $router属性
// }).$mount('#app');
// 引入字体图标文件
import './assets/fonts/iconfont.css';

$('#swiper').css('background-color', 'red');
// import imgUrl from './assets/1.gif';
// const img = document.createElement('img');
// img.src = imgUrl;
// document.body.appendChild(img);

import imgUrl1 from './assets/logo_small.png';
const img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

import imgUrl from './assets/1.gif';
const theImg = document.createElement('img');
theImg.src = imgUrl;
document.body.appendChild(theImg);

const app = createApp(App);
app.mount('#app');
