<script setup>

const props = defineProps({
  slug: String,
  variant: String
})

const options = {
    name: {
      title: 'Our name',
      content: '<p>Causeway evokes forward momentum and clears a path for nonprofits to accomplish more.</p>',
    },
    logo: {
      title: 'Our logo',
      content: '<p>Our logo consists of two parts: An upward angled logomark "C" and a logotype featuring modified Grilli Type Ultra, a heavy humanist serif that balances flair and function.</p><p>The angled upper stroke of the logomark leads beyond the grounding path where a fluid connection exists at the confluence of these two trajectories reinforcing a bridge between elevation, support, and connection.</p>',
    },
    typography: {
      title: 'Typography',
      content: '<p>Our typography strengthens the connective nature of Causeway\'s work and committment. Using Grilli Type Ultra, we speak fearlessly, honestly, and with warmth as a steady, flexible connector. Inter provides utility for longer paragraphs and detailed information. Together, they create a balanced a  visual tone of strength, support, and experience.</p>',
      image: 'typography'
    },
    paths: {
      title: 'Gestural paths',
      content: '<p>Gestural paths bring energy, spontaneity, and progressive movement into the mix of our design elements, adding visual interest as a supporting element.</p>',
      image: 'paths'
    }
}

const text = (key) => options[props.slug][key]

</script>

<template>
    <article
      class="cardBlock"
      :class="[variant === 'single' ? 'cardBlock--single' : '']">
        <h1 class="cardBlock-title">{{ text('title') }}</h1>

        <figure class="cardBlock-asset" v-if="text('image')">
            <img 
                :src="`../src/assets/images/card-${text('image')}.png`" 
                :alt="`${text('alt')}`"
                class="cardBlock-asset-image"
                width="1440"
                height="811" />
            <figcaption 
                class="cardBlock-content"
                v-html="text('content')">
            </figcaption>
        </figure>

        <div 
            v-if="! text('image')"
            class="cardBlock-content" 
            v-html="text('content')">
        </div>

    </article>
</template>

