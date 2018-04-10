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
        component: Main,
        access: 1,
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
        name: 'yggl',
        access: 2,
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
        access: 1,
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
