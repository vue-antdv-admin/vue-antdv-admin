<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider v-model:collapsed="collapsed"
      collapsible
      style="overflow: auto; height: 100vh; position: fixed;left: 0;">
      <div class="logo"></div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '200px' }">
      <a-layout-header style="background: #fff; padding: 0">
        <NavBar />
      </a-layout-header>
      <a-layout-content style="margin: 24px 16px 0; overflow: initial;">
        <div style="padding: 24px; background: #fff; textAlign: center;">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue Antdv Admin
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, ref } from 'vue';
import { MenuService } from '/@/services/Menu.service';
import SiderMenu from './SiderMenu.vue';
import NavBar from './NavBar.vue';

interface IProps {}

export default defineComponent({
  name: 'Layout',
  components: {
    SiderMenu,
    NavBar,
  },
  setup() {
    const menuService = MenuService.getInstance();
    return {
      ...menuService,
    };
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
