<script setup>

const props = defineProps({
  item: Object
})

</script>

<template>

    <article>

        <img 
            v-if="item.image"
            :src="`${item.image}`" 
            :alt="`${item.alt}`"
            class="postBlock-image"
            width="460"
            height="389" />

        <h1 class="postBlock-title">
            <a 
                :href="`${item.link}`"
                title="Read More">
                {{ item.title }}
            </a>
        </h1>

        <time datetime="2018-07-07" class="postBlock-date">{{ item.date }}</time>

        <img 
            v-if="item.image"
            :src="`${item.avatar}`" 
            :alt="`${item.alt}`"
            class="postBlock-avatar"
            width="49"
            height="49" />

        <p class="postBlock-byline">{{ item.byline }}</p>
        
    </article>

</template>

