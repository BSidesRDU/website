<template>
  <div>
    <content-section anchor="hero" :document="contents.hero"></content-section>
    <content-section anchor="cfp" :document="contents.cfp"></content-section>
    <content-section anchor="schedule">
      <h2>Schedule of Talks &amp; Speakers Coming Soon!</h2>
    </content-section>
    <content-section anchor="events-workshops">
      <h2>Events &amp; Workshops</h2>
      <content-events-list :events="events" />
    </content-section>
    <content-section anchor="updates">
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
      v-if="false"
      anchor="parking"
      :document="contents.parking"
    ></content-section>
    <content-section
      anchor="sponsors"
      :document="contents.sponsors"
    ></content-section>
    <content-section
      anchor="about"
      :document="contents.about"
    ></content-section>
    <content-section
      anchor="venue"
      :document="contents.venue"
    ></content-section>
    <content-section
      anchor="principles"
      :document="contents.principles"
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
};
</script>
