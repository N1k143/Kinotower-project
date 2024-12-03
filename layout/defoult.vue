<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CinemaLife</a>
        <div class="buttons justify-content-end ">
          <button type="button" class="btn btn-outline-light me-3" @click="navigateTo('/signin')">Sign In</button>
          <button type="button" class="btn btn-outline-light" @click="navigateTo('/signup')">Sign Up</button>
        </div>
      </div>
    </nav>
  </header>

  <main class="flex-shrink-0 my-2">
    <slot/>
    <NuxtPage />
  </main>

  <footer class="fixed-bottom text-center">
    <div class="container">
      <span class="text-body-secondary text-center">CinemaLife 2024</span>
    </div>
  </footer>
  <div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from  "vue-router";
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
}
</script>

<style>

</style>