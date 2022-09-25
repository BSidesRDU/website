<template>
  <div>
    <content-section anchor="hero" :document="contents.hero"></content-section>
    <content-section
      anchor="cfp"
      :document="contents.cfp"
      v-if="$sections.cfp"
    ></content-section>
    <content-section anchor="schedule" v-if="$sections.schedule">
      <h2>Schedule</h2>
      <iframe
        ref="sessions"
        src="/sessionize/sessions.html"
        scrolling="no"
      ></iframe>
      <h2>Speakers</h2>
      <iframe
        ref="speakers"
        src="/sessionize/speaker-wall.html"
        scrolling="no"
      ></iframe>
    </content-section>
    <content-section anchor="events-workshops" v-if="$sections.eventsWorkshops">
      <h2>Events &amp; Workshops</h2>
      <content-events-list :events="events" />
    </content-section>
    <content-section anchor="updates" v-if="$sections.updates">
      <h2>Updates</h2>
      <a
        class="twitter-timeline"
        data-lang="en"
        data-height="726"
        data-tweet-limit="5"
        data-dnt="true"
        href="https://twitter.com/BSidesRDU?ref_src=twsrc%5Etfw"
        >Tweets by BSidesRDU</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </content-section>
    <content-section
      anchor="parking"
      :document="contents.parking"
      v-if="$sections.parking"
    ></content-section>
    <content-section
      anchor="sponsors"
      :document="contents.sponsors"
      v-if="$sections.sponsors"
    ></content-section>
    <content-section
      anchor="about"
      :document="contents.about"
      v-if="$sections.about"
    ></content-section>
    <content-section
      anchor="venue"
      :document="contents.venue"
      v-if="$sections.venue"
    ></content-section>
    <content-section
      anchor="principles"
      :document="contents.principles"
      v-if="$sections.principles"
      last
    ></content-section>
  </div>
</template>

<script>
import { camelCased } from '~/plugins/camel-cased';

export default {
  async asyncData({ $content }) {
    const contents = await $content()
      .where({
        slug: {
          $in: [
            'hero',
            'schedule',
            'sponsors',
            // 'hacker-jeopardy',
            // 'parking',
            'venue',
            'about',
            'principles',
          ],
        },
      })
      .fetch()
      .then((contents) =>
        contents.reduce((acc, content) => {
          acc[camelCased(content.slug)] = content;
          return acc;
        }, {})
      );

    const events = await $content('events').sortBy('floor', 'asc').fetch();

    return { contents, events };
  },
  mounted() {
    const sessions = this.$refs.sessions;
    const speakers = this.$refs.speakers;
    setTimeout(() => {
      sessions.height = sessions.contentWindow.document.body.scrollHeight;
      speakers.height = speakers.contentWindow.document.body.scrollHeight;
    }, 1000);
  },
};
</script>

<style>
iframe {
  width: 100%;
}
</style>
