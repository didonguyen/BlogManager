
import ShowBlogComp from './components/ShowBlogComp.vue';
import AddBlogComp from './components/AddBlogComp.vue';
import SingleBlogComp from './components/SingleBlogComp.vue';

export default [
    { path: '/', component: ShowBlogComp},
    { path: '/add', component: AddBlogComp},
    { path: '/blog/:id', component: SingleBlogComp}
]