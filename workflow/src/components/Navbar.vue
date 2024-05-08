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
  padding: 10px;
  background-color: rgb(23, 37, 51);
  box-shadow:
    0px 0px 25px 15px rgba(0, 0, 0, 0.1),
    0px 10px 15px 48px rgba(0, 0, 0, 0.1);
}
.linknav {
  margin: 8px;
  color: white;
  text-decoration: none;
  font-size: 26px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.linknav:hover {
  color: lightslategray;
}
</style>
