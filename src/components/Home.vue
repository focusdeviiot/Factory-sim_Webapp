<template>
  <div>
      <h1>Home</h1>
       <div class="block" ref="square"></div>
       <button @click="go">Click Here to Animate</button>
       <router-link :to="{ name: 'Main' }">Main</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const square = ref(null)

    return { square };
  },

  methods: {
    go() {
       anime({                                      // <-- using imported
        targets: this.$refs.square,
        translateX: 500
      });
    }
  }
}
</script>

<style>
.block {
    pointer-events: none;
    position: relative;
    width: 128px;
    height: 128px;
    margin: 1px;
    background-color: currentColor;
    font-size: 12px;
    color: #2c3e50;
}
</style>