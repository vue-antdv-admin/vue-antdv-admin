<template>
  <h1>{{ msg }}</h1>
  <a-button type="primary"
    @click="count++">
    count is: {{ count }}
  </a-button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props, ctx) {
    const count = ref(0);
    return { count };
  },
};
</script>
