import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import _ from 'underscore';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';
import 'vue-easytable/libs/themes-base/index.css';
import {VTable, VPagination} from 'vue-easytable';
import ImageView from './views/main-components/image-view/image-view.vue';
import ItemsView from './views/main-components/items-view/items-view.vue';
import ItemsView2 from './views/main-components/items-view/items-view2.vue';

Vue.component(ImageView.name, ImageView);
Vue.component(ItemsView.name, ItemsView);
Vue.component(ItemsView2.name, ItemsView2);
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
Vue.use(VueI18n);
Vue.use(iView);
Vue.prototype.$_ = _;
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});
