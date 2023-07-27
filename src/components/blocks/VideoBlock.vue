<script setup>

const props = defineProps({
  slug: String
})

const options = {
  placeholder: {
      video: 'video-placeholder',
      poster: 'video-placeholder-poster',
      caption: null
    }
}

const text = (key) => options[props.slug][key]

</script>

<template>
    <figure class="videoBlock">
        <video 
            :poster="`/src/assets/videos/${text('poster')}.png`" 
            class="videoBlock-media"
            controls 
            width="1600"
            >
            <source 
                :src="`/src/assets/videos/${text('video')}.webm`" 
                type="video/webm">
            <source 
                :src="`/src/assets/videos/${text('video')}.mp4`"
                type="video/mp4">    
        </video>
        <figcaption 
          class="videoBlock-caption"
          v-if="text('caption')"
          v-html="text('caption')">
        </figcaption>
    </figure>
</template>

