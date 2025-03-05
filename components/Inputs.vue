<template>
    <div class="flex justify-center">
      <form @submit.prevent="saveBirthdate">
        <section class="flex flex-col space-y-4">
          <label for="birthdate" class="block text-4xl">What is your birth date?</label>
          <input 
            id="birthdate"
            v-model="birthdate"
            type="date"
            class="border rounded px-2 py-1"
          />
          <button type="submit" class="bg-gray-300 text-black py-2 px-4 rounded text-xl hover:bg-gray-400">Save</button>
        </section>
      </form>
    </div> 
  </template>
    
  <script>
  export default {
    name: "Inputs",
    data() {
      return {
        birthdate: ""
      }
    },
    methods: {
      saveBirthdate() {
        if(this.birthdate) {
          localStorage.setItem("birthdate", this.birthdate);
          console.log("Birthdate saved successfully!");
          this.redirectToIndex();
        }
      },
      redirectToIndex() {
        // Using Vue Router to navigate
        this.$router.push('/'); 
      }
    },
    mounted() {
      const savedBirthdate = localStorage.getItem("birthdate");
      if(savedBirthdate) {
        this.birthdate = savedBirthdate;
        // Redirect to Index.vue if birthdate already exists
        this.redirectToIndex();
      }
    }
  };
  </script>