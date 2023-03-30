<template>
  <div class="container mx-auto p-2">
    <h1 class="text-4xl my-5">75-Ball Bingo</h1>
    <button @click="reset" class="bg-red-500 py-2 px-6 rounded-lg">Reset</button>
    <div class="message">{{ message }}</div>
    <div class="game py-10">
      <div class="bingo-card">
        <div class="bingo-row" v-for="(row, index) in bingoCard" :key="index">
          <div class="bingo-cell" v-for="(cell, index) in row" :key="index" :class="{ 'marked': cell.marked, 'clickable': !cell.marked && cell.value === pulledNumbers[pulledNumbers.length - 1] }" @click="markCell(cell)">{{ cell.value }}</div>
        </div>
      </div>
      <div class="bingo-numbers">
        <h2 class="text-4xl my-5">Pulled Numbers</h2>
        <div class="bingo-row">
          <div class="bingo-cell" v-for="(number, index) in pulledNumbers.slice().reverse()" :key="index">{{ number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bingoCard: [],
      pulledNumbers: [],
      message: ''
    };
  },
  mounted() {
    // Generate a new bingo card
    this.generateCard();
    this.pullNumber();
    // Start pulling numbers every 10 seconds
    setInterval(this.pullNumber, 5000);
  },
  methods: {
    // Generate a new bingo card with random numbers
    generateCard() {
      let numbers = [];
      for (let i = 1; i <= 75; i++) {
        numbers.push(i);
      }
      // Shuffle the numbers
      for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      // Divide the numbers into 5 rows of 5 each
      for (let i = 0; i < 5; i++) {
        this.bingoCard.push(numbers.slice(i * 5, (i + 1) * 5).sort((a, b) => a - b).map(number => ({ value: number, marked: false })));
      }
      // Mark the center cell as "free"
      this.bingoCard[2][2].value = 'FREE';
      this.bingoCard[2][2].marked = true;
    },
    // Pull a random number between 1 and 75
    pullNumber() {
      let number = Math.floor(Math.random() * 75) + 1;
      // Check if the number has already been pulled
      if (!this.pulledNumbers.includes(number)) {
        this.pulledNumbers.push(number);
        this.checkForWin();
      } else {
        // If the number has already been pulled, try again
        this.pullNumber();
      }
    },
    // Mark a cell on the bingo card as "marked"
    markCell(cell) {
      if (!cell.marked && this.pulledNumbers.find(number => number === cell.value)) {
        cell.marked = true;
        this.checkForWin();
      }
    },
    // Check the bingo card for winning patterns
    checkForWin() {
      let rows = this.bingoCard;
      let cols = [[], [], [], [], []];
      let diag1 = [];
      let diag2 = [];
      let markedCount = 0;
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        for (let j = 0; j < row.length; j++) {
          let cell = row[j];
          if (cell.value === this.pulledNumbers[this.pulledNumbers.length - 1]) {
            markedCount++;
          }
          cols[j].push(cell);
          if (i === j) {
            diag1.push(cell);
          }
          if (i + j === 4) {
            diag2.push(cell);
          }
        }
      }
      // Check rows and columns for a winning pattern
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let col = cols[i];
        if (row.every(cell => cell.marked) || col.every(cell => cell.marked)) {
          this.message = 'Bingo! You won!';
          return;
        }
      }
      // Check diagonals for a winning pattern
      if (diag1.every(cell => cell.marked) || diag2.every(cell => cell.marked)) {
        this.message = 'Bingo! You won!';
        return;
      }
      // If all numbers have been pulled and there is no winning pattern, the game is a draw
      if (this.pulledNumbers.length === 75 && markedCount < 5) {
        this.message = 'Game over. It\'s a draw.';
      }
    },
    // Reset the game
    reset() {
      this.bingoCard = [];
      this.pulledNumbers = [];
      this.message = '';
      this.generateCard();
    }
  }
};
</script>


<style>
.bingo-card {
  display: inline-block;
  margin-right: 20px;
}

.bingo-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 16rem;
}

.bingo-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: bold;
}

.marked {
  background-color: #0da002;
}

.clickable {
  cursor: pointer;
  background-color: #ff8d8d;
}

.bingo-numbers {
  display: flex;
  flex-wrap: wrap;
  width: 16rem;
}

.message {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}
</style>
