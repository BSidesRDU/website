<template>
  <div class="events-spacetime">
    <p v-if="smol">
      Events take place starting at 9:40 AM on the 1st, 2nd and 3rd floors
    </p>
    <p v-else class="not-smol" :style="cssVars">
      Takes place during BSides RDU<br />
      Friday, Sept. 24th, 2021<br />
      9:40 AM to {{ end }} PM<br />
      at The Carolina Theatre on the {{ floor }} floor
    </p>
  </div>
</template>

<script>
export default {
  props: {
    smol: {
      type: Boolean,
      default: false,
    },
    floor: {
      type: String,
      default: '2nd',
    },
    end: {
      type: String,
      default: '3:55',
    },
    from: {
      type: String,
      default: '#1c1c1c',
    },
    to: {
      type: String,
      default: '#949494',
    },
    text: {
      type: String,
      default: '#f6f6f6',
    },
  },

  computed: {
    cssVars() {
      return {
        '--dark': this.from,
        '--light': this.to,
        '--text': this.text,
      };
    },
  },
};
</script>

<style lang="scss">
.events-spacetime {
  margin-bottom: 2.5rem;

  .not-smol {
    background-image: linear-gradient(to bottom, var(--dark), var(--light));
    padding: 1.5rem;
    border-radius: 1rem;
    color: var(--text);
  }
}
</style>
