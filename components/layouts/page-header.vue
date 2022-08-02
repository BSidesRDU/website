<template>

    <header class="header">

        <div class="header__inner">

            <svg>

                <title>BSides RDU</title>

                <use xlink:href="/img/icons.svg#icon-bsides-logo-small"></use>

            </svg>

        </div>

    </header>

</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    background-color: var(--dark);
    background-image: linear-gradient(var(--dark), var(--grey-500));
    // color: var(--light); padding: 0.8rem; // margin-bottom: var(--l32);
    border-bottom: 1px solid var(--dark);
    padding: 1.4rem 0 0.8rem 0;
    margin-bottom: 3rem;

    &__inner {
        width: min(80ch, 100vw - 3.2rem);
        margin: auto;
        svg {
            width: 7.7rem;
            height: 4rem;
        }
    }
}
</style>
