<script setup>
import Navbar from '../components/Navbar.vue'
</script>



<template>
  <div>
    <Navbar />
    <div class="about">
      <h3>
        About Coming Soon!
      </h3>
    </div>
  </div>
</template>


<style scoped>
.about {
    padding: 125px;
      background-color: #1f4268;
      height: 150px;
      border-bottom-left-radius: 60% 29px;
      border-bottom-right-radius: 60% 29px;
      position: relative;
      z-index: 1;
    }
    
    .about h3 {
      font-family: sans-serif;
      color: white;
      text-align: center;
      font-size: 26px;
}
</style>