<template>
  <div id="app">
    <router-view id="app" />
  </div>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, provide } from 'vue';
import { ThemeService, ThemeServiceToken } from '/@/services/Theme.service';

export default defineComponent({
  name: 'App',
  setup() {
    const themeService = ThemeService.getInstance();
    provide(ThemeServiceToken, themeService);
  },
});
</script>

<style lang="scss" scoped>
</style>
