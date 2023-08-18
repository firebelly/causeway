<script setup>
import PostBlock from './blocks/PostBlock.vue'

const props = defineProps({
  theme: String,
  slide: Boolean
})

const posts = {
    1: {
        title: 'Quality Health Care for Older Californians',
        date: 'Jun 22, 2022',
        image: 'src/assets/images/post-placeholder-1.png',
        alt: '',
        byline: 'Gohar Chichian',
        avatar: 'src/assets/images/post-avatar-placeholder.png',
        link: 'https://firebellydesign.com'
    },
    2: {
        title: '23 Funders Unite to Reconstruct Michigan...',
        date: 'May 26, 2022',
        image: 'src/assets/images/post-placeholder-2.png',
        byline: 'Morgan McKeever',
        avatar: 'src/assets/images/post-avatar-placeholder.png',
        link: 'https://firebellydesign.com'
    },
    3: {
        title: '3 Examples of Corporate Social Responsiblity',
        date: 'Sept 15, 2022',
        image: 'src/assets/images/post-placeholder-3.png',
        byline: 'Gohar Chichian',
        avatar: 'src/assets/images/post-avatar-placeholder.png',
        link: 'https://firebellydesign.com'
    },
}

</script>

<template>
    
    <section 
        class="innerSection innerSection--posts"
        :class="`_is-${theme}`"
        :data-slide=props.slide>

        <h1 class="innerSection-subtitle">Blog Posts Go Here</h1>

        <div class="postBlock-wrap">
            <template
                v-for="(item, index) in posts" 
                :key="index">
            
                <PostBlock :item=item />

            </template>
        </div>


    </section>
</template>