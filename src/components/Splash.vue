<script setup>

import VideoBlock from './blocks/VideoBlock.vue'

const props = defineProps({
  theme: String,
  slide: Boolean
})

const scrollTo = (e) => {
    const targetId = e.target.id.replace('trigger','target'),
          targetEl = document.getElementById(targetId);

    if ( targetEl ) {
        targetEl.scrollIntoView({
            behavior: 'smooth', 
            block: 'end', 
            inline: 'nearest'
        });
    }
    
};

</script>

<template>
    

    <section 
        class="innerSection innerSection--splash"
        :class="`_is-${theme}`"
        :data-slide=props.slide>

        <h1 class="innerSection-prelude">Catchafire has evolved</h1>
        <h2 class="innerSection-title">We are <br />Causeway.</h2>

        <p class="innerSection-content">
            After 12 years of supporting communities, we're doubling down on our commitment to social impact. Causeway helps employers, foundations, and volunteers build meaningful programs that drive measurable impact.
        </p>

        <VideoBlock 
            :src="`we-are-causeway-build`"
            :animation=true
        />

        <button 
            class="innerSection-button" 
            id="get-involved-trigger"
            type="button"
            @click="scrollTo">
            <span class="innerSection-button-label">
                Get Involved
            </span>
        </button>

        <button 
            @intersect="doThings"
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