<script setup>
import { computed, reactive } from "vue";

const state = reactive({
  count: 0,
  counterTitle: "Counter Standard",
  incrementAmt: 10,
});

const incrementCount = () => {
  state.count += state.incrementAmt;
};

const displayTitle = computed(() => {
  if (state.count > 20) {
    return "Counter Standard  - Very Long";
  } else {
    return "Counter Standard";
  }
});
</script>

<template>
  <div class="item">
    <h3>{{ displayTitle }}</h3>
    <p :data-increment-by="incrementAmt">{{ state.count }}</p>
    <input type="number" v-model="state.incrementAmt" />
    <button @:click="incrementCount">Increment</button>
  </div>
</template>
