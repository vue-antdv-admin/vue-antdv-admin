<template>
  <template v-if="isSubMenu()">
    <a-sub-menu :key="menuItem.name">
      <template v-slot:title>
        <span>{{menuItem.title}}</span>
      </template>
      <SiderMenuItem v-for="subMenu in menuItem.children"
        :key="subMenu.name"
        :menuItem="subMenu" />
    </a-sub-menu>
  </template>

  <template v-else>
    <a-menu-item :key="menuItem.name">
      <router-link :to="{ name: menuItem.name}">
        {{menuItem.title}}
      </router-link>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent, PropType } from 'vue';

interface Menu {
  title: string;
  name: string;
  children?: Menu[];
}

interface IProps {
  menuItem: Menu;
}

export default defineComponent({
  name: 'SiderMenuItem',
  props: {
    menuItem: {
      type: Object as PropType<Menu>,
      required: true,
    },
  },
  setup(props: IProps) {
    const isSubMenu = () => {
      return (
        Array.isArray(props.menuItem.children)
        && !!props.menuItem.children.length
      );
    };
    return {
      isSubMenu,
    };
  },
});
</script>
