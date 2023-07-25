<template>
    <figure 
      :class="[`innerSection innerSection--${slug}`]">
        <img 
            :src="`src/assets/images/quote-${text('image')}.png`" 
            :alt="`${text('alt')}`"
            width="270"
            height="270" />
        <blockquote class="quoteBlock">
            {{ text('content') }}
            <br />
            &mdash;
        </blockquote>
        <figcaption class="quoteBlock-attribution">
          {{ text('attr') }}
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
          'quote-1': {
            'image': 'placeholder',
            'alt': 'Placeholder Image',
            'content': 'We\'ve got to work as one machine working towards a shared set of positive societal outcomes. We get to bring those four forces together.',
            'attr': 'Matt Miszewski, CEO'
          },
          'impact': {
            'image': 'placeholder',
            'alt': 'Placeholder Image',
            'content': 'Our partnership with Causeway is really unique ...In the first year alone, working with Causeway helped us deliver over $400,000 in impact for 30 organizations. Our ROI was nearly five times more than our initial investment!',
            'attr': 'Laura Rath, Archstone Foundation'
          },
          'future': {
            'image': 'placeholder',
            'alt': 'Placeholder Image',
            'content': 'Metus cursus ultricies ut id nisi. Maecenas ultricies ultrices lorem in pellentesque. Nullam quis erat varius lectus tristique auctor. Metus cursus ultricies ut id nisi.',
            'attr': 'Optional Quote, Aspirational'
          }
        }
      }
    }
  };
</script>