<script></script>

<template>
  <main>
    <header>
      <h1>Logo</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
        <router-link to="/pokedex">Pokedex</router-link>
      </nav>
    </header>
    <Suspense>
      <router-view />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-size: 2rem;
}
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
}
</style>
