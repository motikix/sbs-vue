<template>
  <div>Counter: {{ counter }}</div>
  <div>
    <span>Clickable Counter: {{ ccounter }}</span>
    <button @click="increment">Click Me!!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      counter: 0,
      ccounter: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    increment() {
      this.ccounter++;
    }
  }
});
</script>

<style scoped>
span {
  display: inline-block;
  min-width: 180px;
}
</style>
