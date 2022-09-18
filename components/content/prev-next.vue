<template>
  <div class="prev-next">
    <div class="prev-next__prev">
      <nuxt-link v-if="prev" :to="`/${prev.slug}`" alt="`${prev.title}`"
        >&laquo; {{ prev['short-title'] || prev.what }}</nuxt-link
      >
    </div>
    <div class="prev-next__next">
      <nuxt-link v-if="next" :to="`/${next.slug}`" alt="`${next.title}`"
        >{{ next['short-title'] || next.what }} &raquo;</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default() {
        return null;
      },
    },
    next: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style lang="scss">
.prev-next {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: #cccccc;
  background-image: linear-gradient(to bottom, #cacaca, #dddddd);
  margin-bottom: 3.5rem;
  font-size: 1.6rem;

  &__prev > a,
  &__next > a {
    position: relative;
    z-index: 10;
  }
}
</style>
