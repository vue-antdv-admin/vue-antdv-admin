<template>
  <div id="app">
    <router-view id="app" />
  </div>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, provide, ref } from 'vue';
import { ThemeService, ThemeServiceToken } from '/@/services/Theme.service';

interface IProps {}

export default defineComponent({
  name: 'App',
  setup(props: IProps, ctx) {
    const themeService = ThemeService.getInstance();
    provide(ThemeServiceToken, themeService);
  },
});
</script>

<style lang="scss" scoped>
</style>
