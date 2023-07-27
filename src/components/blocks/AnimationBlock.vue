<script setup>

const props = defineProps({
  slug: String
})

const options = {
  'placeholder': {
    'asset': 'article-animation-placeholder.png',
    'alt': 'Lorem Ipsum',
    'caption': ''
  }
}

const text = (key) => options[props.slug][key]

</script>

<template>
    <figure class="animationBlock">
        <img 
            class="animationBlock-asset"
            :src="`src/assets/images/${text('asset')}`" 
            :alt="`${text('alt')}`"
            width="1440"
            height="811" />
        <figcaption 
            class="animationBlock-caption"
            v-if="text('caption')"
            v-html="text('caption')">
        </figcaption>
    </figure>
</template>