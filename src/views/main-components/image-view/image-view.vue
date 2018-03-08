<template>
    <div>
        <div class="demo-upload-list" v-for="item in rowData.图片">
            <img :src="item">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
            </div>
        </div>
        <Modal title="View Image" v-model="visible">
            <img :src="image" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    export default {
        name:'image-view',
        props: {
            rowData: {
                type: Object
            },
            field: {
                type: String
            },
            index: {
                type: Number
            }
        },
        data () {
            return {
                image:'',
                visible:false,
            }
        },
        methods: {
            handleView (name) {
                this.image = name;
                this.visible = true;
            },
        }
    };
</script>

<style>
    .demo-upload-list {
        display: inline-block;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;

    }
</style>
