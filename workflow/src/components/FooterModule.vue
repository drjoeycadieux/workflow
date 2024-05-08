<script setup></script>

<template>
  <div>
    <div class="footer">
      <p>&copy; Techtack-Technologies Workflow</p>
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
    </div>
  </div>
</template>

<style scoped>
.footer ul {
  display: block;
}

.icons {
  font-size: 22px;
  color: rgb(26, 37, 71);
}

.icons:hover {
  color: rgb(68, 99, 167);
}

.footer ul li {
  display: inline;
  margin: 8px;
}
.footer ul li a {
  color: rgb(38, 68, 167);
}
.footer {
  padding: 25px;
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
