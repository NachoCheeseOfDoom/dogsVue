<template>
  
  <NavbarComponent  > 
  </NavbarComponent>
  <HelloWorld msg="Dog list" />
  <DogApi></DogApi>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DogApi from "./components/DogApi.vue"; 
import NavbarComponent from "./components/NavbarComponent.vue"; 

export default {
  name: "App",
  components: {
    HelloWorld,
    DogApi,
    NavbarComponent
},

methods:{

  offline(){
    return window.navigator.onLine
  }
}
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
