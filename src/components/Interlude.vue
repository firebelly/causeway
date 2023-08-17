<script setup>
import QuoteBlock from './blocks/QuoteBlock.vue'
import VideoBlock from './blocks/VideoBlock.vue'

const props = defineProps({
  theme: String,
  slug: String,
  hasQuote: Boolean,
  hasVideo: Boolean
})

const options = {
  placeholder: {
      video: 'video-placeholder',
      poster: 'video-placeholder-poster',
      attrs: ['controls','width=1600']
  }
}

const text = (key) => options[props.slug][key]

</script>

<template>
    <section 
        class="interludeSection"
        :class="`_is-${theme}`">

        <QuoteBlock v-if=hasQuote :slug=slug />

        <VideoBlock v-if=hasVideo 
          :src="`${text('video')}`"
          :poster="`${text('poster')}`"
          :animation=false
          />

    </section>
</template>

