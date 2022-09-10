<template>
    <img
        :src="logo"
        :alt="`BSides RDU ${$config.year} Hacktoberfest Logo`"
        :title="`BSides RDU ${$config.year} Hacktoberfest`"
    />
</template>

<script>
export default {
    data() {
        return {
            faces: ['dark', 'med', 'light'],
            braids: ['blond', 'blue', 'brown', 'green', 'multi', 'red'],
        };
    },
    computed: {
        logo() {
            let face = this.faces[Math.floor(Math.random() * this.faces.length)];
            let hair = this.braids[Math.floor(Math.random() * this.braids.length)];
            return `/img/bsides-{this.$config.year}-logo-${face}-${hair}.png`;
        },
    },
};
</script>
