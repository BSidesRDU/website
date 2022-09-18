<template>
  <content-section>
    <content-events-page
      v-if="type === 'event'"
      :event="event"
      :prev="prev"
      :next="next"
    />
    <content-sessions-page
      v-else-if="type === 'session'"
      :session="session"
      :speakers="speakers"
      :prev="prev"
      :next="next"
      :followed-by="followedBy"
      :schedule="schedule"
    />
    <template v-else>
      <nuxt-content :document="content" />
    </template>
  </content-section>
</template>

<script>
export default {
  scrollToTop: true,

  async asyncData({ error, $content, route }) {
    let content;
    let directory;
    let fields;
    let criteria = {};
    let sort;
    let prev;
    let next;
    let speakers;
    let followedBy = null;
    let schedule = [];
    let slug = route.path.substring(1).replace(/\/$/, '');

    const tQuery = await $content(null, { deep: true })
      .only(['type', 'slug'])
      .fetch();
    const types = tQuery.reduce((acc, t) => {
      acc[t.slug] = t.type ?? 'content';
      return acc;
    }, {});

    const type = types[slug];

    // sessions
    if (type === 'session') {
      try {
        content = await $content(`sessions/${slug}`).fetch();
        directory = 'sessions';
        fields = ['slug', 'what', 'title', 'session-type'];
        sort = 'sort';
        criteria = {
          slug: {
            $nin: [
              'doors-open',
              'break-1',
              'break-2',
              'screening-of-hackers',
              'dinner-and-social-time',
              'social-time-clean-up',
            ],
          },
        };
      } catch (_) {}
    }

    // events
    if (type === 'event') {
      try {
        content = await $content(`events/${slug}`).fetch();
        directory = 'events';
        fields = ['slug', 'short-title', 'title'];
        sort = 'floor';
      } catch (_) {}
    }

    // anything else
    try {
      content = await $content(path).fetch();
      type = 'content';
    } catch (_) {}

    if (!content) {
      error({ message: 'Page not found' });
    }

    if (type === 'session') {
      speakers = await $content('speakers')
        .where({ session: { $eq: content.slug } })
        .fetch();

      const fQuery = await $content('sessions')
        .only([...fields, ...['start', 'mins']])
        .where({ sort: { $gt: content.sort } })
        .sortBy('sort', 'asc')
        .sortBy('what', 'asc')
        .limit(1)
        .fetch();
      if (fQuery?.length) {
        followedBy = fQuery[0];
      }
      if (followedBy && !['break'].includes(followedBy['session-type'])) {
        followedBy = null;
      }

      schedule = await $content('sessions')
        .only([...fields, ...['start', 'mins']])
        .where({
          'session-type': { $in: ['break', 'announcement'] },
          slug: { $nin: ['doors-open', 'hacker-jeopardy'] },
        })
        .sortBy('sort', 'asc')
        .sortBy('what', 'asc')
        .fetch();
    }

    [prev, next] = await $content(directory)
      .only(fields)
      .where(criteria)
      .sortBy(sort, 'asc')
      .sortBy('what', 'asc')
      .surround(content.slug)
      .fetch();

    return {
      type,
      [type]: content,
      prev,
      next,
      speakers: speakers || [],
      followedBy: followedBy || null,
      schedule,
    };
  },
};
</script>
