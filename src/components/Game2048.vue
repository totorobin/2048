<template>
  <div class="container">
    <h1>2048</h1>

    <div class="score-container">
      <div class="score-box"><div class="label">SCORE</div><div class="value">532</div></div>
      <div class="score-box"><div class="label">BEST</div><div class="value">69.6k</div></div>
    </div>

    <div class="grid-container">
      <div class="grid-cell tile-4">4</div>
      <div class="grid-cell tile-2">2</div>
      <div class="grid-cell"></div>
      <div class="grid-cell"></div>

      <div class="grid-cell tile-128">128</div>
      <div class="grid-cell tile-4">4</div>
      <div class="grid-cell"></div>
      <div class="grid-cell tile-2048" >2048</div>

      <div class="grid-cell tile-32">32</div>
      <div class="grid-cell tile-8">8</div>
      <div class="grid-cell tile-4">4</div>
      <div class="grid-cell tile-2">2</div>

      <div class="grid-cell tile-64">64</div>
      <div class="grid-cell tile-16">16</div>
      <div class="grid-cell tile-8">8</div>
      <div class="grid-cell tile-4">4</div>
    </div>
  </div>
</template>

<style>

body {
  font-family: Arial, sans-serif;
  text-align: center;
}

.container {
  width: 320px;
  margin: 0 auto;
}

.score-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  gap: .5rem;
}

.score-box {
  background-color: #bbada0;
  color: white;
  padding: .25rem .5rem;
  border-radius: 5px;
  min-width: 60px;
}
.score-box .label { font-size: .75rem; opacity: .9; }
.score-box .value { font-weight: 700; font-size: 1.1rem; }

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  position: relative;
  background: #bbada0;
  padding: 10px;
  border-radius: 6px;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 320px;
  height: 320px;
  box-shadow: inset 0 0 0 4px rgba(0,0,0,0.05);
}

.grid-cell {
  background-color: #cdc1b4;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: #776e65;
}

/* Tile colors */
.tile-2 { background-color: #eee4da; }
.tile-4 { background-color: #ede0c8; }
.tile-8 { background-color: #f2b179; color: #f9f6f2; }
.tile-16 { background-color: #f59563; color: #f9f6f2; }
.tile-32 { background-color: #f67c5f; color: #f9f6f2; }
.tile-64 { background-color: #f65e3b; color: #f9f6f2; }
.tile-128 { background: #edcf72; color: #f9f6f2; font-size: 1.5rem; }
.tile-256 { background: #edcc61; color: #f9f6f2; font-size: 1.5rem; }
.tile-512 { background: #edc850; color: #f9f6f2; font-size: 1.5rem; }
.tile-1024 { background: #edc53f; color: #f9f6f2; font-size: 1.4rem; }
.tile-2048 { background: #edc22e; color: #f9f6f2; font-size: 1.4rem; }

/* Add more tile colors as needed */

</style>
<script setup lang="ts">
</script>