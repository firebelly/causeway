<template>
    <figure 
      :class="[`innerSection innerSection--${slug}`]">
        
        <video 
            :poster="`/src/assets/videos/${text('poster')}.png`" 
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
        <figcaption class="quoteBlock-attribution">
          {{ text('caption') }}
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
          'video-1': {
            'video': 'video-placeholder',
            'poster': 'video-placeholder-poster',
            'caption': ''
          }
        }
      }
    }
  };
</script>