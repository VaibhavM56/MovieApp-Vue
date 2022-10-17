<template>
  <div>
    <h1>SuperHit Movies Info 🎥🎞️🎬</h1>
    <input type="text" v-model="moviename" />
    <b-button @click="fetchData()" variant="success">Search</b-button>

    <!-- <div
      class="movie-card"
      id="my-display"
      :items="movieDetails"
      :per-page="perPage"
      :current-page="currentPage"
    > -->
    <div class="card text-center m-3">
      <div class="movie-card card-body">
        <div v-for="movie in movieDetails" :key="movie.id">
          <b-card
            :title="movie.show.name"
            :img-src="movie.show.image.medium"
            img-alt="movie-image"
            tag="article"
            style="width: 20rem"
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
      <div class="card-footer pb-0 pt-3">
        <jw-pagination
          :pageSize="4"
          :items="movieDetails"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>

    <!-- <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-display"
      ></b-pagination>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      moviename: "",
      movieDetails: [],
      pageOfItems: [],
      // perPage: 4,
      // currentPage: 1,
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
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  // computed: {
  //   rows() {
  //     return this.movieDetails.length;
  //   },
  // },
};
</script>

<style>
/* .movie-card {
  display: flex;
} */
</style>
