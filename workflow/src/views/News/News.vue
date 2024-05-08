<script setup>
import Navbar from '../../components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <div class="learn-more">
      <h2>News | About Cyber-Incident</h2>
    </div>
  </div>
</template>

<style scoped>
.learn-more {
  padding: 75px;
  overflow: hidden;
}

.learn-more {
  background-color: #1f4268;
  height: 150px;
  border-bottom-left-radius: 60% 29px;
  border-bottom-right-radius: 60% 29px;
  position: relative;
  z-index: 1;
}


.learn-more h2 {
  color: #fff;
  font-family: sans-serif;
  font-size: 26px;
  text-align: center;
  padding-top: 50px;
}
</style>
