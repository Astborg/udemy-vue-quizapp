<template>
  <div class="container">
    <RouterView></RouterView>
    <!-- <Quizesview></Quizesview> -->
  </div>
</template>
<script setup>
import {RouterView} from 'vue-router'
import Quizesview from './views/Quizes.vue'

</script>
<style scoped>
.container{
  max-width: 1000px;
  margin: 0 auto;
}
</style>

