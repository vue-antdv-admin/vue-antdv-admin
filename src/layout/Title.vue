<template>
  <h1>{{ Title }}</h1>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, ref } from 'vue';

interface IProps {}

export default defineComponent({
  name: 'Title',
  props: {
    Title: String,
  },
});
</script>

<style lang="scss" scoped>
</style>
