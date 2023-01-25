<script setup>
const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((data) => data.results);
</script>

<template>
  <section>
    <header :class="$style.header">List of pokemon</header>
    <main :class="$style.wrapper">
      <div :class="$style.pokedexItem" v-for="item in pokedex" :key="item">
        <p>{{ item.name }}</p>
        <button>{{ item.url }}</button>
      </div>
    </main>
  </section>
</template>

<style module>
.header {
  margin: 1rem 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
}
.wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

button {
  background-color: lightgoldenrodyellow;
  color: blue;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}

.pokedexItem {
  background-color: blue;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  max-width: 400px;
}
</style>