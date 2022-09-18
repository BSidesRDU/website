<template>
  <footer class="footer">
    <div class="footer__inner">
      <p>@ Copyright {{ $config.year }} BSides RDU - All rights reserved</p>
      <a href="https://twitter.com/BSidesRDU">
        <svg width="32" height="32">
          <title>BSides RDU on Twitter</title>
          <use href="/img/icons.svg#iconTwitter" width="32" height="32"></use>
        </svg>
      </a>
      <a href="https://www.facebook.com/BSidesRDU/">
        <svg width="32" height="32">
          <title>BSides RDU on Facebook</title>
          <use href="/img/icons.svg#iconFacebook" width="32" height="32"></use>
        </svg>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 4.8rem;
  background-color: $dark;
  color: $light;
  padding-top: 3.2rem;
  padding-bottom: 4.8rem;

  &__inner {
    width: min($width, 100vw - 3.2rem);
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    p {
      font-size: 1.4rem;
      margin-right: auto;
    }

    a {
      &:link,
      &:visited {
        color: $light;
      }

      &:not(:first-child) {
        margin-left: 1rem;
      }
    }

    svg {
      fill: currentColor;
      width: 3.2rem;
      height: 3.2rem;
    }
  }
}
</style>
