<script>
import { character } from "@/composables/useCharacter";
export default {
  setup() {
    return {
      character,
    };
  },
  computed: {
    rolesList() {
      let roles = ["editor", "writer", "publisher"];
      let rolesCount = [];
      roles.forEach((element) => {
        let listCount = 0;
        this.character.map((c) => {
          if (c.role.includes(element)) listCount++;
        });
        rolesCount.push({ title: element, count: listCount });
      });
      return rolesCount;
    },
  },
};
</script>
<template>
  <section>
    <h2>Statistics</h2>
    <ul>
      <li v-for="(role, index) in rolesList" :key="`role-${index}`">
        {{ role.title }} : {{ role.count }}
      </li>
    </ul>
  </section>
</template>
