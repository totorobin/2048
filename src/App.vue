<script setup lang="ts">
import PWABadge from './components/PWABadge.vue'
import Game2048 from "./components/Game2048.vue";

const build_id = import.meta.env.VITE_APP_BUILD || ''
</script>

<template>
  <main class="main">
    <Game2048 />
    <PWABadge />
  </main>
  <footer class="footer">
   build&nbsp;:&nbsp;{{build_id}}
  </footer>
</template>

<style scoped>
main {
  max-height: calc(100vh - 30px);
}
footer {
  position: absolute;
  width: 50px;
  margin: 0 auto;
  bottom: 0;
}
</style>
