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

<script>
export default {
    props: ['slug'],
    computed: {
      text() {
        return key => this.options[`${this.slug}`][key];
      },  
      options() {
        return {
          placeholder: {
            video: 'video-placeholder',
            poster: 'video-placeholder-poster',
            caption: null
          }
        }
      }
    }
  };
</script>