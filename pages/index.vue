<template>
  <fragment>
    <nuxt-content :document="contents.hero"></nuxt-content>
    <nuxt-content
      class="thank-you"
      :document="contents.thankYou"
    ></nuxt-content>
  </fragment>
</template>

<script>
import { camelCased } from '~/plugins/camel-cased'

export default {
  async asyncData({ $content }) {
    const contents = await $content()
      .where({ slug: { $in: ['hero', 'thank-you'] } })
      .fetch()
      .then(contents =>
        contents.reduce((acc, content) => {
          acc[camelCased(content.slug)] = content
          return acc
        }, {})
      )

    return { contents }
  },
}
</script>
