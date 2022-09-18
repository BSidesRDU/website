<template>
  <div class="events-page" :style="cssVars">
    <content-prev-next :prev="prev" :next="next" />
    <div class="events-page__meta">
      <p class="events-page__what">{{ event.what }}</p>
      <p v-if="event.start && event.end" class="events-page__spacetime">
        From: {{ event.start }} to {{ event.end }} on the
        {{ event.floor }} floor
        <span v-if="event.virtual" class="events-page__virtual"
          ><br />
          and Virtual (ask in Slack for more info)</span
        >
      </p>
      <p v-else class="events-page__spacetime">
        Time and location info coming soon!
      </p>
    </div>
    <a v-if="event.twitter" :href="event.twitter" class="events-page__twitter">
      <svg>
        <title>{{ event['twitter-text'] }} Twitter Profile</title>
        <use xlink:href="~/static/img/icons.svg#icon-twitter"></use>
      </svg>
    </a>
    <h1>{{ event['full-title'] || event.title }}</h1>
    <img
      :src="`${$router.options.base}img/events/${event.slug}-show.png`"
      :alt="event.alt"
      class="center"
    />
    <!-- <content-events-spacetime
      :floor="event.floor"
      :end="event.end"
      :from="event.dark"
      :to="event.med"
    ></content-events-spacetime> -->
    <nuxt-content :document="event" class="events-page__content"></nuxt-content>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
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

  computed: {
    cssVars() {
      return {
        '--dark': this.event.dark,
        '--med': this.event.med,
        '--light': this.event.light,
      };
    },
  },
};
</script>

<style lang="scss">
.events-page {
  p.events-page__what {
    font-size: 2.9rem;
    font-style: italic;
    font-family: $serif;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  p.events-page__spacetime {
    font-size: 2rem;
    font-family: $serif;
    color: #545454;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 3.5rem;
    }
  }

  > h2 {
    font-size: 2.8rem;
    font-style: italic;
    font-family: $serif;
  }

  &__content {
    margin-top: 3.5rem;
  }

  & a.events-page__twitter,
  & a.events-page__twitter:visited {
    margin-top: 0.8rem;
    color: var(--dark);
    float: right;

    &:hover,
    &:active {
      color: var(--med);
    }

    svg {
      width: 3rem;
      height: 3rem;
      fill: currentColor;
    }
  }
}
</style>
