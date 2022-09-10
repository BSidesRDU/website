<template>
    <div class="countdown-timer">
        <div v-if="!ready">
            <div class="countdown-timer__ticking-time-bomb">&nbsp;</div>
            <div class="countdown-timer__until">&nbsp;</div>
        </div>
        <div v-else-if="ready && !done">
            <div class="countdown-timer__ticking-time-bomb">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</div>
            <div class="countdown-timer__until">Until BSidesRDU {{ $bDate({ year: true }) }}!</div>
        </div>
        <div v-else class="countdown-timer__bsides">Time for BSides!</div>
    </div>
</template>

<script>
const { DateTime } = require('luxon');

export default {
    data() {
        return {
            timeout: null,
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
        this.timeout = setInterval(() => {
            const now = DateTime.now().setZone('America/New_York');
            const bSides = DateTime.fromISO(this.$config.bsidesDate).setZone('America/New_York');

            this.interval = bSides.diff(now);
            this.days = Math.floor(bSides.diff(now, 'days').days).toString().padStart(2, '0');
            this.hours = Math.floor(bSides.diff(now, 'hours').hours % 24)
                .toString()
                .padStart(2, '0');
            this.minutes = Math.floor(bSides.diff(now, 'minutes').minutes % 60)
                .toString()
                .padStart(2, '0');
            this.seconds = Math.floor(bSides.diff(now, 'seconds').seconds % 60)
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

<style lang="scss" scoped>
.countdown-timer {
    text-align: center;

    &__ticking-time-bomb {
        font-family: $mono;
        font-style: italic;
        font-size: 4.5rem;
        color: $cta;
    }
    &__bsides {
        font-size: 4.5rem;
    }

    &__until {
        font-size: 2.5rem;
    }
}
</style>
