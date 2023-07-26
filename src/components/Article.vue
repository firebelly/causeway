<template>
    <section :class="`innerSection innerSection--${slug}`">
        <h1 class="innerSection-title innerSection-title--article">{{ text('title') }}</h1>
        
        <div 
            class="innerSection-content innerSection-content--article" 
            v-html="text('content')">
        </div>
        
        <figure>
            <img 
                :src="`src/assets/images/article-${text('image')}.png`" 
                :alt="`${text('alt')}`"
                width="1440"
                height="811" />
            <figcaption 
                v-if="text('caption')" 
                v-html="text('caption')">
            </figcaption>
        </figure>

        <StatsBlock :slug="[`${slug}`]" v-if="hasStats === 'true'" />
        
        <QuoteBlock :slug="[`${slug}`]" v-if="hasQuote === 'true'"/>
 
    </section>

</template>

<script>
import StatsBlock from './StatsBlock.vue'
import QuoteBlock from './QuoteBlock.vue'

export default {
    props: ['slug','hasStats','hasQuote'],
    components: {
        StatsBlock,
        QuoteBlock
    },
    computed: {
      text() {
        return key => this.options[`${this.slug}`][key];
      },  
      options() {
        return {
            impact: {
                title: 'Where we\'ve been.',
                content: '<p>As Catchafire, we laid the foundation over the past decade to shift skills and resources towards communities. As Causeway, we\'re ready to bridge paths to stronger communities, and continue to provide support as the leading online platform for nonprofits to connect with everyday professionals.</p>',
                image: 'impact-placeholder',
                alt: 'Placeholder Image',
                caption: '<p><strong>Optional photo caption:</strong>Amet consectetur. Velit id tempus orci magna consectetur vestibulum. Nunc neque et lectus leo purus facilisis. Faucibus elit amet blandit dictumst.</p>',
            },
            future: {
                title: 'Where we\'re going.',
                content: '<p>Causeway is a place for people to come together to do good. We bring together government, philanthropy, business, and volunteers with the goal of bridging paths to stronger communities. Every day we help communities grow stronger by listening to what they need and making sure they get resources.</p>',
                image: 'future-placeholder',
                alt: 'Placeholder Image'
            }
        }
      }
    }
  };
</script>