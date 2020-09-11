<template>
  <a-tabs v-model:activeKey="activeKey"
    type="editable-card"
    @edit="onEdit">
    <a-tab-pane v-for="pane in panes"
      :key="pane.key"
      :tab="pane.title"
      :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
/**
 * @author zhushiqi
 */

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TagsView',
  components: {},
  props: {},
  filters: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
