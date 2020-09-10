<template>
  <a-row type="flex"
    style="align-items: center;">
    <SiderTrigger :collapsed="collapsed"
      @toggleClick="toggleCollapsed" />
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

import { defineComponent, ref } from 'vue';
import { MenuService } from '../services/Menu.service';
import SiderTrigger from './SiderTrigger.vue';

interface IProps {}

export default defineComponent({
  name: 'NavBar',
  components: {
    SiderTrigger,
  },
  props: {},
  filters: {},
  setup(props: IProps, ctx) {
    const menuService = MenuService.getInstance();
    console.log(menuService);
    return {
      ...menuService,
      breadcrumb: menuService.breadcrumb,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
