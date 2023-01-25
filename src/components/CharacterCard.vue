<script>
import { character } from "@/composables/useCharacter";
import { ref } from "vue";
export default {
  setup() {
    const color = ref("black");

    return {
      character,
      color,
    };
  },
  // Emit Usage: Just Like props but cleaner
  emits: ["addToFavourite"],
};
</script>

<template>
  <ul class="list">
    <li v-for="(item, index) in character" :key="index">
      <input type="color" v-model="color" />
      <p>{{ item.name }}</p>
      <button @click="$emit('addToFavourite', item)">💥 Favourite</button>
    </li>
  </ul>
</template>

<style scoped>
li {
  background-color: v-bind(color);
  color: white;
  padding: 1rem;
  max-width: 500px;
  flex: 1;
  margin-bottom: 1rem;
}

.list {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
}
</style>
