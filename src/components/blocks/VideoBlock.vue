<script setup>

const props = defineProps({
  src: String,
  poster: String,
  caption: String,
  animation: Boolean,
  slide: Boolean
})

</script>

<template>
    <figure 
      class="videoBlock"
      :class="props.animation ? ' videoBlock--animation' : ' videoBlock--embed'">
        <video 
            class="videoBlock-media"
            :poster="props.poster ? `/assets/videos/${props.poster}.png` : ''"
            :autoplay="!!props.animation"
            :loop="!!props.animation"
            muted
            >
            <source 
                :src="`/assets/videos/${props.src}.webm`" 
                type="video/webm">
            <source 
                :src="`/assets/videos/${props.src}.mp4`"
                type="video/mp4">    
        </video>
        <figcaption 
          class="videoBlock-caption"
          v-if=props.caption
          v-html="`${props.caption}`">
        </figcaption>
    </figure>
</template>
