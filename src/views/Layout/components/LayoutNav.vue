
<script setup>
import { ref } from 'vue'
const isLogin = ref(false)
const usrname=ref('xiaoxu')
const handleLogout=()=>{
    isLogin.value=false
}
const handLogin=()=>{
    isLogin.value=true
}

</script>
<template>
    <nav class="app-topnav"> <!--先划分区域，再加一个大盒子也就是单根盒子-->
        <div class="container">
            <ul>
                <template v-if="isLogin"><!--用template是虚拟容器只有操作不占位置-->
                    <li>
                        <a href="#">
                        {{ usrname }}
                        </a>
                    </li>
                    <li>
                        <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消"
                            @confirm="handleLogout">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm><!--*比普通的弹出框多了确认按钮和事件监听-->
                    </li>
                    <li>
                        <a href="#">会员中心</a>
                    </li>
                    <li>
                        <a href="#">我的订单</a>
                    </li>
            </template>
            <template v-else>
                <li>
                    <a href="#" @click="handLogin">请先登录</a>
                </li>
                <li>
                    <a href="#">帮助中心</a>
                </li>
                <li>
                    <a href="#">关于我们</a>
                </li>
            </template>
            </ul>
        </div>
    </nav>
</template>
<style scoped lang="scss">
        .app-topnav {
    background: #333;
    
    ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
      
      li {
        a {
          padding: 0 15px;
          color: #cdcdcd;
          line-height: 1;/*line-height还有行内元素块级元素以及分类*/
          display: inline-block;/*ie盒子和标准盒子*/
          
          i {
            font-size: 14px;
            margin-right: 2px;
          }
          
          &:hover {
            color: $xtxColor; // 需要全局变量支持
          }
        }
        
       
        
      }
    }
  }
</style>
