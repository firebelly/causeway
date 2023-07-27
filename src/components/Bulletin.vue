<script setup>

const props = defineProps({
  slug: String,
  theme: String,
})

const options = {
  'vision': {
    'prelude': 'Same Vision, Bolder Mission',
    'title': 'Our communities are strongest when government, philanthropy, business, and volunteers work together.',
    'content': '<p>Causeway is the bridge.<br /> United, we shift resources and power to stengthen communities.</p>'
  }
}

const text = (key) => options[props.slug][key]

</script>

<template>
    <section 
        class="innerSection innerSection--bulletin"
        :class="`_is-${theme}`">
        <h1 class="innerSection-prelude">{{ text('prelude') }}</h1>
        <h2 class="innerSection-title">{{ text('title') }}</h2>
        <div 
          class="innerSection-content"
          v-html="text('content')">
        </div>
    </section>
</template>

