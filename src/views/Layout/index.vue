<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {useCounterStore} from '@/stores/counter.js'
import { onMounted } from 'vue'
const CounterStore=useCounterStore()
onMounted(()=>{
  CounterStore.getCategorydata()
})
// 触发获取导航列表的action
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
  <div class="all">

  </div>
</template>

<style scoped lang="scss">
  .all{
    width:100%;
    height:1000px;
    background:pink;
  }
</style>