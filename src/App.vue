<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from '@/components/Header'
import appFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    'app-head': appHeader,
    'app-footer': appFooter
  }
}
</script>

<style>
  @import "./assets/css/common.css";
</style>
