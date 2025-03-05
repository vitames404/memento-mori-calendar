<template>
    <div class="flex justify-center flex-col items-center">
      <!-- Logout Button with Icon -->
      <button
        @click="handleLogout"
        class="bg-gray-300 text-black rounded pt-3 px-3 text-xl hover:bg-gray-400"
      >
        <Icon class="p-[15px]" name="uil:sign-out-alt" />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Logout",
    methods: {
      handleLogout() {
        // Remove birthdate from localStorage
        localStorage.removeItem("birthdate");
  
        // Refresh the page
        this.$router.push('/details'); 
      },
    },
  };
  </script>
