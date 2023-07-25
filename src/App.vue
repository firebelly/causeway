<script setup>
import Splash from './components/Splash.vue'
import Bulletin from './components/Bulletin.vue'
import Quote from './components/Quote.vue'
import Video from './components/Video.vue'
import Article from './components/Article.vue'
import Footer from './components/Footer.vue'

</script>

<template>

  <a class="skipLink" href="#main">
      Skip to content
  </a>   

  <header class="primaryHeader" id="header">
    <h1 class="primaryHeader-label">
      Causeway
    </h1>
    <img 
      alt="Causeway logo" 
      class="primaryHeader-svg" 
      src="./assets/svgs/causeway-logo.svg" 
      width="160" 
      height="37" />  
  </header>

  <main class="primaryContent" id="main">
    <Splash />
    <Bulletin slug="vision" />
    <Quote slug="quote-1" />
    <Video slug="video-1" />
    <Article slug="impact" stats="true" quote="true" />
    <Article slug="future" stats="false" quote="true" />
  </main>

  <footer class="primaryFooter" id="footer">
    <Footer />
  </footer>

</template>

