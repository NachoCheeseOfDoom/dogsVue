<template>  
      <div v-if="isMounted" class="container" >
        <div v-for="(dog, idx) in dogs" :key="idx">
          <div  class="card" id="dog-card">
            <img class="dog-img" :src="dog.image.url" alt="{{ dog.name }}">
            <div class="card-body" >
              <h5 class="card-title">{{ dog.name }}</h5>
              <h5 class="card-title">{{ dog.life_span }}</h5> 
            </div>
          </div>
        </div>
      </div>   
</template>

<script>
import axios from "axios"; 

export default {
  name: "DogApi",
  components: { 
  },
  data() {
    return {
      dogs: null,
      isMounted: false
    };
  },

  async mounted() {
    await axios
      .get("https://api.thedogapi.com/v1/breeds?limit=21")
      .then((response) => (this.dogs = response.data));
    this.isMounted = true
  }, 

};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
}
#dog-card{
  margin: 7px;
  width: 60%;
  height: 250px;
}
.dog-img{
  width: 100%;
  height: 170px;
}


@media only screen and (max-width: 600px) {
  .container {
  display: grid;
  grid-template-columns: 1fr 1fr; 
}
#dog-card{
  margin: 5px;
  width: 90%;
  height: 270px;
}
.dog-img{
  width: 100%;
  height: 170px;
}
}

</style>
