<script setup lang="ts">
import { ref } from 'vue'
import anime from 'animejs';

function go(){
  //console.log(this.$refs.square)
  anime({                                      // <-- using imported
        targets: '.block',
        translateX: 30
      });
}

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div>
  <div class="block" ref="square"></div>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="go">GOOO</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

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
