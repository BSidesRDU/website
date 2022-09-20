<template>
  <a :href="$config.sponsorshipLink" class="sponsorships" target="_blank">
    Sponsorships!
    <svg width="20" height="20">
      <title>New Window</title>
      <use href="/img/icons.svg#iconNewWindow" width="20" height="20"></use>
    </svg>
  </a>
</template>

<style lang="scss" scoped>
.sponsorships {
  color: $links;
  font-size: 3rem;
  font-weight: 500;
  font-style: italic;
  text-decoration: underline;
  border: none;
  // z-index: 1;
  white-space: nowrap;
  display: block;
  width: 100%;
  text-align: center;

  svg {
    fill: currentColor;
    width: 2rem;
    height: 2rem;
    margin-left: 0.4rem;
  }
}
</style>
