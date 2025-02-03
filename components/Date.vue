<template>
    <div class="clock" className="flex flex-col items-center w-full justify-center p-2">
        <p class="date" className=" text-4xl font-bold p-3"> {{ date }} </p>
        <p class="time" className=" text-4xl font-bold p-3"> {{ time }} </p>
    </div>
</template>

<script>
export default {
    name: "Date",
    data() {
        return {
            date: "00-00-0000",
            time: "00:00:00",
        };
    },
    methods: {
        // Helper function to add leading zeros
        formatTime(value) {
            return value < 10 ? `0${value}` : value;
        },
        showCurrentDateTime() {
            const dateTime = this;

            setInterval(function() {
                var currentDT = new Date();
                // Format date
                dateTime.date = dateTime.formatTime(currentDT.getDate())+ " / " + 
                dateTime.formatTime(currentDT.getMonth() + 1) + " / " + currentDT.getFullYear();
                // Format time
                dateTime.time = dateTime.formatTime(currentDT.getHours()) + ":" + 
                                dateTime.formatTime(currentDT.getMinutes()) + ":" + 
                                dateTime.formatTime(currentDT.getSeconds());
            }, 1000);
        }
    },
    mounted() {
        this.showCurrentDateTime(); // Call the method when the component is mounted
    }
};
</script>