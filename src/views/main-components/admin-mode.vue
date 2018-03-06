<template>
    <div @click="click" class="lock-screen-btn-con">
        <Tooltip :content="adminMode?'退出管理员模式':'进入管理员模式'" placement="bottom">
            <Icon :type="adminMode?'code-working':'code'" :size="23"></Icon>
        </Tooltip>
        <Modal
                v-model="modal"
                title="提示"
                @on-ok="ok"
                @on-cancel="modal=false">
            确定进入管理员模式吗？
            管理员模式可以看到商品的进价。
        </Modal>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Cookies from 'js-cookie';

    export default {
        name: 'adminMode',
        data(){
            return {
                modal:false
            }
        },
        computed: {
            ...mapState({
                adminMode: (state) => state.app.adminMode
            })
        },
        methods: {
            click () {
                if (this.adminMode) {
                    this.$store.commit('changeAdminMode');
                } else {
                    this.modal=true
                }
            },
            ok(){
                this.$store.commit('changeAdminMode');
            }
        },
        mounted () {
        }
    };
</script>

