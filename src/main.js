import {createApp} from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import router from '@/router/index'; // 导入路由配置

const app = createApp(App);
app.use(Vant);
app.use(router); // 使用路由
app.mount('#app');