<template>
  <div class="events-single" :style="cssVars">
    <nuxt-link :to="`/${event.slug}`">
      <div class="events-single__img">
        <img
          :src="`${$router.options.base}img/events/${event.slug}-list.png`"
          :alt="event.alt"
          class="events-single__link"
        />
      </div>
      <div>
        <div class="events-single__header">
          <h4>
            <span class="events-single__link">{{ event.title }}</span>
          </h4>
          <p>
            <span class="events-single__floor">{{ event.floor }} Floor</span>
            <span v-if="event.virtual" class="events-single__virtual"
              >and Virtual</span
            >
          </p>
        </div>
        <p>
          {{ event.description }}
        </p>
        <p>
          <span class="events-single__link">Learn more &raquo;</span>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
    },
  },

  computed: {
    cssVars() {
      return {
        '--dark': this.event.dark || '#1c1c1c',
        '--med': this.event.med || '#949494',
        '--light': this.event.light || '#d4d4d4',
        '--bright': this.event.bright || '#f6f6f6',
      };
    },
  },
};
</script>

<style lang="scss">
.events-single {
  padding: 3rem;
  //   border-radius: 2rem;
  text-align: left;

  > a {
    &:first-child {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: flex-start;
    }

    > *:not(:last-child) {
      padding-right: 3rem;
    }
  }

  > a:link,
  > a:visited {
    color: var(--bright);
    border-bottom: none;
  }

  background-image: linear-gradient(
    to bottom,
    var(--dark) 0%,
    var(--dark) 40%,
    var(--med) 100%
  );
  background-color: var(--dark);

  &__link {
    color: var(--bright);
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom-color: var(--light);
    }
  }

  p {
    color: var(--bright);
    font-size: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  &__header {
    margin-bottom: 2rem;
    h4 {
      margin-bottom: 0;
    }
  }

  &__floor {
    font-size: 1.8rem;
    color: var(--bright);
  }

  &__learn-more {
    display: inline-block;
    padding-top: 0.7rem;
  }

  &__img {
    min-width: 12.5rem;

    img {
      padding-bottom: 0.5rem;
    }
  }
}

@include mobile {
  .events-single {
    > a {
      &:first-child {
        flex-direction: column;
        align-items: center;
      }
      > *:not(:last-child) {
        padding-right: 0;
        padding-bottom: 2rem;
      }
    }
  }
}
</style>
