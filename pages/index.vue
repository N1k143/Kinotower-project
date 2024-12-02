<script lang="ts">

</script>

<template>
  <div class="container">
<div class="row my-4">
  <div class="col-md-4">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select genre</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select country</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col">
    <select class="form-select" aria-label="Default select example">
      <option value="name">Name</option>
      <option value="year">Year</option>
      <option value="rating">Rating</option>
    </select>
  </div>
  <div class="col">
    <button type="button" class="btn btn-outline-warning">Reset</button>
  </div>
</div>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img style="height: 550px" src="https://upload.wikimedia.org/wikipedia/ru/6/6f/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%A2%D0%BE%D0%B4%D0%B4%D0%B0_%D0%A4%D0%B8%D0%BB%D0%BB%D0%B8%D0%BF%D1%81%D0%B0%29.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">The Joker</h5>
          <h6 class="card-title">8.0</h6>
          <h6 class="card-title">122 min</h6>
          <h6 class="card-title">Drama, crime, thriller</h6>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-outline-info">Info</button>
        </div>
      </div>
    </div>
  </div>

    

    <nav class="d-flex justify-content-center mt-4 mb-4" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>