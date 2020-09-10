import { Ref, ref, InjectionKey } from 'vue';
import { Singleton } from "/@/utils";

interface ThemeConfig {
  theme: string;
}

const defaultConfig: ThemeConfig = {
  theme: 'dark'
}

@Singleton
export class ThemeService {
  static instance: ThemeService;
  static getInstance: (themeConfig?: Partial<ThemeConfig>) => ThemeService;

  theme!: Ref<string>;

  constructor(themeConfig?: Partial<ThemeConfig>) {
    const config: ThemeConfig = {
      ...defaultConfig,
      ...themeConfig,
    }
    this.theme = ref(config.theme);
  }
}

export const ThemeServiceToken: InjectionKey<ThemeService> = Symbol('ThemeService');
