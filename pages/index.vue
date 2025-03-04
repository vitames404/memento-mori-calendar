<template>
        <TitleMM/>
        <Date/>
        <div class="flex justify-center w-[100%]">
            <div class="max-w-[80%] md:max-w-[60%] pb-[20px]">
                <LifeCalendar/>
            </div>
        </div>
</template>

<script setup>
    import Date from '../components/Date.vue'
    import TitleMM from '../components/Title.vue'
    import LifeCalendar from '../components/LifeCalendar.vue'
</script>