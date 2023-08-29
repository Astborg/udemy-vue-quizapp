<template>
    <div>
  <header>
    <h1>Quiz</h1>
    <input v-model.trim="search" type="text" placeholder="Search...">
  </header>
  <div class="option-container">
  <TransitionGroup  
  appear
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter">
  <Card
  v-for="(quiz, index) in quizes" 
  :key="quiz.id" 
  :quiz="quiz"
  :data-index="index"
  />
  </TransitionGroup>
  </div>
    </div>
  </template>
  <script setup>
  import q from '../data/quizes.json'
  import {ref, watch} from 'vue'
  import Card from '../components/Card.vue'
  import gsap from 'gsap'
  
  const quizes = ref(q)
  const search = ref('')
  
  
  watch(search, () =>{
   quizes.value = q.filter(quiz => quiz.name.toLowerCase().
   includes(search.value.toLowerCase()))
  })

  const beforeEnter = (el) =>{
    // enter-from
    console.log('beforeenter')
    el.style.opacity = 0
    el.style.transform = 'translateY(-100px)'
  }
  const enter = (el) => {
    // enter-to
   gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: el.dataset.index * 0.3
   })
  }
  const afterEnter = () =>{
    console.log('after')
  }
  </script>
  
  <style scoped>
  .container{
    max-width: 1000px;
    margin: 0 auto;
  }
  header{
    margin-bottom: 10px; 
    margin-top: 30px; 
    display: flex; 
    align-items: center;
  
  }
  header h1{
    font-weight: bold; 
    margin-right: 30px; 
  }
  header input{
    border: none; 
    background-color: rgba(128,128,128, 0.1);
    padding: 10px; 
    border-radius: 5px;
  }
  
  .option-container{
    display: flex; 
    flex-wrap: wrap; 
    margin-top: 40px;
  }
  
  </style>
  