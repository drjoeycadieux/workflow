<script setup>
import FooterModule from '../components/FooterModule.vue'
import Navbar from '../components/Navbar.vue'
import Alerts from '../components/Alerts.vue'
</script>

<template>
  <div>
    <Alerts />
    <Navbar />
    <div class="header-content">
      <div class="header-text">
        <p id="title">Techtack-Technologies | Workflow</p>
        <div class="content-container">
          <p>
            With Content Technology, we enable Media Companies, Educational organisations, Corporate
            Institutions and Retailers engage their customers and staff by creating workflow
            solutions that create content, manage content, distribute content and analyse content.
          </p>
          <img class="logo" width="304" src="../assets/logo1.png" alt="" />
        </div>
      </div>
    </div>
    <br />
    <div class="header-showcase">
      <div class="header-content-title">
        <p id="title">Technical Support</p>
        <div class="content-container">
          <p>
            A help desk is a resource intended to provide the customer or end user with information
            and support related to a company's or institution's products and services
          </p>
          <img class="logo" width="304" src="../assets/logo2.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <FooterModule />
  </div>
</template>

<style scoped>
.header-content {
  padding: 75px;
  background-color: rgb(39, 65, 102);
  position: relative;
  z-index: 1;
  border-bottom-left-radius: 35% 29px;
  border-bottom-right-radius: 35% 29px;
}

.header-showcase {
  padding: 125px;
  background-color: rgb(35, 50, 73);
  position: relative;
  z-index: 1;
  border-bottom-left-radius: 35% 29px;
  border-bottom-right-radius: 35% 29px;
}

.header-showcase p {
  color: white;
  width: 600px;
  font-family: sans-serif;
  font-size: 23px;
}

.logo {
  width: 305px;
  border-radius: 15px;
}

.content-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.header-text p {
  color: white;
  font-family: sans-serif;
  font-size: 23px;
  width: 600px;
}
</style>
