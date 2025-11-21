<script setup lang="ts">
import {useGame} from "../utils/game";
import {computed, onMounted, useTemplateRef, watch} from "vue";
import {useMagicKeys, useSwipe, useStorage, useScroll} from "@vueuse/core";

// bind number
const score = useStorage('my-score', 0)
const gameStore = useGame()

gameStore.newGame()

const gridAsList = computed(() => gameStore.theGame.value.grille.flat())

const { current } = useMagicKeys()

watch( current, () => {
  if( current.has('arrowup') ) gameStore.move('up')
  if( current.has('arrowdown') ) gameStore.move('down')
  if( current.has( 'arrowleft') ) gameStore.move('left')
  if( current.has( 'arrowright') ) gameStore.move('right')

  w.value?.scrollTo({ top: 100, left: 100 })
})

const game = useTemplateRef('game')
const w = useTemplateRef('game-w')
useScroll(w, {
  onStop() {
    w.value?.scrollTo({ top: 100, left: 100 })
  }
})
const { direction } = useSwipe(game, {
  passive: true,
  onSwipeStart: (e) => {
    e.preventDefault()
    e.stopPropagation()
  },
  onSwipe: (e) => {
      e.preventDefault()
    e.stopPropagation()
  },
  onSwipeEnd: (e, direction) => {
    e.preventDefault()
    e.stopPropagation()
    if(direction !== 'none') {
      gameStore.move(direction)
    }
  }
})
watch(() => gameStore.points.value, (newVal) => {
  if(newVal > score.value) score.value = newVal
})
onMounted(() => {
  w.value?.scrollTo({ top: 100, left: 100 })
})
</script>

<template>
  <div class="container">
    <h1>2048</h1>
    <div class="score-container">
      <div class="score-box"><div class="label">SCORE</div><div class="value">{{ gameStore.points }}</div></div>
      <div class="score-box"><div class="label">BEST</div><div class="value">{{ score }}</div></div>
    </div>

    <div class="grid-container">
      <div class="grid-cell" v-for="cell in gridAsList" :class="`tile-${cell}`">{{ cell == 0 ? '' : cell}}</div>
    </div>
    {{ direction }}
  </div>
  <div class="overflow-wrapper" ref="game-w">
    <div class="overflow" ref="game">
      <div class="top"></div>
      <div class="body">
        <div class="left"></div>
        <div class="inner-body"></div>
        <div class="right"></div>
      </div>
      <div class="bottom"></div>

    </div>
  </div>
</template>

<style>
.overflow-wrapper {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
}
.overflow {
  z-index: 1;
  overflow-y: scroll;
  overflow-x: scroll;
  min-width: calc(100vw + 200px);
  min-height: calc(100vh + 200px);
  background-color: rgba(0, 0, 0, 0.1);
  .top {
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .bottom {
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .body {
    display: flex;
  }
  .left {
    height: 100vh;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .right {
    height: 100vh;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .inner-body {
    height: 100vh;
    width: 100vw;
  }
}
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

.container {
  width: 270px;
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
  width: 270px;
  height: 270px;
  box-shadow: inset 0 0 0 4px rgba(0,0,0,0.05);
}

.grid-cell {
  background-color: #cdc1b4;
  width: 60px;
  height: 60px;
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