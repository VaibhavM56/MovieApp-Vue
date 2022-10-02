<template>
  <div>
    <h1>SuperHit Movies Info 🎥🎞️🎬</h1>
    <input type="text" v-model="moviename" />
    <button @click="fetchData()">Search</button>

    <div v-for="movie in movieDetails" :key="movie.id">
      <b-card
        :title="movie.show.name"
        img-src=""
        img-alt="movie-image"
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ movie.show.summary }}
        </b-card-text>

        <b-button :href="movie.show.url" variant="primary"
          >More Details</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      moviename: "",
      movieDetails: [],
    };
  },
  methods: {
    handleClick() {},
    async fetchData() {
      let res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${this.moviename}`
      );
      let resData = res.data;
      this.movieDetails = resData;
      console.log(resData);
    },
  },
};
</script>
