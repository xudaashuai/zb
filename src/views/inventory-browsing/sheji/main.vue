<template>
    <div>
        <Form ref="form" :model="form" inline>
            <FormItem prop="名称">
                <Input placeholder="名称" type="text" v-model="form.名称"></Input>
            </FormItem>
            <FormItem prop="条码号">
                <Input placeholder="条码号" type="text" v-model="form.条码号"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="resetSearch">重置</Button>
            </FormItem>
        </Form>
        <Card class="card">
            <v-table v-if="show" highlight-row stripe class="table" border :columns="columns"
                     is-vertical-resize
                     style="width:100%"
                     is-horizontal-resize
                     :vertical-resize-offset='40'
                     column-width-drag
                     row-hover-color="#eee"
                     row-click-color="#edf7ff"
                     odd-bg-color="#fafafa"
                     :table-data="data"></v-table>
        </Card>
    </div>
</template>
<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        name:'ib-sjk',
        data: function () {
            return {
                form: {
                    名称: '',
                    条码号: '',
                }
            };
        },
        props: ['path'],
        computed: {
            ...mapGetters({columns: 'sjkColumns'}),
            ...mapState({
                show: state => state.app.show
            }),
            data () {
                return this.$store.state.zb.sjk.filter((item) => {
                    if ('名称' in item && '条码号' in item)
                    return item.名称.indexOf(this.form.名称) > -1 && item.条码号.indexOf(this.form.条码号) > -1;
                });
            }
        },
        mounted () {
        },
        created () {
            this.$store.dispatch('get', {path: 'sjk'}).then(
                () => this.$Message.success('加载数据成功'),
                () => this.$Message.error('加载数据失败')
            );
        }, methods: {
            resetSearch () {
                this.form = {
                    名称: '',
                    条码号: '',
                };
            }
        }
    };
</script>
<style scoped>
    .card {
        height: 100%;
        width: auto;
    }

    .search-button {
        position: fixed;
        right: 30px
    }
</style>
