<script setup>
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

</script>

<template>

  <a class="skipLink" href="#main">
      Skip to content
  </a>   

  <header class="primaryHeader" id="header">
    <Header />
  </header>

  <main class="primaryContent" id="main">
    <Splash :theme=themes[1] />
    <Bulletin slug="vision" :theme=themes[2] />
    <Interlude slug="intro" :theme=themes[1] hasQuote />
    <Interlude slug="placeholder" :theme=themes[1] hasVideo />
    <Article slug="impact" :theme=themes[3] hasStats hasQuote />
    <Article slug="future" :theme=themes[1] hasQuote />
    <Article slug="brand" :theme=themes[2] />
    <Posts :theme=themes[1] />
  </main>

  <footer class="primaryFooter _is-wob" id="footer">
    <div class="primaryFooter-helper">Footer Placeholder</div>
  </footer>

  <div id="viewport" class="viewport _is-debug"></div>

</template>

