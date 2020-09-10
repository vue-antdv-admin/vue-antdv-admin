import {
  RouteRecordRaw,
} from 'vue-router';

export interface RouteMeta {
  [key: string]: any;
  title: string;
  hiddenMenu?: boolean; // 在菜单不显示，具有后续性
  abstract?: boolean; // 抽象路由，不能被激活，只能由子路由激活
}

export type RouteConfig = RouteRecordRaw & {
  name: string;
  children?: RouteConfig[];
  meta: RouteMeta;
};
