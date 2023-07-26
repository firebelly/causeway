<script setup>
import SplashSingle from './components/SplashSingle.vue'
import Bulletin from './components/Bulletin.vue'
import QuoteBlock from './components/QuoteBlock.vue'
import Video from './components/Video.vue'
import Article from './components/Article.vue'
import StyleSingle from './components/StyleSingle.vue'
import PostBlock from './components/PostBlock.vue'
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

      <div class="primaryHeader-buttons">
        <button
            class="globalButton globalButton--alt" 
            type="button">
            <span class="globalButton-label">
                Sign In
            </span>
        </button>
    
        <button 
            class="globalButton globalButton"
            type="button">
            <span class="globalButton-label">
                Join
            </span>
        </button>
      </div>
  </header>

  <main class="primaryContent" id="main">
    <SplashSingle />
    <Bulletin slug="vision" />
    <QuoteBlock slug="intro" />
    <Video slug="placeholder" />
    <Article slug="impact" hasStats="true" hasQuote="true" />
    <Article slug="future" hasStats="false" hasQuote="true" />
    <StyleSingle />
    <PostBlock />
  </main>

  <footer class="primaryFooter" id="footer">
    <Footer />
  </footer>

  <div id="viewport" class="viewport _is-debug"></div>

</template>

