<script setup>
import filters from '../../assets/scripts/filters'

const utilityLinks = [
    'Privacy',
    'Terms'
]
const socialLinks = [
    'Instagram',
    'Facebook',
    'LinkedIn',
    'Twitter'
]
</script>

<template>

    <img alt="Abbreviated Causeway Logo" src="src/assets/svgs/causeway-logo-abbr.svg" width="20" height="20" />
    <p>&copy; 2023 Causeway Inc.</p>

    <ul class="utlityLinks">
        <li v-for="(item, index) in utilityLinks" v-bind:key="index"
            class="utilityLinks-item">
            <a 
                class="utilityLinks-trigger"
                href="#" 
                title=""
                target="_blank">{{ item }}</a>
        </li>
    </ul>

    <!-- TODO: 
        update svg handling for custom fills
    -->
    <ul class="socialLinks">
        <li v-for="(item, index) in socialLinks" 
            v-bind:key="index"
            class="socialLinks-item"
            :class="[`socialLinks-item--${filters.lowercase(item)}`]">
            <a 
                class="socialLinks-trigger" 
                href=""
                title="Visit Causeway's page"
                target="_blank"
                >
                <img
                    alt="Abbreviated Causeway Logo" 
                    :src="`../src/assets/svgs/social-${filters.lowercase(item)}.svg`" 
                    width="20" 
                    height="20" />
                <span class="socialLinks-label">{{ item }}</span>
            </a>
        </li>
    </ul>
</template>

