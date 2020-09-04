<template>
  <img alt="Vue logo"
    :src="VueLogo" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '/@/components/HelloWorld.vue';
// todo
import VueLogo from '/@/assets/logo.png';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return {
      VueLogo,
    };
  },
});
</script>
