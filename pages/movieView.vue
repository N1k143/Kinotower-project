<template>
  <div class="container">
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;"  v-for="film in filmStore.films" :key="film.id">
    <div style="height: 550px; width: 950px" class="ratio ratio-16x9 text-center">
      <iframe :src="film.link_video" title="YouTube video" allowfullscreen></iframe>
    </div>
  </div>
  </div>

</template>

<script setup lang="ts">
import { useFilmStore } from "~/stores/Film";

const filmStore = useFilmStore();
</script>

<style scoped>

</style>