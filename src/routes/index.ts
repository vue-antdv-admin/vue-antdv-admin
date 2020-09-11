import { RouteConfig } from '/@/typings/route';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/Home.vue'),
    meta: {
      title: 'Home',
      hiddenMenu: true,
    },
  },
  {
    name: 'Menu 1',
    path: '/menu1',
    component: () => import('/@/layout/Layout.vue'),
    meta: {
      title: 'Menu 1',
    },
    children: [
      {
        name: 'SubMenu 1',
        path: 'submenu1',
        component: () => import('/@/layout/View.vue'),
        meta: {
          title: 'SubMenu 1',
        },
        children: [
          {
            name: 'Option 1',
            path: 'option1',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 1',
            },
          },
          {
            name: 'Option 2',
            path: 'option2',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 2',
            },
          },
        ],
      },
      {
        name: 'SubMenu 2',
        path: 'submenu2',
        component: () => import('/@/layout/View.vue'),
        meta: {
          title: 'SubMenu 2',
          hiddenMenu: true,
        },
        children: [
          {
            name: 'Option 3',
            path: 'option3',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 3',
            },
          },
          {
            name: 'Option 4',
            path: 'option4',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 4',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Menu 2',
    path: '/menu2',
    component: () => import('/@/layout/Layout.vue'),
    meta: {
      title: 'Menu 2',
    },
    children: [
      {
        name: 'SubMenu 3',
        path: 'submenu3',
        component: () => import('/@/layout/View.vue'),
        meta: {
          title: 'SubMenu 3',
        },
        children: [
          {
            name: 'Option 5',
            path: 'option5',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 5',
            },
          },
          {
            name: 'Option 6',
            path: 'option6',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 6',
            },
          },
          {
            name: 'Option 7',
            path: 'option7',
            props(route) {
              return {
                Title: route.name,
              };
            },
            component: () => import('/@/layout/Title.vue'),
            meta: {
              title: 'Option 7',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Menu 3',
    path: '/menu3',
    component: () => import('/@/layout/Layout.vue'),
    meta: {
      title: 'Menu 3',
    },
    children: [
      {
        name: 'Option 8',
        path: 'option8',
        props(route) {
          return {
            Title: route.name,
          };
        },
        component: () => import('/@/layout/Title.vue'),
        meta: {
          title: 'Option 8',
        },
      },
      {
        name: 'Option 9',
        path: 'option9',
        props(route) {
          return {
            Title: route.name,
          };
        },
        component: () => import('/@/layout/Title.vue'),
        meta: {
          title: 'Option 9',
          hiddenMenu: true,
        },
      },
      {
        name: 'Option 10',
        path: 'option10',
        props(route) {
          return {
            Title: route.name,
          };
        },
        component: () => import('/@/layout/Title.vue'),
        meta: {
          title: 'Option 10',
        },
      },
    ],
  },
];

export { routes };
