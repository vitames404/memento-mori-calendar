<template>
    <div class="life-calendar">
      <!-- Grid Container -->
      <div>
        0 - 82 weeks (row) | 90 years average (total)
      </div>
      <div>
      <div class="grid grid-cols-30 md:grid-cols-82 gap-[5px]">
        <!-- Generate 4,680 squares -->
        <div
          v-for="(square, index) in squares"
          :key="index"
          :class="[
            'w-[4px] h-[4px]  md:w-[8px] md:h-[8px] border rounded-sm border-gray-600',
            { 'bg-black': isColored(index) },
            { 'bg-gray-200': !isColored(index) },
          ]"
        >
      </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalSquares: 4680, // Total weeks in 90 years
        weeksLived: 0,
      };
    },
    computed: {
      squares() {
        // Create an array of 4,680 squares
        return Array.from({ length: this.totalSquares });
      },
    },
    methods: {
      isColored(index) {
        // Color the squares that represent weeks lived
        return index < this.weeksLived;
      },
      calculateLivedWeeks(birthdate) {

        const birthDate = new Date(birthdate);
        const currentDate = new Date(); 

        // Calculate the total milliseconds between the two dates
        const timeDifference = currentDate - birthDate;

        // Convert milliseconds to weeks
        const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
        const totalWeeksLived = Math.floor(timeDifference / millisecondsInWeek);

        console.log(totalWeeksLived);
        this.weeksLived = totalWeeksLived;
        
      },
    },
    mounted(){
      this.calculateLivedWeeks(localStorage.getItem("birthdate"));
    }
  };
  </script>