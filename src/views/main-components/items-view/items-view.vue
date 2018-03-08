<template>
    <div>
        <Button type="text" @click="click">
            {{data.length}}个项目，点击查看
        </Button>
        <Modal v-model="modal">
            <v-table highlight-row stripe class="table" border :columns="columns"
                     is-vertical-resize
                     style="width:100%"
                     column-width-drag
                     row-hover-color="#eee"
                     row-click-color="#edf7ff"
                     odd-bg-color="#fafafa"
                     :table-data="data"></v-table>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'items-view',
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
            columns(){
                return this.$store.getters.ezColumns
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
