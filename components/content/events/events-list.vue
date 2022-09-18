<template>
  <div>
    <content-events-spacetime smol />
    <content-events-single
      v-for="event in events"
      :key="event.slug"
      :event="event"
    />
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
};
</script>
