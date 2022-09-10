<template>
    <span>{{ output }}</span>
</template>

<script>
export default {
    props: {
        hero: {
            type: Boolean,
            default: false,
        },
        year: {
            type: Boolean,
            default: false,
        },
        month: {
            type: Boolean,
            default: false,
        },
        dom: {
            type: Boolean,
            default: false,
        },
        day: {
            type: Boolean,
            default: false,
        },
        hour: {
            type: Boolean,
            default: false,
        },
        format: {
            type: String,
            default: '',
        },
    },
    computed: {
        output() {
            return this.$bDate(this.$props);
        },
    },
};
</script>
