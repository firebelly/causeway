<template>
    <article>
        <h1>{{ text('title') }}</h1>
        <dl>
            <template v-for="(list, idx) in text('statsList')" :key="idx">
                <dt>
                    {{ list.dt }}
                </dt>
                <dd>{{ list.dd }}</dd>
            </template>
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