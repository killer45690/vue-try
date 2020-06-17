<template>
  <div id="app">
    <HeaderMenu/>
    <router-view class="music-content"></router-view>
    <backToTop ></backToTop>
  </div>
</template>

<script>
import backToTop from './components/backToTop'
import HeaderMenu from './components/HeaderMenu'
export default {
  name: 'app',
  components: { HeaderMenu, backToTop }
}

</script>

<style scoped lang="scss">
@import "src/assets/scss/App.scss";
</style>
