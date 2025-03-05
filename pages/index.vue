<template>
    <div class="min-w-screen min-h-screen germania-one-regular bg-gray-100">
        <Date/>
        <TitleMM/>
        <div class="flex justify-center w-[100%]">
            <div class="max-w-[80%] md:max-w-[60%] pb-[20px]">
                <LifeCalendar/>
            </div>
        </div>
        <Logout/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Date from '../components/Date.vue';
import TitleMM from '../components/Title.vue';
import LifeCalendar from '../components/LifeCalendar.vue';
import Logout from '../components/Logout.vue';

const router = useRouter();

const checkBirthDate = () => {
    if (!localStorage.getItem("birthdate")) {
        router.push('/details');
    }
};

onMounted(() => {
    checkBirthDate();
});
</script>

<style scoped>
.germania-one-regular {
    font-family: "Germania One", system-ui;
    font-weight: 400;
    font-style: normal;
}
</style>