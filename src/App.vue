<template>
  <div id="app">
    <transition name="fade"
		            mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@import '~scss_temp';

html,body{
    margin: 0;
    height: 100%;
}

#app {
  font-family: 'Microsoft YaHei';
  height: 100%;
}
</style>
