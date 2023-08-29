import {createRouter, createWebHistory} from 'vue-router'
import Quizesview from '../views/Quizes.vue'
import Quizview from '../views/Quiz.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizes',
            component: Quizesview
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: Quizview
        }
    ]
})

export default router