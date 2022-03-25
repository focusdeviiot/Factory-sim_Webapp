<template>
    <div>
        <div ref="root" v-bind:style="{ margin : Msee + 'px' }">This is a root element</div>
        <button type="button" @click="go">{{Msee}}</button>
        <input class="range" v-model="Msee" type="range" min="0" max="200" step="1">
    </div>
  
</template>

<script>
  import { ref, onMounted } from 'vue'

  export default {
    data() {
        return{
            Msee : ref(0)
        }
    },

    setup() {
        const root = ref(null)
      onMounted(() => {
        // the DOM element will be assigned to the ref after initial render
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        root
      }
    },

    methods: {
        go() {
            console.log('Test')
            console.log(this.$refs.root)
            anime({                                      // <-- using imported
            targets: this.$refs.root,
            translateX: 500
      });
    }
    },
  }
</script>