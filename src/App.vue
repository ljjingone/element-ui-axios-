<template>
  <div id="app">
   <Head></Head> 
    <Index/> 
  </div>
</template>

<script>
import Index from './components/Index'
import Head from './components/Header'
export default {
  name: 'App',
  components: {
    Index,
    Head
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
