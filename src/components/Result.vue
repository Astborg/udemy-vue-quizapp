<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>
           {{ numberOfCorrectAnswers}}/{{quizQuestionLength }}
        </h1>
        <RouterLink to="/">Go back</RouterLink>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'
import {RouterLink} from 'vue-router'
const {quizQuestionLength, numberOfCorrectAnswers} = defineProps(['quizQuestionLength','numberOfCorrectAnswers'])

</script>
<style scoped>
.results{
    text-align: center;
    padding: 100px 0;
}
p{
    font-size: 25p;
}
h1{
    font-size: 80px; 
}
</style>