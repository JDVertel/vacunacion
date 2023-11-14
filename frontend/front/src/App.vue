<script>
import {
    RouterLink,
    RouterView
} from "vue-router";
</script>

<template>
<div class="container base">
    <img alt="Vue logo" class="logo" src="@/img/2.png" width="180" height="125" />
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard" v-if="this.auth">Dashboard</RouterLink>
    </nav>
    <br>
    <RouterView />
</div>
</template>

<style scoped>
.base {
    margin-top: 2em;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;

    font-size: 0.8rem !important;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
