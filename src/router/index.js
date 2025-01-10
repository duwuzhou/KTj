import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

// 定义路由
const routes = [
  {
    path: '/', // 路由路径
    component: Home, // 对应的组件
    children: [
      {
        path: '', // 默认子路由
        component: () => import('@/views/Home1.vue')
      }
    ]
  },
  // 可以添加更多路由
  {
    path: '/about',
    component: () => import('@/views/about.vue'),
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的 history 模式
  routes, // 传入路由配置
});

export default router; // 导出路由实例