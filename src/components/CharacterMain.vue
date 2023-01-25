<script>
import { character } from "@/composables/useCharacter";
import CharacterCard from "./CharacterCard.vue";

export default {
  setup() {
    return {
      character,
    };
  },
  data: () => ({
    favouriteList: [],
  }),
  methods: {
    addToFavourite(target) {
      console.log(target);
      this.favouriteList.push(target);
    },
  },
  components: { CharacterCard },
};
</script>

<template>
  <main>
    <section>
      <h3>Characters</h3>
      <CharacterCard @addToFavourite="addToFavourite" />
    </section>
    <section>
      <h2>Character Favourite List</h2>
      <ul>
        <li v-for="(item, index) in favouriteList" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style>
body {
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
