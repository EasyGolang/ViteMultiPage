/// <reference types="vite/client" />

declare global {
  declare const $ref: any;
  declare const ViteConst: any;

  interface Window {
    ViteConst: {
      AppVersion: string;
      AppName: string;
    };
    $Event: {
      [string]: any;
    };
  }
}

export {};
