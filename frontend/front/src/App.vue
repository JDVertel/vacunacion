<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container">


    <img alt="Vue logo" class="logo" src="@/img/2.png" width="180" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
    <br>
    <RouterView />


  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;

}
.container{
display: flex !important;
    flex-direction: column !important;
    justify-content: center!important;
    align-items: center!important;
    font-size: 0.8rem !important;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}


div.modal-body {
  font-size: 0.5rem !important;
}
</style>
