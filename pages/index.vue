<script setup lang="ts">
import { ref } from "vue";
import { useFilmStore } from "~/stores/Film";
import {useCategoryStore} from "~/stores/category";

const filmStore = useFilmStore();
const countryStore = useCountrystore();
const categoryStore = useCategoryStore();
const category = ref(null);
const country = ref(null);
const sort = ref('name');
const filter = () => {
  filmStore.addSortToParams(sort.value);
  filmStore.addCountryToParams(country.value);
  filmStore.addCategoryToParams(category.value);
  filmStore.fetchFilms();
}

const resetFilter = () => {
      category.value = null;
      country.value = null;
      sort.value = 'name';
      filter();
}

const goto = (page: number) => {
  page = (page < 1) ? 1 : page;
  page = (page > filmStore.totalPages) ? filmStore.totalPages : page;
  filmStore.currentPage = page;
  filmStore.fetchFilms();
}

import { useRouter } from  "vue-router";
const router = useRouter();

const navigateTo = (filmId: string) => {
  router.push({ path: '/movieView', query: { id: filmId } });
};
</script>


<template>
  <div class="container">
<div class="row my-4">
  <div class="col-md-4">
    <select v-model="category" @change="filter" class="form-select" aria-label="Default select example">
      <option selected>Select genre</option>
      <option
          v-for="category in categoryStore.categories"
          :key="category.id"
          :value="category.id">{{category.name}} ({{category.filmCount}})</option>
    </select>
  </div>
  <div class="col">
    <select v-model="country"  @change="filter" class="form-select" aria-label="Default select example">
      <option selected>Select country</option>
      <option
          v-for="country in countryStore.countries"
          :key="country.id"
          :value="country.id">{{country.name}}</option>
    </select>
  </div>
  <div class="col">
    <select v-model="sort"  @change="filter" class="form-select" aria-label="Default select example">
      <option value="name">Name</option>
      <option value="year">Year</option>
      <option value="rating">Rating</option>
    </select>
  </div>
  <div class="col">
    <button type="button" @click="resetFilter" class="btn btn-outline-warning">Reset</button>
  </div>
</div>
    <div class="text-center mt-4 mb-4" v-if="filmStore.isLoading" >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="film in filmStore.films" :key="film.id">
    <div class="card h-100">
      <img v-if="film.link_img" style="height: 550px" :src="film.link_img" class="card-img-top" alt="...">
      <img v-else style="height: 550px" src="https://poster4.me/wp-content/uploads/2020/01/img_1551.jpeg" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{film.name}}</h5>
          <h6 class="card-title">{{film.ratingAvg}}</h6>
          <h6 class="card-title">{{film.duration}}</h6>
          <h6 class="card-title"><template v-for="category in film.categories" :key = "category.id">{{category.name}}
          {{category.name}}
          </template></h6>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-info" @click="navigateTo('/movieView')">VIEW</button>
          <a :href="film.link_kinopoisk" type="button" class="btn btn-outline-warning me-2" target="_blank" rel="noopener noreferrer">Kinopoisk</a>
        </div>
      </div>
    </div>
  </div>



    <nav v-if="!filmStore.isLoading" class="d-flex justify-content-center mt-4 mb-4" aria-label="Page navigation example">
      <ul class="pagination">
        <li
            :class="{'disabled': filmStore.currentPage === 1}"
            class="page-item">
          <a
              @click.prevent="goto(filmStore.currentPage - 1)"
              class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
            v-for="page in filmStore.totalPages"
            :key="page"
            class="page-item"
            :class="{ active: page === filmStore.currentPage }">
          <a
              @click.prevent="goto(page)"
              class="page-link" href="#">{{page}}</a></li>
        <li
            :class="{'disabled': filmStore.currentPage === 2}"
            class="page-item">
          <a
              @click.prevent="goto(filmStore.currentPage + 1)"
              class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>