<script setup></script>

<template>
  <div>
    <div class="alerts">
      <p>
        <i class="bi bi-info-circle"></i> <strong>FYI</strong> We just launch a brand new-website
        after a <strong>cyber-incident</strong>
        <router-link class="links" to="News/News">Learn More &rarr;</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.alerts {
  padding: 3px;
  background-color: blueviolet;
}

.links {
  color: lightgray;
  font-family: sans-serif;
  text-decoration: none;
}

.links:hover {
  color: white;
  text-decoration: underline;
}

.alerts p {
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
}
</style>
