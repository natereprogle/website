<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar/>
  <RouterView/>
  <hr class="text-raisinblack-400 bg-raisinblack-400 h-[2px]"/>
  <Footer/>
</template>

<style scoped>

</style>
