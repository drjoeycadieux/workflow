<script setup></script>

<template>
  <div>
    <div class="footer">
      <p>&copy; 2020-2024 Techtack-Technologies | Workflow</p>
      <ul>
        <li>
          <a class="icons" href="https://github.com/drjoeycadieux/workflow/tree/main/workflow"
            ><i class="bi bi-github"></i
          ></a>
        </li>
        <li>
          <a class="icons" href=""><i class="bi bi-facebook"></i></a>
        </li>
        <li>
          <a class="icons" href=""><i class="bi bi-twitter-x"></i></a>
        </li>
      </ul>
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2>Inside Company</h2>
            <ul>
              <li><a href="#">Career (not open)</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="column">
            <h2>Help Center</h2>
            <ul>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Github Repository</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container h2 {
  font-family: sans-serif;
  font-size: 26px;
}

.columns {
  display: flex;
  justify-content: space-between;
}

.column {
  width: 45%;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}
.footer ul {
  display: block;
}

.icons {
  font-size: 22px;
}

.icons:hover {
  color: rgb(68, 99, 167);
}

.footer ul li {
  display: inline;
  margin: 8px;
}
.footer ul li a {
  color: black;
  font-family: sans-serif;
  text-decoration: none;
  font-weight: bold;
}
.footer a:hover {
  color: rgb(31, 35, 39);
  text-decoration: underline;
}
.footer {
  padding: 10px;
  text-align: center;
}

.footer p {
  color: rgb(26, 37, 71);
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 21px;
}
</style>
