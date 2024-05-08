<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="header-content">
      <div class="header-text">
        <p id="title">Techtack-Technologies | Workflow</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eveniet quas
          consectetur incidunt voluptatum eius tenetur culpa rem, magni quasi dolorum veniam,
          expedita possimus cumque blanditiis est. Eaque, ut cum?!!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  padding: 125px;
  background-color: rgb(19, 46, 85);
}

.header-text #title {
  color: white;
  font-family: sans-serif;
  font-size: 26px;
  text-align: center;
}

.header-text p {
  color: lightgray;
  font-family: sans-serif;
  font-size: 22px;
  text-align: center;
}
</style>
