<script setup>

const props = defineProps({
  item: Object
})

</script>

<template>

    <article class="postBlock">

        <img 
            v-if="item.image"
            :src="`${item.image}`" 
            :alt="`${item.alt}`"
            class="postBlock-image"
            width="460"
            height="389" />

        <h1>
            <a 
                class="postBlock-title"
                :href="`${item.link}`"
                title="Read More">
                {{ item.title }}
            </a>
        </h1>

        <time datetime="2018-07-07" class="postBlock-date">{{ item.date }}</time>

        <div class="postBlock-content">
            
            <figure class="postBlock-figure">
                <img 
                    v-if="item.image"
                    :src="`${item.avatar}`" 
                    :alt="`${item.alt}`"
                    class="postBlock-avatar"
                    width="49"
                    height="49" />

                <figcaption>
                    <p class="postBlock-byline">{{ item.byline }}</p>
                </figcaption>
            </figure>
        </div>
    </article>

</template>

