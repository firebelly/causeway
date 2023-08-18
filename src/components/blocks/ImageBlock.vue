<script setup>

const props = defineProps({
  src: String,
  alt: String,
  caption: String
})

</script>

<template>
    <figure class="innerSection-asset">       
        <img 
            class="innerSection-asset-image"
            :src="`../src/assets/images/${props.src}.png`" 
            :alt="`${props.alt}`"
            width="1440"
            height="811" />
        <figcaption 
            class="innerSection-asset-caption"
            v-if=props.caption 
            v-html=props.caption>
        </figcaption>
    </figure>
</template>