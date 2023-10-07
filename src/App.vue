<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
        </RouterLink>
        Website-Weather
      </a>
    </div>
  </nav>
  <h4 style="text-align: center; margin: 2rem;">
    Have a good day for you :3
  </h4><hr>

  <RouterView />
  
</div>
</template>