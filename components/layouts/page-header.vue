<template>
  <header class="header">
    <div class="header__inner">
      <nuxt-link to="/">
        <svg>
          <title>BSides RDU</title>
          <use xlink:href="/img/icons.svg#iconBsidesLogo"></use>
        </svg>
      </nuxt-link>
      <layouts-hamburger-menu class="header__box" />
      <layouts-main-menu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: $dark;
  background-image: linear-gradient($dark, $grey-500);
  // color: $light; padding: 0.8rem; // margin-bottom: $l32;
  border-bottom: 1px solid $dark;
  padding: 1.4rem 1rem 0.8rem 1rem;
  margin-bottom: 3rem;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
    margin: auto;

    svg {
      width: 7.7rem;
      height: 4rem;
    }
  }
}

@include desktop {
  .header {
    &__inner {
      max-width: 90rem;
    }
  }
}
</style>
