<template>
  <div class="sand-container">
    <div
      v-for="(rows, rowIndex) in matrix"
      :key="rowIndex"
    >
      <div
        v-for="(cell, cellIndex) in rows"
        :key="cellIndex"
        class="cell"
        :class="{ filled: cell }"
        @mouseover="initiateSandfall(rowIndex, cellIndex)"
      >
    </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 30
  },
  height: {
    type: Number,
    default: 30
  }
})

const matrix = ref()

const init = (): void => {
  matrix.value = Array.from({length: props.width}, () => Array.from({length: props.height}, () => false))
}

const initiateSandfall = (row: number, col: number) => {
  startSandfall(row, col)
}

const startSandfall = (row: number, col: number) => {
  let rowInit = row
  let colInit = col
  matrix.value[row][col] = true
  let customInterval = setInterval(() => {
    console.log(rowInit, colInit)
    if (colInit < props.height - 1) {
      if (!matrix.value[rowInit][colInit + 1]) {
        matrix.value[rowInit][colInit] = false
        matrix.value[rowInit][colInit + 1] = true
        colInit++
      }
    } else {
      clearInterval(customInterval)
    }
  }, 500)
}

init()
</script>
  
<style scoped lang="scss">
.sand-container {
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .cell {
    width: 10px;
    height: 10px;
    border: 0.5px solid black;
  }
  .filled {
    background-color: black;
  }
  .lol {
    position: fixed;
    bottom: 0;
  }
}
</style>
  