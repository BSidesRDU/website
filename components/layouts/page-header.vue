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
  background-color: var(--dark);
  color: var(--light);
  padding: var(--l12);
  margin-bottom: var(--l32);

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
