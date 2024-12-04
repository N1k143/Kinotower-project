<template>
  <h1 class="text-center mt-2 mb-3">REGISTRATION</h1>
  <div class="container">
    <form action="" @submit.prevent="register">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">FIO</label>
      <input type="text" class="form-control" v-model="fio" id="exampleFormControlInput1" placeholder="fio">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" v-model="email" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Password</label>
      <input type="password" v-model="password" class="form-control" id="exampleFormControlInput1" placeholder="password">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1"  class="form-label">Birthday</label>
      <input type="date" class="form-control" v-model="birthday" id="exampleFormControlInput1">
    </div>
      <select class="form-select" v-model="gender" aria-label="Default select example">
        <option selected disabled>Gender</option>
        <option
            v-for="gender in genderStore.genders"
            :key="gender.id"
            :value="gender.id"
        >
          {{ gender.name }}
        </option>
      </select>


      <div class="d-grid gap-2 col-6 mx-auto mt-5">
      <button type="submit" class="btn btn-outline-primary">Sign In</button>
    </div>
    </form>
    <div v-if="errorMassage" class="alert alert-danger mt-3 mb-3">{{errorMassage}}</div>
  </div>

</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "#vue-router";

const fio = ref("");
const email = ref("");
const password = ref("");
const birthday = ref("");
const gender = ref(0);
const errorMassage = ref('');
const genderStore = useGenderStore();
const authStore = useAuthStore();
const router = useRouter()
const register = async () => {
  try {
    await authStore.signUp({
          fio: fio.value,
          email: email.value,
          password: password.value,
          birthday: birthday.value,
          gender_id: gender.value,
        },
    );
    router.push("/");
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message) {
      errorMassage.value = e.response.data.message;
    } else {
      errorMassage.value = "An error occurred. Please try again.";
    }
  }


}


</script>

<style scoped>
.container {
  border: gray solid 2px;
  border-radius: 5px;
  padding: 50px;
}
</style>