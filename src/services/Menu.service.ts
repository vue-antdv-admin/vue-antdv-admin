import {
  Ref,
  ref,
  InjectionKey,
  watch,
  computed,
} from 'vue';
import {
  useRoute,
  RouteLocationNormalizedLoaded,
} from 'vue-router';
import { RouteConfig } from '/@/typings/route';
import { routes } from '/@/routes/index';
import { Singleton } from '/@/utils/index';

interface Menu {
  name: string;
  title: string;
  children?: Menu[];
}

@Singleton
export class MenuService {
  static instance: MenuService;

  static getInstance: () => MenuService;

  menus!: Ref<Menu[]>;

  collapsed!: Ref<boolean>;

  openKeys!: Ref<string[]>;

  preOpenKeys!: Ref<string[]>;

  selectedKeys!: Ref<string[]>;

  breadcrumb: Ref<{ title: string; path: string }[]> = ref([]);

  route!: RouteLocationNormalizedLoaded;

  constructor() {
    const visibilityRoutes = this.getVisibilityRoutes(routes);
    const menus = visibilityRoutes.map((route) => this.route2Menu(route));
    this.menus = ref(menus);
    this.collapsed = ref(false);
    this.route = useRoute();
    const routeName = computed(() => this.route.name);
    this.openKeys = ref([this.menus.value[0].name]);
    this.preOpenKeys = ref([this.menus.value[0].name]);
    this.selectedKeys = ref([this.findFirstMenu(this.menus.value).name]);
    watch(routeName, this.getBreadcrumb, {
      deep: true,
      immediate: true,
    });
    watch(this.openKeys, (val, oldVal) => {
      this.preOpenKeys.value = oldVal;
    });
  }

  getVisibilityRoutes(routes: RouteConfig[]): RouteConfig[] {
    return routes.filter((route) => {
      const { meta: { hiddenMenu }, children } = route;
      if (hiddenMenu) {
        return false;
      }
      if (children && children.length) {
        route.children = this.getVisibilityRoutes(children);
      }
      return true;
    });
  }

  route2Menu(route: RouteConfig): Menu {
    return {
      name: route.name,
      title: route.meta.title,
      children: (!!route.children && !!route.children.length)
        ? route.children.map((item) => this.route2Menu(item as RouteConfig))
        : [],
    };
  }

  findFirstMenu(menus: Menu[]): Menu {
    let menu: Menu = { name: '', title: '' };
    for (const { title, name, children } of menus) {
      if (children && children.length) {
        return this.findFirstMenu(children);
      }
      menu = { title, name, children };
    }
    return menu;
  }

  getBreadcrumb = () => {
    this.breadcrumb.value = this.route.matched.map(((item) => ({
      title: item.meta.title,
      path: item.path,
    })));
  }

  toggleCollapsed = (collapsed: boolean | undefined) => {
    if (typeof collapsed === 'boolean') {
      this.collapsed.value = collapsed;
    } else {
      this.collapsed.value = !this.collapsed.value;
    }
    this.openKeys.value = this.collapsed.value ? [] : this.preOpenKeys.value;
  }
}

export const MenuServiceToken: InjectionKey<MenuService> = Symbol('MenuService');
