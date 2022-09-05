<template>
    <fragment>
        <nuxt-content class="hero" :document="contents.hero"></nuxt-content>

        <nuxt-content class="cfp" :document="contents.cfp"></nuxt-content>
    </fragment>
</template>

<script>
import { camelCased } from '~/plugins/camel-cased';

export default {
    async asyncData({ $content }) {
        const contents = await $content()
            .where({ slug: { $in: ['hero', 'cfp'] } })
            .fetch()
            .then((contents) =>
                contents.reduce((acc, content) => {
                    acc[camelCased(content.slug)] = content;
                    return acc;
                }, {})
            );

        return { contents };
    },
};
</script>
