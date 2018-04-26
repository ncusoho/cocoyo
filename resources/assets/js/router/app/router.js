import Main from '@/views/app/Main.vue';
import User from '@/components/User.vue';
import SideBar from '@/components/SideBar.vue';

export const otherRouter = {
    path: '/',
    component: Main,
    children: [
        { path: '/', title: '主页', name: 'index', component: resolve => void(require(['@/views/app/articles/index.vue'], resolve)) },
        { path: 'articles/:slug', title: '文章详情', name: 'articles.show', component: resolve => void(require(['@/views/app/articles/show.vue'], resolve)) },
        { path: '/login', title: '登陆', name: 'login', component: resolve => void(require(['@/views/app/auth/login.vue'], resolve)) },
        { path: '/user/profile', title: '编辑个人资料', name: 'edit_profile', component: resolve => void(require(['@/views/app/users/profile.vue'], resolve)) },
        {
            path: '/users',
            component: User,
            children: [
                {
                    path: ':name',
                    title: '用户信息',
                    name: 'user_replies',
                    component: resolve => void(require(['@/views/app/users/replies.vue'], resolve)),
                },
                {
                    path: ':name/following',
                    title: '用户关注',
                    name: 'user_following',
                    component: resolve => void(require(['@/views/app/users/following.vue'], resolve)),
                }
            ]
        },
        {
            path: '/users',
            component: SideBar,
            children: [
                {
                    path: ':name/edit',
                    title: '用户编辑',
                    name: 'user_edit',
                    component: resolve => void(require(['@/views/app/users/profile.vue'], resolve)),
                },
                {
                    path: ':name/edit_avatar',
                    title: '编辑头像',
                    name: 'user_avatar_edit',
                    component: resolve => void(require(['@/views/app/users/avatar.vue'], resolve)),
                },
                {
                    path: ':name/edit_email_notify',
                    title: '修改消息通知',
                    name: 'edit_email_notify',
                    component: resolve => void(require(['@/views/app/users/edit_email_notify.vue'], resolve)),
                },
                {
                    path: ':name/edit_password',
                    title: '修改密码',
                    name: 'edit_password',
                    component: resolve => void(require(['@/views/app/users/edit_password.vue'], resolve)),
                }
            ]
        }
    ]
};

export const appRouter = [
]

export const routers = [
    otherRouter,
    ...appRouter,
];