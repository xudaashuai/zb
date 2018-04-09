import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};
export const itemRouter = {
    path: '/ib/item/:path',
    name: 'login',
    meta: {
        title: '浏览'
    },
    component:() => import('@/views/inventory-browsing/main.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {path: 'home', title: '首页', name: 'home_index', component: () => import('@/views/home/home.vue')},
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: () => import('@/views/own-space/own-space.vue')
        },
        {path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue')},
        {path: 'time', title: '时间表', name: 'time_index', component: () => import('@/views/main-components/time-table/time-table-v.vue')},
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    /*
  {
    path: '/access',
    icon: 'key',
    name: 'access',
    title: '权限管理',
    component: Main,
    children: [
      {path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue')}
    ]
  },
  {
    path: '/access-test',
    icon: 'lock-combination',
    title: '权限测试页',
    name: 'accesstest',
    access: 0,
    component: Main,
    children: [
      {
        path: 'index',
        title: '权限测试页',
        name: 'accesstest_index',
        access: 0,
        component: () => import('@/views/access/access-test.vue')
      }
    ]
  },
  */
    {
        path: '/ib',
        icon: 'cube',
        title: '库存浏览',
        name: 'Inventory browsing',
        component: Main,
        children: [
            {
                path: 's-hty',
                title: '和田玉',
                name: '和田玉',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-nh',
                title: '南红',
                name: '南红',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-1',
                title: '碧玉',
                name: '碧玉',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-2',
                title: '翡翠',
                name: '翡翠',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-3',
                title: '绿松石',
                name: '绿松石',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-4',
                title: '蜜蜡',
                name: '蜜蜡',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 's-5',
                title: '玛瑙',
                name: '玛瑙',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 'xql',
                title: '镶嵌类',
                name: 'xql',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 'pj',
                title: '配件',
                name: 'pj',
                component: () => import('@/views/inventory-browsing/main.vue')
            },
            {
                path: 'yl',
                title: '原料',
                name: 'yl',
                component: () => import('@/views/inventory-browsing/main.vue')
            }
        ]
    },
    {
        path: '/inventory-manager',
        icon: 'cube',
        title: '库存管理',
        name: 'Inventory Manage',
        component: Main,
        children: [
            {
                path: 'rk',
                title: '入库',
                name: 'Inventory Manage1',
                component: () => import('@/views/kcgl/rk/main.vue')
            },
            {
                path: 'ck',
                title: '出库',
                name: 'Inventory Manage2',
                component: () => import('@/views/kcgl/ck/main.vue')
            },
            {
                path: 'gh',
                title: '归还',
                name: 'Inventory Manage4',
                component: () => import('@/views/kcgl/rk/gh.vue')
            },
            {
                path: 'kcpd',
                title: '库存盘点',
                name: 'Inventory Manage3',
                component: () => import('@/views/kcgl/kcpd/main.vue')
            },
        ]
    },
    {
        path: '/rzjl',
        icon: 'cube',
        title: '日志记录',
        name: 'rzjl',
        component: Main, access: 0,
        children: [
            {
                path: 'kcrz',
                title: '库存日志',
                name: 'kcrz',
                component: () => import('@/views/rzjl/kcrz.vue')
            },
            {
                path: 'pdrz',
                title: '盘点日志',
                name: 'pdrz',
                component: () => import('@/views/rzjl/pdrz.vue')
            },
        ]
    },
    {
        path: '/yggl',
        icon: 'cube',
        title: '员工管理',
        name: 'yggl', access: 0,
        component: Main,
        children: [
            {
                path: 'yg',
                title: '员工管理',
                name: 'yg',
                component: () => import('@/views/yggl/yggl.vue')
            },
        ]
    },
    {
        path: '/sjtj',
        icon: 'cube',
        title: '数据统计',
        name: 'sjtj',
        component: Main,
        children: [
            {
                path: 'sj',
                title: '数据统计',
                name: 'sj',
                component: () => import('@/views/sjtj/sjtj.vue')
            },
        ]
    },
    /*{
      path: '/international',
      icon: 'earth',
      title: {i18n: 'international'},
      name: 'international',
      component: Main,
      children: [
        {
          path: 'index',
          title: {i18n: 'international'},
          name: 'international_index',
          component: () => import('@/views/international/international.vue')
        }
      ]
    },
    {
      path: '/component',
      icon: 'social-buffer',
      name: 'component',
      title: '组件',
      component: Main,
      children: [
        {
          path: 'text-editor',
          icon: 'compose',
          name: 'text-editor',
          title: '富文本编辑器',
          component: () => import('@/views/my-components/text-editor/text-editor.vue')
        },
        {
          path: 'md-editor',
          icon: 'pound',
          name: 'md-editor',
          title: 'Markdown编辑器',
          component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
        },
        {
          path: 'image-editor',
          icon: 'crop',
          name: 'image-editor',
          title: '图片预览编辑',
          component: () => import('@/views/my-components/image-editor/image-editor.vue')
        },
        {
          path: 'draggable-list',
          icon: 'arrow-move',
          name: 'draggable-list',
          title: '可拖拽列表',
          component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
        },
        {
          path: 'area-linkage',
          icon: 'ios-more',
          name: 'area-linkage',
          title: '城市级联',
          component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
        },
        {
          path: 'file-upload',
          icon: 'android-upload',
          name: 'file-upload',
          title: '文件上传',
          component: () => import('@/views/my-components/file-upload/file-upload.vue')
        },
        {
          path: 'count-to',
          icon: 'arrow-graph-up-right',
          name: 'count-to',
          title: '数字渐变',
          // component: () => import('@/views/my-components/count-to/count-to.vue')
          component: () => import('@/views/my-components/count-to/count-to.vue')
        },
        {
          path: 'split-pane-page',
          icon: 'ios-pause',
          name: 'split-pane-page',
          title: 'split-pane',
          component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
        }
      ]
    },
    {
      path: '/form',
      icon: 'android-checkbox',
      name: 'form',
      title: '表单编辑',
      component: Main,
      children: [
        {
          path: 'artical-publish',
          title: '文章发布',
          name: 'artical-publish',
          icon: 'compose',
          component: () => import('@/views/form/article-publish/article-publish.vue')
        },
        {
          path: 'workflow',
          title: '工作流',
          name: 'workflow',
          icon: 'arrow-swap',
          component: () => import('@/views/form/work-flow/work-flow.vue')
        }

      ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
      path: '/tables',
      icon: 'ios-grid-view',
      name: 'tables',
      title: '表格',
      component: Main,
      children: [
        {
          path: 'dragableTable',
          title: '可拖拽排序',
          name: 'dragable-table',
          icon: 'arrow-move',
          component: () => import('@/views/tables/dragable-table.vue')
        },
        {
          path: 'editableTable',
          title: '可编辑表格',
          name: 'editable-table',
          icon: 'edit',
          component: () => import('@/views/tables/editable-table.vue')
        },
        {
          path: 'searchableTable',
          title: '可搜索表格',
          name: 'searchable-table',
          icon: 'search',
          component: () => import('@/views/tables/searchable-table.vue')
        },
        {
          path: 'exportableTable',
          title: '表格导出数据',
          name: 'exportable-table',
          icon: 'code-download',
          component: () => import('@/views/tables/exportable-table.vue')
        },
        {
          path: 'table2image',
          title: '表格转图片',
          name: 'table-to-image',
          icon: 'images',
          component: () => import('@/views/tables/table-to-image.vue')
        }
      ]
    },
    {
      path: '/advanced-router',
      icon: 'ios-infinite',
      name: 'advanced-router',
      title: '高级路由',
      component: Main,
      children: [
        {
          path: 'mutative-router',
          title: '动态路由',
          name: 'mutative-router',
          icon: 'link',
          component: () => import('@/views/advanced-router/mutative-router.vue')
        },
        {
          path: 'argument-page',
          title: '带参页面',
          name: 'argument-page',
          icon: 'android-send',
          component: () => import('@/views/advanced-router/argument-page.vue')
        }
      ]
    },
    {
      path: '/error-page',
      icon: 'android-sad',
      title: '错误页面',
      name: 'errorpage',
      component: Main,
      children: [
        {
          path: 'index',
          title: '错误页面',
          name: 'errorpage_index',
          component: () => import('@/views/error-page/error-page.vue')
        }
      ]
    }*/
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    itemRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
