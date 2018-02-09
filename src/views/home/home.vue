<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row>
            <Card>
                <div>
                    这是首页哦
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {
    },
    data () {
        return {
        };
    },
    computed: {
        avatorPath () {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
    }
};
</script>
