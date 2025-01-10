<!-- eslint-disable -->
<template>
  <div class="about">
    <!-- 返回按钮 -->
    <van-button @click="goBack" class="back-button">
      <--
    </van-button>

    <h1 class="gradient-text">关于我们</h1>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(slide, index) in slides" :key="index">
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="swipe-image"
          @click="handleSlideClick(index)"
        />
      </van-swipe-item>
    </van-swipe>
    <van-collapse v-model="activeNames" class="custom-collapse">
        <van-collapse-item title="诞生" class="collapse-item">
          <div class="content">
            <p>我们的组织成立于2022年冬天，正值互联网门槛不断降低、大众化和低龄化的时期。通过对互联网现状的深刻反思，尤其是对饭圈文化、流量明星、低俗内容等问题的厌恶，我们集结了有识之士，决心打破混乱的网络秩序。我们经历了小学生圈子、开团圈子的兴衰，深刻认识到低龄化、低智化网络行为的危害。</p>
          </div>
        </van-collapse-item>
        <van-collapse-item title="目标" class="collapse-item">
          <div class="content">
            <p>我们的目标是通过以下行动推动互联网环境的改善：
              <br>
              1.打击饭圈文化和流量明星：反对以肖战、蔡徐坤、王一博等为代表的流量明星及其极端粉丝群体的无脑追星、网络暴力等行为。
              <br></br>
              2.打击对抗网络恶俗现象：清理魔怔人、喷子、低俗开户手段等不良行为，净化网络空间。
              <br></br>
              3.建立新的网络秩序：打破低龄化、低智化的网络生态，推动更加理性、健康、有序的网络环境。
              <br></br>
              4.长期愿景：通过持续努力，减少低俗和极端行为的影响，成为网络环境中的“清流”，引领更多人走向理性和成熟。</p>
          </div>
        </van-collapse-item>
    </van-collapse>

    <h2>组织结构</h2>
    <div class="organization">

      <div class="van-divider">
        <p>TTNC</p>
        <van-image :src="require('@/assets/images/a2.jpg')"></van-image>
      </div>
      <div class="van-divider">
        <p>東方红</p>
        <van-image :src="require('@/assets/images/a4.jpg')"></van-image>
      </div>
      <div class="van-divider">
        <p>梅狸猫</p>
        <van-image :src="require('@/assets/images/a3.jpg')"></van-image>
      </div>
      <div class="van-divider">
        <p> 東日计划</p>
        <van-image :src="require('@/assets/images/dr.png')"></van-image>
      </div>
    </div>


      <div class="van-dk-divider">
        <p>帝空</p>
        <van-image  class="van-dk" :src="require('@/assets/images/a1.jpg')"></van-image>
      </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {showToast} from 'vant';

// 获取路由实例
const router = useRouter();
const activeNames = ref(["1"]);

// 返回上一页的函数
const goBack = () => {
  router.go(-1);
};

// 轮播图数据
const slides = ref([
  {
    image: require('@/assets/images/a1.jpg'),
    alt: 'Slide 1',
  },
  {
    image: require('@/assets/images/a2.jpg'),
    alt: 'Slide 2',
  },
  {
    image: require('@/assets/images/a3.jpg'),
    alt: 'Slide 3',
  },
  {
    image: require('@/assets/images/a4.jpg'),
    alt: 'Slide 4',
  },
  {
    image: require('@/assets/images/dr.png'),
    alt: 'Slide 5',
  }
]);

// 处理轮播图点击事件
const handleSlideClick = (index) => {
  showToast(`点击了第 ${index + 1} 张图片`);
};
</script>

<style scoped>
.about {
  padding: 20px;
  text-align: center;
  position: relative;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #333; /* 默认字体颜色 */
}

h1 {
  color: #ff070f; /* 红色 */
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* 渐变文字样式 */
.gradient-text {
  background: linear-gradient(45deg, #ff070f, #fad0c4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* 轮播图样式 */
.my-swipe {
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.swipe-image {
  width: 80%;
  height: 1000px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.swipe-image:hover {
  transform: scale(1.05);
}

/* 返回按钮样式 */
.back-button {
  font-size: 25px;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  color: #333; /* 按钮文字颜色 */
}

/* 优化折叠面板样式 */
.custom-collapse {
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.collapse-item {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.collapse-item:hover {
  font-size: 30px;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.collapse-item >>> .van-cell {
  padding: 20px;
  background: linear-gradient(135deg, #ff070f, #fad0c4);
  color: #000000; /* 折叠面板标题颜色 */
  font-size: 30px;
  font-weight: 500;
}

.collapse-item >>> .van-cell__title {
  font-size: 60px !important;
}

.collapse-item >>> .van-collapse-item__wrapper {
  background: #fff;
}

.content {
  padding: 20px;
  font-size: 35px;
  line-height: 1.8;
  color: #555; /* 折叠面板内容颜色 */
  background: #fafafa;
}

.content p {
  color: #ff070f; /* 折叠面板内容颜色 */
  margin: 0;
  text-indent: 2em;
}

/* 组织结构样式 */
.organization {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.van-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.van-divider p {
  font-size: 60px;
  font-weight: 500;
  color: #ff070f; /* 红色 */
  margin-right: 20px;
}

.van-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
/* 帝空样式 */
.van-dk-divider{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px 0;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

}
.van-dk-divider p {
  font-size: 60px;
  font-weight: 500;
  color: #ff070f; /* 红色 */
  margin-right: 20px;
  text-align: center;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.van-dk {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  overflow: hidden;
}



/* 响应式样式 */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .swipe-image {
    width: 80%;
    height: 600px;
    margin: 0 auto;
  }

  .my-swipe {
    margin: 10px -20px;
  }

  .collapse-item >>> .van-cell {
    padding: 16px;
    font-size: 16px;
  }

  .content {
    padding: 16px;
    font-size: 14px;
  }

  .organization {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .van-divider {
    height: 150px;
    margin: 100px -20px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }

  .van-image {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    margin: 0 10%;
  }

  .van-divider p {
    font-size: 60px;
    margin-right: 10px;
    color: #ff070f; /* 红色 */
    text-align: center;
    line-height: 1.5;
  }

  .van-dk-divider {
    height: 150px;
    margin: 150px auto;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }

  .van-dk {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10%;
  }
}
</style>