<script setup>
import Navbar from '../../components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="blog">
      <h1>Coming Soon! Blog</h1>
    </div>
  </div>
</template>

<style scoped>
.blog {
  padding: 125px;
  background-color: darkslateblue;
}

.blog h1 {
  text-align: center;
  font-family: sans-serif;
  color: white;
  font-size: 30px;
}
</style>
