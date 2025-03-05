<template>
    <div class="flex justify-center germania-one-regular items-center min-h-screen bg-gray-100 w-full">
      <div class="max-w-[80%] md:max-w-[60%] pb-5">
        <Inputs/>
      </div>
    </div>
  </template>
  
  <script setup>
    import Inputs from '../components/Inputs.vue'
    import TitleMM from '../components/Title.vue'
  </script>

<style scoped>
  .germania-one-regular {
    font-family: "Germania One", system-ui;
    font-weight: 400;
    font-style: normal;
  }
</style>