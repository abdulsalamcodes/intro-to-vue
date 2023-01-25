<script>
import CharacterForm from "../components/CharacterForm.vue";
import CharacterMainVue from "../components/CharacterMain.vue";
import CharacterStat from "../components/CharacterStat.vue";

export default {
  setup() {},
  components: {
    CharacterMainVue,
    CharacterStat,
    CharacterForm,
  },
};
</script>
<template>
  <CharacterStat />
  <CharacterMainVue />
  <CharacterForm />
</template>
