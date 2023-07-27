<script setup>
import QuoteBlock from './blocks/QuoteBlock.vue'
import VideoBlock from './blocks/VideoBlock.vue'

const props = defineProps({
  theme: String,
  slug: String,
  hasQuote: Boolean,
  hasVideo: Boolean
})

</script>

<template>
    <section 
        class="interludeSection"
        :class="`_is-${theme}`">

        <QuoteBlock v-if=hasQuote :slug=slug />
        <VideoBlock v-if=hasVideo :slug=slug />

    </section>
</template>

