import { UserConfig } from 'vite';
import * as path from 'path'

const viteConfig: UserConfig = {
  alias: {
    // todo https://github.com/vitejs/vite/issues/279
    '/@/': path.resolve(__dirname, './src')
  }
};

export default viteConfig;
