<template>
    <ul>
        <li v-for="(list, label) in linkItems" 
            :key="label">
            {{ filters.titlecase(label) }}
            <ul>
                <li v-for="(listItem, index) in list" :key="index">
                    <a href="#" title="">{{ listItem }}</a>
                </li>
            </ul> 
        </li>
    </ul>
</template>

<script>
import filters from '../assets/scripts/filters'
export default {
    setup() {
        return {
            filters
        }
    },
    data() {
        return {
            linkItems: {
                company: [
                    'About',
                    'Careers',
                    'DEI',
                    'Press',
                    'Pricing',
                    'Team'
                ],
                support: [
                    'Contact Us',
                    'Help Center',
                    'Privacy'
                ],
                impact: [
                    'Impact Metrics',
                    'Impact Stories',
                    'Blog',
                    'Webinars'
                ]
            }
        };
    },
};
</script>