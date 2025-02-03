<template>
    <div class="life-calendar">
      <!-- Grid Container -->
      <div class="grid grid-cols-30 md:grid-cols-52 gap-[5px]">
        <!-- Generate 4,680 squares -->
        <div
          v-for="(square, index) in squares"
          :key="index"
          :class="[
            'w-[5px] h-[5px]  md:w-2.5 md:h-2.5 border rounded-sm border-gray-600',
            { 'bg-gray-500': isColored(index) },
            { 'bg-gray-200': !isColored(index) },
          ]"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalSquares: 4680, // Total weeks in 90 years
        weeksLived: 1140, // Example: Weeks lived so far
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
    },
  };
  </script>