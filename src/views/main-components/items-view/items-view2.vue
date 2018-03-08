<template>
    <div>
        <Poptip trigger="hover" placement="left">
            {{rowData[field].length}}个配石
            <div slot="content">
                <p v-for="item in rowData[field]">{{item.名称}}    {{item.重量}}g</p>
            </div>
        </Poptip>
    </div>
</template>

<script>
    export default {
        name: 'items-view2',
        props: {
            rowData: {
                type: Object
            },
            field: {
                type: String
            },
            index: {
                type: Number
            },
        },
        data () {
            return {
                modal: false
            };
        },
        computed: {
            data () {
                return this.$store.getters.allData.filter(item => this.rowData[this.field].indexOf(item.条码号) > -1);
            },
            columns () {
                return this.$store.getters.ezColumns;
            }
        },
        methods: {
            click () {
                this.modal = true;
            }
        }
    };
</script>

<style scoped>

</style>
