<template>
    <img
        :src="`/img/bsides-${year}-logo.png`"
        :alt="`BSides RDU ${year} ${$config.theme} Logo`"
        :title="`BSides RDU ${year} ${$config.theme}`"
    />
</template>

<script>
export default {
    computed: {
        year() {
            return this.$bDate({ year: true });
        },
    },
};
</script>
