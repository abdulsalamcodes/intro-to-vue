<!-- eslint-disable vue/no-mutating-props -->
<script>
import { character } from "@/composables/useCharacter";
export default {
  setup() {
    return {
      character,
    };
  },
  data: () => ({
    newCharacter: "",
  }),
  methods: {
    addNewCharacter() {
      const newItem = { name: this.newCharacter, role: ["writer"] };
      console.log(newItem, character.value);
      character.value = [...character.value, newItem];
      this.newCharacter = "";
    },
  },
};
</script>

<template>
  <div>
    <section>
      <h3>Add New Characters</h3>
      <div>
        <label>Enter New Character</label>
        <input v-model="newCharacter" @keyup.enter="addNewCharacter" />
      </div>
      <br />
      <button @click="addNewCharacter">Add New Characters</button>
    </section>
  </div>
</template>

<style scoped>
label {
  display: block;
}
input {
  padding: 10px;
  border: 1px solid black;
  font-family: inherit;
  border-radius: 5px;
}
</style>
