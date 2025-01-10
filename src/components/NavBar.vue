<template>
  <nav class="navbar">
    <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="nav-link"
        active-class="active"
        aria-current="page"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script setup>
// 定义路由链接
const links = [
  { path: "/", name: "主页" },
  { path: "/about", name: "关于" },
];
</script>

<style scoped lang="scss">
// 定义 CSS 变量
:root {
  --nav-bg-color: #333;
  --nav-text-color: white;
  --nav-active-color: #42b983;
  --nav-hover-color: #42b983;
  --nav-spacing: 10px;
  --nav-transition: all 0.3s ease;
}

.navbar {
  background-color: var(--nav-bg-color);
  padding: var(--nav-spacing);
  display: flex;
  justify-content: center;
  flex-wrap: wrap; // 在小屏幕上换行
}

.nav-link {
  color: var(--nav-text-color);
  margin: 0 var(--nav-spacing);
  text-decoration: none;
  font-weight: bold;
  transition: var(--nav-transition);
  padding: 5px 10px; // 增加点击区域
  border-radius: 4px; // 圆角效果
  font-size: 60px; // 字体大小
  &:hover {
    color: var(--nav-hover-color);
    text-decoration: underline;
    background-color: rgba(255, 255, 255, 0.1); // 悬停背景色
  }

  &.active {
    color: var(--nav-active-color);
    text-decoration: underline;
    background-color: rgba(255, 255, 255, 0.1); // 活动背景色
  }
}

// 响应式设计
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    margin: 5px 0; // 在小屏幕上减少间距
  }
}
</style>