<template>
    <form class="formBlock" id="contact" method="post">
        <fieldset class="formBlock-fieldset">
            <legend class="formBlock-legend">Request a Demo</legend>

            <div
                class="formBlock-field"
                v-for="(fieldItem, index) in fields" :key="index">

                <label 
                    class="formBlock-label"
                    :for="`${filters.slugify(fieldItem.label)}`">
                    {{ fieldItem.label }}
                </label>

                <input 
                    class="formBlock-input"
                    type="text" 
                    :id="`${filters.slugify(fieldItem.label)}`" 
                    v-if="fieldItem.type == 'text'" />

                <textarea 
                    class="formBlock-textarea"
                    type="text" 
                    :id="`${filters.slugify(fieldItem.label)}`" 
                    v-if="fieldItem.type == 'textarea'" />

                <select 
                    class="formBlock-select"
                    :name="`${filters.slugify(fieldItem.label)}`" 
                    :id="`${filters.slugify(fieldItem.label)}`" 
                    v-if="fieldItem.type == 'select'">
                    <option 
                        :value="`${filters.slugify(optionItem)}`" 
                        v-for="(optionItem, idx) in fieldItem.options" :key="idx">
                        {{ optionItem }}
                    </option>
                </select>

            </div>

            <input class="formBlock-submit" type="submit" value="Submit" />

        </fieldset>
    </form>
</template>


<script>
import filters from '../../assets/scripts/filters'
export default {
    setup() {
        return {
            filters
        }
    },
    data() {
        return {
            fields: [
                {
                    label: 'Name',
                    type: 'text'
                },
                {
                    label: 'Organization Name',
                    type: 'text'
                },
                {
                    label: 'Dropdown Label',
                    type: 'select',
                    options: ['Option 1','Option 2','Option 3']
                },
                {
                    label: 'Textarea Label',
                    type: 'textarea'
                },
            ]
        };
    },
};
</script>