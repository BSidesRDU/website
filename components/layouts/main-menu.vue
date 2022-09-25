<template>
  <nav :class="mainMenuClass" @click.self="hideMenu">
    <ul>
      <li v-for="link in links" :key="link.name">
        <a
          :href="`#${link.url.hash}`"
          class="menu-link"
          v-html="link.label"
          @click.self="
            (event) => {
              hideMenu(event, !!link.scroll);
            }
          "
        ></a>
      </li>
      <li class="cta">
        <a :href="$config.eventZillaLink" target="_blank"
          >Register Now
          <svg>
            <use xlink:href="/img/icons.svg#iconNewWindow"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    mainMenuClass() {
      const isOpen = this.$store.getters['nav/isHamburgerOpen'];

      return {
        'main-menu': true,
        'main-menu__open': isOpen,
        'main-menu__closed': !isOpen && this.toggled !== null,
      };
    },

    links() {
      return this.$store.getters['nav/links']('main', this.$sections);
    },
  },

  methods: {
    hideMenu(event, scroll) {
      this.$store.commit('nav/setHamburger', false);
    },
  },
};
</script>

<style lang="scss">
.main-menu {
  //   background-color: $black;
  position: absolute;
  top: 6.6rem;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -25;
  transform: translateY(calc(-100%));
  transform-origin: top;
  overflow: hidden;

  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: $bright;
    }
  }

  &__closed,
  &__open {
    transition: all 0.3s;
    overflow: hidden;

    ul {
      transition: all 0.3s;
    }
  }

  &__open {
    background-color: $black;
    z-index: 25;

    transform: translateY(0);

    ul {
      transform: translateY(0);
    }
  }

  &__closed {
    ul {
      transform: translateY(100%);
    }
  }

  ul {
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 2rem;
      padding: 1.2rem;
      list-style: none;
      white-space: nowrap;

      &.cta {
        margin-top: 1rem;
        padding: 0.9rem;
        color: $bright;
        background-color: $cta;
        border-radius: 2rem;
        font-style: italic;

        svg {
          fill: currentColor;
          width: 1.5rem;
          height: 1.5rem;
          margin-left: 0.2rem;
        }
      }
    }
  }

  &__hidden {
    transition: all 0;
  }
}

@include desktop {
  .main-menu {
    width: auto;
    height: 6rem;
    position: static;
    z-index: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translateY(0);

    &__closed,
    &__open {
      transition: all 0s;
    }

    &__open {
      background-color: transparent;
    }

    ul {
      transform: translateY(0);
      padding-bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      li {
        margin-right: 0rem;
        padding: 1.2rem 0.2rem;

        &:hover {
          a {
            color: $white;
            border-bottom: 2px solid $bright;
          }
        }

        a {
          font-size: 1.6rem;
          color: $light;
          text-decoration: none;
          padding: 0.6rem;
          border-bottom: 2px solid transparent;
        }

        &.cta {
          margin-top: 0;
          padding: 0;
          margin-left: 0.7rem;

          a {
            border-bottom: none;
            display: inline-block;
            color: $bright;
            padding: 0.5rem 0.9rem;
          }
        }
      }
    }
  }
}
</style>
