<template>
    <article class="statsBlock">
        <h1 class="statsBlock-title">{{ text('title') }}</h1>
        <dl class="statsBlock-list">
            <div class="statsBlock-list-item" v-for="(list, idx) in text('statsList')" :key="idx">
              <dt class="statsBlock-list-dt">
                {{ list.dt }}
              </dt>
              <dd class="statsBlock-list-dd">{{ list.dd }}</dd>
            </div>
        </dl>
    </article>
</template>

<script>
export default {
    props: ['slug'],
    computed: {
      text() {
        return key => this.options[`${this.slug}`][key];
      },  
      options() {
        return {
          impact: {
            title: 'Our Impact',
            statsList: [
                {dt: 'Nonprofits served', dd: '12k'},
                {dt: 'Nonprofit value created', dd: '$250M'},
                {dt: 'United community partners', dd: '130+'}
            ]
          }
        }
      }
    }
  };
</script>