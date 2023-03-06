const Welcome = () => import('./components/Welcome.vue')
const CategoryList = () => import('./components/Category/List.vue')
const CategoryCreate = () => import('./components/Category/Add.vue')
const CategoryEdit = () => import('./components/Category/Edit.vue')
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
]