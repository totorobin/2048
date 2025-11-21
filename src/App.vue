<script setup lang="ts">
import PWABadge from './components/PWABadge.vue'
import Game2048 from "./components/Game2048.vue";

const build_id = import.meta.env.VITE_APP_BUILD || ''
</script>

<template>
  <main class="main">
    <PWABadge />
    <Game2048 />
  </main>
  <footer class="footer">
   <p>build : {{build_id}}</p>
  </footer>
</template>

<style scoped>
main {
  max-height: calc(100vh - 30px);
}
footer {
  position: absolute;
  min-width: 150px;
  bottom: 0;
}

</style>
