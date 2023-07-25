<template>
    <section 
      :class="[`innerSection innerSection--${slug}`]">
        <h1 class="innerSection-prelude">{{ text('prelude') }}</h1>
        <h2 class="innerSection-title innerSection-title--bulletin">{{ text('title') }}</h2>
        <p class="innerSection-content innerSection-content--bulletin">
          {{ text('content') }}
        </p>
    </section>
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
          'vision': {
            'prelude': 'Same Vision, Bolder Mission',
            'title': 'Our communities are strongest when government, philanthropy, business, and volunteers work together.',
            'content': 'Causeway is the bridge. United, we shift resources and power to stengthen communities.'
          }
        }
      }
    }
  };
</script>