<script setup>
import StatsBlock from './blocks/StatsBlock.vue'
import QuoteBlock from './blocks/QuoteBlock.vue'
import CardBlock from './blocks/CardBlock.vue'
import AnimationBlock from './blocks/AnimationBlock.vue'

const props = defineProps({
  slug: String,
  theme: String,
  hasStats: Boolean,
  hasQuote: Boolean
})

const options = {
    brand: {
        title: 'New look and feel.'
    },
    impact: {
        title: 'Where we\'ve been.',
        content: '<p>As Catchafire, we laid the foundation over the past decade to shift skills and resources towards communities. As Causeway, we\'re ready to bridge paths to stronger communities, and continue to provide support as the leading online platform for nonprofits to connect with everyday professionals.</p>',
        image: 'impact-placeholder',
        alt: 'Placeholder Image',
        caption: '<p><strong>Optional photo caption:</strong> Amet consectetur. Velit id tempus orci magna consectetur vestibulum. Nunc neque et lectus leo purus facilisis. Faucibus elit amet blandit dictumst.</p>',
    },
    future: {
        title: 'Where we\'re going.',
        content: '<p>Causeway is a place for people to come together to do good. We bring together government, philanthropy, business, and volunteers with the goal of bridging paths to stronger communities. Every day we help communities grow stronger by listening to what they need and making sure they get resources.</p>',
        image: 'future-placeholder',
        alt: 'Placeholder Image'
    }
}

const text = (key) => options[props.slug][key];

</script>

<template>
    <section 
        class="innerSection innerSection--article"        
        :class="[slug === 'future' ? '_has-bg' : '', `_is-${theme}`]">
        <h1 class="innerSection-title">{{ text('title') }}</h1>
        
        <template v-if="slug !== 'brand'">
            <div 
                class="innerSection-content" 
                v-html="text('content')">
            </div>
            
            <figure class="innerSection-asset">
                <img 
                    class="innerSection-asset-image"
                    :src="`src/assets/images/article-${text('image')}.png`" 
                    :alt="`${text('alt')}`"
                    width="1440"
                    height="811" />
                <figcaption 
                    class="innerSection-asset-caption"
                    v-if="text('caption')" 
                    v-html="text('caption')">
                </figcaption>
            </figure>

            <StatsBlock :slug=slug v-if=hasStats />
            <QuoteBlock :slug=slug v-if=hasQuote />
        </template>

        <template v-else-if="slug === 'brand'">
            
            <div class="cardWrap">
                <CardBlock slug="name" variant="single" />
                <AnimationBlock slug="placeholder" />
                <CardBlock slug="logo" variant="single" />
                <CardBlock slug="typography" />
                <CardBlock slug="paths" />
            </div>
            
        </template>

    </section>

</template>
