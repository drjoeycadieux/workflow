<script setup></script>

<template>
  <div class="navbar-header-top">
    <ul>
      <router-link class="linknav" to="/">Techtack-Technologies</router-link>
    </ul>
  </div>
</template>

<style scoped>
.navbar-header-top {
  padding: 25px;
  background-color: rgb(23, 37, 51);
}
.linknav {
  margin: 8px;
  color: white;
  text-decoration: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 26px;
}

.linknav:hover {
  color: lightslategray;
}
</style>
