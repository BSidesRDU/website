<template>
    <a :href="$config.eventZillaLink" class="cta" target="_blank">Register Now</a>
</template>

<style lang="scss" scoped>
.cta {
    position: relative;
    background: $cta;
    color: $bright;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    font-style: italic;
    padding: 1.2rem 2.2rem;
    margin-bottom: 2.2rem;
    display: inline-block;
    border-radius: 3rem;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
}
</style>
