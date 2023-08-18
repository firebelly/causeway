<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/shell/Header.vue'
import Splash from './components/Splash.vue'
import Bulletin from './components/Bulletin.vue'
import Interlude from './components/Interlude.vue'
import Article from './components/Article.vue'
import Posts from './components/Posts.vue'

const themes = {
    1: 'bow', // 'black-on-white',
    2: 'wob', // 'white-on-black',
    3: 'boo'  // 'black-on-orange'
}

const _sliding = '_is-sliding-in';

onMounted(() => {

    let targetEls = document.querySelectorAll('[data-slide]');

    const buildThresholds = () => {

        let thresholds = [];
        let numSteps = 20;
            
        thresholds.push(0);

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }
            
        return thresholds;

    }

    // default root is viewport
    const options = {
        rootMargin:  null,
        threshold: buildThresholds()
    }

    const observer = new IntersectionObserver(([entry]) => {

        let target = entry.target;
        
        if ( entry && entry.isIntersecting ) {
            target.classList.add(_sliding);
        }

    })

    if ( targetEls.length ) {

        let _lastY     = 0,
            direction  = 'up',
            _vh        = document.documentElement.scrollHeight;

        document.addEventListener('scroll', (e) => {

            direction = (_lastY <  window.scrollY) ? 'down' : 'up';
            _lastY = window.scrollY;

        });

        for ( const target of targetEls ) {
            
            observer.observe(target,options);

            // TODO: check for position on load
            // const { top, left, bottom, right } = target.getBoundingClientRect();
            

        }
    }

})

onUnmounted(() => {

    observer.value.disconnect()

})

</script>

<template>

    <a class="skipLink" href="#main">
        Skip to content
    </a>   

    <header class="primaryHeader" id="header">
        <Header />
    </header>

    <main class="primaryContent" id="main">
        <Splash :theme=themes[1] slide />
        <Bulletin slug="vision" :theme=themes[2] slide />
        <Interlude slug="intro" :theme=themes[1] hasQuote />
        <Interlude slug="placeholder" :theme=themes[1] hasVideo />
        <Article slug="impact" :theme=themes[3] hasStats hasQuote slide/>
        <Article slug="future" :theme=themes[1] hasQuote slide />
        <Article slug="brand" :theme=themes[2] slide />
        <Posts :theme=themes[1] slide />
    </main>

    <footer 
        class="primaryFooter _is-wob" 
        id="get-involved-target" 
        data-scroll-view="target">
        <div class="primaryFooter-helper">Footer Placeholder</div>
    </footer>

    <div id="viewport" class="viewport _is-debug"></div>

</template>

