<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBarComp/>
  <router-view/>

  <FooterComp/>

</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default{
  components:{
    NavBarComp,
    FooterComp
  }
}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family:arapey;
}
body{
  background-color: black !important;
  overflow-x: hidden; /* Add this line to remove horizontal scrolling */
  margin: 0;
    padding: 0;
    }
</style>
