<template>
  <div v-if="online()">
    <div v-if="isMounted" class="container">
      <div v-for="(dog, idx) in dogs" :key="idx">
        <div class="card" id="dog-card">
          <img class="dog-img" :src="dog.image.url" alt="{{ dog.name }}" />
          <div class="card-body">
            <h6 style="font-weight: bold" class="card-title">{{ dog.name }}</h6>
            <h6 class="card-title">{{ dog.life_span }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div  v-else>
    <div>
      <h3 class="offline-text">Offline</h3>
    </div>
    <div class="container">
      <div v-for="(dog, idx) in 21" :key="idx">
        <div class="card" id="dog-card">
          <div class="card"  aria-hidden="true">
            <img  src="../assets/images/pawprints.png" class="dog-img" alt="..." />
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span> 
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-6"></span>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DogApi",
  components: {},
  data() {
    return {
      dogs: null,
      isMounted: false,
    };
  },

  methods: {
    online() {
      return window.navigator.onLine;
    },
  },

  async mounted() {
    await axios
      .get("https://api.thedogapi.com/v1/breeds?limit=21")
      .then((response) => (this.dogs = response.data));
    this.isMounted = true;
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

#dog-card {
  margin: 7px;
  width: 60%;
  height: 260px;
}
.dog-img {
  width: 100%;
  height: 170px;
}

.offline-text{
  background-color: rgba(255, 0, 0, 0.374);
}

@media only screen and (max-width: 600px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #dog-card {
    margin: 5px;
    width: 90%;
    height: 270px;
  }
  .dog-img {
    width: 100%;
    height: 170px;
  }
}
</style>
