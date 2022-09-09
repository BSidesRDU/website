<template>
    <div class="countdown-timer">
        <div v-if="!ready">
            <div class="countdown-timer__ticking-time-bomb">&nbsp;</div>
            <div class="countdown-timer__until">&nbsp;</div>
        </div>
        <div v-else-if="ready && !done">
            <div class="countdown-timer__ticking-time-bomb">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</div>
            <div class="countdown-timer__until">Until BSidesRDU 2022!</div>
        </div>
        <div v-else class="countdown-timer__bsides">Time for BSides!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeout: null,
            target: new Date('2022-10-15T08:00:00').getTime(),
            interval: null,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    },

    computed: {
        ready() {
            return this.interval !== null;
        },

        done() {
            return this.interval !== null && this.interval < 0;
        },
    },

    mounted() {
        this.timer = setInterval(() => {
            const now = new Date().getTime();
            this.interval = this.target - now;

            this.days = Math.floor(this.interval / 86400000)
                .toString()
                .padStart(2, '0');
            this.hours = Math.floor((this.interval % 86400000) / 3600000)
                .toString()
                .padStart(2, '0');
            this.minutes = Math.floor((this.interval % 3600000) / 60000)
                .toString()
                .padStart(2, '0');
            this.seconds = Math.floor((this.interval % 60000) / 1000)
                .toString()
                .padStart(2, '0');

            if (this.interval < 0) {
                clearInterval(this.timeout);
            }
        }, 1000);
    },

    beforeDestroy() {
        clearInterval(this.timeout);
    },
};
</script>

<style scoped>
.countdown-timer {
    text-align: center;
}
.countdown-timer__ticking-time-bomb {
    font-family: var(--mono);
    font-style: italic;
    font-size: 4.5rem;
    color: var(--cta);
}
.countdown-timer__bsides {
    font-size: 4.5rem;
}
.countdown-timer__until {
    font-size: 2.5rem;
}
</style>
