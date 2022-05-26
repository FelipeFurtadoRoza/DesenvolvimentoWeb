<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{name: 'home'}"> Home |</RouterLink>
    <RouterLink :to="{name: 'category'}"> Categoria |</RouterLink>
    <RouterLink :to="{name: 'products'}"> Produto</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  height: 100vh;
}

main {
  padding: 10px;
}
a {
  color: white;
}
header {
  height: 7vh;
  background-color: rgb(39, 39, 88);
  color: white;
  display: flex;
  align-items: center;
}                                                                                 
</style>