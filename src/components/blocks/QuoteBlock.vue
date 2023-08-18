<script setup>

const props = defineProps({
  slug: String
})

const options = {
    intro: {
      image: 'avatar-matt',
      alt: 'Placeholder Image',
      content: '<p>We\'ve got to work as one machine working towards a shared set of positive societal outcomes. We get to bring those four forces together.</p>',
      attr: 'Matt Miszewski, CEO'
    },
    impact: {
      image: 'placeholder',
      alt: 'Placeholder Image',
      content: '<p>Our partnership with Causeway is really unique ...In the first year alone, working with Causeway helped us deliver over $400,000 in impact for 30 organizations. Our ROI was nearly five times more than our initial investment!</p>',
      attr: 'Laura Rath,<br /> Archstone Foundation'
    },
    future: {
      image: 'placeholder',
      alt: 'Placeholder Image',
      content: '<p>Metus cursus ultricies ut id nisi. Maecenas ultricies ultrices lorem in pellentesque. Nullam quis erat varius lectus tristique auctor. Metus cursus ultricies ut id nisi.</p>',
      attr: 'Optional Quote, Aspirational'
    }
}  

const text = (key) => options[props.slug][key]

</script>

<template>
    <figure 
      :class="`quoteBlock quoteBlock--${slug}`">
        <img 
            :src="`../src/assets/images/quote-${text('image')}.png`" 
            :alt="`${text('alt')}`"
            class="quoteBlock-image"
            width="270"
            height="270" />
        <blockquote 
          class="quoteBlock-content"
          v-html="text('content')">
        </blockquote>
        <figcaption class="quoteBlock-attribution" v-html="text('attr')">
        </figcaption>
    </figure>
</template>

