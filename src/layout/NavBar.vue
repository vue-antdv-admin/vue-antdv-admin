<template>
  <a-row type="flex"
    style="align-items: center;">
    <SiderTrigger :collapsed="collapsed"
      @toggle-click="toggleCollapsed" />
    <a-breadcrumb style="margin: 16px 0"
      v-if="breadcrumb.length">
      <a-breadcrumb-item v-for="(breadcrumbItem, index) in breadcrumb"
        :key="breadcrumbItem">
        <router-link v-if="index !== breadcrumb.length -1"
          :to="breadcrumbItem.path">
          {{breadcrumbItem.title}}
        </router-link>
        <template v-else>
          {{breadcrumbItem.title}}
        </template>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </a-row>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent } from 'vue';
import { MenuService } from '/@/services/Menu.service';
import SiderTrigger from './SiderTrigger.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    SiderTrigger,
  },
  props: {},
  filters: {},
  setup() {
    const menuService = MenuService.getInstance();
    return {
      ...menuService,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
