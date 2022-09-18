<template>
  <section class="content-section">
    <div v-if="anchor" class="anchor" :id="anchor"></div>
    <template v-if="document !== null">
      <nuxt-content :class="articleClass" :document="document"></nuxt-content>
    </template>
    <template v-else-if="content !== ''">
      <article :class="articleClass" v-html="content"></article>
    </template>
    <template v-else>
      <article :class="articleClass">
        <slot></slot>
      </article>
    </template>
    <div v-if="!last" class="content-section__separator">
      <svg>
        <title>==========</title>
        <use xlink:href="/img/decorations.svg#icon-divider"></use>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default: '',
    },
    document: {
      type: Object,
      default() {
        return null;
      },
    },
    content: {
      type: String,
      default: '',
    },
    last: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    articleClass() {
      return {
        // 'container--centered': true,
        'content-section__content': true,
        [this.anchor]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  &__separator {
    color: $grey-500;

    svg {
      fill: currentColor;
      width: 35rem;
      display: block;
      margin: 4rem auto;
    }
  }
}
</style>
