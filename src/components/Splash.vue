<script setup>

const props = defineProps({
  theme: String
})
</script>

<template>
    <section 
        class="innerSection innerSection--splash"
        :class="`_is-${theme}`">

        <h1 class="innerSection-prelude">Catchafire has evolved</h1>
        <h2 class="innerSection-title">We are <br />Causeway.</h2>

        <p class="innerSection-content">
            After 12 years of supporting communities, we're doubling down on our commitment to social impact. Causeway helps employers, foundations, and volunteers build meaningful programs that drive measurable impact.
        </p>

        <button 
            class="innerSection-button" 
            type="button">
            <span class="innerSection-button-label">
                Get Involved
            </span>
        </button>

        <button 
            class="innerSection-arrow"
            type="button">
            <img 
                alt="Arrow pointing down" 
                class="innerSection-arrow-svg" 
                src="@/assets/svgs/arrow-down.svg" 
                width="33.95" 
                height="56.57" />  
        </button>
    </section>
</template>