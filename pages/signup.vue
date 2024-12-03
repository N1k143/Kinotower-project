<template>
  <h1 class="text-center mt-5">REGISTRATION</h1>
  <div class="container">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">FIO</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="fio">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Password</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="password">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Birthday</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="dd/MM/yyyy">
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>

    <div class="d-grid gap-2 col-6 mx-auto mt-5">
      <button type="button" class="btn btn-outline-primary">Sign In</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>