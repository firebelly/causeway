<template>
    <section 
      :class="[`innerSection innerSection--${slug}`]">
        <h1 class="innerSection-title innerSection-title--article">{{ text('title') }}</h1>
        <p class="innerSection-content innerSection-content--article">
          {{ text('content') }}
        </p>
        <figure>
            <img 
                :src="`src/assets/images/article-${text('image')}.png`" 
                :alt="`${text('alt')}`"
                width="1440"
                height="811" />
            <figcaption v-if="text('caption')">
                <p><strong>{{ text('caption-title') }}</strong>{{ text('caption') }}</p>
            </figcaption>
        </figure>

        <Stats :slug="[`${slug}`]" v-if="stats === 'true'" />
        
        <Quote :slug="[`${slug}`]" v-if="quote === 'true'" />
 
    </section>

</template>

<script>
import Stats from './Stats.vue'
import Quote from './Quote.vue'

export default {
    props: ['slug','stats','quote'],
    components: {
        Stats,
        Quote
    },
    computed: {
      text() {
        return key => this.options[`${this.slug}`][key];
      },  
      options() {
        return {
            'impact': {
                'title': 'Where we\'ve been.',
                'content': 'As Catchafire, we laid the foundation over the past decade to shift skills and resources towards communities. As Causeway, we\'re ready to bridge paths to stronger communities, and continue to provide support as the leading online platform for nonprofits to connect with everyday professionals.',
                'image': 'impact-placeholder',
                'alt': 'Placeholder Image',
                'caption-title': 'Optional photo caption:',
                'caption': 'Amet consectetur. Velit id tempus orci magna consectetur vestibulum. Nunc neque et lectus leo purus facilisis. Faucibus elit amet blandit dictumst.',
            },
            'future': {
                'title': 'Where we\'re going.',
                'content': 'Causeway is a place for people to come together to do good. We bring together government, philanthropy, business, and volunteers with the goal of bridging paths to stronger communities. Every day we help communities grow stronger by listening to what they need and making sure they get resources.',
                'image': 'future-placeholder',
                'alt': 'Placeholder Image'
            }
        }
      }
    }
  };
</script>