declare global {
  interface ImportMeta {
    env: {
      readonly BASE_URL: string;
      [key: string]: string;
    };
  }
}

export { }
