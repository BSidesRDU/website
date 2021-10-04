<template>
  <footer class="footer">
    <div class="footer__inner">
      <p>
        @ Copyright 2022 BSides RDU - All rights reserved
      </p>
      <a href="https://twitter.com/BSidesRDU">
        <svg>
          <title>BSides RDU on Twitter</title>
          <use xlink:href="/img/icons.svg#icon-twitter"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com/BSidesRDU/">
        <svg>
          <title>BSides RDU on Facebook</title>
          <use xlink:href="/img/icons.svg#icon-facebook"></use>
        </svg>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: var(--l48);
  background-color: var(--dark);
  color: var(--light);
  padding-top: var(--l32);
  padding-bottom: var(--l48);

  &__inner {
    width: min(80ch, 100vw - 3.2rem);
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    p {
      font-size: var(--xs);
      margin-right: auto;
    }

    a {
      &:link,
      &:visited {
        color: var(--light);
      }

      &:not(:first-child) {
        margin-left: var(--l10);
      }
    }

    svg {
      fill: currentColor;
      width: var(--l20);
      height: var(--l20);
    }
  }
}
</style>
