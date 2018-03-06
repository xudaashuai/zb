import Cookies from 'js-cookie';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const user = {
    state: {},
    mutations: {
        logout (state, vm) {
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('access');
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        },
        login (state, user) {
            state.user = user;
        }
    },
    actions: {
        login (context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/login', data).then((res) => {
                    if (!res.data) {
                        reject('登录失败，请检查用户名与密码');
                    } else {
                        context.commit('login', res.data);
                        Cookies.set('user', res.data.username);
                        Cookies.set('password', res.data.password);
                        resolve(res.data);
                    }
                }).catch(err => reject(err));
            });
        },
        password (context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/password', {
                    ...data,
                    username: Cookies.get('user')
                }).then((res) => {
                    if (!res.data.nModified) {
                        reject('密码错误啦');
                    } else {
                        resolve('修改成功');
                        Cookies.set('password', data.newPass);
                    }
                }).catch(err => reject(err));
            });
        },
    }
};

export default user;
